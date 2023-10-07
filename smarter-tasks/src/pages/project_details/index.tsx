import React, {Suspense} from "react";
import ProjectDetails from "./ProjectDetails";
import { Outlet } from "react-router-dom";
import { TasksProvider } from "../../context/task/context";
import {CommentsProvider as CommentProvider } from "../../context/comment/context";
import ErrorBoundary from "../../components/ErrorBoundary.tsx";


const ProjectDetailsIndex: React.FC = () => {
  return (
    <TasksProvider>
      <CommentProvider>
        <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
        <ProjectDetails />
        </Suspense>
      </ErrorBoundary>
        <Outlet />
      </CommentProvider>
    </TasksProvider>
  );
};

export default ProjectDetailsIndex;