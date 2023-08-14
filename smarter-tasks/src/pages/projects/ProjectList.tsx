import React, { useEffect } from "react";
import { fetchProjects } from "../../context/projects/actions";

import { useProjectsDispatch } from "../../context/projects/context";

// I'll import the ProjectListItems component from the same folder.
import ProjectListItems from "./ProjectListItems";
const ProjectList: React.FC = () => {
  const dispatchProjects = useProjectsDispatch();

  useEffect(() => {
    fetchProjects(dispatchProjects);
  }, []);
  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      {/*To keep this file clean, I'll move all the logic to access the projects 
       from our app-state, to a new component ProjectListItems */}
      <ProjectListItems />
    </div>
  );
};
export default ProjectList;
