import { TypedUseSelectorHook, useSelector } from "react-redux";
import { ReduceState } from "../redux/redux-store";


export const useTypedSelector: TypedUseSelectorHook<ReduceState> = useSelector;