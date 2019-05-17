export interface IContact {
  id: number;
  name: string;
  phone: string;
}
export interface IContactCreate {
  name: string;
  phone: string;
}
export interface IAuthResponse {
  token: string;
}
