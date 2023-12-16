export interface Account {
  id:string;
  name: string;
  email: string;
  password: string;
  accessToken: string;
};

export interface AddAccountData extends Omit<Account, "id" | "accessToken"> { confirmPassword: string;}
export interface AccountLogin extends Pick<Account, "email" | "password"> {};
export interface AccountResponse extends Pick<Account, "name" | "accessToken"> {};

