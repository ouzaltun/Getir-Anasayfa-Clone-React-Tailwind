import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import "./App.css";
import Categories from "./components/Categories";
import Campaigns from "./components/Campaigns";
import Favorites from "./components/Favorites";
import MobileApp from "./components/MobileApp";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <Categories></Categories>
      <Campaigns></Campaigns>
      <Favorites></Favorites>
      <MobileApp></MobileApp>
      <Card></Card>
      <Footer></Footer>
    </>
  );
}

export default App;
