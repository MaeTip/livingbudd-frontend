import styled from "styled-components";
import { brandingColor } from "constants/color";

export const Wrapper = styled.div`
  h5 {
    margin-top: 0;
  }

  .service-list {
    margin-left: auto;
    margin-right: auto;
    width: auto;

    ul {
      padding-left: 0;
      list-style: none;
    }
  }

  .contact-us {
    a {
      color: ${brandingColor.light.black.primary};
      
      &:hover {
        color: ${brandingColor.light.blue.primary}
      }
    }
  }

  .logo-text {
    margin-left: 0;
  }

  @media only screen and (min-width: 768px) {
    .service-list {
      width: 200px;
    }

    .logo-text {
      margin-left: auto;
    }
  }

  @media only screen and (min-width: 992px) {
    .service-list {
      width: 300px;
    }
  }
`;
