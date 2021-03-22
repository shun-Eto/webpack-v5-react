import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Status {
  signin: { fetching: boolean; fetched: boolean };
  signout: { fetching: boolean; fetched: boolean };
}
interface Data {
  token: string;
  theme: "primary" | "seconday";
}

interface State {
  status: Status;
  data: Data;
}

const initialState: State = {
  status: {
    signin: { fetching: false, fetched: false },
    signout: { fetching: false, fetched: false }
  },
  data: {
    token: localStorage.getItem("token") || "",
    theme: "primary"
  }
};

export const environmentSlice = createSlice({
  name: "environment",
  initialState: initialState,
  reducers: {
    fethingSignin(state: State) {
      state.status.signin = { fetching: true, fetched: false };
    },
    fetchedSignin(state: State, actions: PayloadAction<{ token: string }>) {
      state.status.signin = { fetching: false, fetched: true };
      state.data.token = actions.payload.token;
    }
  }
});

export default environmentSlice;
