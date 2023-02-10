import styled from "styled-components";
import { brandingColor } from "../../constants/color";

export const FormWrapper = styled.div`
  .form-error {
    color: #ff4d4f;
  }

  .ant-form-item {
    margin-bottom: 10px;
  }

  .actions {
    margin-top: 20px;
    border-top: 1px solid ${brandingColor.light.grey.primary};
    padding-top: 20px;
  }
`;
