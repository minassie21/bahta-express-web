import { getBlogDetail } from "@/apis/blog";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MarkdownIt from "markdown-it";
import { useCategories } from "@/apis/category";
import { useTags } from "@/apis/tag";
import BlogSidebar from "@/components/BlogSidebar";

function BlogDetailPage() {
  const { postId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState<any>([]);
  const mdParser = new MarkdownIt();
  const { categories } = useCategories();
  const [blog, setBlog] = useState<any>({});

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        setIsLoading(true);
        const response = await getBlogDetail(postId);
        setBlog(response);
      } catch (error) {
        console.error("Failed to fetch blog detail:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogDetail();
  }, [postId]);

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <svg
            className="animate-spin h-10 w-10 text-orange-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          <p className="text-lg text-gray-600">Loading blog details...</p>
        </div>
      </div>
    );
  }

  // No blog found
  if (!blog || !blog.blog_id) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-600">Oops! 😕</h1>
          <p className="text-lg text-gray-700">No blog found for this post.</p>
          <a
            href="/media"
            className="inline-block mt-4 px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition"
          >
            Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20">
      <div className="lg:col-span-2">
        <img
          src={`${import.meta.env.VITE_API_URL}/public/uploads/images/blog/${blog?.image_url}`}
          alt="Blog Header"
          className="rounded-lg shadow-lg w-full object-cover"
        />
        <div className="text-sm text-gray-600 mt-4">
          <ul className="flex flex-wrap items-center gap-4">
            <li className="flex items-center gap-1">
              <i className="bx bx-time text-lg text-orange-600"></i>
              {new Date(blog?.created_at).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </li>
            <li className="flex items-center gap-1">
              <i className="bx bx-user text-lg text-orange-600"></i>
              <a href="/blog" className="hover:underline text-orange-800">
                {blog?.author_name}
              </a>
            </li>
          </ul>
        </div>
        <h1 className="mt-6 text-3xl font-bold text-gray-900">{blog?.title}</h1>
        {blog?.slug && (
          <h6 className="mt-6 text-1xl font-bold text-gray-600">
            {blog?.slug}
          </h6>
        )}
        <p
          className="mt-4 text-lg text-gray-700"
          dangerouslySetInnerHTML={{
            __html: mdParser.render(blog?.content || ""),
          }}
        />
        <div className="mt-6 flex flex-wrap gap-3">
          {categories.slice(0, 4).map((cat) => {
            const isActive = cat.category_id === blog?.category_id;
            return (
              <div
                key={cat.category_id}
                className={`text-sm font-medium px-3 py-1 rounded-full ${
                  isActive
                    ? "bg-green-100 text-green-800"
                    : "bg-orange-100 text-orange-800"
                }`}
              >
                {cat?.category_name}
              </div>
            );
          })}
        </div>
      </div>

      <BlogSidebar blog={blog} blogTags={blog?.tags} />
    </div>
  );
}

export default BlogDetailPage;
