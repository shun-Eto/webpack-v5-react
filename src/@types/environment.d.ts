export interface Languages<T> {
  jp: T;
  en: T;
}

export interface ErrorProps {
  statusCode: number;
  message: string | null;
}
