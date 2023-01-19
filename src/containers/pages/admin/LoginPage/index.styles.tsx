import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  
  .logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
  }
  
  .form-wrapper {
    max-width: 400px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    margin-top: -50px;
  }
  
  .form-error {
    color: #ff4d4f;
  }
  
  .signin-form {
    padding: 0 40px;
  }
`
