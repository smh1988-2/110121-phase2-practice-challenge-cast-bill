import React, { useEffect, useState } from "react";
import BillCollection from "./components/BillCollection";
import BillsCast from "./components/BillsCast";

export default function App() {
  //Declare API constant and setting the state for my collection of Bills Murray and My Cast of Bills Murray.
  const API = "http://localhost:8002/bills";
  const [bills, setBills] = useState([]);
  const [myCast, setMyCast] = useState(bills);

  //Get the Bills from the API
  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((bills) => setBills(bills));
  }, []);

  //Delete a Bill Murray from the cast and from the Bill Collection
  function fireBillMurray(bill) {
    setMyCast(
      myCast.filter((firedBill) => {
        return firedBill.id !== bill.id;
      })
    );

    setBills(
      bills.filter((firedBill) => {
        return firedBill.id !== bill.id;
      })
    );
  }

  return (
    <div>
      <BillsCast myCast={myCast} setMyCast={setMyCast} />
      <BillCollection
        bills={bills}
        myCast={myCast}
        setMyCast={setMyCast}
        fireBillMurray={fireBillMurray}
      />
    </div>
  );
}
