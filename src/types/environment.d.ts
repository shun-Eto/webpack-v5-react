export interface Languages<T> {
  jp: T;
  en: T;
}

export interface ErrorProps {
  statusCode: numher;
  message: string | null;
}
