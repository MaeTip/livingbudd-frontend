import { useTranslation } from "react-i18next";
import { PageWrapper } from "./index.styles";
import { useGetAllReservationsQuery } from "redux/api/reservation.api";
import { toast } from "react-toastify";
import React, { useEffect } from "react";
import { Table } from "antd";
import Title from "antd/es/typography/Title";

const ReservationListPage = () => {
  const {
    isLoading,
    isError,
    error,
    data: reservations,
  } = useGetAllReservationsQuery();
  const { t } = useTranslation();

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
      title: t("reservation.data.fullname"),
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: t("reservation.data.phone"),
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: t("reservation.data.email"),
      dataIndex: "email",
      key: "email",
    },
    {
      title: t("reservation.data.number_of_tenant"),
      dataIndex: "number_of_tenant",
      key: "number_of_tenant",
    },
    {
      title: t("reservation.data.age"),
      dataIndex: "age",
      key: "age",
    },
    {
      title: t("reservation.data.gender"),
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: t("reservation.data.pet_required"),
      dataIndex: "pet_required",
      key: "pet_required",
    },
    {
      title: t("reservation.data.vehicle"),
      dataIndex: "vehicle",
      key: "vehicle",
    },
    {
      title: t("reservation.data.additional_request"),
      dataIndex: "additional_request",
      key: "additional_request",
    },
    {
      title: t("reservation.data.contact"),
      dataIndex: "contact",
      key: "contact",
    },
  ];

  return (
    <PageWrapper>
      {reservations?.length === 0 ? (
        <div>No</div>
      ) : (
        <div>
          <Title>ลงทะเบียนจองห้องพัก</Title>
          <Table columns={columns} dataSource={reservations} />
        </div>
      )}
    </PageWrapper>
  );
};

export default ReservationListPage;
