import React from "react";
import { useParams } from "react-router-dom";

const CarDetail = () => {
  const {id} = useParams()
  return <div>CarDetail {id}</div>;
};

export default CarDetail;
