import React from 'react';
import { Alert } from 'react-native';

import api from '~/services/api';

import Background from '~/components/Background';

import {
  Container,
  Banner,
  Title,
  Description,
  InfoText,
  SubscribeButton,
} from './styles';

export default function CancelSubscribe({ navigation }) {
  const meetup = navigation.getParam('item');

  async function handleSubmit() {
    try {
      await api.delete(`subscription/${meetup.id}`);
      Alert.alert('Inscrição cancelada com sucesso!');
      navigation.goBack();
    } catch (e) {
      Alert.alert(
        `Não foi possível realizar a inscrição! Verifique se não há conflitos`
      );
    }
  }

  return (
    <Background>
      <Container>
        <Banner source={{ uri: meetup.Meetup.banner.url }} />
        <Title>{meetup.Meetup.title}</Title>
        <Description>{meetup.Meetup.description}</Description>
        <InfoText>{meetup.Meetup.location}</InfoText>
        <InfoText>{meetup.dateFormated}</InfoText>
        <InfoText>Organizador: {meetup.Meetup.organizer.name}</InfoText>

        <SubscribeButton onPress={handleSubmit}>
          Cancelar inscrição
        </SubscribeButton>
      </Container>
    </Background>
  );
}

CancelSubscribe.navigationOptions = {
  title: 'Cancelar inscrição',
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center',
    marginLeft: -40,
    color: '#fff',
  },
  headerStyle: {
    backgroundColor: '#2b1a2f',
  },
};
