import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  padding: 15px;
  margin: 15px;
  border-radius: 4px;
`;

export const Banner = styled.Image`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: auto;
  height: 150px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 16px;
  margin: 15px 0;
`;

export const InfoText = styled.Text`
  font-size: 12px;
  margin-bottom: 10px;
  color: #333;
`;

export const SubscribeButton = styled(Button)`
  margin-top: 20px;
`;
