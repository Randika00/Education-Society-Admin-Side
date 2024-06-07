import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar } from "../components";
import { refreshToken } from "../store/user-store/userActions";
import { EventList, DeletedEventList, Login } from "../pages";
import PrivateRoute from "./PrivateRoute";

const PageRoutes: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Switch>
            <PrivateRoute path="/events/deleted" component={DeletedEventList} />
            <PrivateRoute path="/events/" component={EventList} />
            <Route path="/signin" component={Login} exact />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default PageRoutes;
