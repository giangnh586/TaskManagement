import { ConfigProvider } from 'antd';
import 'antd/dist/antd.min.css';
import locale from 'antd/lib/locale/vi_VN';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './domain/store';
import reportWebVitals from './reportWebVitals';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={locale}>
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
