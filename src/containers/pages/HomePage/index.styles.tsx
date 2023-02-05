import styled from "styled-components";
import { brandingColor } from "constants/color";
import heroBanner from "assets/images/home/hero_banner.png";
import whyUsBanner from "assets/images/home/why_us_bg.png";

export const Wrapper = styled.div`
  .container {
    max-width: 1360px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;

    &:not(:first-child) {
      padding-left: 20px;
      padding-right: 20px;
    }

    .sub-title {
      border-left: 3px solid ${brandingColor.light.black.primary};
      padding: 10px 20px;
      margin-bottom: 30px;

      h2 {
        text-align: left;
        font-size: 30px;
        margin: 0;
      }
    }

    &.room-listing-container {
      padding-bottom: 30px;
      padding-top: 30px;
    }

    @media only screen and (min-width: 768px) {
      &.room-listing-container {
        padding-bottom: 50px;
        padding-top: 50px;
      }

      .sub-title {
        margin-bottom: 50px;

        h2 {
          font-size: 40px;
        }
      }
    }
  }

  .banner {
    background: url(${heroBanner}) ${brandingColor.light.white} no-repeat center
      center;
    background-size: cover;
    height: 300px;
    position: relative;

    .banner-title {
      font-family: "Barlow Semi Condensed", serif;
      font-size: 30px;
      color: ${brandingColor.light.white};
      position: absolute;
      top: 30px;
      left: 30px;
      text-align: left;

      span {
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        padding: 20px 20px;
        border: none;

        &.tenant {
          border-bottom-left-radius: 0;
        }

        &.agent {
          margin-top: 20px;
          display: inline-block;
          padding-top: 0;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
        }
      }
    }

    .achieve-rate {
      background-color: ${brandingColor.light.black.primary};
      color: ${brandingColor.light.white};
      padding: 5px 15px;
      position: absolute;
      right: 20px;
      bottom: 80px;
      font-size: 14px;
    }

    .cta-buttons {
      position: absolute;
      bottom: 30px;
      left: 30px;

      .cta-for-agent {
        margin-left: 10px;
        background-color: ${brandingColor.light.orange.primary};

        &:hover {
          background-color: ${brandingColor.light.orange.hover};
        }
      }
    }

    @media only screen and (min-width: 768px) {
      height: 450px;

      .banner-title {
        font-size: 60px;
        width: 550px;
        top: 30px;
        left: 100px;
      }

      .achieve-rate {
        font-size: 24px;
        bottom: 120px;
        right: 60px;
      }

      .cta-buttons {
        bottom: 50px;
        left: 100px;

        .cta-for-tenant {
          width: 150px;
          height: 50px;
        }

        .cta-for-agent {
          width: 180px;
          height: 50px;
        }
      }
    }

    @media only screen and (min-width: 992px) {
      .banner-title {
        left: 150px;
      }

      .cta-buttons {
        bottom: 60px;
        left: 150px;
      }
    }
  }

  .full-width {
    max-width: none;
  }

  .why-us {
    background: url(${whyUsBanner}) ${brandingColor.light.black.primary}
      no-repeat center center;
    background-size: cover;
    position: relative;
    margin-bottom: 30px;

    .container {
      position: relative;
      padding-bottom: 50px;
      padding-left: 20px;
      padding-right: 20px;
    }

    &:before {
      content: "";
      background-color: black;
      opacity: 0.7;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }

    .sub-title {
      border-left: 3px solid ${brandingColor.light.white};
      margin-top: 50px;
      margin-bottom: 30px;

      h2 {
        color: ${brandingColor.light.white};
      }
    }

    @media only screen and (min-width: 768px) {
      margin-bottom: 50px;
    }
  }

  .our-review,
  .our-service {
    margin-bottom: 30px;

    @media only screen and (min-width: 768px) {
      margin-bottom: 50px;
    }
  }

  .our-review {
    .sub-title {
      margin-bottom: 20px;
    }

    @media only screen and (min-width: 768px) {
      .sub-title {
        margin-bottom: 20px;
      }
    }
  }
`;
