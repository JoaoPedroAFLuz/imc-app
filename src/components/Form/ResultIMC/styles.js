import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 36px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.main};
  font-weight: bold;
`;

export const Number = styled.Text`
  font-size: 36px;
  color: ${({ theme }) => theme.main};
  font-weight: bold;
`;
