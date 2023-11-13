import React from "react";
import { useOutletContext } from "react-router-dom";

const SecondCar = () => {
  const ctx = useOutletContext()
  return <div>SecondCar {ctx.text}</div>;
};

export default SecondCar;
