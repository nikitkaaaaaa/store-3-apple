import { configureStore } from "@reduxjs/toolkit";
import { iphone } from "../api/iphone";
import { ipad } from "../api/ipad";
import { mac } from "../api/mac";
import { watch } from "../api/watch";
import { accessories } from "../api/accessories";
import { basket } from "../api/basket";

const store = configureStore({
  reducer: {
    [iphone.reducerPath]: iphone.reducer,
    [ipad.reducerPath]: ipad.reducer,
    [mac.reducerPath]: mac.reducer,
    [watch.reducerPath]: watch.reducer,
    [accessories.reducerPath]: accessories.reducer,
    [basket.reducerPath]: basket.reducer,
  },
  middleware: (getmiddleware) =>
    getmiddleware().concat(
      iphone.middleware,
      ipad.middleware,
      mac.middleware,
      watch.middleware,
      accessories.middleware,
      basket.middleware
    ),
});
export default store;
