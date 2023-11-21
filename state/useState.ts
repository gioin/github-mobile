import { useContext } from "react";
import { StateContext } from "./StateContext";

export const useAppState = () => {
  const data = useContext(StateContext);
  if (data === null) throw Error("Data is undefined");

  return data;
};
