import fs from "fs";
import path from "path";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  try {
    const blogsPath = path.join(process.cwd(), "public", "data", "blogs.json");
    const blogsData = JSON.parse(fs.readFileSync(blogsPath, "utf8"));
    const blog = blogsData.blogs.find((b) => b.slug === slug);

    if (blog) {
      return {
        title: blog.title,
        description: blog.excerpt || blog.title,
        openGraph: {
          title: blog.title,
          description: blog.excerpt || blog.title,
          url: `/blogs/${slug}`,
          type: "article",
          images: [blog.image],
        },
        alternates: {
          canonical: `/blogs/${slug}`,
        },
      };
    }
  } catch (error) {
    console.error("Error generating metadata for blog slug:", error);
  }

  return {
    title: "Blog Not Found",
  };
}

export default function BlogSlugLayout({ children }) {
  return children;
}
