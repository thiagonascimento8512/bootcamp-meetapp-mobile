import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import DateInput from '~/components/DateInput';

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

function Dashboard({ isFocused, navigation }) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(new Date());
  const [meetups, setMeetups] = useState([]);

  async function loadMeetups() {
    setLoading(true);
    try {
      const response = await api.get('meetups', {
        params: {
          date,
        },
      });

      const meets = response.data.map(m => ({
        ...m,
        dateFormated: format(
          parseISO(m.date),
          "dd 'de' MMMM 'de' yyyy, 'às' HH:mm",
          {
            locale: pt,
          }
        ),
      }));

      setMeetups(meets);
    } catch (err) {
      setLoading(false);
      dispatch(signOut());
    }
    setLoading(false);
  }

  useEffect(() => {
    loadMeetups();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused, date]);

  return (
    <Container>
      <DateInput date={date} onChange={setDate} />

      {meetups[0] ? (
        <Meetups
          refreshing={loading}
          data={meetups}
          onRefresh={loadMeetups}
          keyExtractor={item => String(item.date)}
          renderItem={({ item }) => (
            <MeetupContainer>
              <MeetupImage source={{ uri: item.banner.url }} />
              <Info>
                <Title>{item.title}</Title>
                <Details>
                  <DetailText>{item.dateFormated}</DetailText>
                  <DetailText>{item.location}</DetailText>
                  <DetailText>Oganizador: {item.organizer.name}</DetailText>
                </Details>
                {item.subscription ? (
                  <DetailText style={{ alignSelf: 'center' }}>
                    (INSCRITO)
                  </DetailText>
                ) : (
                  <InscritionButton
                    onPress={() =>
                      navigation.navigate('ConfirmInscrition', { item })
                    }
                  >
                    Realizar Inscrição
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
          <NotFound>Não há meetups para esta data</NotFound>
        </>
      )}
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
