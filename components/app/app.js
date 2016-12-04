
import React from 'react';
import { Provider } from 'react-redux';

import Counter from 'components/counter/counter';

import './app.scss';

export default class App extends React.Component {
    render() {
        let { store } = this.props;

        return (
          <div className="app">

            <Provider store={ store }>

              <div className="app-container">

                <Counter/>

              </div>

            </Provider>

          </div>

        );
    }
}
