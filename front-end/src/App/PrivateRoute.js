import { Route,Navigate } from "react-router";

import { isAuthenticated } from "../components/utils/authOperations";


const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
      {...rest}
      render={props => (
        isAuthenticated()
        ? (
          <Component key={props.location} {...props} />
        )
        : (<Navigate to={{ pathname: '/', state: { from: props.location} }} />)
      )}
    />
);
    
export default PrivateRoute;
