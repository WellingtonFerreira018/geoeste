export type Referency = {
  src: string;
  fontes: string;
  elaboracao: string;
}

export type TLegend = {
  atr: string;
  color: string;
}

export type Legend = {
  content: TLegend[];
}

export type Map = {
  map_id: string;
  map_desc: string;
  map_atr: string;
  map_value?: string;
  map_ctg?: string;
  map_subctg_id?: number;
  map_refs: Referency | null;
  map_legs: Legend | null;
  choropleth?: number;
  static?: boolean;
}

export type SubCategory = {
  subctg_id: number;
  subctg_desc: string;
  sub_ctg_id: number;
  subctg_maps: Map[];
  sel: boolean;
  transform: string;
}

export type Category = {
  ctg_id: number;
  ctg_desc: string;
  ctg_subs: SubCategory[];
}

export type CategoryValidation = {
  ctg_desc: string;
  created_at: string;
  updated_at: string;
}

export type Member = {
  id:number,
  name:string,
  lattes:string,
  git?: string,
  member_team_id: number,
}

export type Team = {
  id:number,
  description:String,
  members:Member[],
}

export type Publication = {
  pub_id: number;
  pub_title: string;
  pub_desc: string;
  pub_file: File | null;
  pub_number_of_pages: number | string;
  pub_authors: string;
  pub_type: string;
  pub_date: string;
  pub_keywords: string;
  pub_link: string;
}
