import { useEffect, useMemo, useState } from "react";
import { fetchData } from "../ApiService";
import { searchApiParser } from "./parser";
import { ParsedUser, UserSearchResponse } from "./types";
import { useAppState } from "../../state/useState";

interface UserSearchApi {
  data: ParsedUser[];
  isLoading: boolean;
  fetchDataFromApi: (term: string) => Promise<void>;
}

const useSearchAPI = (): UserSearchApi => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const appsState = useAppState();

  const fetchDataFromApi = async (term: string) => {
    setIsLoading(true);
    appsState.setIsLoading(true);
    try {
      const result = (await fetchData(
        `search/users?q=${term}`
      )) as UserSearchResponse;

      setData(searchApiParser(result, term));
      appsState.setSearchData(searchApiParser(result, term));
      setIsLoading(false);
      appsState.setIsLoading(false);
    } catch (error: any) {
    } finally {
      setIsLoading(false);
      appsState.setIsLoading(false);
    }
  };

  const result = useMemo(
    (): UserSearchApi => ({ data, isLoading, fetchDataFromApi }),
    [data, isLoading]
  );

  return result;
};

export default useSearchAPI;
