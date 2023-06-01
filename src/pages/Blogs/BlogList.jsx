import BlogItem from "./BlogItem";

function BlogList({ blogs }) {
  return (
    <>
      <section className="flex flex-wrap justify-center ">
        {blogs.map((blog) => (
          <div key={blog.id} className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <BlogItem blog={blog} />
          </div>
        ))}
      </section>
    </>
  );
}

export default BlogList;
