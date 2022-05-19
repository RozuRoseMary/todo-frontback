import Header from "./components/layout/Header";
import Router from "../src/routes/Router";
import { useEffect } from "react";
import { getAccessToken } from "./services/localStorage";
import { initUser, login } from "./stores/auth";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  // show user & todo
  useEffect(() => {
    dispatch(initUser());
  });

  return (
    <>
      <Header />
      <div className="container max-w-xs pt-5">
        <Router />
      </div>
    </>
  );
}

export default App;
