import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Card from "./pages/Card";
import NotFoundPage from "./pages/404";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";


const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/u/:username" element={<Card/>} />
            <Route path="/404" element={<NotFoundPage />} />
          	<Route path="*" element={<Navigate to="/404" />} />
        </Routes>
        </BrowserRouter>
    );
    }

    export default Router;