import {createClient} from "@sanity/client";

const client = createClient({
  projectId: 'dlfhhebo',
  dataset: 'ekdag',
  useCdn: false,
  apiVersion: '2023-01-01',
  token: 'skgZeQLgv8zRWcHfbd4lWZniT0niI9KuexKaBa1gS6z0U7goxFFWWJUwDSpdSSb87Goves4mlWRSR5nIasfdnedUDA5vGzYmyVnXKnonrL3iXiRhBprUxcZj6ZJ0iPI3viyg0lRVePkiKkuhtMEXU5rgj7OueLgWRzhDCEGE82FSIVwe9TJ0',
});

export default client;