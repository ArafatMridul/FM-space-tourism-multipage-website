import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";
import Navbar from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="destination" element={<Destination />} />
                <Route path="crew" element={<Crew />} />
                <Route path="technology" element={<Technology />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
