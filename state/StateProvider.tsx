import React, { useState, useMemo } from "react";
import { StateContext } from "./StateContext";
import { ParsedUser } from "../api/search/types";

export interface StateProps {
  setTextValue: React.Dispatch<React.SetStateAction<string>>;
  setSearchData: React.Dispatch<React.SetStateAction<ParsedUser[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  textValue: string;
  searchData: ParsedUser[];
  isLoading: boolean;
}

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [textValue, setTextValue] = useState("");
  const [searchData, setSearchData] = useState<ParsedUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const contextValue = useMemo(
    () => ({
      setSearchData,
      setIsLoading,
      setTextValue,
      textValue,
      searchData,
      isLoading,
    }),
    [textValue, searchData, isLoading]
  );
  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
};
