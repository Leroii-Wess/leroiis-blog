import Articles from "../components/Articles";
import Blogs from "../components/Blogs";
import Hero from "../components/Hero";
import PageNav from "../components/PageNav";

function Home() {
  return (
    <main>
      <PageNav />
      <Hero />
      <Articles />
      <Blogs />
    </main>
  );
}

export default Home;
