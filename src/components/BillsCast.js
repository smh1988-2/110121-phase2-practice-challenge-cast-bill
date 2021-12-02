import React from "react";
import BillCastCard from "./BillCastCard";

export default function BillsCast({ myCast, setMyCast }) {
  function removeBillFromCast(bill) {
    console.log(bill);

    setMyCast(
      myCast.filter((castBill) => {
        return castBill.id !== bill.id;
      })
    );
  }

  return (
    <div className="ui segment inverted blue bill-cast">
      <div className="ui five column grid">
        <div className="row bill-cast-row">
          {myCast.map((castBill) => {
            return (
              <BillCastCard
                bill={castBill}
                key={castBill.name}
                removeBillFromCast={removeBillFromCast}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
