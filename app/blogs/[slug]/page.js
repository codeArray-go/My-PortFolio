import { notFound } from "next/navigation";

const BlogSlug = async ({ params }) => {
  const { slug } = await params;

  if (!slug) notFound();

  const formattedSlug = slug.replace(/_/g, " ");

  return (
    <section className="p-10 text-white">
      <h1 className="text-3xl font-bold Nunito">{formattedSlug}</h1>
      <p className="text-gray-300 Poppins">
        This is the blog page for {formattedSlug}.
      </p>
    </section>
  );
};

export default BlogSlug;
