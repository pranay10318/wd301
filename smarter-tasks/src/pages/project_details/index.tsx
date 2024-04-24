import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { TasksProvider } from "../../context/task/context";
import ErrorBoundary from "../../components/ErrorBoundary";
import { useTranslate } from "../../context/translate";
const ProjectDetails = React.lazy(() => import("./ProjectDetails"));

const ProjectDetailsIndex: React.FC = () => {
  const {t} = useTranslate();
  return (
    <TasksProvider>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">{t('Loading')}...</div>}>
          <ProjectDetails />
        </Suspense>
      </ErrorBoundary>
      <Outlet />
    </TasksProvider>
  );
};

export default ProjectDetailsIndex;
