import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 20px;

  .room-container {
    width: 270px;
  }

  .image-cover {
    height: 220px;
    background-position: center center;
    background-size: cover;
    border-radius: 2px;
  }
  
  .description {
    text-align: left;
    padding-bottom: 15px;

    .location {
      padding-bottom: 5px;
    }

    .facilities {
      padding-top: 5px;
      display: flex;
      justify-content: flex-start;
      flex-direction: row;
      gap: 5px;
    }
  }
`;
