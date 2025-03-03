import React, { useContext, useEffect, useState } from "react";
import Context from "../../utils/Context";

const RepairTeller = () => {
  const {
    repairServingNumber,
    setRepairServingNumber,
    queueRepair,
    setQueueRepair,
  } = useContext(Context);

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [waitingInLine, setWaitingInLine] = useState(0);

  const handleNextInline = () => {
    if (queueRepair > repairServingNumber) {
      setRepairServingNumber(repairServingNumber + 1);
      const remainingQueue = queueRepair - (repairServingNumber + 1);
      setWaitingInLine(remainingQueue);
    }
  };

  useEffect(() => {
    const remainingQueue = queueRepair - repairServingNumber;
    setWaitingInLine(remainingQueue);
    if (queueRepair == repairServingNumber) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [queueRepair, repairServingNumber]);

  return (
    <div>
      <nav className="w-fit shadow-md px-11 py-5 m-3">
        <h1 className="text-3xl py-3">
          Current Number Serving: {repairServingNumber}
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

export default RepairTeller;
