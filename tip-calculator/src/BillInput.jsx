export default function BillInput({ bill, setBill }) {
  return (
    <div>
      <label>Bill Input</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => {
          Number(setBill(e.target.value));
        }}
      />
    </div>
  );
}
