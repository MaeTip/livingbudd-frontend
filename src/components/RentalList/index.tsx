import React, { FC } from "react";
import { Card, List } from "antd";
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
      <List
        grid={{
          column: 4,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 3,
        }}
        dataSource={list}
        renderItem={({
          title,
          image,
          location,
          numberOfBedroom,
          size,
          isAirConditioner = false,
        }) => (
          <List.Item className="rental-container">
            <Card
              className="rental-card"
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
          </List.Item>
        )}
      />
    </Wrapper>
  );
};

export default RentalList;
