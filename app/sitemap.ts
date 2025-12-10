import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.dulceslachacra.com",
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: "https://www.dulceslachacra.com/productos",
      lastModified: new Date(),
      priority: 0.9,
    },
   
  ];
}
