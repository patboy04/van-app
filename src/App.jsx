import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import PageLayout from "./component/PageLayout.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Vans from "./pages/Vans/Vans.jsx"
import VanDetail from "./pages/Vans/VanDetail.jsx";
import HostLayout from "./component/HostLayout.jsx";
import Dashboard from "./pages/Host/Dashboard.jsx";
import Reviews from "./pages/Host/Reviews.jsx"
import Income from "./pages/Host/Income.jsx"
import HostVans from "./pages/Host/HostVans.jsx";
import HostVansDetail from "./pages/Host/HostVansDetail.jsx"
import HostVansInfo from "./pages/Host/HostVansDetail/HotVansInfo.jsx";
import HostVansPhoto from "./pages/Host/HostVansDetail/HostVansPhoto.jsx";
import HostVansPrice from "./pages/Host/HostVansDetail/HostVansPrice.jsx";
import NotFound from "./pages/Error/NotFound.jsx";
import "./server" 

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"element={<PageLayout />}>
                    <Route index element={<Home />}/>
                    <Route path="about" element={<About />}/>
                    <Route path="vans" element={<Vans />}/>
                    <Route path="vans/:id" element={<VanDetail />}/>
                    
                    <Route path="host" element={<HostLayout />}>
                        <Route index element={<Dashboard/>}/>
                        <Route path="income" element={<Income />}/>
                        <Route path="vans" element={<HostVans />} />
                        <Route path="vans/:id" element={<HostVansDetail />}>
                            <Route index element={<HostVansInfo />} />
                            <Route path="pricing" element={<HostVansPrice />} />
                            <Route path="photos" element={<HostVansPhoto />} />
                        </Route>
                        <Route path="reviews" element={<Reviews />}/>
                    </Route>
                    <Route path="*" element={<NotFound />}/>
                </Route>               
            </Routes>   
        </BrowserRouter>
    )
}