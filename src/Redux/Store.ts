import { configureStore } from "@reduxjs/toolkit";
import BaseApi from "./BaseApi/BaseApi";
import AuthSlice from "./Feature/Auth/AuthSlice";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import BookingSlice from "./Feature/Booking/BookingSlice";
const persistConfig = {
  key: 'root',
  storage,
}

const AuthpersistedReducer = persistReducer(persistConfig, AuthSlice.reducer)

const Store = configureStore({
  reducer: {
    [BaseApi.reducerPath]:  BaseApi.reducer,
    Auth: AuthpersistedReducer,
    Booking : BookingSlice.reducer
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(BaseApi.middleware),
});

export default Store;

export const Persistore  = persistStore(Store)
