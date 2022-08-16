const abc = () => {
  console.log('process.env', process.env);
  return null;
};
export const AppConfig = {
  test: abc(),
  timeOut: process.env.REACT_APP_TIME_OUT
  ? parseInt(process.env.REACT_APP_TIME_OUT)
  : 20000,
  baseUrl: process.env.REACT_APP_BASE_URL || 'http://localhost:3004',
  production: process.env.REACT_APP_PRODUCTION
};
