import { Navigate, Outlet, useLocation } from "react-router-dom";
import { userApi } from "redux/api/user.api";
import { getAuthToken } from "utils/localstorage";
import FullScreenLoader from "components/FullScreenLoader";

const RequireUser = ({ allowedRoles }: { allowedRoles: string[] }) => {
  const authToken = getAuthToken();
  const location = useLocation();

  const { isLoading, isFetching } = userApi.endpoints.getMe.useQuery(null, {
    skip: false,
    refetchOnMountOrArgChange: true,
  });

  const loading = isLoading || isFetching;
  const user = userApi.endpoints.getMe.useQueryState(null, {
    selectFromResult: ({ data }) => ({ data: data }),
  });

  if (loading) {
    return <FullScreenLoader />;
  }

  const role = user.data?.role as unknown as string;

  return (authToken || user.data) && allowedRoles.includes(role) ? (
    <Outlet />
  ) : authToken && user.data ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/admin/login" state={{ from: location }} replace />
  );
};

export default RequireUser;
