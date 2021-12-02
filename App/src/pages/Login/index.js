import React from 'react';
import { Image } from 'react-native';

// Facebook
import social from '../../services/social';

// Axios API
import graph from '../../services/facebook';

// Redux
import { useDispatch } from 'react-redux';
import { updateUser } from '../../store/modules/app/actions';

import { Container, Button, ButtonText } from '../../styles';

// Imagens
import logo from '../../assets/logo.png';
import bgBottom from '../../assets/bg-bottom-login.png';

const Login = () => {

  const dispatch = useDispatch();


  const login = async () => {
    try {
      const auth = await social.authorize('facebook', {
        scopes: 'email',
      });

      /*  const user = await social.makeRequest(
         'facebook',
         '/me?fields=id,name,email'
       ); */

      const user = await graph.get(`/me?fields=id,name,email&access_token=${auth.response.credentials.accessToken}`);

      // Ação que dispara a atualização do state
      dispatch(updateUser({
        fbId: user.data.id,
        nome: user.data.name,
        email: user.data.email,
        tipo: 'M',
        accessToken: auth.response.credentials.accessToken,
      }));

    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <Container color='info50' justify='flex-end'>
      <Container
        justify='space-around'
        padding={30}
        position='absolute'
        height={270}
        top={0}
        zIndex={90}
      >
        <Image source={logo} />

        <Button onPress={() => login()} type='info'>
          <ButtonText color='light'>Fazer Login com Facebook</ButtonText>
        </Button>

        <Button type='light'>
          <ButtonText>Fazer Login com Google</ButtonText>
        </Button>

      </Container>
      <Image source={bgBottom} />
    </Container>
  );
}

export default Login;