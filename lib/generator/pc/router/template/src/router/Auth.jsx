
import { Navigate } from 'react-router-dom';
// import { getToken } from "@utils/axios/until";


export function RequireAuth({ children }) {
  // let authed = getToken()

  return true ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
}
