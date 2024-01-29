import { configureStore } from "@reduxjs/toolkit";
import useSideBarStore from "./useSideBarStore";
export default configureStore({
  reducer: {
    sideBarStore: useSideBarStore,
  },
});
