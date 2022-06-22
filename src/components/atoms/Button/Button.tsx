import styled, { css } from 'styled-components';

interface Props {
  primary?: boolean;
  success?: boolean;
}

const Button = styled.button<Props>`
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.white};
  padding: 7px 13px;
  background-color: ${({ theme }) => theme.blue};
  border: none;
  border-radius: 6px;

  ${({ success, theme }) =>
    success &&
    css`
      background-color: ${theme.green};
    `}
`;

export default Button;
