import React, { useContext, useEffect, useState } from "react";
import Context from "../../utils/Context";

const ConsultationTeller = () => {
  const { queueConsultation, consultationServingNumber, setConsultationServingNumber } =
    useContext(Context);

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [waitingInLine, setWaitingInLine] = useState(0);

  const handleNextInline = () => {
    if (queueConsultation > consultationServingNumber) {
      setConsultationServingNumber(consultationServingNumber + 1);
      const remainingQueue =
        queueConsultation - (consultationServingNumber + 1);
      setWaitingInLine(remainingQueue);
    }
  };

  useEffect(() => {
    const remainingQueue = queueConsultation - consultationServingNumber;
    setWaitingInLine(remainingQueue);
    if (queueConsultation == consultationServingNumber) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [queueConsultation, consultationServingNumber]);

  return (
    <div>
      <nav className="w-fit shadow-md px-11 py-5 m-3">
        <h1 className="text-3xl py-3">
          Current Number Serving: {consultationServingNumber}
        </h1>
        <p>Customer waiting in line: {waitingInLine}</p>
        <button
          disabled={isButtonDisabled}
          className={`flex ${
            isButtonDisabled ? "bg-slate-600" : "bg-blue-950"
          } text-white p-3 rounded-lg mx-auto`}
          onClick={handleNextInline}
        >
          Next Customer
        </button>
      </nav>
    </div>
  );
}

export default ConsultationTeller;
