import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      const currentMode = state.darkMode ? false : true;
      state.darkMode = currentMode;
      localStorage.setItem("darkMode", currentMode);
    },
    initTheme(state) {
      const currentMode = localStorage.getItem("darkMode");
      if (currentMode) {
        state.darkMode = currentMode == "true" ? true : false;
      }
    },
  },
});

export const { toggleDarkMode, initTheme } = themeSlice.actions;

export default themeSlice.reducer;
