import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import "./App.css";
import Categories from "./components/Categories";
import Campaigns from "./components/Campaigns";
import Favorites from "./components/Favorites";
import MobileApp from "./components/MobileApp";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { useWindowWidth } from "@react-hook/window-size";

function App() {
  const windowWidth = useWindowWidth();
  return (
    <>
      <Header></Header>
      {windowWidth <= 768 && <Campaigns></Campaigns>}
      <HeroSection></HeroSection>
      <Categories></Categories>
      {windowWidth > 768 && <Campaigns></Campaigns>}
      <div className="container mx-auto grid gap-y-6 pt-8">
        <Favorites></Favorites>
        <MobileApp></MobileApp>
        <Card></Card>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
