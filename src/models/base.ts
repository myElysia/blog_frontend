export interface Params extends PageParams {
  filter?: object;
}

export interface PageParams {
  page?: number;
  size?: number;
}
