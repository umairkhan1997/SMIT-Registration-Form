// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './rootReducer';
// import thunk from 'redux-thunk';
// import { persistStore, persistReducer } from 'redux-persist';
// // import storage from 'redux-persist/lib/storage';
// // import AsyncStorage from '@react-native-community/async-storage';

// // const persistConfig = {
// //   key: 'root',
// // //   storage:AsyncStorage,
// // };

// // const persistedReducer = persistReducer(persistConfig, rootReducer);
// const store = createStore(rootReducer, applyMiddleware(thunk));
// const persistor = persistStore(store);

// export { store, persistor };

import rootReducer from './rootReducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
);

export default store;