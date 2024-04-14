export const Input = ({handleChecked, ID, completed}) => {
  return (
        <input
            type="checkbox"
            checked={completed}
            onChange={() => handleChecked(ID, completed)}
        />
  );
}
