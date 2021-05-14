export type Env = {
  API_BASE_URL: string;
};

export type Process = {
  env: Env;
};

export type Request = {
  method: string;
  baseURL: string;
  url: string;
  headers: Header;
  params: Object;
};

export type Config = {
  headers: Header;
};

export type Header = {
  Authorization: string;
  'Content-Type': string;
};

export type Error = {
  error: string;
  status: string;
  response: any;
};
