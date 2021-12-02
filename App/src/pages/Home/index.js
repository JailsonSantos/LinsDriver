import React from "react";

import {
  Container,
  Title,
  SubTitle,
  Map,
  Avatar,
  Input,
  Spacer,
  Button,
  ButtonText,
  VerticalSeparator,
  Bullet,
  PulseCircle
} from '../../styles'
import { TouchableOpacity } from 'react-native';

const Home = () => {

  const tipo = 'M';   //
  const status = 'C'; // S - SEM CORRIDA, I - INFORMAÇÕES, P - PESQUISA, C - CORRIDA

  return (
    <Container>
      <Map
        intialRegion={{
          latitude: -2.527546,
          longitude: -44.254036,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}

        disabled={status === 'P'}
      />

      <Container
        position="absolute"
        justify="space-between"
        align="flex-start"
        padding={20}
        zIndex={999}
        pointerEvents="box-none"
        style={{ height: '100%' }}
      >
        {/* PARTE SUPERIOR */}
        <Container height={100} justify="flex-start" align="flex-start">

          {/* AVATAR */}
          {status === 'S' || tipo === 'M' && (
            <TouchableOpacity>
              <Avatar
                source={{
                  uri: 'https://cdn.mindminers.com/blog/uploads/2021/05/Dani-Almeida_auto_x1.png'
                }}
              />
            </TouchableOpacity>
          )}

          {status !== 'S' && tipo === 'P' && (
            <Container
              elevation={50}
              justify="flex-end"
              color="light"
            >
              <Container padding={10}>
                <Container justify="flex-start" row>
                  <Bullet />
                  <SubTitle> Endereço de embarque completo</SubTitle>
                </Container>
                <Spacer />
                <Container justify="flex-start" row>
                  <Bullet destination />
                  <SubTitle> Endereço de destino completo</SubTitle>
                </Container>
              </Container>
              <Button type="dark" compact>
                <ButtonText color="light">Toque para editar</ButtonText>
              </Button>

            </Container>
          )}
        </Container>

        {/*  PASSAGEIRO PROCURANDO POR CORRIDA  */}
        {status === 'P' && tipo === 'P' && (
          <Container
            padding={20}
            zIndex={-1}
          >
            <PulseCircle
              numPulses={3}
              diameter={400}
              speed={20}
              duration={2000}
            />
          </Container>
        )}

        <Container
          elevation={50}
          height={150}
          color="light"
        >

          {/* PASSASEIRO SEM CORRIDA */}
          {tipo === 'P' && status === 'S' && (
            < Container justify="flex-start" padding={20} align="flex-start" >
              <SubTitle>Ola, Langela Lins.</SubTitle>
              <Title>Pra onde você quer ir?</Title>
              <Spacer />
              <Input placeholder="Procure um destino..." />
            </Container>
          )}

          {/* PASSASEIRO INFORMAÇÕES DA CORRIDA */}
          {tipo === 'P' && (status === 'I' || status === 'P') && (
            < Container justify="flex-end" align="flex-start" >

              <Container padding={20}>
                <SubTitle>LinsDriver Convencional</SubTitle>
                <Spacer />
                <Container row>
                  <Container>
                    <Title>R$ 13,99</Title>
                  </Container>
                  <VerticalSeparator />
                  <Container>
                    <Title>5 mins</Title>
                  </Container>
                </Container>
              </Container>
              <Button
                type={status === 'P' ? 'muted' : 'secondary'}
              >
                <ButtonText>{status === 'P' ? 'Cancelar LinsDriver' : 'Chamar LinsDriver'}</ButtonText>
              </Button>
            </Container>
          )}

          {/* PASSAGEIRO EM CORRIDA */}
          {tipo === 'P' && status === 'C' && (

            <Container border="primary" justify="flex-end" align="flex-start">
              <Container row padding={20}>
                <Container align="flex-start" row>
                  <Avatar
                    small
                    source={{
                      uri: 'https://assets-br.wemystic.com.br/20191113010228/homem-capri-850x640.jpg'
                    }}
                  />
                  <Spacer width="10px" />

                  <Container align="flex-start">
                    <SubTitle bold>Jailson Lins</SubTitle>
                    <SubTitle small>ABC-123, BMW X8, Preta</SubTitle>
                  </Container>
                </Container>

                <VerticalSeparator />
                <Container padding={5} width={120}>
                  <Title>R$ 12,99</Title>
                  <SubTitle bold color="primary">Aprox. 3 mins</SubTitle>
                </Container>
              </Container>

              <Button type="muted">
                <ButtonText>Cancelar Corrida</ButtonText>
              </Button>
            </Container>
          )}

          {/* MOTORISTA SEM CORRIDA */}
          {tipo === 'M' && status === 'S' && (
            <Container>
              <SubTitle>Ola, Langela Lins.</SubTitle>
              <Title>Nenhuma corrida encontrada</Title>
            </Container>
          )}

          {/* MOTORISTA ESTÁ EM CORRIDA */}
          {tipo === 'M' && status === 'C' && (

            <Container border="primary" justify="flex-end" align="flex-start">
              <Container row padding={10}>
                <Container align="flex-start" row>
                  <Avatar
                    small
                    source={{
                      uri: 'https://assets-br.wemystic.com.br/20191113010228/homem-capri-850x640.jpg'
                    }}
                  />
                  <Spacer width="10px" />

                  <Container align="flex-start">
                    <Container justify="flex-start" height={20} row>
                      <Bullet />
                      <SubTitle small numberOfLines={1}> Endereço de embarque completo</SubTitle>
                    </Container>
                    <Spacer />
                    <Container justify="flex-start" height={20} row>
                      <Bullet destination />
                      <SubTitle small numberOfLines={1}> Endereço de destino completo</SubTitle>
                    </Container>
                  </Container>
                </Container>

                <VerticalSeparator />
                <Container padding={5} width={100}>
                  <Title small>R$ 12,99</Title>
                  <SubTitle bold small color="primary">Aprox. 3 mins</SubTitle>
                </Container>
              </Container>

              <Button type="primary">
                <ButtonText>Aceitar Corrida</ButtonText>
              </Button>
            </Container>

          )}

        </Container>

      </Container>
    </Container >
  );
}

export default Home;