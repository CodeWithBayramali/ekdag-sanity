import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [


    {
      title: "ANASAYFA",
      name: "home",
      type: "document",
      fields: [
        {
          title: "Slider Resimler",
          name: "sliderImages",
          type: "array",
          of: [{ type: "image" }],
        },
        {
          title: "Mobil Slider Resimler",
          name: "sliderResponsiveImages",
          type: "array",
          of: [{ type: "image" }],
        },
      ],
    },


    {
      title: "TESİSLER",
      name: "tesisler",
      type: "document",
      fields: [
          {
            title: 'Tesis Adı',
            name: 'tesisName',
            type: 'string'
          },
          {
            title: 'Tesis Kart Resmi',
            name: 'cartImage',
            type: 'image'
          },
          {
            title: 'Tesis Harita',
            name: 'map',
            type: 'string'
          },
          {
            title: 'Tesis Detaylar',
            name: 'details',
            type: 'array',
            of: [{type: 'block'}]
          },
          {
            title: 'Tesis Detay Resmi',
            name: 'detailImage',
            type: 'image',
          },
          {
            title: 'Tesis Resimler',
            name: 'images',
            type: 'array',
            of: [{type: 'image'}]
          }
      ],
    },


    {
      title: "HABERLER",
      name: "news",
      type: "document",
      fields: [
        {
          title: "Haber Başlığı",
          name: "newsTitle",
          type: "string",
        },
        {
          title: "Alt Açıklama",
          name: "subDesc",
          type: "string",
        },
        {
          title: "Haber Resmi",
          name: "newsImage",
          type: "image",
        },
        {
          title: "Haber Detayı",
          name: "newsDescription",
          type: "array", // Burayı array olarak değiştiriyoruz
          of: [{ type: "block" }], // Block tipi array içinde olacak
        },
      ],
    },


    {
      title: "BLOG",
      name: "blog",
      type: "document",
      fields: [
        {
          title: "Blog Başlığı",
          name: "blogTitle",
          type: "string",
        },
        {
          title: "Blog Resmi",
          name: "blogImage",
          type: "image",
        },
        {
          title: "Blog Detayı",
          name: "blogDescription",
          type: "array", // Burayı array olarak değiştiriyoruz
          of: [{ type: "block" }], // Block tipi array içinde olacak
        },
      ],
    },


    {
      title: "TWITTER",
      name: "twitter",
      type: "document",
      fields: [
        {
          title: "Tweet ID",
          name: "tweetId",
          type: "string",
        },
      ],
    },


    {
      title: 'ILETISIM',
      name: 'contact',
      type: 'document',
      fields: [
        {
          title: 'Ad Soyad',
          name: 'nameSurname',
          type: 'string'
        },
        {
          title: 'E-mail',
          name: 'email',
          type: 'string'
        },
        {
          title: 'Telefon',
          name: 'phone',
          type: 'string'
        },
        {
          title: 'Mesaj',
          name: 'message',
          type: 'string'
        }
      ]
    }

  ],
};
