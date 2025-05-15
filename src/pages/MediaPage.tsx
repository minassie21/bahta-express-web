import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAllBlogs } from "@/apis/blog";
// import { blogs } from "@/constants/blogs";

export default function MediaPage() {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getAllBlogs();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            Media & News
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600"
          >
            Stay updated with the latest news, articles, and press releases
            about Bahta Express and the logistics industry in Ethiopia.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {blogs.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              style={{
                background: "linear-gradient(to bottom, white, #fafafa)",
              }}
            >
              <div className="absolute inset-0 border-2 border-orange-200 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 z-0 pointer-events-none"></div>

              <div className="relative">
                <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs px-3 py-1 rounded-bl-lg z-10">
                  {new Date(post.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
                <div
                  className="h-60 bg-gray-200 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  style={{
                    backgroundImage: `url(${import.meta.env.VITE_API_URL}/public/uploads/images/blog/${post.image_url})`,
                  }}
                />
              </div>

              <div className="p-6 relative z-10">
                <h2 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors duration-200">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-5 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="pt-2 border-t border-gray-100">
                  <a
                    href={`/blog/detail/${post.post_id}`}
                    rel="noreferrer"
                    className="text-orange-500 hover:text-orange-600 inline-flex items-center font-medium transition-colors duration-200"
                  >
                    Read more
                    <svg
                      className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-3xl mx-auto mt-16 text-center bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          style={{
            background: "linear-gradient(to bottom right, white, #fafafa)",
          }}
        >
          <h2 className="text-2xl font-bold mb-4">Press Inquiries</h2>
          <p className="text-gray-600 mb-6">
            For media inquiries, interview requests, or additional information
            about Bahta Express, please contact our media relations team.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-orange-600 hover:bg-orange-700 transition-colors duration-200 shadow-sm hover:shadow"
          >
            Contact Media Relations
          </a>
        </motion.div>
      </div>
    </div>
  );
}
