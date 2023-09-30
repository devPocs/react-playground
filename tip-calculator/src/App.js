import { useState } from "react";
import BillInput from "./BillInput";
import Review from "./Review";
import Output from "./Output";
import Button from "./Button";

export default function App() {
  const [bill, setBill] = useState("");
  const [reaction1, setReaction1] = useState("0");
  const [reaction2, setReaction2] = useState("0");

  let tip = Number(((reaction1 / 100) * bill + (reaction2 / 100) * bill) / 2);
  let total = tip + Number(bill);

  function reset() {
    setBill("");
    setReaction1("0");
    setReaction2("0");
  }

  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />

      <Review reaction={reaction1} setReaction={setReaction1}>
        How did you like the service?
      </Review>

      <Review reaction={reaction2} setReaction={setReaction2}>
        How did your friend like the service?
      </Review>

      <Output bill={bill} tip={tip} total={total} />

      <Button reset={reset} />
    </div>
  );
}
