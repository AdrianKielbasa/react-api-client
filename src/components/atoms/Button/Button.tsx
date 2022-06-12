import styled from 'styled-components';

interface Props {
  primary: boolean;
}

const Button = styled.button<Props>`
  font-size: 16px;
  line-height: 20px;
  color: white;
  padding: 6px 12px;
  background-color: ${({ theme }) => theme.blue};
  border: 1px solid ${({ theme }) => theme.blue};
  border-radius: 6px;
`;

export default Button;
