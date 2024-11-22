import {createClient} from "@sanity/client";

const client = createClient({
  projectId: 'dlfhhebo',
  dataset: 'ekdag',
  useCdn: false,
  apiVersion: '2023-01-01',
  token: 'skgZeQLgv8zRWcHfbd4lWZniT0niI9KuexKaBa1gS6z0U7goxFFWWJUwDSpdSSb87Goves4mlWRSR5nIasfdnedUDA5vGzYmyVnXKnonrL3iXiRhBprUxcZj6ZJ0iPI3viyg0lRVePkiKkuhtMEXU5rgj7OueLgWRzhDCEGE82FSIVwe9TJ0',
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nameSurname, email, message, phone } = req.body;

    try {
      const result = await client.create({
        _type: 'contact',
        nameSurname,
        email,
        phone,
        message,
      });

      res.status(200).json({ success: true, result });
    } catch (error) {
      res.status(500).json({ success: false, error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}