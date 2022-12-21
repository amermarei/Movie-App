import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import People from "../People/People.jsx";
import Home from "../Home/Home.jsx";
import Register from "../Register/Register.jsx";
import Tv from "../Tv/Tv.jsx";
import Movies from "../Movies/Movies.jsx";
import Layout from "../Layout/Layout.jsx";
import { Fragment, useState, useEffect } from "react";
import Login from "../Login/Login.jsx";
import jwtDecode from "jwt-decode";
import Profile from "../../Profile/Profile.jsx";
import ItemDetails from "../ItemDetails/ItemDetails.jsx";
import ApiContextProvider from "../../Context/MediaContext.js";
function App() {
  let [userData, setUserData] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("userData") !== null) {
      saveUserData();
    }
  }, []);
  function saveUserData() {
    let encode = localStorage.getItem("userData");
    let decode = jwtDecode(encode);
    setUserData(decode);
  }

  function RouteProtect({ children }) {
    if (localStorage.getItem("userData") === null) {
      return <Navigate to="/" />
    }
    return children;
  }
  let routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout userData={userData} setUserData={setUserData} />,
      children: [
        { path: "home", element: <RouteProtect><Home /></RouteProtect> },
        { path: "people", element: <RouteProtect><People /> </RouteProtect> },
        { path: "register", element: <Register /> },
        { path: "Tv", element: <RouteProtect><Tv /></RouteProtect> },
        { path: "Movies", element: <RouteProtect> <Movies /></RouteProtect> },
        { path: "Details/:id/:media_type", element: <RouteProtect> <ItemDetails /></RouteProtect> },
        { index: true, element: <Login saveUserData={saveUserData} /> },
        {
          path: "profile",
          element: <RouteProtect><Profile userData={userData} /></RouteProtect>,
        },
      ],
    },
  ]);
  return (
    <Fragment>
      <ApiContextProvider>
        <RouterProvider router={routers} />
      </ApiContextProvider>
    </Fragment>
  );
}

export default App;
