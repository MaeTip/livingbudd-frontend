import React from "react";
import { Card, List } from "antd";
import { Wrapper } from "./service.styles";
import serviceImage1 from "assets/images/home/service_1.png";
import serviceImage2 from "assets/images/home/service_2.png";
import serviceImage3 from "assets/images/home/service_3.png";
import serviceImage4 from "assets/images/home/service_4.png";

const ServiceContent = () => {
  const { Meta } = Card;

  const list = [
    {
      title: "จัดการหาผู้เช่าที่ถูกใจ",
      description:
        "จัดหาผู้เช่าที่ตรงกับสิ่งที่ผู้ปล่อยเช่าต้องการจากข้อมูลที่เราวิเคราะห์",
      image: serviceImage1,
    },
    {
      title: "ดูแลห้องพัก",
      description:
        "ตรวจสอบห้องให้อยู่ในสภาพเรียบร้อย พร้อมระบบดูแลห้องพักอย่างมืออาชีพ",
      image: serviceImage2,
    },
    {
      title: "ผู้ช่วย & ที่ปรึกษา",
      description:
        "ให้คำแนะนำและช่วยเหลือตั้งแต่เริ่มต้นปล่อยเช่า จนปิดสัญญาเช่า",
      image: serviceImage3,
    },
    {
      title: "ระบบจัดการข้อมูล",
      description: "ให้บริการระบบแจ้งเตือนและจัดการข้อมูลการเช่าโดยมืออาชีพ",
      image: serviceImage4,
    },
  ];

  return (
    <Wrapper>
      <List
        grid={{
          xs: 1,
          sm: 2,
          md: 2,
          lg: 4,
          xl: 4,
        }}
        dataSource={list}
        renderItem={({ title, description, image }) => (
          <List.Item className="service-container">
            <Card
              className="service-card"
              cover={
                <div
                  className="image-cover"
                  style={{ backgroundImage: `url("${image}")` }}
                />
              }
            >
              <Meta
                className="description"
                title={title}
                description={description}
              />
            </Card>
          </List.Item>
        )}
      />
    </Wrapper>
  );
};

export default ServiceContent;
