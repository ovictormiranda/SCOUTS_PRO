import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import {
  Container,
  InfoOption,
  TitleOption,
  DescriptionOption,
  Options,
  Button,
} from './styles';


export function Home() {
  return (
    <Container>
      <InfoOption>
        <TitleOption>
          NOVA PARTIDA
        </TitleOption>
        <DescriptionOption>
          Selecione os times e as escalações, {"\n"}
          acrescente detalhes a partida e...{"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          vá pra jogo!
        </DescriptionOption>
      </InfoOption>
      
      <Options>
          <Button></Button>
          <Button></Button>
          <Button></Button>
          <Button></Button>
      </Options>
    </Container>
  )
}