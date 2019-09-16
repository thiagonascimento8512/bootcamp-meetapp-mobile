import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
`;

export const NotFound = styled.Text`
  color: #999;
  font-size: 20px;
  align-self: center;
  font-style: italic;
`;

export const Meetups = styled.FlatList.attrs({
  showsVerticalScrollIndicators: false,
  contentContainerStyle: { padding: 30 },
})`
  align-self: stretch;
`;

export const MeetupContainer = styled.View`
  background: #fff;
  border-radius: 4px;
  margin-bottom: 30px;
`;

export const MeetupImage = styled.Image`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: auto;
  height: 150px;
`;

export const Info = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #333;
`;

export const Details = styled.View`
  margin: 10px 0 15px;
  padding-left: 15px;
`;

export const DetailText = styled.Text`
  color: #999;
  font-size: 13px;
  padding-bottom: 5px;
`;

export const InscritionButton = styled(Button)``;
