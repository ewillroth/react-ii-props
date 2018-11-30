import React from "react";
import AddItem from "./AddItem";

const Student = props => {
  console.log(props);
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h3>From: {props.from} </h3>
      <h3>Age: {props.age}</h3>
      <div>
        <h4>Items in my props back pack:</h4>
        <ul>
          <li>
            Money:{" "}
            {props.money.map(bill => (
              <strong>
                {bill.denomination} {bill.currency},{" "}
              </strong>
            ))}
          </li>
          <li>
            Stickers:{" "}
            {props.stickers.map(sticker => (
              <strong>{sticker + ", "}</strong>
            ))}
          </li>
        </ul>
        <button onClick={props.spendMoney}>Spend Money</button>
      </div>
      <AddItem />
    </div>
  );
};

export default Student;
