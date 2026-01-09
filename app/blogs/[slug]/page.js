import { notFound } from "next/navigation";
import blogData from "@/data/blog.json";
import Image from "next/image";

const BlogSlug = async ({ params }) => {
  const { slug } = await params;
  console.log(slug);

  const currentPost = blogData.find(
    (t) => t.title.toLowerCase() === slug.toLowerCase()
  );

  if (!currentPost) notFound();

  return (
    <section
      className="
      w-full 
      max-w-4xl 
      mx-auto 
      px-4 sm:px-6 md:px-10 
      py-8 sm:py-10 
      text-white 
      Poppins
    "
    >
      {/* Title */}
      <h1
        className="
        text-xl 
        sm:text-2xl 
        md:text-3xl 
        font-black 
        uppercase 
        mb-8 
        flex 
        flex-wrap 
        items-center 
        gap-2
      "
      >
        <Image
          height={30}
          width={30}
          alt={`${currentPost.title} logo`}
          src={`${process.env.NEXT_PUBLIC_URL_LOGO}/${currentPost.src}`}
          className="shrink-0"
        />
        {currentPost.title}:-
      </h1>

      {/* Introduction */}
      <div className="mb-6">
        <h2 className="font-bold text-lg sm:text-xl mb-2">
          {currentPost.IntroHead}:-
        </h2>
        <p className="text-sm sm:text-[15px] leading-relaxed text-gray-200">
          {currentPost.IntroDesc}
        </p>
      </div>

      {/* What is */}
      <div className="mb-6">
        <h2 className="font-bold text-lg sm:text-xl mb-2">
          {currentPost.WhatIsHead}:-
        </h2>
        <p className="text-sm sm:text-[15px] leading-relaxed text-gray-200">
          {currentPost.WhatIsDesc}
        </p>
      </div>

      {/* History */}
      <div>
        <h2 className="font-bold text-lg sm:text-xl mb-2">
          {currentPost.HistoryHead}:-
        </h2>
        <p className="text-sm sm:text-[15px] leading-relaxed text-gray-200">
          {currentPost.HistoryDesc}
        </p>
      </div>
    </section>
  );
};

export default BlogSlug;
