import livingBuddLogo from "assets/livingbudd_logo.svg";
import { useTranslation } from "react-i18next";
import { PageWrapper } from "./index.styles";
import { useGetAllReservationsQuery } from "redux/api/reservation.api";
import { toast } from "react-toastify";
import { useEffect } from "react";
import {Table} from "antd";
import {data} from "browserslist";

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

  const columns = [
    {
      title: 'Fullname',
      dataIndex: 'fullname',
      key: 'fullname',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
  ];

  return (
    <PageWrapper className="center-page">
      {reservations?.length === 0 ? (
        <div>No</div>
      ) : (
        <div>
          <Table columns={columns} dataSource={reservations} />
        </div>
      )}
    </PageWrapper>
  );
};

export default ReservationListPage;
