// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'ud06arlxik';
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`;

export const authConfig = {
  domain: 'ofa.auth0.com',
  clientId: 'Rt5SYSwEAIBkJI0DYkyROKApDKhTi406',
  callbackUrl: 'http://localhost:3000/callback'
};