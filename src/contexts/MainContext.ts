import React from "react";

export interface IMainContext {
  search: string;
  apiKey: string;
  page: number;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setApiKey: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const DEFAULT_CONTEXT_VALUE: IMainContext = {
  search: "",
  apiKey: "",
  page: 0,
  setSearch: () => null,
  setApiKey: () => null,
  setPage: () => null,
};

export default React.createContext(DEFAULT_CONTEXT_VALUE);
