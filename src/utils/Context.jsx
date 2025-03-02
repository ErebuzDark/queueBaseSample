import { createContext, useState } from "react";

const Context = createContext();

export const MyProvider = ({ children }) => {
  // Pay Bills
  const [queueBilling, setQueueBilling] = useState(1);
  const [billingServingNumber, setBillingServingNumber] = useState(1);

  // Consulatation
  const [queueConsultation, setQueueConsultation] = useState(1);
  const [consultationServingNumber, setConsultationServingNumber] = useState(1);

  // Repair
  const [queueRepair, setQueueRepair] = useState(1);
  const [repairServingNumber, setRepairServingNumber] = useState(1);

  // Installation
  const [queueInstallation, setQueueInstallation] = useState(1);
  const [installationServingNumber, setInstallationServingNumber] = useState(1);
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
