import { useTranslation } from "react-i18next";
import { PageWrapper } from "./index.styles";
import { useGetAllReservationsQuery } from "redux/api/reservation.api";
import { toast } from "react-toastify";
import React, { useEffect } from "react";
import { Table } from "antd";
import Title from "antd/es/typography/Title";
import moment from 'moment';

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

  const columns : any = [
    {
      title: 'Action',
      key: 'operation',
      width: 80,
      fixed: 'left',
      responsive: ['md'],
      render: () => <a>action</a>,
    },
    {
      title: t("reservation.data.created_at"),
      dataIndex: "createdAt",
      key: "createdAt",
      width: 120,
      fixed: 'left',
      defaultSortOrder: 'descend',
      sorter: (a: any, b: any) => moment(new Date(a.createdAt)).unix() - moment(new Date(b.createdAt)).unix(),
      render: (createdAt: string) => moment(new Date(createdAt)).format('DD/MM/YYYY'),
    },
    {
      title: t("reservation.data.fullname"),
      dataIndex: "fullname",
      key: "fullname",
      width: 200,
      fixed: 'left',
    },
    {
      title: t("reservation.data.phone"),
      dataIndex: "phone",
      key: "phone",
      width: 120,
      fixed: 'left',
    },
    {
      title: t("reservation.data.email"),
      dataIndex: "email",
      key: "email",
      width: 200,
    },
    {
      title: t("reservation.data.age"),
      dataIndex: "age",
      key: "age",
      width: 80,
      responsive: ['md'],
    },
    {
      title: t("reservation.data.gender"),
      dataIndex: "gender",
      key: "gender",
      width: 80,
      responsive: ['md'],
      render: (value: string) => t(`reservation.data.option.gender.${value.toLowerCase()}`),
    },
    {
      title: t("reservation.table_columns.number_of_tenant"),
      dataIndex: "number_of_tenant",
      key: "number_of_tenant",
      width: 100,
      responsive: ['md'],
    },
    {
      title: t("reservation.table_columns.pet_required"),
      dataIndex: "pet_required",
      key: "pet_required",
      width: 100,
      responsive: ['md']
    },
    {
      title: t("reservation.table_columns.vehicle"),
      dataIndex: "vehicle",
      key: "vehicle",
      width: 150,
      responsive: ['md'],
      render: (value: string) => t(`reservation.data.option.vehicle.${value.toLowerCase()}`),
    },
    {
      title: t("reservation.data.additional_request"),
      dataIndex: "additional_request",
      responsive: ['md'],
      key: "additional_request",
      width: 200,
    },
    {
      title: t("reservation.data.contact"),
      dataIndex: "contact",
      key: "contact",
      width: 200,
      responsive: ['md'],
    }

  ];

  return (
    <PageWrapper>
      {reservations?.length === 0 ? (
        <div>No</div>
      ) : (
        <div>
          <Title>ลงทะเบียนจองห้องพัก</Title>
          <Table columns={columns} dataSource={reservations} scroll={{ y: 'calc(100vh) - 200px' }} />
        </div>
      )}
    </PageWrapper>
  );
};

export default ReservationListPage;
