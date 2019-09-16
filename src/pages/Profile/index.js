import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import {
  Container,
  Form,
  Separator,
  FormInput,
  ButtonSubmit,
  ButtonLogout,
} from './styles';

function Profile({ isFocused }) {
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.user);

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setName(profile.name);
    setEmail(profile.email);
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile, isFocused]);

  function handleSubmit() {
    const newProfile = {
      name,
      email,
      oldPassword,
      password,
      confirmPassword,
    };

    dispatch(updateProfileRequest(newProfile));
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form>
        <FormInput
          icon="person-outline"
          placeholder="Seu nome completo"
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
          value={name}
          onChangeText={setName}
        />

        <FormInput
          icon="mail-outline"
          placeholder="Seu email"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          ref={emailRef}
          onSubmitEditing={() => oldPasswordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />

        <Separator />

        <FormInput
          icon="lock-outline"
          placeholder="Sua senha atual"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          ref={oldPasswordRef}
          onSubmitEditing={() => passwordRef.current.focus()}
          value={oldPassword}
          onChangeText={setOldPassword}
        />

        <FormInput
          icon="lock-outline"
          placeholder="Sua nova senha"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          ref={passwordRef}
          onSubmitEditing={() => confirmPasswordRef.current.focus()}
          value={password}
          onChangeText={setPassword}
        />

        <FormInput
          icon="lock-outline"
          placeholder="Confirme sua nova senha"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="send"
          ref={confirmPasswordRef}
          onSubmitEditing={handleSubmit}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <ButtonSubmit onPress={handleSubmit}>Salvar perfil</ButtonSubmit>
        <ButtonLogout onPress={handleLogout}>Sair do Meetapp</ButtonLogout>
      </Form>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Profile);
