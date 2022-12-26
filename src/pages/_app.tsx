import '../styles/global.css';
import { Provider } from 'react-redux';
import store from '../store/store';
import App from 'next/app';


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;
