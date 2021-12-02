import OAuthManager from 'react-native-social-login';

const social = new OAuthManager('linsdriver');

social.configure({
  facebook: {
    client_id: 'xxx',
    client_secret: 'xxx'
  },
});

export default social;