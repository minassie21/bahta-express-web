import React, { useEffect, useState } from "react";
import { getRelatedBlogs } from "@/apis/blog";
import { useTags } from "@/apis/tag";
import { Link, useParams } from "react-router-dom";

const getInitials = (name?: string) => {
  if (!name) return "";
  const parts = name.trim().split(" ");
  const first = parts[0]?.[0] || "";
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] : "";
  return (first + last).toUpperCase();
};

function BlogSidebar({ blog, blogTags }: { blog: any; blogTags: any }) {
  const [relatedBlogs, setRelatedBlogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const { tags } = useTags();
  const { post_id } = useParams();

  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      try {
        setIsLoading(true);
        const response = await getRelatedBlogs({
          post_id: blog.post_id,
        });
        setRelatedBlogs(response);
      } catch (error) {
        console.error("Failed to fetch related blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // if (blog.post_id) {
    fetchRelatedBlogs();
    // }
  }, [blog.post_id]);
  const filteredBlogs = relatedBlogs.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="bg-white p-4 rounded-lg shadow">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Related Posts */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold border-b pb-2 mb-4">
          Related Posts
        </h2>
        <div className="space-y-5">
          {relatedBlogs.length > 0 ? (
            filteredBlogs.map((post) => (
              <div key={post.blog_id} className="flex gap-4">
                <img
                  src={`${import.meta.env.VITE_API_URL}/public/uploads/images/blog/${post.image_url}`}
                  alt={post.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <p className="text-xs text-gray-500 uppercase">
                    {new Date(post.created_at).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <a
                    href={`/blog/detail/${post.post_id}`}
                    className="text-sm font-semibold text-gray-800 hover:text-orange-600 leading-snug"
                  >
                    {post.title}
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500 text-center ">
              No related posts found.
            </p>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Tags</h3>

        <div className="flex flex-wrap gap-2">
          {Array.isArray(blogTags) &&
            blogTags.map((tag, index) => (
              <a
                href="/blog"
                key={index}
                className="px-3 py-1 text-sm bg-yellow-100 text-gray-700 rounded-full hover:bg-orange-100 hover:text-orange-600 transition-colors duration-200"
              >
                {tag}
              </a>
            ))}
        </div>
      </div>

      {/* Author */}
      <div className="bg-white p-6 rounded-md shadow text-center">
        <div className="w-20 h-20 mx-auto bg-orange-200 text-orange-800 rounded-full flex items-center justify-center text-xl font-bold">
          {getInitials(blog?.author_name)}
        </div>
        <h3 className="mt-3 font-semibold">{blog?.author_name}</h3>
        <p className="text-md text-gray-600 mt-1">
          Hello and welcome! I'm the author of this blog and I’m excited to
          share my insights with you.
        </p>
      </div>
    </div>
  );
}

export default BlogSidebar;
