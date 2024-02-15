export interface Articles {
  id: number;
  title: string;
  url: string;
  imageUrl?: string;
  newsSite: string;
  summary: string;
  publishedAt: Date;
  updatedAt: Date;
  featured: boolean;
  launches: Launch[];
  events: never[];
}

export interface Launch {
  id: string;
  provider: string;
}
