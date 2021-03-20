import axios, { AxiosError, AxiosResponse } from "axios";

interface DataProps {}
interface TestFunctionResponse {
  status: number;
  data?: DataProps;
}

export async function testfunction(): Promise<TestFunctionResponse> {
  return axios
    .get("/test")
    .then((val: AxiosResponse<DataProps>) => {
      const { status, data } = val;
      return Promise.resolve({ status, data });
    })
    .catch((e: AxiosError) => {
      const status = e.response?.status || 200;
      return Promise.resolve({ status });
    });
}
