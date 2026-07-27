import fs from "fs";
import path from "path";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  try {
    // Check Analytical Chemistry
    const analyticalPath = path.join(
      process.cwd(),
      "public",
      "data",
      "analyticalChemistryTraining.json"
    );
    let course = null;

    if (fs.existsSync(analyticalPath)) {
      const analyticalData = JSON.parse(
        fs.readFileSync(analyticalPath, "utf8")
      );
      course = analyticalData.courses.find((c) => c.slug === slug);
    }

    // Check Lubrication if not found
    if (!course) {
      const lubricationPath = path.join(
        process.cwd(),
        "public",
        "data",
        "lubricationTraining.json"
      );
      if (fs.existsSync(lubricationPath)) {
        const lubricationData = JSON.parse(
          fs.readFileSync(lubricationPath, "utf8")
        );
        course = lubricationData.courses.find((c) => c.slug === slug);
      }
    }

    if (course) {
      return {
        title: course.title,
        description: course.description || course.subtitle || course.title,
        openGraph: {
          title: course.title,
          description: course.description || course.subtitle || course.title,
          url: `/training/${slug}`,
          images: course.image ? [course.image] : [],
        },
        alternates: {
          canonical: `/training/${slug}`,
        },
      };
    }
  } catch (error) {
    console.error("Error generating metadata for training slug:", error);
  }

  return {
    title: "Course Not Found",
  };
}

export default function TrainingSlugLayout({ children }) {
  return children;
}
