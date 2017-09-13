import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

export default function configureStore() {

  let middleware = [];

  // Prepare store with all the middlewares
  const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
