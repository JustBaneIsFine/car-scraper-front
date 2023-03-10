// General
export interface ProviderChildProps {
  children: React.ReactNode;
}

// User State
export interface UserStateInterface {
  username: string;
  userLogedIn: boolean;
  userEmail: string;
}

export interface UserContextType {
  userState: UserStateInterface;
  setUserState: (
    username: string,
    userLogedIn: boolean,
    userEmail: string
  ) => void;
}

// Error State
export interface InputErrorState {
  makeError: boolean;
  modelError: boolean;
  yearStartError: boolean;
  yearEndError: boolean;
}

// Display State
export interface DisplayStateInterface {
  type: 'list' | 'card' | 'search';
}
export interface DisplayContextType {
  displayState: DisplayStateInterface['type'];
  setDisplayState: React.Dispatch<
    React.SetStateAction<'list' | 'card' | 'search'>
  >;
}

export interface ButtonStateInterface {
  displayType: 'Card' | 'Search' | 'List';
  sortType: 'CarPrice' | 'CarYear' | 'CarKM' | 'CarCC';
  sortOrder: 'Asc' | 'Desc';
}

export interface ButtonStates {
  types:
    | 'Card'
    | 'List'
    | 'Search'
    | 'CarPrice'
    | 'CarYear'
    | 'CarKM'
    | 'CarCC';
}

export interface AccountDisplayInterface {
  Types: 'Overview' | 'UserPosts' | 'Favorites' | 'Settings';
}

export interface StepsInterface {
  step1: boolean;
  step2: boolean;
  step3: boolean;
  step4: boolean;
}

export interface InputErrorAuth {
  usernameError: false | string;
  emailError: false | string;
  passwordError: false | string;
  passwordConfirmError: false | string;
}
