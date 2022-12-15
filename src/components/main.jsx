import { Route, Routes } from "react-router-dom";
import Lost from "./lost";
import Question from "./question";
import Won from "./won";
import Home from "./home";

const Main = (props) => {
  return (
    <Routes>
      <Route path="/lost" element={<Lost {...props} />}></Route>
      <Route path="/won" element={<Won {...props} />}></Route>
      <Route path="/question" element={<Question {...props} />}></Route>
      <Route path="/" element={<Home {...props} />}></Route>
    </Routes>
  );
};

export default Main;
