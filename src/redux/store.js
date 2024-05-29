import { configureStore } from "@reduxjs/toolkit";
import { iphone } from "../api/iphone";

const store = configureStore({
  reducer: {
    [iphone.reducerPath]: iphone.reducer,
  },
  middleware: (getmiddleware) => getmiddleware().concat(iphone.middleware),
});
export default store;
