import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div className="bg-cus-bg-dark-white w-screen h-full scroll-smooth">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
