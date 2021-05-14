import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import reducers from './reducers';
import { persistStore } from 'redux-persist';

export default function configureStore() {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools({
      name: 'Farm',
      realtime: true,
      hostname: 'localhost',
      port: 8000, // pointing to local remotedev server
    }),
  );

  const store = createStore(reducers, enhancer);

  persistStore(store, null, () => store.getState());

  return store;
}
