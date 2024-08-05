import Post from "../../components/feedArea/Post";
import LeftProfile from "../../components/profiles/LeftProfile";
import Recent from "../../components/recents/Recent";
import AddFeed from "../../components/rightFeedFooter/AddFeed";
import Footer from "../../components/rightFeedFooter/Footer";
import Status from "../../components/status/Status";

const Home = () => {
  return (
    <main className="grid grid-cols-12 w-ful mx-auto px-[5%] lg:px-[10%] mt-6 gap-6">
      <section className="hidden sm:block sm:col-span-4 lg-1:col-span-3 rounded-lg">
        <LeftProfile />
        <Recent />
      </section>
      <section className="col-span-12 sm:col-span-8 lg-1:col-span-6 rounded-lg w-full">
        <Status />
        <Post />
      </section>
      <section className="col-span-3 rounded-lg min-h-screen hidden lg-1:block">
        <AddFeed />
        <Footer />
      </section>
    </main>
  );
};

export default Home;
