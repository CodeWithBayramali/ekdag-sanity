import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [


    {
      title: "ANASAYFA",
      name: "home",
      type: "document",
      fields: [
        {
          title: "Slider Resimler *(1000x1000)",
          name: "sliderImages",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  title: "Resim",
                  name: "image",
                  type: "image",
                },
                {
                  title: "Bağlantı (Haber)",
                  name: "link",
                  type: "reference",
                  to: [{ type: "news" }], // Haberler şemasıyla referans
                },
              ],
            },
          ],
        },
        {
          title: "Mobil Slider Resimler",
          name: "sliderResponsiveImages",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  title: "Resim",
                  name: "image",
                  type: "image",
                },
                {
                  title: "Bağlantı (Haber)",
                  name: "link",
                  type: "reference",
                  to: [{ type: "news" }], // Haberler şemasıyla referans
                },
              ],
            },
          ],
        },
      ],
    },

    {
      title: 'ANASAYFA TESİSLERİ',
      name: "homePageTesis",
      type: "document",
      fields: [
        {
          title: "Tesis Adı",
          name: "tesisName",
          type: "string"
        },
        {
          title: "Slug",
          name: "slug",
          type: "slug",
          options: {
            source: 'tesisName',
            maxLength: 96
          }
        },
        {
          title: "Tesis Kart Resmi",
          name: "tesisCardImage",
          type: "image"
        },
        {
          title: "Tesis Detay Resmi",
          name: "tesisDetailImage",
          type: "image"
        },
        {
          title: "Tesis Detay Yazısı",
          name: "tesisDetail",
          type: "array",
          of: [{type: "block"}]
        },
        {
          title: "Resimler",
          name: "tesisImages",
          type: "array",
          of: [{type:"image"}]
        }
      ]
    },

    {
      title: "FEATURES TAB",
      name: "featuresTab",
      type: "document",
      fields: [
        {
          title: "Başlık",
          name: "title",
          type: "string"
        },
        {
          title: "Açıklama",
          name: "description",
          type: "string"
        },
        {
          title: "Resim 1",
          name: "img1",
          type: "image"
        },
        {
          title: "Resim 2",
          name: "img2",
          type: "image"
        },
      ]
    },


    {
      title: "SOSYAL TESİSLER",
      name: "tesisler",
      type: "document",
      fields: [
          {
            title: 'Tesis Adı',
            name: 'tesisName',
            type: 'string'
          },
          {
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
              source: 'tesisName',
              maxLength: 96
            }
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
          title: "Slug",
          name: "slug",
          type: "slug",
          options: {
            source: 'newsTitle',
            maxLength: 96
          }
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
        {
          title: "Oluşturma Tarihi",
          name: "createdAt",
          type: "date",
          readOnly: true
        }
      ],
      initialValue: () => ({
        createdAt: new Date().toISOString().split('T')[0]
      })
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
          title: "Slug",
          name: "slug",
          type: "slug",
          options: {
            source: 'blogTitle',
            maxLength: 96
          }
        },
        {
          title: "Alt Başlık (Opsiyonel)",
          name: "subTitle",
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
        {
          title: "Oluşturma Tarihi",
          name: "createdAt",
          type: "date",
          readOnly: true
        }
      ],
      initialValue: () => ({
        createdAt: new Date().toISOString().split('T')[0]
      })
    },


    {
      title: "TWITTER",
      name: "twitter",
      type: "document",
      fields: [
        {
          title: "Tweet Title",
          name: "tweetTitle",
          type: "string"
        },
        {
          title: "Tweet ID",
          name: "tweetId",
          type: "string",
        },
      ],
    },

    {
      title: 'GALERİ',
      name: 'gallery',
      type: 'document',
      fields: [
        {
          title: 'Galeri Resimleri',
          name: 'galleryImages',
          type: 'array',
          of: [{type: 'image'}]
        }
      ]
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
