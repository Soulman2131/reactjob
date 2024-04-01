import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Job from "../components/Job";

const Jobs = ({ isHome }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // USE EFFECT
  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Erreur sur le fetch des données", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [isHome]);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-yellow-500 mb-6 text-center">
          {isHome ? "Les plus récents" : "Les offres d'emploi"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <Job key={index} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Jobs;