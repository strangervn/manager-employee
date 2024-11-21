// backend/src/interfaces/User.ts

export interface IUser {
    username: string;
    email: string;
    password: string;
    role: 'admin' | 'employee';
  }
  