import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import {Main} from "./components/route/main";


function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element = {<Main />} />
            </Routes>
        </div>
      </Router>
  );
}

export default App;
