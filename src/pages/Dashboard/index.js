import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import meetImage from '~/assets/meetup-example.jpg';

import {
  Container,
  Meetups,
  MeetupContainer,
  MeetupImage,
  Info,
  Title,
  Details,
  DetailText,
  InscritionButton,
} from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Meetups>
        <MeetupContainer>
          <MeetupImage source={meetImage} />

          <Info>
            <Title>React Native</Title>

            <Details>
              <DetailText>24 de Junho, às 20h</DetailText>
              <DetailText>Rua Guilherme Gembala, 260</DetailText>
              <DetailText>Oganizador: Diego Fernandes</DetailText>
            </Details>

            <InscritionButton>Realizar Inscrição</InscritionButton>
          </Info>
        </MeetupContainer>

        <MeetupContainer>
          <MeetupImage source={meetImage} />

          <Info>
            <Title>React Native</Title>

            <Details>
              <DetailText>24 de Junho, às 20h</DetailText>
              <DetailText>Rua Guilherme Gembala, 260</DetailText>
              <DetailText>Oganizador: Diego Fernandes</DetailText>
            </Details>

            <InscritionButton>Realizar Inscrição</InscritionButton>
          </Info>
        </MeetupContainer>

        <MeetupContainer>
          <MeetupImage source={meetImage} />

          <Info>
            <Title>React Native</Title>

            <Details>
              <DetailText>24 de Junho, às 20h</DetailText>
              <DetailText>Rua Guilherme Gembala, 260</DetailText>
              <DetailText>Oganizador: Diego Fernandes</DetailText>
            </Details>

            <InscritionButton>Realizar Inscrição</InscritionButton>
          </Info>
        </MeetupContainer>
      </Meetups>
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
