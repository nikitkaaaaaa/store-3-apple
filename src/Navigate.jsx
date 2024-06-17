import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import IphonePage from "./pages/IphonePage";
import MacPage from "./pages/MacPage";
import WatchPage from "./pages/WatchPage";
import IpadPage from "./pages/IpadPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import Favorites from "./pages/Favorites";
import Main from "./pages/Main";
import Basket from "./pages/Basket";
import AccessoriesIphonePage from "./pages/AccessoriesIphonePage";
import AccessoriesWatchPage from "./pages/AccessoriesWatchPage";
import AccessoriesIpadPage from "./pages/AccessoriesIpadPage";
const Navigate = () => {
  return (
    <div>
      <div className="nav">
        <div className="content_nav">
          <Link to={routes.mac} className="item_nav">
            Mac
          </Link>
          <Link to={routes.iphone} className="item_nav">
            iPhone
          </Link>
          <Link to={routes.watch} className="item_nav">
            Watch
          </Link>
          <Link to={routes.ipad} className="item_nav">
            iPad
          </Link>
          <Link to={routes.accessories} className="item_nav">
            Аксессуары
          </Link>
        </div>
      </div>
      <Routes>
        <Route path={routes.mac} element={<MacPage />}></Route>
        <Route path={routes.iphone} element={<IphonePage />}></Route>
        <Route path={routes.watch} element={<WatchPage />}></Route>
        <Route path={routes.ipad} element={<IpadPage />}></Route>
        <Route path={routes.accessories} element={<AccessoriesPage />}></Route>
        <Route path={routes.favorites} element={<Favorites />}></Route>
        <Route path={routes.main} element={<Main />}></Route>
        <Route path={routes.basket} element={<Basket />}></Route>
        <Route
          path={routes.accessoriesiphone}
          element={<AccessoriesIphonePage />}
        ></Route>
        <Route
          path={routes.accessorieswatch}
          element={<AccessoriesWatchPage />}
        ></Route>
        <Route
          path={routes.accessoriesipad}
          element={<AccessoriesIpadPage />}
        ></Route>
      </Routes>
    </div>
  );
};

export default Navigate;
