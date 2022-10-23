import { BrowserRouter, Route, Routes } from "react-router-dom";
import Anima1 from "./component/Anima1";
import Anima2 from "./component/Anima2";
import Anima3 from "./component/Anima3";
import Anima4 from "./component/Anima4";
import Anima5 from "./component/Anima1";
import Home from "./component/Anima5";

interface AppRouterProps {
  isLoggedIn: boolean;
  userObj?: any;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/1"} element={<Anima1 />} />
        <Route path={"/2"} element={<Anima2 />} />
        <Route path={"/3"} element={<Anima3 />} />
        <Route path={"/4"} element={<Anima4 />} />
        <Route path={"/5"} element={<Anima5 />} />
      </Routes>
    </BrowserRouter>
  );
}
