import React from "react";
import styles from "./DepartureFrame.module.scss";

type DepartureFrameProps = {
  url: string;
  station: string;
};

function DepartureFrame(props: DepartureFrameProps) {
  const { url, station } = props;

  return (
    <div>
      <h3>{station}</h3>
      <iframe className={styles.frame} src={url}></iframe>
    </div>
  );
}

export default DepartureFrame;
