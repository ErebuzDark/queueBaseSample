import React, { useContext } from "react";
import Context from "../utils/Context";

const ScreenMonitoring = () => {
  const {
    billingServingNumber,
    consultationServingNumber,
    repairServingNumber,
    installationServingNumber,
  } = useContext(Context);
  return (
    <div>
      <h2 className="text-3xl text-center bg-slat-800 font-bold">
        Screen Monitoring
      </h2>
      <ul className="grid grid-cols-4 justify-center gap-4">
        <li className="service">
          <h1>Pay Bills</h1>
          <p className="text-lg font-normal">Now Serving</p>
          <p>Number: {billingServingNumber}</p>
        </li>
        <li className="service">
          <h1>Consultation</h1>
          <p className="text-lg font-normal">Now Serving</p>
          <p>Number: {consultationServingNumber}</p>
        </li>
        <li className="service">
          <h1>Repair</h1>
          <p className="text-lg font-normal">Now Serving</p>
          <p>Number: {repairServingNumber}</p>
        </li>
        <li className="service">
          <h1>Installation</h1>
          <p className="text-lg font-normal">Now Serving</p>
          <p>Number: {installationServingNumber}</p>
        </li>
      </ul>
    </div>
  );
};

export default ScreenMonitoring;
