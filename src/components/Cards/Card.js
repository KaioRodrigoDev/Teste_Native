import React from 'react';
import {FlatList, View, Image, Text} from 'react-native';
import {
  Container,
  Title,
  CardBg,
  SubContainer,
  Texto,
  DestaqueBg,
  DestaqueTexto,
} from '../../styles/styled';

export default function Cards({data}) {
  return (
    <CardBg>
      <SubContainer color={'#EAF2FF'}>
        <DestaqueBg>
          <DestaqueTexto>{data.destaque}</DestaqueTexto>
        </DestaqueBg>
        <Title fontSize={18}>{data.title}</Title>
        <Texto fontSize={14}>{data.desc}</Texto>
      </SubContainer>
    </CardBg>
  );
}
