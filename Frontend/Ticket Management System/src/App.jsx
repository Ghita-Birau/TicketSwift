import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import GlobalStyles from "../src/styles/GlobalStyles";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "../src/pages/Cart";
import EventsPage from "./pages/EventsPage";
import Window from "./ui/Window";
import Map from "./pages/Map";

const queryClient = new QueryClient();

function App() {
  return (
    <Window>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <Toaster
          toastOptions={{
            style: {
              padding: "0.4rem 0.6rem",
              color: "var(--color-gray-700)",
            },
            error: {
              iconTheme: {
                primary: "var(--color-error-600)",
              },
              style: {
                color: "var(--color-error-600)",
              },
            },
            success: {
              iconTheme: {
                primary: "var(--color-success-600)",
              },
              style: {
                color: "var(--color-success-600)",
              },
            },
          }}
          containerStyle={{
            top: "2.4rem",
          }}
          gutter={10}
        />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/map" element={<Map />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Window>
  );
}

export default App;
