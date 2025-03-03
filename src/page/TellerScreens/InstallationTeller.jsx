import React, { useContext, useEffect, useState } from "react";
import Context from "../../utils/Context";

const InstallationTeller = () => {
  const {
    installationServingNumber,
    setInstallationServingNumber,
    queueInstallation,
    setQueueInstallation,
  } = useContext(Context);

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [waitingInLine, setWaitingInLine] = useState(0);

  const handleNextInline = () => {
    if (queueInstallation > installationServingNumber) {
      setInstallationServingNumber(installationServingNumber + 1);
      const remainingQueue =
        queueInstallation - (installationServingNumber + 1);
      setWaitingInLine(remainingQueue);
    }
  };

  useEffect(() => {
    const remainingQueue = queueInstallation - installationServingNumber;
    setWaitingInLine(remainingQueue);
    if (queueInstallation == installationServingNumber) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [queueInstallation, installationServingNumber]);

  return (
    <div>
      <nav className="w-fit shadow-md px-11 py-5 m-3">
        <h1 className="text-3xl py-3">
          Current Number Serving: {installationServingNumber}
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
};

export default InstallationTeller;
