export function TabButton({ children, onClick, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : "inactive"} onClick={onClick}>
        {children}
      </button>
    </li>
  );
}
