import OAuthManager from 'react-native-social-login';

const social = new OAuthManager('linsdriver');

social.configure({
  facebook: {
    client_id: '588238432441851',
    client_secret: '086695e511b99647b97be970fa3c7353'
  },
});

export default social;