import styled from 'styled-components'
import heroBanner from 'assets/images/home/hero_banner.png'

export const Wrapper = styled.div`
  .banner {
    background: url(${heroBanner}) #FFF no-repeat center center;
    background-size: cover;
    height: 450px;
  }
  
  .home-container {
    max-width: 1360px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  
  .banner {
    position: relative;

    .achieve-rate {
      background-color: rgba(0, 0, 0);
      padding: 5px 15px;
      position: absolute;
      color: #FFF;
      right: 20px;
      bottom: 30%;
    }

    .banner-title {
      font-family: 'Barlow Semi Condensed', serif;
      font-size: 60px;
      color: #FFF;
      width: 450px;
      position: absolute;
      top: 30px;
      left: 150px;
      text-align: left;

      span {
        background-color: rgba(0, 0, 0, .5);
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
  }
  
  .cta-buttons {
    position: absolute;
    top: 300px;
    left: 150px;

    .cta-for-tenant {
      width: 150px;
      height: 50px;
    }
    
    .cta-for-agent {
      margin-left: 10px;
      width: 180px;
      height: 50px;
      background-color: #ef6600;

      &:hover {
        background-color: #ff914d;
      }
    }
    
  }

  
`