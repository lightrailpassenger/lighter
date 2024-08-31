(async () => {
  const { default: xml2js } = await import("xml-js");
  const searchParams = new URLSearchParams();

  searchParams.append(
    'data',
    "node(22.35, 113.9, 22.5, 114.1)['brand:en'='Light Rail']; out;"
  );

  const [
    geoData,
    routeData,
  ] = await Promise.all([
    fetch("https://overpass-api.de/api/interpreter", {
      body: searchParams,
      method: "POST",
    }),
    fetch("https://opendata.mtr.com.hk/data/light_rail_routes_and_stops.csv", {
      method: "GET",
    })
  ]);
  const [
    geoDataText,
    routeDataText,
  ] = await Promise.all([
    geoData.text(),
    routeData.text(),
  ]);
  const geoDataObject = JSON.parse(xml2js.xml2json(geoDataText, { compact: true }));
  const geoDataObjectTable = geoDataObject.osm.node.map((node) => {
    return [
      Number(node._attributes.lat),
      Number(node._attributes.lon),
      node.tag.find((tag) => (tag._attributes.k === "name:en"))._attributes.v,
    ];
  });

  const routeTable = [];
  for (let routeRow of routeDataText.split("\n").slice(1, -1)) {
    routeTable.push(routeRow.split(",").map((entry) => {
      if (`${entry[0]}${entry[entry.length - 1]}` === '""') {
        return entry.slice(1, -1);
      } else {
        return entry;
      }
    }));
  }

  const stationIndex = Object.create(null);
  for (let [
    route,
    ,
    ,
    stationId,
    nameCh,
    nameEn,
  ] of routeTable) {
    stationIndex[stationId] = {
      nameCh,
      nameEn,
      routes: stationIndex[stationId]?.routes ?
        [...stationIndex[stationId].routes, route] :
        [route],
    };
  }
  const stations = Object.entries(stationIndex)
    .map(([id, { routes, ...otherDetails }]) => ({
      id,
      routes: [...new Set(routes)],
      ...otherDetails,
    }));
  const geoDataIndex = Object.create(null);
  for (let [
    lat,
    lon,
    nameEn
  ] of geoDataObjectTable) {
    geoDataIndex[nameEn] = { lat, lon };
  }
  for (let station of stations) {
    Object.assign(station, geoDataIndex[station.nameEn]);
  }
  console.log(JSON.stringify(
    stations.sort(
      (
        { nameEn: nameEn1 },
        { nameEn: nameEn2 }
      ) => (
        nameEn1.localeCompare(nameEn2)
      )
    )
  ));
})();
