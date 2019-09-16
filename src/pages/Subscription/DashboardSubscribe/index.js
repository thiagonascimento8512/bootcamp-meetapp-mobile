import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import DateInput from '~/components/DateInput';
import Background from '~/components/Background';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  NotFound,
  Meetups,
  MeetupContainer,
  MeetupImage,
  Info,
  Title,
  Details,
  DetailText,
  InscritionButton,
} from './styles';

function DashboardSubscribe({ isFocused, navigation }) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [meetups, setMeetups] = useState([]);

  async function loadMeetups() {
    setLoading(true);
    try {
      const response = await api.get('subscription');

      const meets = response.data.map(m => ({
        ...m,
        dateFormated: format(
          parseISO(m.Meetup.date),
          "dd 'de' MMMM 'de' yyyy, 'às' HH:mm",
          {
            locale: pt,
          }
        ),
      }));
      console.tron.log(meets);

      setMeetups(meets);
    } catch (err) {
      setLoading(false);
      // dispatch(signOut());
    }
    setLoading(false);
  }

  useEffect(() => {
    loadMeetups();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  return (
    <Background>
      <Container>
        {meetups[0] ? (
          <Meetups
            refreshing={loading}
            data={meetups}
            onRefresh={loadMeetups}
            keyExtractor={item => String(item.Meetup.date)}
            renderItem={({ item }) => (
              <MeetupContainer>
                <MeetupImage source={{ uri: item.Meetup.banner.url }} />
                <Info>
                  <Title>{item.Meetup.title}</Title>
                  <Details>
                    <DetailText>{item.dateFormated}</DetailText>
                    <DetailText>{item.Meetup.location}</DetailText>
                    <DetailText>
                      Oganizador: {item.Meetup.organizer.name}
                    </DetailText>
                  </Details>
                  {item.subscription ? (
                    <DetailText style={{ alignSelf: 'center' }}>
                      (INSCRITO)
                    </DetailText>
                  ) : (
                    <InscritionButton
                      onPress={() =>
                        navigation.navigate('CancelSubscribe', { item })
                      }
                    >
                      Cancelar Inscrição
                    </InscritionButton>
                  )}
                </Info>
              </MeetupContainer>
            )}
          />
        ) : (
          <>
            <Icon
              name="block"
              size={60}
              color="#999"
              style={{ alignSelf: 'center', marginTop: 10 }}
            />
            <NotFound>Você não fez possui inscrição</NotFound>
          </>
        )}
      </Container>
    </Background>
  );
}

DashboardSubscribe.navigationOptions = {
  header: null,
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="assignment-turned-in" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(DashboardSubscribe);
