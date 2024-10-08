import React, { useEffect, useMemo, useState } from "react";

import { useParams } from "react-router-dom";

import LoadingState from "./LoadingState";
import ResultRow from "./ResultRow";

import etaResultSchema, { ETAResultType } from "./schemas/ETAResultSchema";

import routeData from "./route_data.json";

import styles from "./ResultPage.module.scss";

const DATA_ENDPOINT = "https://rt.data.gov.hk/v1/transport/mtr/lrt/getSchedule?station_id=";

function ResultPage() {
  const { stationId } = useParams();

  const [result, setResult] = useState<ETAResultType | undefined>();

  useEffect(() => {
    const ac = new AbortController();
    const { signal } = ac;
    let retryCount = 0;
    const run = async () => {
      try {
        const res = await fetch(`${DATA_ENDPOINT}${stationId}`, { mode: 'cors', method: 'GET', signal });
        const result = await res.json();
        const validatedResult = await etaResultSchema.validate(result);

        if (!signal.aborted) {
          setResult(validatedResult);
        }
      } catch {
        if (retryCount++ < 5) {
          run();
        }
      }
    };
    run();

    return () => {
      ac.abort();
    };
  }, [stationId]);

  const stationName = useMemo(() => {
    const station = routeData.find(({ id }) => (id === stationId));
    return station ? `${station.nameEn} ${station.nameCh}` : '';
  }, [stationId]);

  return (
    <div className={styles.page}>
      <h3 className={styles.stationName}>{stationName}</h3>
      <ResultRow
        platformId="Platform"
        trainLength=""
        route="Route"
        time="Time of arrivals"
        destination="Destination"
      />
      {
        result ?
          result.platform_list.flatMap(({ platform_id, route_list }) => {
            return route_list.flatMap(({ train_length, route_no, time_en, dest_en }) => (
              <ResultRow
                key={`${platform_id}-${train_length}-${route_no}-${time_en}-${dest_en}`}
                platformId={platform_id}
                trainLength={train_length}
                route={route_no}
                time={time_en}
                destination={dest_en}
              />
            ));
          }) :
          <LoadingState />
      }
    </div>
  );
}

export default ResultPage;
