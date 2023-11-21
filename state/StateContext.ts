import { createContext } from "react";
import { StateProps } from "./StateProvider";

export const StateContext = createContext<StateProps | null>(null);
