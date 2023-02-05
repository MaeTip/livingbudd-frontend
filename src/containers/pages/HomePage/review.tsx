import React from "react";
import { Card, List, Rate } from "antd";
import ReactIcon from "components/ReactIcon";
import { ImQuotesRight } from "react-icons/im";
import { brandingColor } from "constants/color";
import { Wrapper } from "./review.styles";
import { Typography } from "antd";

const ReviewContent = () => {
  const { Meta } = Card;
  const { Text } = Typography;

  const list = [
    {
      name: "ก้อย",
      type: "ผู้เช่า",
      rating: 5,
      description:
        "ขอรีวิวห้องเช่าที่จองผ่านเว็บนะคะ ก่อนอื่นต้องบอกว่าเว็บใช้งานง่ายมากหาห้องได้จริง ประทับใจมากๆค่ะห้องก็สวย บรรยากาศดี ของทุกอย่างใหม่ และก็พี่ให้เช่าคุยง่ายค่ะ สอบถามได้ตลอด ไม่มีติดขัดอะไรเลยค่ะ",
    },
    {
      name: "เก๋ไก๋",
      type: "ผู้เช่า",
      rating: 5,
      description:
        "หลังจากหาห้องผ่านเว็บไซต์และมาดูห้องประทับใจตั้งแต่มาดูห้องครั้งแรกเลยค่ะ เพราะห้องสะอาดสวยงามเหมือนห้องใหม่ เจ้าของใจดีค่ะ💙💙💙",
    },
    {
      name: "Korawit",
      type: "ผู้ปล่อยเช่า",
      rating: 5,
      description:
        "หาเว็บที่มีระบบดูแลห้องแบบใช้งานง่ายๆนานแล้ว หลังจากใช้งานเว็บนี้พบว่าใช้งานง่ายเหมาะสำหรับคนที่มีห้องเช่าหลายห้องมาก เพราะมีระบบแจ้งเตือนทั้งผู้เช่าและคนปล่อยเช่า",
    },
    {
      name: "Pratak",
      type: "ผู้ปล่อยเช่า",
      rating: 5,
      description:
        "พอได้ใช้งานเอาห้องมาให้เช่าผ่านระบบเว็บพบว่าได้ลูกค้าเร็วมาก ลูกค้าทักมาเยอะและได้ลูกค้าผู้เช่าที่เราต้องการ แถมมีระบบแจ้งเตือนให้เรารู้ล่วงหน้าด้วยว่าสัญญาจะสิ้นสุด ชอบมากครับ",
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
        renderItem={({ name, description, type, rating }) => (
          <List.Item className="review-container">
            <Card className="card" bordered={true}>
              <Meta
                className="description"
                description={
                  <div>
                    <ReactIcon
                      icon={<ImQuotesRight />}
                      size={"100"}
                      color={brandingColor.light.grey.primary}
                      border={false}
                    />
                    <Text>{description}</Text>
                    <div className="customer-name">
                      <Text>{name}</Text>
                    </div>
                    <div className="customer-type">
                      <Text>{type}</Text>
                    </div>
                    <div className="rating">
                      <Rate disabled defaultValue={rating} />
                    </div>
                  </div>
                }
              />
            </Card>
          </List.Item>
        )}
      />
    </Wrapper>
  );
};

export default ReviewContent;
