import React from "react";

import styles from "./AttributionPage.module.scss";

function AttributionPage() {
  return (
    <div className={styles.page}>
      <ul>
        <li>The light rail data are from the HK government and DATA.GOV.HK. For details, please see <a href="https://data.gov.hk/en/terms-and-conditions" target="_blank" rel="noreferrer noopener">DATA.GOV.HK</a>. We acknowledge the Government ownership of the intellectual property rights in the Data.</li>
        <li>The geographical data are provided by Overpass API. Please see <a href="https://wiki.openstreetmap.org/wiki/Overpass_API" target="_blank" rel="noreferrer noopener">Overpass API</a> for details.</li>
        <li>We use third party libraries. For licenses, please see <a href="https://github.com/lightrailpassenger/lighter" target="_blank" rel="noreferrer noopener">Lighter GitHub repository</a> for details.</li>
        <li>We use Twemoji for emojis. Please see <a href="https://twemoji.twitter.com" target="_blank">Twemoji</a> for details.</li>
      </ul>
    </div>
  );
}

export default AttributionPage;
