import React, { useContext, useEffect, useState } from "react";
import Context from "../../utils/Context";

// data
import { dummyDataStorage } from "../../data/dummy_data_storage";

const PayBillingTeller = () => {
  const { queueBilling, billingServingNumber, setBillingServingNumber } =
    useContext(Context);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [waitingInLine, setWaitingInLine] = useState(0);

  const [data, setData] = useState();

  useEffect(() => {
    const filteredData = dummyDataStorage.filter(
      (item) => item.serviceName === "Pay Bills"
    );
    setData(filteredData);
  }, [queueBilling, billingServingNumber]);

  const handleNextInline = () => {
    if (queueBilling >= billingServingNumber) {
      setBillingServingNumber(billingServingNumber + 1);
      const remainingQueue = queueBilling - (billingServingNumber + 1);
      setWaitingInLine(remainingQueue);
      dummyDataStorage.push({
        serviceName: "Pay Bills",
        servingNumber: billingServingNumber,
        date: new Date().toISOString().split("T")[0],
        time: new Date().toLocaleTimeString(),
      });
    }
  };

  const handleSkipInLine = () => {
    if (queueBilling > billingServingNumber) {
      setBillingServingNumber(billingServingNumber + 1);
      const remainingQueue = queueBilling - (billingServingNumber + 1);
      setWaitingInLine(remainingQueue);
      dummyDataStorage.push({
        serviceName: "Pay Bills",
        servingNumber: billingServingNumber,
        date: "not present",
        time: "not present",
      });
    }
  };

  useEffect(() => {
    const remainingQueue = queueBilling - billingServingNumber;
    if (remainingQueue < 0) {
      setWaitingInLine(0);
    } else {
      setWaitingInLine(remainingQueue);
    }
    // setWaitingInLine(remainingQueue);
    if (queueBilling <= billingServingNumber) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [queueBilling, billingServingNumber]);

  return (
    <div className="flex flex-col lg:flex-row gap-3">
      <nav className="top-11 w-fit h-fit shadow-md rounded-lg p-3 bg-white">
        <h1 className="text-3xl">
          Current Number Serving: {billingServingNumber}
        </h1>
        <p>Customer waiting in line: {waitingInLine}</p>
        <div className="flex gap-2">
          <button
            onClick={handleSkipInLine}
            className="min-w-[130px] bg-red-400 hover:bg-red-500 duration-300 text-white p-1 px-2 my-1 rounded-lg"
          >
            Skip
          </button>
          <button
            disabled={isButtonDisabled}
            className={`flex ${
              isButtonDisabled ? "bg-slate-600" : "bg-blue-950"
            } text-white p-1 px-2 my-1 rounded-lg`}
            onClick={handleNextInline}
          >
            Next Customer
          </button>
        </div>
      </nav>
      <div className="flex-1 flex max-h-96 overflow-auto flex-col items-center bg-white p-3 shadow">
        <table className=" w-full rounded-lg">
          {/* <caption className="sticky top-0 text-3xl py-3 bg-white">Queue List</caption> */}
          <thead className="sticky -top-4 border-[0.3px] bg-white border-black">
            <tr>
              <th></th>
              <th className="p-3">Service Name</th>
              <th>Serving Number</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              index += 1;
              return (
                <tr
                  key={index}
                  className="even:bg-slate-100 hover:bg-slate-200 text-center border-[0.3px] border-black"
                >
                  <td>{index}</td>
                  <td className="p-2">{item.serviceName}</td>
                  <td>{item.servingNumber}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* <div className=" w-[400px] h-[300px] bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW9h4fU35Nb2lGTCcT-GS1pVkWd5gqV0yegw&s')] bg-cover bg-center ">
        <div className="h-full p-11 bg-gradient-to-l from-slate-900/20 to-slate-800/70">
          <h1 className="text-white text-3xl font-bold">Mountain</h1>
          <p className="text-white">Mt. Everest</p>
        </div>
      </div> */}

      {/* <div className="h-screen bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW9h4fU35Nb2lGTCcT-GS1pVkWd5gqV0yegw&s')] bg-fixed bg-cover bg-center">
      <div className="h-full flex items-center justify-center bg-slate-300/30">
        <h1 className="text-white text-4xl font-bold">Parallax Effect</h1>
      </div>
    </div> */}
    </div>
  );
};

export default PayBillingTeller;
