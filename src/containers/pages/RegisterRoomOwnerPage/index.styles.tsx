import styled from 'styled-components'
import backgroundImage from 'assets/images/room_owner_registration.png'

export const Wrapper = styled.div`
  height: 100vh;
  position: relative;

  .form-wrapper {
    max-width: 800px;
    padding: 15px;
    background-color: #fff;
  }
  
  .logo {
    display: none;
    margin-left: auto;
    margin-right: auto;
  }

  .title {
    .area-name {
      font-size: 60%;
    }  
  }
  
  .logo-link {
    cursor: pointer;
  }
  
  @media only screen and (min-width: 768px) {
    background: #eee;
    
    .logo {
      display: block;
      position: absolute;
      top: 60px;
      right: 40px;
    }

    .logo-text-only {
      display: none;
    }

    .form-wrapper {
      position: relative;
      box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
      border-radius: 10px;
      margin-left: auto;
      margin-right: auto;
      top: 50%;
      transform: translateY(-50%);
      background-image: url(${backgroundImage});
      background-repeat: no-repeat;
      background-position: 480px top;
      background-size: cover;
      min-height: 800px;
    }
    
    .successful-wrapper {
      position: relative;
      min-height: 750px;

      .successful-inner {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
      }
    }
  }

  @media only screen and (min-width: 992px) {
    .logo {
      top: 120px;
      right: 100px;
    }
  }
  
`
