import { StyledProps } from 'styled-components';
import { ApiError } from 'redux-api-middleware';

export interface HashMap<T> { [key: string]: T; }

export type AnyObj = { [key: string]: any };

export interface AppConfig extends Window {
  APP_CONFIG: any;
}

export type Stylable = StyledProps<{
  className?: string;
  children?: any[];
}>;

export type LevelType = 'success' | 'info' | 'warn' | 'error';
export type NoticeMessage = string | (() => JSX.Element);

export type Notice = {
  id?: string;
  title: string;
  message: string | NoticeMessage;
  level: LevelType;
  closeButton?: boolean;
  closeOnRoute?: boolean;
  closeOnTimeout?: number;
  replaceOthers?: boolean;
  error?: ApiError;
};

export interface Item {
  id: string;
  name: string;
  description: string;
}

export type FetchStatus = 'NOT_STARTED' | 'PENDING' | 'SUCCESS' | 'FAILURE';

export interface FetchState<T> {
  data?: T;
  status: FetchStatus;
  error?: ApiError;
  options?: AnyObj;
}

export interface NoticeState {
  notices: Notice[];
  error?: any;
}

export interface RootState {
  notifications?: NoticeState;
  items?: FetchState<Item[]>;
}

