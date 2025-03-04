import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme/themeSlice";
import weatherReducer from "./weather/weatherSlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    theme: themeSlice,
  },
});
