import ReactLoading from "react-loading";
import { Input } from "./input";

export const Check = ({ check, ID, handleChecked, completed }) => {
  return (
    <>
      {check ? (
        // -------React_loading------//
        <ReactLoading color={"#000"} width={20} height={20} type={"spin"} />
      ) : (
        //------Checkbox------//
        <Input handleChecked={handleChecked} ID={ID} completed={completed} />
      )}
    </>
  );
};
