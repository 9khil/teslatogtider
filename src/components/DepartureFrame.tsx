import React from "react";

type DepartureFrameProps = {
  url: string;
};

function DepartureFrame(props: DepartureFrameProps) {
  const { url } = props;

  return (
    <div>
      <iframe src={url}></iframe>
    </div>
  );
}

export default DepartureFrame;
