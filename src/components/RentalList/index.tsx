import React, { FC } from "react";
import { Card, Col, Row } from "antd";
import { Wrapper } from "./index.styles";
import { BiBed, BiBorderOuter, BiWind, BiMap } from "react-icons/bi";
import ReactIconWithText from "../ReactIcon";
import { useTranslation } from "react-i18next";

export interface IRental {
  image?: string;
  title?: string;
  location?: string;
  numberOfBedroom?: number;
  size?: number;
  isAirConditioner?: boolean;
}

interface RentalListProps {
  list?: IRental[];
}

const RentalList: FC<RentalListProps> = ({ list }) => {
  const { Meta } = Card;
  const { t } = useTranslation();

  return (
    <Wrapper className="renting-list">
      <Row gutter={16}>
        {list?.map(
          ({
            title,
            image,
            location,
            numberOfBedroom,
            size,
            isAirConditioner = false,
          }) => (
            <Col span={6}>
              <Card
                className="room-container"
                hoverable
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
                  description={
                    <>
                      <div className="location">
                        <ReactIconWithText icon={<BiMap />} text={location} />
                      </div>
                      <div className="facilities">
                        <ReactIconWithText
                          icon={<BiBed />}
                          text={t("rental.number_of_bedroom", {
                            number: numberOfBedroom,
                          })}
                        />
                        <ReactIconWithText
                          icon={<BiBorderOuter />}
                          text={t("rental.size", {
                            number: size,
                          })}
                        />
                        {isAirConditioner && (
                          <ReactIconWithText
                            icon={<BiWind />}
                            text={t("rental.air_conditioner")}
                          />
                        )}
                      </div>
                    </>
                  }
                />
              </Card>
            </Col>
          )
        )}
      </Row>
    </Wrapper>
  );
};

export default RentalList;
