import styled from "styled-components";
import { brandingColor } from "constants/color";

export const Wrapper = styled.div`
  display: block;
  width: 240px;
  height: 60px;
  margin-left: auto;
  margin-right: auto;
  font-family: "Barlow Semi Condensed", serif;
  text-transform: uppercase;
  text-align: center;
  font-size: 12px;

  &.text-vertical {
    img {
      display: inline-block;
    }

    .app-description {
      margin: -20px auto 0;
      padding: 0 !important;
      text-align: center !important;

      .app-name {
        font-size: 36px;
      }
    }
  }

  .app-description {
    span {
      display: block;
    }
    &.white-color {
      color: ${brandingColor.light.white};
    }
  }

  .app-name {
    font-size: 36px;
    font-weight: bold;
    width: 100%;

    em {
      font-style: normal;
      color: #ff914d;
    }
  }

  &.logo-text {
    display: flex;
    align-items: center;

    .app-description {
      font-size: 14px;
      text-align: left;
      padding-left: 10px;
      line-height: 1.4em;
      padding-top: 4px;

      .app-name {
        font-size: 20px;
      }
    }
  }
`;
