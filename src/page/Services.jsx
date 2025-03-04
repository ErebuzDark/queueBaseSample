import React, { useContext } from "react";
import Context from "../utils/Context";

const Services = () => {
  const {
    queueBilling,
    setQueueBilling,
    queueConsultation,
    setQueueConsultation,
    queueRepair,
    setQueueRepair,
    queueInstallation,
    setQueueInstallation,
  } = useContext(Context);
  return (
    <div className="lg:mx-40 my-20">
      <h2 className="text-3xl text-center bg-slat-800 font-bold">Services</h2>
      <p className="text-center">
        Click the Service you need to print a queue number
      </p>
      <ul className="grid grid-cols-2 justify-center gap-4">
        <li
          onClick={() => setQueueBilling(queueBilling + 1)}
          className="service"
        >
          <h1>Pay Bills</h1>
          <p>{queueBilling}</p>
        </li>
        <li
          onClick={() => setQueueConsultation(queueConsultation + 1)}
          className="service"
        >
          <h1>Consultation</h1>
          <p>{queueConsultation}</p>
        </li>
        <li onClick={() => setQueueRepair(queueRepair + 1)} className="service">
          <h1>Repair</h1>
          <p>{queueRepair}</p>
        </li>
        <li
          onClick={() => setQueueInstallation(queueInstallation + 1)}
          className="service"
        >
          <h1>Installation</h1>
          <p>{queueInstallation}</p>
        </li>
      </ul>
    </div>
  );
};

export default Services;
