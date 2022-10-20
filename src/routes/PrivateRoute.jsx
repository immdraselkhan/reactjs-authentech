import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext'

const PrivateRoute = ({children}) => {

  // Getting data using AuthContext
  const {user, loading} = useContext(AuthContext);

  // Get current location
  const location = useLocation();

  // Loading until we got the user
  if (loading) {
    return (
      <div className="flex items-center justify-center space-x-2 h-screen">
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
      </div>
    )
  };
  
  if (user?.uid) {
    return children;
  };
  return <Navigate to='/login' state={{from: location}} replace />; // Sending a state object where from is a propery and value is the current location
};

export default PrivateRoute;