import { configureStore } from "@reduxjs/toolkit";
import { iphone } from "../api/iphone";
import { ipad } from "../api/ipad";
import { mac } from "../api/mac";
import { watch } from "../api/watch";
import { accessories } from "../api/accessories";
import { basket } from "../api/basket";
import { favorites } from "../api/favorites";
import checkCartPopup from "./checkCartPopup";

const store = configureStore({
  reducer: {
    [iphone.reducerPath]: iphone.reducer,
    [ipad.reducerPath]: ipad.reducer,
    [mac.reducerPath]: mac.reducer,
    [watch.reducerPath]: watch.reducer,
    [accessories.reducerPath]: accessories.reducer,
    [basket.reducerPath]: basket.reducer,
    [favorites.reducerPath]: favorites.reducer,
    checkCartPopup: checkCartPopup,
  },
  middleware: (getmiddleware) =>
    getmiddleware().concat(
      iphone.middleware,
      ipad.middleware,
      mac.middleware,
      watch.middleware,
      accessories.middleware,
      basket.middleware,
      favorites.middleware
    ),
});
export default store;
