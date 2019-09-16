import React, { useMemo } from 'react';
import { DatePickerAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, DateLabel, DateButton, DateText } from './styles';

export default function DateTimeInput({ date, onChange }) {
  const dateFormated = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date]
  );

  async function handleOpenPicker() {
    const { action, year, month, day } = await DatePickerAndroid.open({
      mode: 'spinner',
      date,
    });

    if (action === DatePickerAndroid.dateSetAction) {
      const selectedDate = new Date(year, month, day);
      onChange(selectedDate);
    }
  }

  return (
    <Container>
      <DateLabel>Selecione a data:</DateLabel>
      <DateButton onPress={handleOpenPicker}>
        <Icon name="event" color="#fff" size={20} />
        <DateText>{dateFormated}</DateText>
      </DateButton>
    </Container>
  );
}
