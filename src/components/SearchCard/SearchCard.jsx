import "./SearchCard.css";

export default function SearchCard({ onSearch }) {
  return (
    <input
      id="search-bar"
      type="text"
      placeholder="Search Card"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
