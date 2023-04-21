import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface CounterState {
  data: {
    username: string;
  } | null;
}

// Define the initial state using that type
const initialState: CounterState = {
  data: null,
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    userData: (
      state,
      action: PayloadAction<{
        username: string;
      }>
    ) => {
      state.data = action.payload;
    },
  },
});

export const { userData, logout } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.user.data;

export default userSlice.reducer;
