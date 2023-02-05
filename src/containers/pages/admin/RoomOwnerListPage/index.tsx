import React, { useEffect, useState } from "react";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { useGetAllRoomOwnerQuery } from "redux/api/room-owner.api";
import { toast } from "react-toastify";
import { Table, Typography } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { IRoomOwner } from "redux/dto";
import { PageWrapper } from "./index.styles";

const RoomOwnerListPage = () => {
  const { t } = useTranslation();
  const { Title } = Typography;
  const {
    isLoading,
    isError,
    error,
    data: roomOwners,
  } = useGetAllRoomOwnerQuery();

  const [dataSource, setDataSource] = useState<IRoomOwner[] | undefined>([]);

  useEffect(() => {
    if (isError) {
      if (Array.isArray((error as any).data.error)) {
        (error as any).data.error.forEach((el: any) => toast.error(el.message));
      } else {
        toast.error((error as any).data.message);
      }
    } else {
      setDataSource(roomOwners);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const onClickedDeleteButton = (data: IRoomOwner): void => {
    console.log("on clicked delete button");
  };

  const onClickedEditButton = (data: IRoomOwner) => {
    console.log("on clicked edit button");
  };

  const columns: any = [
    {
      title: "Action",
      key: "actions",
      width: 80,
      fixed: "left",
      responsive: ["md"],
      render: (record: IRoomOwner) => (
        <div className="actions" key={`action-${record.id}`}>
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
      title: t("room_owner.data.created_at"),
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
      title: t("room_owner.data.fullname"),
      dataIndex: "fullname",
      key: "fullname",
      width: 200,
      fixed: "left",
    },
    {
      title: t("room_owner.data.phone"),
      dataIndex: "phone",
      key: "phone",
      width: 150,
      fixed: "left",
    },
    {
      title: t("room_owner.data.email"),
      dataIndex: "email",
      key: "email",
      width: 200,
    },
    {
      title: t("room_owner.data.room_location"),
      dataIndex: "room_location",
      key: "room_location",
      width: 100,
      responsive: ["md"],
    },
    {
      title: t("room_owner.data.room_price"),
      dataIndex: "room_price",
      key: "room_price",
      width: 100,
      responsive: ["md"],
      render: (value: number) => value.toLocaleString(),
    },
    {
      title: t("room_owner.data.room_condition"),
      dataIndex: "room_condition",
      key: "room_condition",
      responsive: ["md"],
      width: 200,
    },
    {
      title: t("room_owner.data.room_detail"),
      dataIndex: "room_detail",
      key: "room_detail",
      responsive: ["md"],
      width: 200,
    },
    {
      title: t("room_owner.data.contact"),
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
          <Title>{t("room_owner.title")}</Title>
          <Table
            columns={columns}
            dataSource={dataSource}
            rowKey={"id"}
            scroll={{ y: "calc(100vh) - 200px" }}
            pagination={{ pageSize: 15 }}
          />
        </div>
      )}
    </PageWrapper>
  );
};

export default RoomOwnerListPage;
