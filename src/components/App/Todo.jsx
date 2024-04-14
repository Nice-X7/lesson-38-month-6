import { Button } from "../functions/Button";
import { Check } from "../functions/Check";

export const Todo = ({
  ID,
  check,
  handleChecked,
  completed,
  title,
  handleRemove,
  Delete,
}) => {
  return (
    <>
      <div key={ID} className="todo">
        <Check
          handleChecked={handleChecked}
          ID={ID}
          check={check}
          completed={completed}
        />
        <span>{title}</span>
        {/* ---------------------------Button_for_deleting--------------------------- */}
        <Button handleRemove={handleRemove} Delete={Delete} ID={ID} />
      </div>
    </>
  );
};
