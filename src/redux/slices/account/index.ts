import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
}

interface Status {
  user: { fetching: boolean; fetched: boolean };
}
interface Data {
  user: User;
}

interface State {
  status: Status;
  data: Data;
}

const initialState: State = {
  status: {
    user: { fetching: false, fetched: false }
  },
  data: {
    user: { id: "test-01", name: "Test" }
  }
};

export const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    fetchingUser(state: State) {
      state.status.user = { fetching: true, fetched: false };
    },
    fetchedUser(state: State, actions: PayloadAction<{ user: User }>) {
      state.data.user = actions.payload.user;
      state.status.user = { fetching: false, fetched: true };
    }
  }
});

export default accountSlice;
