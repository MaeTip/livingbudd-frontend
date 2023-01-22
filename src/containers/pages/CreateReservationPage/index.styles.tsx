import styled from 'styled-components'
import backgroundImage from 'assets/reservation_bg.png'
import logoText from 'assets/livingbudd_logo_text.png'

export const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  background: #eee;
  
  .logo-text {
    background: url(${logoText}) transparent no-repeat top center;
    display: block;
    width: 240px;
    height: 60px;
    margin-left: auto;
    margin-right: auto;
    
    @media only screen and (min-width: 768px) {
      display: none;
    }
  }
  
  .logo {
    display: none;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (min-width: 768px) {
      display: block;
      position: absolute;
      top: 60px;
      right: 125px;
    }
    @media only screen and (min-width: 992px) {
      right: 140px;
    }
  }
  
  .form-wrapper {
    max-width: 800px;
    padding: 15px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    border-radius: 10px;
    background-color: #fff;
    
    @media only screen and (min-width: 768px) {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      background: url(${backgroundImage}) #FFF no-repeat top center;
    }
    
  }
  
  .form-error {
    color: #ff4d4f;
  }

  .ant-form-item {
    margin-bottom: 10px;
  }
`
