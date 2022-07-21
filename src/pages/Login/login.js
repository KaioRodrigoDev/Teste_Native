import React from 'react';
import {Button, TextInput} from 'react-native';
import img1 from '../../images/thumb1.png';
import {
  Container,
  Thumb,
  Title,
  SubContainer,
  Input,
  FormContainer,
  SubTitle,
  Btn,
  Texto,
} from '../../styles/styled';
import {useState} from 'react';

import {setData} from '../../redux/slices/layout.slice';
import {useSelector, useDispatch} from 'react-redux';

export default function Login({navigation}) {
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const dispatch = useDispatch();

  const account = {
    user: 'Kaio',
    senha: 'senha123',
  };

  function handleSubmit() {
    if (account.user == username && account.senha == senha) {
      console.log('logou');
      dispatch(
        setData({
          data: username,
        }),
      );
      navigation.navigate('Home');
    }
    console.log('User ou senha incorretos');
  }

  function handleChange(value) {
    console.log(value);
  }

  return (
    <Container>
      <Thumb source={img1} />
      <SubContainer>
        <Title fontSize={25}>Login</Title>
        <FormContainer>
          <Input
            placeholder={'Nome'}
            onChangeText={value => setUsername(value)}
            value={username}
          />
          <Input
            name={'senha'}
            onChangeText={value => setSenha(value)}
            placeholder={'Senha'}
          />
          <Texto color={'#006ffd'} fontSize={12}>
            Esqueceu sua senha? Clique aqui
          </Texto>
        </FormContainer>
        <Btn onPress={handleSubmit}>
          <Texto fontSize={13} color={'#FFF'}>
            Login
          </Texto>
        </Btn>
      </SubContainer>
    </Container>
  );
}
