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

export default function ConfirmInscrition({ navigation }) {
  const meetup = navigation.getParam('item');
  console.tron.log(meetup);
  async function handleSubmit() {
    try {
      await api.post(`subscription/${meetup.id}`);
      Alert.alert('Inscrição realizada com sucesso');
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
    </Background>
  );
}

ConfirmInscrition.navigationOptions = {
  title: 'Confirmar inscrição',
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
