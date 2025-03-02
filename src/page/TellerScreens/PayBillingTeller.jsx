import React, { useContext, useEffect, useState } from "react";
import Context from "../../utils/Context";

const PayBillingTeller = () => {
  const { queueBilling, billingServingNumber, setBillingServingNumber } =
    useContext(Context);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleNextInline = () => {
    if (queueBilling > billingServingNumber) {
      setBillingServingNumber(billingServingNumber + 1);
    }
  };

  useEffect(() => {
    if (queueBilling == billingServingNumber) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [queueBilling, billingServingNumber]);

  return (
    <div>
      <nav className="w-fit shadow-md px-11 py-5 m-3">
        <h1 className="text-3xl py-3">
          Current Number Serving: {billingServingNumber}
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
};

export default PayBillingTeller;
