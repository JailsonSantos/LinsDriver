import React, { useState, useEffect } from "react";
import { Keyboard } from 'react-native';
import { CreditCardInput } from "react-native-credit-card-input";


import {
  Container,
  Button,
  ButtonText,
  Title,
  SubTitle,
  Spacer
} from '../../styles';

const Payment = () => {

  const [visible, setVisible] = useState(true);

  // Monitora o teclado do dispositivo, pra mostra ou ocultar o botão comece a usar
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setVisible(false),
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setVisible(true),
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <Container padding={30} justify="flex-start">

      <Container align="flex-start" height={60}>
        <Title>Escolha como Pagar?</Title>
        <SubTitle>Preencha os dados do cartão de crédito.</SubTitle>
      </Container>

      <Container>
        <Spacer height={50} />
        <CreditCardInput requiresName />
      </Container>

      {visible &&
        <Container height={70} justify="flex-end">
          <Button>
            <ButtonText>Começe a usar</ButtonText>
          </Button>
        </Container>
      }
    </Container>
  )
}

export default Payment;