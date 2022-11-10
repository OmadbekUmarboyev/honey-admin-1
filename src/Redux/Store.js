import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reLogin } from "./Login";
import { reNotification } from "./Notification";
import { reAppbar } from "./Appbar";
import { reProducts, reRelodeProduct } from "./Product";
import { reLoading } from "./Loading";
import { reOrder } from "./Order";
import { reMostSeen } from "./MostSeen";
import { reAdmin } from "./Admin";
import { reSearch } from "./Search";

const reducer = combineReducers({
  login: reLogin,
  notification: reNotification,
  appbar: reAppbar,
  products: reProducts,
  loading: reLoading,
  relodeProduct: reRelodeProduct,
  order: reOrder,
  admin: reAdmin,
  mostseen: reMostSeen,
  search: reSearch,
});

export const Store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
