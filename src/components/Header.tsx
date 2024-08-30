import { FormControl, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";
import styles from "./Header.module.scss";
import moment from "moment";
import "moment-timezone";

function Header() {
  const [debugMode, setDebugMode] = useState(false);

  return (
    <div>
      <div className={styles.headerTopRow}>
        <FormControl className={styles.switchRow}>
          <FormControlLabel
            value="end"
            control={
              <Switch
                checked={debugMode}
                onChange={() => setDebugMode(!debugMode)}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="debug"
            labelPlacement="end"
          />
        </FormControl>
      </div>

      {debugMode && (
        <div className={styles.debugContainer}>
          <ul>
            <li>Time now (moment time object): {moment().format()}</li>
            <li>Timezone: {moment.tz.guess()}</li>
            <li>
              Prøv denne tavla:{" "}
              <a href="https://tavla.entur.no/PDMD1VYR4RvaxJ8XKwdC">
                Supertavle
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
