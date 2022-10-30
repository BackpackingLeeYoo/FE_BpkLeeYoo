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
      if (query.state.status === "error") {
        const { message } = error as Error;
        SweetAlertHook(2000, message, "error");
      }
    },
  }),
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: 2,
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
