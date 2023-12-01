import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import PageLayout from "./component/PageLayout.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Vans, { loader as vansLoader } from "./pages/Vans/Vans.jsx"
import VanDetail from "./pages/Vans/VanDetail.jsx";
import HostLayout from "./component/HostLayout.jsx";
import Dashboard from "./pages/Host/Dashboard.jsx";
import Reviews from "./pages/Host/Reviews.jsx"
import Income from "./pages/Host/Income.jsx"
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans.jsx";
import HostVansDetail from "./pages/Host/HostVansDetail.jsx"
import HostVansInfo from "./pages/Host/HostVansDetail/HotVansInfo.jsx";
import HostVansPhoto from "./pages/Host/HostVansDetail/HostVansPhoto.jsx";
import HostVansPrice from "./pages/Host/HostVansDetail/HostVansPrice.jsx";
import NotFound from "./pages/Error/NotFound.jsx";
import Error from "./pages/Error/Error.jsx";
import "./server" 

export default function App() {

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/"element={<PageLayout />}>
            <Route index element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />}/>
            <Route path="vans/:id" element={<VanDetail />}/>
            <Route path="host" element={<HostLayout />} errorElement={<Error />}>
                <Route index element={<Dashboard/>}/>
                <Route path="income" element={<Income />}/>
                <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
                <Route path="vans/:id" element={<HostVansDetail />}>
                    <Route index element={<HostVansInfo />} />
                    <Route path="pricing" element={<HostVansPrice />} />
                    <Route path="photos" element={<HostVansPhoto />} />
                </Route>
                <Route path="reviews" element={<Reviews />}/>
            </Route>
            <Route path="*" element={<NotFound />}/>
        </Route>              
    ))

    return (
        <RouterProvider router={router}/>
    )
}