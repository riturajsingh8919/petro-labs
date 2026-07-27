import fs from 'fs';
import path from 'path';

export default async function sitemap() {
  const baseUrl = "https://petrolabsindia.com";

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/training-academy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/training`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  try {
    // 1. Add Blogs
    const blogsPath = path.join(process.cwd(), "public", "data", "blogs.json");
    if (fs.existsSync(blogsPath)) {
      const blogsData = JSON.parse(fs.readFileSync(blogsPath, "utf8"));
      if (blogsData && blogsData.blogs) {
        blogsData.blogs.forEach((blog) => {
          routes.push({
            url: `${baseUrl}/blogs/${blog.slug}`,
            lastModified: new Date(blog.publishDate || Date.now()),
            changeFrequency: "monthly",
            priority: 0.6,
          });
        });
      }
    }

    // 2. Add Analytical Chemistry Training Courses
    const analyticalPath = path.join(
      process.cwd(),
      "public",
      "data",
      "analyticalChemistryTraining.json"
    );
    if (fs.existsSync(analyticalPath)) {
      const analyticalData = JSON.parse(fs.readFileSync(analyticalPath, "utf8"));
      if (analyticalData && analyticalData.courses) {
        analyticalData.courses.forEach((course) => {
          routes.push({
            url: `${baseUrl}/training/${course.slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
          });
        });
      }
    }

    // 3. Add Lubrication Training Courses
    const lubricationPath = path.join(
      process.cwd(),
      "public",
      "data",
      "lubricationTraining.json"
    );
    if (fs.existsSync(lubricationPath)) {
      const lubricationData = JSON.parse(fs.readFileSync(lubricationPath, "utf8"));
      if (lubricationData && lubricationData.courses) {
        lubricationData.courses.forEach((course) => {
          routes.push({
            url: `${baseUrl}/training/${course.slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
          });
        });
      }
    }
  } catch (error) {
    console.error("Error generating dynamic sitemap routes:", error);
  }

  return routes;
}
