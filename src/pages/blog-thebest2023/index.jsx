import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header/TheBest2023";
import MainDetail from "../../components/Blog-Thebest2023"

const BlogTheBest = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('homepage')
  }, [])
  return (
    <MainLayout>
      <PageHeader
        title="สไตล์ยอดนิยม 2023"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "Thebest2023", url: "/blog-thebest2023" },
        ]}
        image="/assets/img/blog/mainThebest2023.png"
      />
      {/* <PostDetails /> */}
      <MainDetail />
    </MainLayout>
  );
};

export default BlogTheBest;
