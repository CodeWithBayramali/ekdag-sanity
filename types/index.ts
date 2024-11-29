import { TypedObject } from "sanity";

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

  export type SliderData= {
    smImg: string;
    mdImg: string;
  }

  export type Image = {
    _key: string;
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };

  export type HomeData = {
    sliderImages: Image[];
    sliderResponsiveImages: Image[];
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

  export type FacilityDetail = {
    tesisName: string;
    details: TypedObject[];
    detailImage: string;
    images: Image[]
  }

  export type NewsCard = {
    _id: string;
    newsTitle: string;
    subDesc: string;
    newsImage: Image
  }

  export type Facility = {
    _id: string;
    tesisName: string;
    cartImage: string;
    map: string
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
  