import React from "react";
import BillCard from "./BillCard";
import BillSpecs from "./BillSpecs";

export default function BillCollection({
  bills,
  myCast,
  setMyCast,
  fireBillMurray,
}) {
  // check if that Bill is already in the cast, if not update the My Cast state

  function addBillToCast(bill) {
    const billIsAlreadyInCast = myCast.find((p) => p.id === bill.id);
    if (billIsAlreadyInCast) {
      return;
    }
    const newArray = [...myCast, bill];
    setMyCast(newArray);
  }

  return (
    <div className="ui four column grid">
      <div className="row">
        {bills.map((bill) => {
          return (
            <>
              <BillCard
                bill={bill}
                key={bill.id}
                addBillToCast={addBillToCast}
                fireBillMurray={fireBillMurray}
                bills={bills}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
