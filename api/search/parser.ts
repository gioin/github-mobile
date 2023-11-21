import { ParsedUser, UserSearchResponse } from "./types";

export const searchApiParser = (
  response: UserSearchResponse,
  term: string
): ParsedUser[] => {
  const parsedData = response.items.map((item) => ({
    id: item.id,
    userName: item.login,
    url: item.html_url,
    avatar: item.avatar_url,
  }));
  return parsedData.slice(0, 20);
};
