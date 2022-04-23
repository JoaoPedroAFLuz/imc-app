import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  bottom: 0;
  background: ${({ theme }) => theme.strong};
  align-items: center;
  border-radius: 36px;
`;

export const FormContainer = styled.View`
  width: 100%;
  height: auto;
  margin-top: 30px;
  padding: 10px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.inverse};
  font-size: 18px;
  padding-left: 20px;
`;

export const Input = styled.TextInput`
  width: 90%;
  border-radius: 50px;
  background: ${({ theme }) => theme.normal};
  height: 40px;
  margin: 12px;
  padding-left: 10px;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  width: 90%;
  background-color: ${({ theme }) => theme.main};
  padding: 14px 0px;
  margin-left: 12px;
  margin-right: 30px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.stronger};
  font-size: 20px;
`;
