import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { TypedObject } from "sanity";

export type Menu = {
    id: number;
    title: string;
    path?: string;
    newTab: boolean;
    submenu?: Menu[];
  };

  export type Feature = {
    tesisName: string;
    slug: Slug;
    tesisCardImage: string;
    tesisDetail: string;
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

  export type TesisDetailData = {
    tesisName: string;
    details: TypedObject[];
    detailImage: Image;
    images: Image[]
  }

  export type Social = {
    tweetTitle: string;
    tweetId: string;
  }

  export type HomeData = {
    sliderImages: {image: Image,slug:string}[];
    sliderResponsiveImages: {image: Image, slug:string}[];
  };
  
  export type FeatureTab = {
    title: string;
    description: string;
    img1: string;
    img2: string;
  };

  export type FacilityDetail = {
    tesisName: string;
    slug: Slug;
    tesisDetail: TypedObject[];
    tesisDetailImage: string;
    tesisImages: Image[]
  }

  export type NewsDetail = {
    newsTitle: string;
    newsSubDesc: string;
    newsImage: Image;
    newsDescription: TypedObject[]
    createdAt: string;
  }

  export type NewsCard = {
    slug: Slug;
    newsTitle: string;
    subDesc: string;
    newsImage: Image
  }

  export type Facility = {
    slug: Slug;
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

  export type Slug = {
    _type: string,
    current: string
  }
  
  export type Blog = {
    blogTitle: string;
    subTitle?: any;
    slug: Slug;
    blogImage: SanityAsset;
    blogDescription: TypedObject;
    createdAt?: string;
  };
  
  