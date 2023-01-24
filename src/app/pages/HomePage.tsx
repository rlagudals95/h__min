import React, { useEffect } from "react";
import { stylesheet } from "typestyle";
import { Color } from "../constants/Color";
import { App as Polygon } from "../components/polygon/app";

const classNames = stylesheet({
  container: {
    color: Color.BLUE,
    textAlign: "center"
  }
});

export const HomePage = () => {
  useEffect(() => {
    new Polygon();
  }, []);
  return <div className={classNames.container}></div>;
};
