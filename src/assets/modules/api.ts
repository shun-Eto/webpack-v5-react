import { FormProps, SigninReturnProps } from "./apiTypes";

class api {
  form: FormProps = {};

  constructor(form?: FormProps) {
    this.form = { ...form };
  }

  async test() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({ success: true }), 2000);
    });
  }

  async signin(): Promise<SigninReturnProps> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({ success: true, token: "test" }), 2000);
    });
  }
}

export default new api();
