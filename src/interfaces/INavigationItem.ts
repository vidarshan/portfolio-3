export interface INavigationItem {
  size: string;
  radius: string;
  color: string;
  variant: string;
  children: JSX.Element;
}

export interface INavigationBarContainer {
  larger: boolean;
}

export interface IHorizontalNavigationItem {
  size: string;
  radius: string;
  color: string;
  variant: string;
  children: any;
  theme: any;
}
