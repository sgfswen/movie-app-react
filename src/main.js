import React from 'react';
import ReactDom from 'react-dom';

import { AppContainer } from 'react-hot-loader';
 
import MovieApp from './movie-app';

var render;

window.onload = function () {
  (render = Component => {
    ReactDom.render(
      <AppContainer>
        <Component/>
      </AppContainer>,
      document.getElementById('root')
    );
  })(MovieApp);
};

if (module.hot) {
  module.hot.accept('./movie-app', function () {
    render(MovieApp);
  });
}