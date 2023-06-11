import { configureStore } from "@reduxjs/toolkit";
import { StatsSlice } from "./slices/statsSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ScrollSlice } from "./slices/scrollSlice";

export const store = configureStore({
  reducer: {
    stats: StatsSlice.reducer,
    overScroll: ScrollSlice.reducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
