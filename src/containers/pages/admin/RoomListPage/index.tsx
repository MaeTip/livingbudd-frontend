import React, { useCallback, useEffect, useState } from "react";
import { PageWrapper } from "./index.style";
import { useTranslation } from "react-i18next";
import { Row, Col, Typography, Button, Modal, Table } from "antd";
import RoomForm from "components/RoomForm";
import { useCreateRoomMutation, useGetAllRoomsQuery } from "redux/api/room.api";
import { toast } from "react-toastify";
import { IRoom } from "redux/dto";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import moment from "moment/moment";
import { ColumnsType } from "antd/es/table";

const RoomListPage = () => {
  const { t } = useTranslation();
  const { Title } = Typography;
  const { isLoading, isError, error, data: roomData } = useGetAllRoomsQuery();
  const [
    createRoom,
    {
      isLoading: isCreateLoading,
      isError: isCreateError,
      error: createError,
      isSuccess: isCreateSuccess,
      data: newRoomData,
    },
  ] = useCreateRoomMutation();
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<IRoom[]>([]);

  const goToCreateRoomPage = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  const onCloseModel = () => {
    setIsOpenModal(false);
    setIsEditMode(false);
  };

  useEffect(() => {
    if (isError) {
      toast.error((error as any).data.message);
    } else {
      setDataSource(roomData || []);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    if (isCreateSuccess) {
      toast.success(
        t("common.notification.create_successful", { name: t("room.title") })
      );
      setDataSource((current) => [...current, newRoomData as IRoom]);
    }
    if (isCreateError) {
      toast.error((createError as any).data.message);
    }
    setIsOpenModal(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCreateLoading]);

  const onSubmit = (value: any) => {
    createRoom(value);
  };

  const onClickedDeleteButton = (data: IRoom): void => {
    console.log("on clicked delete button", data);
  };

  const onClickedEditButton = (data: IRoom) => {
    console.log("on clicked edit button", data);
  };

  const columns: ColumnsType<IRoom> = [
    {
      title: "",
      key: "actions",
      width: 60,
      fixed: "left",
      align: "center",
      responsive: ["md"],
      render: (record: IRoom) => (
        <div className="actions" key={`action-${record.id}`}>
          <a onClick={() => onClickedEditButton(record)}>
            <EditOutlined />
          </a>
          {"  "}
          <a onClick={() => onClickedDeleteButton(record)}>
            <DeleteOutlined style={{ color: "red" }} />
          </a>
        </div>
      ),
    },
    {
      title: t("common.data.created_at"),
      dataIndex: "createdAt",
      key: "created_at",
      width: 100,
      fixed: "left",
      defaultSortOrder: "descend",
      sorter: (a: IRoom, b: IRoom) =>
        moment(new Date(a.createdAt)).unix() -
        moment(new Date(b.createdAt)).unix(),
      render: (createdAt: string) =>
        moment(new Date(createdAt)).format("DD/MM/YYYY"),
    },
    {
      title: t("room.data.name"),
      dataIndex: "name",
      key: "name",
      width: 150,
      fixed: "left",
    },
    {
      title: t("room.data.rental_price"),
      dataIndex: "rental_price",
      key: "rental_price",
      width: 80,
      fixed: "left",
      render: (value: number) => value.toLocaleString(),
    },
    {
      title: t("room.data.size"),
      dataIndex: "size",
      key: "size",
      fixed: "left",
      align: "center",
      width: 80,
    },
    {
      title: t("room.data.address"),
      dataIndex: "address",
      key: "address",
      width: 150,
    },
    {
      title: t("room.data.building"),
      dataIndex: "building",
      key: "building",
      align: "center",
      width: 80,
    },
    {
      title: t("room.data.floor"),
      dataIndex: "floor",
      key: "floor",
      align: "center",
      width: 80,
    },
    {
      title: t("room.data.number_of_bedroom"),
      dataIndex: "number_of_bedroom",
      key: "number_of_bedroom",
      align: "center",
      width: 80,
      responsive: ["md"],
    },
    {
      title: t("room.data.maintenance_fee"),
      dataIndex: "maintenance_fee",
      key: "maintenance_fee",
      width: 100,
      render: (value: number) => value?.toLocaleString(),
    },
    {
      title: t("room.data.rental_deposit"),
      dataIndex: "rental_deposit",
      key: "rental_deposit",
      width: 80,
      render: (value: number) => value?.toLocaleString(),
    },
    {
      title: t("room.data.rental_advance_payment"),
      dataIndex: "rental_advance_payment",
      key: "rental_advance_payment",
      width: 80,
      render: (value: number) => value?.toLocaleString(),
    },
  ];

  return (
    <PageWrapper>
      <Title>{t("room.title")}</Title>
      <Row>
        <Col flex="auto">Show search option here</Col>
        <Col flex="100px" className="top-action">
          <Button type="primary" onClick={goToCreateRoomPage}>
            {t("common.action_button.create_button", { name: t("room.title") })}
          </Button>
        </Col>
      </Row>
      <div className="table-wrapper">
        {dataSource?.length === 0 ? (
          <div>No</div>
        ) : (
          <Table
            columns={columns}
            dataSource={dataSource}
            rowKey={"id"}
            scroll={{ y: "calc(100vh) - 200px" }}
            pagination={{ pageSize: 15 }}
          />
        )}
      </div>
      <Modal
        centered
        open={isOpenModal}
        onCancel={onCloseModel}
        footer={null}
        destroyOnClose={true}
        maskClosable={false}
        keyboard={false}
        title={
          <Title level={2} style={{ marginTop: 0 }}>
            {t(`common.form.${isEditMode ? "edit" : "create"}_title`, {
              name: t("room.title"),
            })}
          </Title>
        }
      >
        <RoomForm onFormSubmit={onSubmit} isLoading={isCreateLoading} />
      </Modal>
    </PageWrapper>
  );
};

export default RoomListPage;
