import Hero from "../components/Hero";
import ChoiceHero from "../components/ChoiceHero";
import Jobs from "../screen/Jobs";
import GetAllJobs from "../screen/GetAllJobs";

const Home = () => {
  return (
    <>
      <Hero />
      <ChoiceHero />
      <Jobs isHome={true} />
      <GetAllJobs />
    </>
  );
};

export default Home;
