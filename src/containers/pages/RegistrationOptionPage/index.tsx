import { PageWrapper } from "./index.styles";
import { Card, List } from "antd";
import RoomOwnerBanner from "assets/images/v1.png";
import ReservationBanner from "assets/images/v2.png";
import { routes } from "constants/routers";
import { useNavigate } from "react-router-dom";

const RegistrationOptionPage = () => {
  const { Meta } = Card;
  const navigate = useNavigate();

  const data = [
    {
      title: "ฝากห้องพัก",
      description: "สำหรับคนที่ต้องการที่ปล่อยห้องพักเพื่อหารายได้",
      image: RoomOwnerBanner,
      link: routes.roomOwnerRegistration,
    },
    {
      title: "จองห้องพัก",
      description: "สำหรับคนที่ต้องการที่หาห้องพัก",
      image: ReservationBanner,
      link: routes.reservation,
    },
  ];

  return (
    <PageWrapper>
      <div className="option-container">
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 2,
          }}
          dataSource={data}
          renderItem={(item: any) => (
            <List.Item>
              <Card
                hoverable
                bordered
                className="option-item"
                onClick={() => {
                  navigate(routes.reservation);
                }}
                cover={
                  <div
                    className="banner"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                }
              >
                <Meta title={item.title} description={item.description} />
              </Card>
            </List.Item>
          )}
        />
      </div>

      {/*<Row className="container">*/}
      {/*  <Col className="banner" span={24}>*/}
      {/*    <div className="options-wrapper">*/}
      {/*      <div className="option-inner">*/}
      {/*        <Row>*/}
      {/*          <Col xs={24} xl={12}>*/}
      {/*            <Card*/}
      {/*              hoverable*/}
      {/*              style={{ width: 120 }}*/}
      {/*              cover={*/}
      {/*                <img*/}
      {/*                  alt="example"*/}
      {/*                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"*/}
      {/*                />*/}
      {/*              }*/}
      {/*            >*/}
      {/*              <Meta*/}
      {/*                title="Europe Street beat"*/}
      {/*                description="www.instagram.com"*/}
      {/*              />*/}
      {/*            </Card>*/}
      {/*          </Col>*/}
      {/*          <Col xs={24} xl={12}>*/}
      {/*            <Card*/}
      {/*              hoverable*/}
      {/*              style={{ width: 120 }}*/}
      {/*              cover={*/}
      {/*                <img*/}
      {/*                  alt="example"*/}
      {/*                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"*/}
      {/*                />*/}
      {/*              }*/}
      {/*            >*/}
      {/*              <Meta*/}
      {/*                title="Europe Street beat"*/}
      {/*                description="www.instagram.com"*/}
      {/*              />*/}
      {/*            </Card>*/}
      {/*          </Col>*/}
      {/*        </Row>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </Col>*/}
      {/*</Row>*/}
    </PageWrapper>
  );
};

export default RegistrationOptionPage;
