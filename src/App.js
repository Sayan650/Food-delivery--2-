import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import GLUGWeb from "./pages/GLUGWeb";
import Menu from "./pages/Menu";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/menu":
        title = "";
        metaDescription = "";
        break;
      case "/log-in":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<GLUGWeb />} />

      <Route path="/menu" element={<Menu />} />

      <Route path="/log-in" element={<LogIn />} />

      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}
export default App;
