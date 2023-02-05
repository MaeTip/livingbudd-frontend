import styled from "styled-components";
import { brandingColor } from "constants/color";
export const Wrapper = styled.div`
  position: relative;

  h3 {
    font-family: "Barlow Semi Condensed", serif;
    color: ${brandingColor.light.white};
    font-size: 24px;
    font-weight: normal;
    margin-top: 0;
    margin-bottom: 30px;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    em {
      color: ${brandingColor.light.orange.secondary};
      font-size: 50px;
      font-style: normal;
      font-weight: bold;
      margin-right: 10px;
    }
  }

  h4 {
    font-family: "Barlow Semi Condensed", serif;
    color: ${brandingColor.light.white};
    font-size: 24px;
    font-weight: normal;
    text-align: left;
    margin: 0;
  }

  .reservations {
    display: flex;
    margin-left: -30px;

    .reservation {
      color: ${brandingColor.light.orange.secondary};
      padding-top: 20px;

      span {
        font-family: "Barlow Semi Condensed", serif;
        font-weight: bold;
        font-size: 40px;
      }
    }
  }

  .construction {
    display: none;
    position: absolute;
    bottom: 0px;
    left: 20px;
  }

  @media only screen and (min-width: 768px) {
    h3 {
      font-size: 36px;
      margin-bottom: 30px;

      em {
        font-size: 80px;
        margin-right: 30px;
      }
    }

    h4 {
      font-size: 28px;
    }

    .reservations {
      .reservation {
        span {
          font-size: 50px;
        }
      }
    }
  }

  @media only screen and (min-width: 992px) {
    h3 {
      font-size: 42px;
      margin-bottom: 30px;

      em {
        font-size: 100px;
        margin-right: 30px;
      }
    }

    h4 {
      font-size: 32px;
    }

    .reservations {
      .reservation {
        span {
          font-size: 56px;
        }
      }
    }

    .construction {
      display: block;
    }
  }
`;
