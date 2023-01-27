import styled from 'styled-components'

export const Wrapper = styled.div`
  .review-container {
    padding: 0;
    
    .card {
      width: auto;
      border: 0 none;
      text-align: left;
      font-size: 16px;
      line-height: 1.4em;
      
      .customer-name {
        margin-top: 10px;
        
        &:before {
          content: "-";
          padding-right: 5px;
        }
      }
      
      .customer-type, .rating {
        margin-top: 10px;
      }
    }

    @media only screen and (min-width: 768px) {
      padding: 12px 12px;
    }

    @media only screen and (min-width: 992px) {
      .card {
        width: 220px;
      }
    }

    @media only screen and (min-width: 1200px) {
      padding: 12px 24px;
      
      .card {
        width: 350px;
      }
    }
  }
`
