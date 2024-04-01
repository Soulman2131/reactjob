import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Jobs from "./screen/Jobs";
import AddJob from "./screen/AddJob";
import JobProfile from "./screen/JobProfile";
import UpdateJob from "./screen/UpdateJob";

const App = () => {
  // JOB LOADER
  const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="add-job" element={<AddJob />} />
        <Route path="jobs/:id" element={<JobProfile />} loader={jobLoader} />
        <Route path="edit-job/:id" element={<UpdateJob />} loader={jobLoader} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
