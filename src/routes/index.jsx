import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import UserProvider from "../context/UserProvider";
import DataProvider from "../context/DataProvider";
import Header from "../components/Header/Header";
import Map from "../components/Map/Map";

const RouteList = () => (
  <BrowserRouter>
    <UserProvider>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/map/:geoPointLat/:geoPointLon" element={<Map />}/>
        </Routes>
      </DataProvider>
    </UserProvider>
  </BrowserRouter>
);

export default RouteList;
