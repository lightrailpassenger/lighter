import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import ResultRow from "./ResultRow";

import etaResultSchema, { ETAResultType } from "./schemas/ETAResultSchema";

import styles from "./ResultPage.module.scss";

const DATA_ENDPOINT = "https://rt.data.gov.hk/v1/transport/mtr/lrt/getSchedule?station_id=";

function ResultPage() {
  const { stationId } = useParams();

  const [result, setResult] = useState<ETAResultType | undefined>();

  useEffect(() => {
    let isIgnored = false;
    (async () => {
      const res = await fetch(`${DATA_ENDPOINT}${stationId}`, { method: 'GET' });
      const result = await res.json();
      const validatedResult = await etaResultSchema.validate(result);

      if (!isIgnored) {
        setResult(validatedResult);
      }
    })();

    return () => {
      isIgnored = true;
    };
  }, [stationId]);

  return (
    <div className={styles.page}>{
      result &&
      result.platform_list.flatMap(({ platform_id, route_list }) => {
        return route_list.flatMap(({ train_length, route_no, time_en, dest_en }) => (
          <ResultRow
            platformId={platform_id}
            trainLength={train_length}
            route={route_no}
            time={time_en}
            destination={dest_en}
          />
        ));
      })
    }</div>
  );
}

export default ResultPage;
