import { useTranslation } from "react-i18next";
import { PageWrapper } from "./index.styles";
import {
  useDeleteReservationMutation,
  useGetAllReservationsQuery,
} from "redux/api/reservation.api";
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { message, Modal, Table } from "antd";
import Title from "antd/es/typography/Title";
import moment from "moment";
import {
  CheckOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import { IReservation } from "redux/dto/reservation.dto";

const ReservationListPage = () => {
  const { confirm } = Modal;
  const { t } = useTranslation();
  const {
    isLoading,
    isError,
    error,
    data: reservations,
  } = useGetAllReservationsQuery();
  const [deleteReservation, { isSuccess: isDeleteSuccess }] =
    useDeleteReservationMutation();

  const [dataSource, setDataSource] = useState<IReservation[] | undefined>([]);
  const [reservationId, setReservationId] = useState<number | null>(null);

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
    } else {
      setDataSource(reservations);
    }
  }, [isLoading]);

  useEffect(() => {
    if (isDeleteSuccess && reservationId) {
      setDataSource((pre) => {
        return pre?.filter((record) => record.id !== reservationId);
      });
      setReservationId(null);
      toast.success(t("reservation.delete.successful"), {
        position: "top-right",
      });
    }
  }, [isDeleteSuccess]);

  const onClickedDeleteButton = (data: IReservation): void => {
    confirm({
      title: t("common.confirm.delete"),
      icon: <ExclamationCircleFilled />,
      content: (
        <div>
          <div>
            {t("reservation.data.fullname")} : {data.fullname}
          </div>
          <div>
            {t("reservation.data.phone")} : {data.phone}
          </div>
        </div>
      ),
      okText: t("common.ok"),
      okType: "danger",
      okButtonProps: {
        type: "primary",
      },
      autoFocusButton: "cancel",
      cancelText: t("common.cancel"),
      onOk() {
        setReservationId(data.id);
        deleteReservation(data.id as unknown as string);
      },
    });
  };

  const onClickedEditButton = (data: IReservation) => {
    message.info(`click edit for ${data.fullname}`);
  };

  const columns: any = [
    {
      title: "Action",
      key: "actions",
      width: 80,
      fixed: "left",
      responsive: ["md"],
      render: (record: IReservation) => (
        <div className="actions" key={`reservation-action-${record.id}`}>
          <a onClick={() => onClickedEditButton(record)}>
            <EditOutlined />
          </a>
          <a onClick={() => onClickedDeleteButton(record)}>
            <DeleteOutlined style={{ color: "red" }} />
          </a>
        </div>
      ),
    },
    {
      title: t("reservation.data.created_at"),
      dataIndex: "createdAt",
      key: "created_at",
      width: 120,
      fixed: "left",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) =>
        moment(new Date(a.createdAt)).unix() -
        moment(new Date(b.createdAt)).unix(),
      render: (createdAt: string) =>
        moment(new Date(createdAt)).format("DD/MM/YYYY"),
    },
    {
      title: t("reservation.data.fullname"),
      dataIndex: "fullname",
      key: "fullname",
      width: 200,
      fixed: "left",
    },
    {
      title: t("reservation.data.phone"),
      dataIndex: "phone",
      key: "phone",
      width: 120,
      fixed: "left",
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
      responsive: ["md"],
    },
    {
      title: t("reservation.data.gender"),
      dataIndex: "gender",
      key: "gender",
      width: 80,
      responsive: ["md"],
      render: (value: string) =>
        t(`reservation.data.option.gender.${value.toLowerCase()}`),
    },
    {
      title: t("reservation.table_columns.number_of_tenant"),
      dataIndex: "number_of_tenant",
      key: "number_of_tenant",
      width: 100,
      responsive: ["md"],
    },
    {
      title: t("reservation.table_columns.pet_required"),
      dataIndex: "has_pet",
      key: "has_pet",
      width: 100,
      responsive: ["md"],
      render: (value: boolean) => (value ? <CheckOutlined /> : ""),
    },
    {
      title: t("reservation.table_columns.vehicle"),
      dataIndex: "vehicle",
      key: "vehicle",
      width: 150,
      responsive: ["md"],
      render: (value: string) =>
        t(`reservation.data.option.vehicle.${value.toLowerCase()}`),
    },
    {
      title: t("reservation.data.additional_request"),
      dataIndex: "additional_request",
      key: "additional_request",
      responsive: ["md"],
      width: 200,
    },
    {
      title: t("reservation.data.contact"),
      dataIndex: "contact",
      key: "contact",
      width: 200,
      responsive: ["md"],
    },
  ];

  return (
    <PageWrapper>
      {dataSource?.length === 0 ? (
        <div>No</div>
      ) : (
        <div>
          <Title>ลงทะเบียนจองห้องพัก</Title>
          <Table
            columns={columns}
            dataSource={dataSource}
            rowKey={"id"}
            scroll={{ y: "calc(100vh) - 200px" }}
          />
        </div>
      )}
    </PageWrapper>
  );
};

export default ReservationListPage;
