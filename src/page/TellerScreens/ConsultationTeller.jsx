import React, { useContext, useEffect, useState } from "react";
import Context from "../../utils/Context";

const ConsultationTeller = () => {
  const { queueConsultation, consultationServingNumber, setConsultationServingNumber } =
    useContext(Context);

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleNextInline = () => {
    if (queueConsultation > consultationServingNumber) {
      setConsultationServingNumber(consultationServingNumber + 1);
    }
  }

  useEffect(() => {
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
