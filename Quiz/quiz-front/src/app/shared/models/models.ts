export interface IPost {
  id: number;
  title: string;
  body: string;
  like_count: number;
  created_at?: string;
  created_by?: string;
}


export interface IAuthResponse {
  token: string;
}
