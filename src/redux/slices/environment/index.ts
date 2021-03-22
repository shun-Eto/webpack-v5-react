import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Languages } from "~src/@types/environment";

interface Status {
  signin: { fetching: boolean; fetched: boolean };
  signout: { fetching: boolean; fetched: boolean };
}
interface Data {
  token: string;
  theme: "primary" | "seconday";
  lang: keyof Languages<string>;
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
    theme: "primary",
    lang: "jp"
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
