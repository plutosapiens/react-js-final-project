import { useContext } from "react";
import { Navigate } from "react-router-dom";

import AuthContext from "../../contexts/authContext";
import Paths from "../../paths";

const OwnerRoute = ({ ownerId, children }) => {
  const { userId, isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated || userId !== ownerId) {
    return <Navigate to={Paths.Home} replace />;
  }

  return children;
};

export default OwnerRoute;
