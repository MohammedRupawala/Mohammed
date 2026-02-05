import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  // Get all posts
  // ...existing code...
  const allPosts = require("@/utils/utils").getPosts(["src", "app", "blog", "posts"]);

  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
        {blog.title}
      </Heading>
      <Column fillWidth flex={1} gap="40">
        {allPosts.length > 0 ? (
          <>
            <Posts range={[1, 1]} thumbnail />
            <Posts range={[2, 3]} columns="2" thumbnail direction="column" />
            <Heading as="h2" variant="heading-strong-xl" marginLeft="l">
              Earlier posts
            </Heading>
            <Posts range={[4]} columns="2" />
          </>
        ) : (
          <div style={{ textAlign: "center", margin: "64px 0", color: "#888", fontSize: "1.25rem" }}>
            Watch for upcoming blog posts!
          </div>
        )}
      </Column>
    </Column>
  );
}
