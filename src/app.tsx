import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/organisms/Header/Header";
import Home from "./components/pages/Home/Home";
import "./app.css";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
