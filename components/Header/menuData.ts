import { Menu } from "@/types";

const menuData: Menu[] = [
    {
      id: 1,
      title: "Anasayfa",
      newTab: false,
      path: "/",
    },
    {
      id: 3,
      title: "Hizmetler",
      newTab: false,
      submenu: [
            {
              id: 35,
              title: "ATATÜRK PARKI SOSYAL TESİSİ",
              newTab: false,
              path: "/hizmetler/tesislerimiz/ataturk-park-sosyal-tesisi",
            },
            {
              id: 36,
              title: "DÜDEN BALIK ÇARŞISI",
              newTab: false,
              path: "/hizmetler/tesislerimiz/duden-balik-carsisi-sosyal-tesisi",
            },
            {
              id: 37,
              title: "BÜYÜKŞEHİR BELEDİYESİ KAFETERYA",
              newTab: false,
              path: "/hizmetler/tesislerimiz/buyuksehir-belediyesi-kafeterya",
            },
            {
              id: 38,
              title: "KONYAALTI SAHİL PLAJI",
              newTab: false,
              path: "/hizmetler/tesislerimiz/konyaalti-sahil-plaji",
            },
            {
              id: 39,
              title: "LARA SAHİL PLAJI",
              newTab: false,
              path: "/hizmetler/tesislerimiz/lara-sahil",
            },
            {
              id: 39,
              title: "HALK EKMEK FABRİKASI",
              newTab: false,
              path: "/halkekmek",
            },
      ],
    },
    {
      id: 2.1,
      title: "Kurumsal",
      newTab: false,
      path: "/kurumsal",
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