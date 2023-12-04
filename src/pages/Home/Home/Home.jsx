import About from "../../../components/home/About";
import Banner from "../../../components/home/Banner";
import Blog from "../../../components/home/Blog";
import { Challange } from "../../../components/home/Challange";
import Connect from "../../../components/home/Connect";
import Faq from "../../../components/home/Faq";
import { Feature } from "../../../components/home/Feature";
import States from "../../../components/home/States";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <About></About>
      <Challange></Challange>
      <Connect></Connect>
      <Blog></Blog>
      <Feature></Feature>
      <States></States>
      <Faq></Faq>
    </>
  );
};

export default Home;
