import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import PageLayout from "./component/PageLayout.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Login, { loader as loginLoader, action as loginAction } from "./pages/Login.jsx";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans.jsx"
import VanDetail, {loader as vanDetailsLoader} from "./pages/Vans/VanDetail.jsx";
import HostLayout from "./component/HostLayout.jsx";
import Dashboard from "./pages/Host/Dashboard.jsx";
import Reviews from "./pages/Host/Reviews.jsx"
import Income from "./pages/Host/Income.jsx"
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans.jsx";
import HostVansDetail, { loader as hostVansDetailsLoader } from "./pages/Host/HostVansDetail.jsx"
import HostVansInfo from "./pages/Host/HostVansDetail/HotVansInfo.jsx";
import HostVansPhoto from "./pages/Host/HostVansDetail/HostVansPhoto.jsx";
import HostVansPrice from "./pages/Host/HostVansDetail/HostVansPrice.jsx";
import NotFound from "./pages/Error/NotFound.jsx";
import Error from "./pages/Error/Error.jsx";
import { authenticateUser } from "./utils.js"; 

import "./server" 

export default function App() {

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/"element={<PageLayout />}>
            <Route index element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="login" element={<Login />} loader={loginLoader} action={loginAction}/>
            <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />}/>
            <Route path="vans/:id" element={<VanDetail />} loader={vanDetailsLoader}/>
            <Route path="host" element={<HostLayout />} errorElement={<Error />} loader={async()=>await authenticateUser()}>
                <Route index element={<Dashboard/>} loader={async()=>await authenticateUser()}/>
                <Route path="income" element={<Income />} loader={async()=>await authenticateUser()}/>
                <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
                <Route path="vans/:id" element={<HostVansDetail />} loader={hostVansDetailsLoader}>
                    <Route index element={<HostVansInfo />} loader={async()=>await authenticateUser()} />
                    <Route path="pricing" element={<HostVansPrice />} loader={async()=>await authenticateUser()} />
                    <Route path="photos" element={<HostVansPhoto />} loader={async()=>await authenticateUser()} />
                </Route>
                <Route path="reviews" element={<Reviews />} loader={async()=>await authenticateUser()}/>
            </Route>
            <Route path="*" element={<NotFound />}/>
        </Route>              
    ))

    return (
        <RouterProvider router={router}/>
    )
}