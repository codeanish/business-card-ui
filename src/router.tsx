import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import NotFoundPage from "./components/404";


const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<NotFoundPage/>} />
            <Route path="/:username" element={<Card/>} />
            <Route path="/404" element={<NotFoundPage />} />
          	<Route path="*" element={<Navigate to="/404" />} />
        </Routes>
        </BrowserRouter>
    );
    }

    export default Router;