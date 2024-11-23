export type Menu = {
    id: number;
    title: string;
    path?: string;
    newTab: boolean;
    submenu?: Menu[];
  };

  export type Feature = {
    id: number;
    icon: string;
    title: string;
    ico: string;
    link: string;
  };
  
  export type FeatureTab = {
    id: string;
    title: string;
    desc1: string;
    desc2: string;
    image: string;
    image2: string;
    imageDark: string;
  };

  export type Facility = {
    id: number;
    title: string;
    image: string;
    link: string;
    iframe: string
  }
  
  export type Author = {
    name: string;
    image: string;
    bio?: string;
    _id?: number | string;
    _ref?: number | string;
  };
  
  export type Blog = {
    _id: number;
    title: string;
    slug?: any;
    metadata?: string;
    body?: string;
    mainImage?: any;
    author?: Author;
    tags?: string[];
    publishedAt?: string;
  };
  