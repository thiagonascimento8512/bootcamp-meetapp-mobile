import React from 'react';
import { Alert } from 'react-native';

import api from '~/services/api';

import {
  Container,
  Banner,
  Title,
  Description,
  InfoText,
  SubscribeButton,
} from './styles';

export default function ConfirmInscrition({ navigation }) {
  const meetup = navigation.getParam('item');
  console.tron.log(meetup);
  async function handleSubmit() {
    try {
      await api.post(`subscription/${meetup.id}`);
      Alert.alert('Inscrição realizada com sucesso');
      navigation.navigate('Dashboard');
    } catch (e) {
      Alert.alert(
        `Não foi possível realizar a inscrição! Verifique se não há conflitos`
      );
    }
  }

  return (
    <Container>
      <Banner source={{ uri: meetup.banner.url }} />
      <Title>{meetup.title}</Title>
      <Description>{meetup.description}</Description>
      <InfoText>{meetup.location}</InfoText>
      <InfoText>{meetup.dateFormated}</InfoText>
      <InfoText>Organizador: {meetup.organizer.name}</InfoText>

      <SubscribeButton onPress={handleSubmit}>
        Confirmar inscrição
      </SubscribeButton>
    </Container>
  );
}
