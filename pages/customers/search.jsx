export default function Search({ onSearch }) {
  return (
    <>
      <input
        className="border-none shadow-md rounded-md mb-4"
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </>
  );
}
