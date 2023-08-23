import React, { Suspense } from "react";
import NewProject from "./NewProject";
import ErrorBoundary from "../../components/ErrorBoundary";
const ProjectList = React.lazy(() => import("./ProjectList"));

const Projects = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700">
          Projects
        </h2>
        <NewProject />
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <ProjectList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Projects;
