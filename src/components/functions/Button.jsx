export const Button = ({handleRemove, Delete, ID}) => {
  return (
    <button
        onClick={() => handleRemove(ID)}
        disabled={Delete}>
        Delete
  </button>
  );
}
