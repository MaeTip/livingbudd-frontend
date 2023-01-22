import styled from 'styled-components'
import backgroundImage2 from 'assets/reservation_bg.png'

export const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  background: #eee;
  
  .logo {
    //display: block;
    //margin-left: auto;
    //margin-right: auto;
    //margin-bottom: 15px;
    position: absolute;
    right: 140px;
    top: 60px;
  }
  
  .form-wrapper {
    max-width: 800px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    //margin-top: -50px;
    padding: 15px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 10px;
    background: url(${backgroundImage2}) #FFF no-repeat top center;
    
  }
  
  .form-error {
    color: #ff4d4f;
  }

  .ant-form-item {
    margin-bottom: 10px;
  }
`
