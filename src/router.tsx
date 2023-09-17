import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./components/Card";


const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/:username" element={<Card/>} />
        </Routes>
        </BrowserRouter>
    );
    }

    export default Router;