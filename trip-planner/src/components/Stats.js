export default function Stats({ items }) {
  if (items.length === 0) {
    return <p className="stats">Start adding items to your list. 😉 </p>;
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packedPerCent = Math.round((numPacked / numItems) * 100);

  if (packedPerCent === 100) {
    return <p className="stats">You are ready for your trip. Let's Go! 🚀♥</p>;
  }

  return (
    <footer className="stats">
      💼
      <em>
        You have {numItems} item(s) on your list, and you have already packed{" "}
        {numPacked} ({packedPerCent >= 0 ? packedPerCent : 0}%)
      </em>
    </footer>
  );
}
