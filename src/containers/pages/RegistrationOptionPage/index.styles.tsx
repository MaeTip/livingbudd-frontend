import styled from "styled-components";

export const PageWrapper = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;

  .banner {
    width: 100%;
    height: 120px;
    background-size: cover;
    border-radius: 8px 8px 0 0;
  }

  @media only screen and (min-width: 768px) {
    height: calc(100vh - 250px);
    padding-top: 80px;
  }

  @media only screen and (min-width: 992px) {
    .banner {
      height: 200px;
    }

    .option-container {
      display: flex;
      justify-content: center;

      .option-item {
        width: 400px;
      }
    }
  }
`;
