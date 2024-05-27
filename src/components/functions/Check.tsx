import ReactLoading from "react-loading";
import { Input } from "./input";

interface CheckProps {
  check: boolean
  id: number
  handleChecked: (id: number, completed: boolean) => void
  completed: boolean
}

export const Check: React.FC<CheckProps> = ({ check, id, handleChecked, completed }) => {
  return (
    <>
      {check ? (
        // -------React_loading------//
        <ReactLoading color={"#000"} width={20} height={20} type={"spin"} />
      ) : (
        //------Checkbox------//
        <Input handleChecked={handleChecked} id={id} completed={completed} />
      )}
    </>
  );
};
