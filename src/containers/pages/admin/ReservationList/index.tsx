import livingBuddLogo from "assets/livingbudd_logo.svg";
import { useTranslation } from "react-i18next";
import { PageWrapper } from "./index.styles";
import { useGetAllReservationsQuery } from "redux/api/reservation.api";
import { toast } from "react-toastify";
import { useEffect } from "react";

const ReservationListPage = () => {
  const {
    isLoading,
    isError,
    error,
    data: reservations,
  } = useGetAllReservationsQuery();
  const { t } = useTranslation();

  console.log(reservations)
  useEffect(() => {
    if (isError) {
      if (Array.isArray((error as any).data.error)) {
        (error as any).data.error.forEach((el: any) =>
          toast.error(el.message, {
            position: "top-right",
          })
        );
      } else {
        toast.error((error as any).data.message, {
          position: "top-right",
        });
      }
    }
  }, [isLoading]);

  return (
    <PageWrapper className="center-page">
      <img src={livingBuddLogo} className="App-logo" alt="logo" />
      {reservations?.length === 0 ? (
        <div>No</div>
      ) : (
        <div>
          {reservations?.map((reservation) => (
            <div key={`reservation.email`}>{reservation.email}</div>
          ))}
        </div>
      )}
    </PageWrapper>
  );
};

export default ReservationListPage;
