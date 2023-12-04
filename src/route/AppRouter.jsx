import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {MainPage} from "../page/MainPage";
import {LoginPage} from "../page/LoginPage";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element = {<MainPage />} />
                <Route exact path="/login" element={<LoginPage/>} />
            </Routes>
        </Router>
    )
}

