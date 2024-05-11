import { Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";

function ProtectedRoute({ isLoggedIn, children, ...props }) {
    return (
      
      <Route {...props}>{isLoggedIn ? children : <Redirect to="/" />}</Route>
    );
  }

export default ProtectedRoute;



