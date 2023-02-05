import styled from "styled-components";

export const Wrapper = styled.div`
  .service-container {
    padding: 0;

    .image-cover {
      height: 220px;
      background-position: center center;
      background-size: cover;
      border-radius: 2px;
    }

    .service-card {
      width: auto;
    }

    @media only screen and (min-width: 768px) {
      padding: 12px 12px;
    }

    @media only screen and (min-width: 992px) {
      .service-card {
        width: 220px;
      }
    }

    @media only screen and (min-width: 1200px) {
      padding: 12px 24px;

      .service-card {
        width: 270px;
      }
    }
  }
`;
