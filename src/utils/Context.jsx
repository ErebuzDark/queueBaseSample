import { createContext, useState } from "react";

const Context = createContext();

export const MyProvider = ({ children }) => {
  // Pay Bills
  const [queueBilling, setQueueBilling] = useState(0);
  const [billingServingNumber, setBillingServingNumber] = useState(1);

  // Consulatation
  const [queueConsultation, setQueueConsultation] = useState(0);
  const [consultationServingNumber, setConsultationServingNumber] = useState(0);

  // Repair
  const [queueRepair, setQueueRepair] = useState(0);
  const [repairServingNumber, setRepairServingNumber] = useState(0);

  // Installation
  const [queueInstallation, setQueueInstallation] = useState(0);
  const [installationServingNumber, setInstallationServingNumber] = useState(0);
  return (
    <Context.Provider
      value={{
        queueBilling,
        setQueueBilling,
        billingServingNumber,
        setBillingServingNumber,
        queueConsultation,
        setQueueConsultation,
        consultationServingNumber,
        setConsultationServingNumber,
        queueRepair,
        setQueueRepair,
        repairServingNumber,
        setRepairServingNumber,
        queueInstallation,
        setQueueInstallation,
        installationServingNumber,
        setInstallationServingNumber,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
