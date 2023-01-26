import styled from 'styled-components'
import { brandingColor } from 'constants/color'
import heroBanner from 'assets/images/home/hero_banner.png'
import whyUsBanner from 'assets/images/home/why_us_bg.png'

export const Wrapper = styled.div`
  .banner {
    background: url(${heroBanner}) ${brandingColor.light.white} no-repeat center center;
    background-size: cover;
    height: 450px;
    position: relative;

    .achieve-rate {
      background-color: ${brandingColor.light.black.primary};
      padding: 5px 15px;
      position: absolute;
      color: ${brandingColor.light.white};
      right: 20px;
      bottom: 30%;
    }

    .banner-title {
      font-family: 'Barlow Semi Condensed', serif;
      font-size: 60px;
      color: ${brandingColor.light.white};
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
        background-color: ${brandingColor.light.orange.primary};

        &:hover {
          background-color: ${brandingColor.light.orange.hover};
        }
      }
    }

  }

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
      border-left: 3px solid #000;
      padding: 10px 20px;
      margin-bottom: 50px;

      h2 {
        text-align: left;
        font-size: 40px;
        margin: 0;
      }
    }
  }

  .room-listing-container {
    padding-bottom: 50px;
    padding-top: 50px;
  }
  
  .why-us {
    max-width: none;
    background: url(${whyUsBanner}) ${brandingColor.light.black.primary} no-repeat center center;
    background-size: cover;
    position: relative;
    
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
    
    h3 {
      font-family: 'Barlow Semi Condensed', serif;
      color: ${brandingColor.light.white};
      font-size: 42px;
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
        font-size: 100px;
        font-style: normal;
        font-weight: bold;
        margin-right: 30px;
      }
    }
    
    h4 {
      font-family: 'Barlow Semi Condensed', serif;
      color: ${brandingColor.light.white};
      font-size: 32px;
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
          font-family: 'Barlow Semi Condensed', serif;
          font-weight: bold;
          font-size: 56px;
        }
      }
    }

    .construction {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  
`
