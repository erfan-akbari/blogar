import Home from "./Pages/Home/Home";
import PostDetales from "./Pages/PostDetales/PostDetales";
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import Rules from "./Pages/Rules/Rules";
import CMS from "./Pages/AdminPanel/CMS";
import UserPanel from "./Pages/UserPanel/UserPanel";
import HotNews from "./Pages/HotNews/HotNews";

const routesData = [
    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/blogar', element: <Home /> },
    { path: '/blogar/post/:postTitle', element: <PostDetales /> },
    { path: '/blogar/hot-news', element: <HotNews /> },
    { path: '/blogar/rules', element: <Rules /> },
    { path: '/blogar/login', element: <Login /> },
    { path: '/blogar/register', element: <Register /> },
    { path: '/blogar/cms/dashboard-admin/:ID/:role', element: <CMS /> },
    { path: '/blogar/userpanel/:ID/:role', element: <UserPanel /> },
    { path: '*', element: <h1 style={{ textAlign: "center", margin: "20px" }}>NOT FOUND <br /> 404</h1> },
]

export default routesData;