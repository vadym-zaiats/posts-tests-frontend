import { ReactNode } from "react";
import { useLocation, Navigate } from "react-router-dom";

export function RequireAuth({ children }: { children: ReactNode }) {
  const location = useLocation();

  // need to set usth with redux
  // eslint-disable-next-line no-constant-condition
  if (false) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
}
