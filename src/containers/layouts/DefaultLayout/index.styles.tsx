import styled from 'styled-components'
import { Layout } from "antd";

export const LayoutWrapper = styled(Layout)`
  background-color: #FFF;
  
  .fixed-width {
    max-width: 1360px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Wrapper = styled.div`
  height: 100vh;
  position: relative;
`