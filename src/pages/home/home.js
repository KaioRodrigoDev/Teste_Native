import React from 'react';
import {View, Text, Image, FlatList, ScrollView} from 'react-native';
import Cards from '../../components/Cards/Card';
import {
  Container,
  SubContainer,
  Title,
  ProfileImg,
  NavBar,
  DesContainer,
  StartImage,
} from '../../styles/styled';

import UIcon from '../../images/Avatar.png';
import SIcon from '../../images/star.png';

import {setData} from '../../redux/slices/layout.slice';
import {useSelector, useDispatch} from 'react-redux';

const itens = [
  {
    id: 1,
    destaque: 'Destaque1',
    title: 'Card1',
    desc: 'Lorem ipsum dolor sin',
  },
  {
    id: 2,
    destaque: 'Destaque2',
    title: 'Card2',
    desc: 'Lorem ipsum dolor sin',
  },
  {
    id: 3,
    destaque: 'Destaque3',
    title: 'Card3',
    desc: 'Lorem ipsum dolor sin',
  },
];

export default function Home() {
  const data = useSelector(state => state.layout.data);
  console.log(data.data);

  return (
    <Container color={'#FFF'}>
      <SubContainer>
        <NavBar>
          <ProfileImg source={UIcon} />
          <Title fontSize={18}>Ola {data.data}</Title>
        </NavBar>
        <ScrollView showsVerticalScrollIndicator={false}>
          <DesContainer>
            <StartImage source={SIcon} />
            <Title fontSize={17}>Noticias em destaque para Voce</Title>
          </DesContainer>

          <FlatList
            data={itens}
            keyExtractor={item => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <Cards data={item} />}
          />
        </ScrollView>
      </SubContainer>
    </Container>
  );
}
