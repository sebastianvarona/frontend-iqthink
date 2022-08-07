export type Adventure = {
  title: string;
  character: string;
  cId: string;
  race: string;
  origin: string;
  destination: string;
};

export type Character = {
  _id: string;
  name: string;
  race: string;
  [key: string]: any;
};
