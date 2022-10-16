import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import "./styles/tailwind.css";
import { SweetAlertHook } from "./utils/sweet";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.log(query, error);
      if (query.state.status === "error") {
        const { message } = error as Error;
        SweetAlertHook(2000, message, "error");
      }
    },
  }),
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: 2,
      cacheTime: 1000 * 60 * 60 * 24 * 7,
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </RecoilRoot>
);
