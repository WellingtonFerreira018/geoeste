import { Category, CategoryValidation, Legend, Map, Publication, Referency, SubCategory } from "../types/types";

export interface User{
  id:String,
  email:String,
  patent: String,
  token:string,
}
export interface DashboardProps {
  id: string;
  url: string;
  downloadPath: string;
  legend: string;
  referency: string;
}

export interface ElementProps {
  ctgs: Category | null;
  id?: string;
  graphic?: boolean;
  map?: Map | null;
}

export interface DropDownProps {
  subctg: SubCategory | null;
  id: string;
  graphic?: boolean;
  show: boolean;
}

export interface AuthProps{
  user: User | null;
  err: boolean;
  check: boolean;
}

export interface GraphicProps {
  graphic: Map | null;
  data: any;
  downloadProps: IDownloadProps;
  edit?: boolean;
}

export interface IPublicationProps {
  user: User | null;
  edit?: boolean;

}

export interface Dash{
  map: Map | null;
  DashProps: DashboardProps;
}

export interface UserProps {
  id: string | undefined;
  user: User | null;
  edit?: boolean;
}

export interface IDownloadProps {
  id?: string | number;
  title?: string;
  token?: string;
  pos: string;
  lef?: string;
  downloadType?: string;
}

export interface onSubmitProps {
  map?: Map | null;
  publication?: Publication | null;
  file: any;
  token?: string;
}
export interface UploadFormProps {
  token?: string;
  onSubmit: (props: onSubmitProps) => void;
  onCancel: () => void;
}


export interface RadioButtonProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}