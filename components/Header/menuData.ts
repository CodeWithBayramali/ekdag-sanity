import { Menu } from "@/types";

const menuData: Menu[] = [
    {
      id: 1,
      title: "Anasayfa",
      newTab: false,
      path: "/",
    },
    {
      id: 2.1,
      title: "Kurumsal",
      newTab: false,
      submenu: [
        {
          id: 38.1,
          title: "EKDAĞ AŞ",
          newTab: false,
          path: "/kurumsal/ekdag-as",
        },
        {
          id: 40.1,
          title: "BAŞKANIMIZ",
          newTab: false,
          path: "/kurumsal/yonetim/muhittin-bocek",
        },
      ]
    },
    {
      id: 3.1,
      title: "Haberler",
      newTab: false,
      path: "/news",
    },
    {
      id: 3.1,
      title: "Kiralamalar",
      newTab: false,
      path: "/kurumsal/kiralamalar",
    },
    {
      id: 4.1,
      title: "Galeri",
      newTab: false,
      path: "/galeri",
    },
    {
      id: 2.3,
      title: "Blog",
      newTab: false,
      path: "/blog",
    },
    {
      id: 4,
      title: "İletişim",
      newTab: false,
      path: "/iletisim",
    },
  ];
  
  export default menuData;