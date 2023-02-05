import { useTranslation } from "react-i18next";
import { PageWrapper } from "./index.styles";
import {
  useDeleteReservationMutation,
  useGetAllReservationsQuery,
  useUpdateReservationMutation,
} from "redux/api/reservation.api";
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { Col, Modal, Row, Table } from "antd";
import Title from "antd/es/typography/Title";
import moment from "moment";
import {
  CheckOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import { IReservation } from "redux/dto/reservation.dto";
import ReservationForm from "components/ReservationForm";

const ReservationListPage = () => {
  const { confirm } = Modal;
  const { t } = useTranslation();
  const [deleteReservation, { isSuccess: isDeleteSuccess }] =
    useDeleteReservationMutation();
  const {
    isLoading,
    isError,
    error,
    data: reservations,
  } = useGetAllReservationsQuery();
  const [
    updateReservation,
    {
      isLoading: isUpdateLoading,
      isError: isUpdateError,
      error: updateError,
      isSuccess: isUpdateSuccess,
      data: updatedReservation,
    },
  ] = useUpdateReservationMutation();

  const [dataSource, setDataSource] = useState<IReservation[] | undefined>([]);
  const [reservationData, setReservationData] = useState<
    IReservation | undefined
  >();
  const [deletedReservationId, setDeleteReservationId] = useState<
    number | null
  >(null);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

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
    if (isDeleteSuccess && deletedReservationId) {
      setDataSource((pre) => {
        return pre?.filter((record) => record.id !== deletedReservationId);
      });
      setDeleteReservationId(null);
      toast.success(
        t("common.notification.delete_successful", {
          name: t("reservation.title"),
        })
      );
    }
  }, [isDeleteSuccess]);

  useEffect(() => {
    if (isUpdateError) {
      if (Array.isArray((updateError as any).data.error)) {
        (updateError as any).data.error.forEach((el: any) =>
          toast.error(el.message)
        );
      } else {
        toast.error((updateError as any).data.message);
      }
    }
  }, [isLoading]);

  useEffect(() => {
    if (updatedReservation) {
      const updateDataSource = dataSource?.map((record) =>
        record.id === reservationData?.id
          ? {
              ...updatedReservation,
            }
          : record
      );
      setDataSource(updateDataSource);
      setReservationData(undefined);
      setIsEditMode(false);
      toast.success(
        t("common.notification.update_successful", {
          name: t("reservation.title"),
        })
      );
    }
  }, [isUpdateSuccess]);

  const onUpdateFormSubmit = (values: any) => {
    if (reservationData?.id) {
      updateReservation({
        id: reservationData.id,
        reservation: values,
      });
    }
  };

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
        setDeleteReservationId(data.id);
        deleteReservation(data.id as unknown as string);
      },
    });
  };

  const onClickedEditButton = (data: IReservation) => {
    setReservationData(data);
    setIsEditMode(true);
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
      width: 150,
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
      title: t("reservation.table_columns.air_conditioner_request"),
      dataIndex: "air_conditioner_request",
      key: "air_conditioner_request",
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
      title: t("reservation.data.contact"),
      dataIndex: "contact",
      key: "contact",
      width: 200,
      responsive: ["md"],
    },
    {
      title: t("reservation.data.working_address"),
      dataIndex: "working_address",
      key: "working_address",
      responsive: ["md"],
      width: 200,
    },
    {
      title: t("reservation.data.additional_request"),
      dataIndex: "additional_request",
      key: "additional_request",
      responsive: ["md"],
      width: 200,
    },
  ];

  return (
    <PageWrapper>
      {dataSource?.length === 0 ? (
        <div>No</div>
      ) : (
        <div>
          <Title>{t("reservation.title")}</Title>
          <Table
            columns={columns}
            dataSource={dataSource}
            rowKey={"id"}
            scroll={{ y: "calc(100vh) - 200px" }}
            pagination={{ pageSize: 15 }}
          />
        </div>
      )}
      <Modal
        centered
        open={isEditMode}
        onCancel={() => setIsEditMode(false)}
        footer={null}
        destroyOnClose={true}
      >
        <Row>
          <Col md={{ offset: 4 }} sm={{ offset: 0 }}>
            <Title>{t("reservation.form.edit_title")}</Title>
          </Col>
        </Row>
        <ReservationForm
          onFormSubmit={onUpdateFormSubmit}
          isLoading={isUpdateLoading}
          isError={isUpdateError}
          error={updateError}
          data={reservationData}
        />
      </Modal>
    </PageWrapper>
  );
};

export default ReservationListPage;
