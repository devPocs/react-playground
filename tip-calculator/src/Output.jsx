export default function Output({ bill, tip, total }) {
  return (
    <div>
      <p>
        You pay:{" "}
        <span>
          ${bill}+${tip}=${total}
        </span>
      </p>
    </div>
  );
}
