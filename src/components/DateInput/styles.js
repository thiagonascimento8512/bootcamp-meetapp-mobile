import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px 0 30px;
  background: #22202c;
`;

export const DateLabel = styled.Text`
  color: #999;
  align-self: center;
  margin-bottom: 5px;
`;

export const DateButton = styled.TouchableOpacity`
  padding: 0 15px;
  height: 46px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 0 30px;
  flex-direction: row;
  align-items: center;
`;

export const DateText = styled.Text`
  font-size: 14px;
  color: #fff;
  margin-left: 15px;
`;

export const Picker = styled.View`
  background: #fff;
  padding: 15px 30px;
  margin-top: 30px;
`;
