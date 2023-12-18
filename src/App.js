import "./App.css";
import TopHeader from "./Components/top-header/TopHeader";
import Header from "./Components/header/Header";
import Banner from "./Components/banner/Banner";
import AdSection from "./Components/google-ad-section/AdSection";
import NewsSection from "./Components/news-section/NewsSection";
import FashionStyle from "./Components/fashion-and-style/FashionStyle";
import PoliticleWorld from "./Components/political-and-world/PoliticleWorld";
import EntertainmentFun from "./Components/entertainment-and-fun/EntertainmentFun";
import PaginationRounded from "./Components/pagination/Pagination";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div>
      <TopHeader />
      <Header />
      <Banner />
      <AdSection />
      <NewsSection />
      <FashionStyle />
      <PoliticleWorld />
      <EntertainmentFun />
      <PaginationRounded />
      <Footer />
    </div>
  );
}

export default App;
