export default function Review({ reaction, setReaction, children }) {
  return (
    <div>
      <label>{children}</label>

      <select
        value={reaction}
        onChange={(e) => {
          setReaction(e.target.value);
        }}
      >
        <option value="0">dissatisfied(0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely amazing(10%)</option>
      </select>
    </div>
  );
}
