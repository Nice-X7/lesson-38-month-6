import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux";
import { AppDispatch } from "../../Redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useTypedDispatch = () => useDispatch<AppDispatch>();