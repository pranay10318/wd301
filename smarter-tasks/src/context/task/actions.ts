// Import required type annotations
import { API_ENDPOINT } from "../../config/constants";
import {
  ProjectData,
  TaskDetails,
  TaskDetailsPayload,
  TaskListAvailableAction,
  TasksDispatch,
} from "./types";

// The function will take a dispatch as first argument, which can be used to send an action to `reducer` and update the state accordingly
export const addTask = async (
  dispatch: TasksDispatch,
  projectID: string,
  task: TaskDetailsPayload
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: TaskListAvailableAction.CREATE_TASK_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(task),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create task");
    }
    dispatch({ type: TaskListAvailableAction.CREATE_TASK_SUCCESS });
    refreshTasks(dispatch, projectID);
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: TaskListAvailableAction.CREATE_TASK_FAILURE,
      payload: "Unable to create task",
    });
  }
};
export const reorderTasks = (
  dispatch: TasksDispatch,
  newState: ProjectData
) => {
  dispatch({ type: TaskListAvailableAction.REORDER_TASKS, payload: newState });
};

export const refreshTasks = async (
  dispatch: TasksDispatch,
  projectID: string
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: TaskListAvailableAction.FETCH_TASKS_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }

    // extract the response body as JSON data
    const data = await response.json();
    dispatch({
      type: TaskListAvailableAction.FETCH_TASKS_SUCCESS,
      payload: data,
    });
    console.dir(data);
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: TaskListAvailableAction.FETCH_TASKS_FAILURE,
      payload: "Unable to load tasks",
    });
  }
};

export const deleteTask = async (
  dispatch: TasksDispatch,
  projectID: string,
  task: TaskDetails
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: TaskListAvailableAction.DELETE_TASKS_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${task.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(task),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete task");
    }
    dispatch({ type: TaskListAvailableAction.DELETE_TASKS_SUCCESS });
    refreshTasks(dispatch, projectID);
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: TaskListAvailableAction.DELETE_TASKS_FAILURE,
      payload: "Unable to delete task",
    });
  }
};

export const updateTask = async (
  dispatch: TasksDispatch,
  projectID: string,
  task: TaskDetails
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    // Display loading status
    dispatch({ type: TaskListAvailableAction.UPDATE_TASK_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${task.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(task),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update task");
    }
    // Display success and refresh the tasks
    dispatch({ type: TaskListAvailableAction.UPDATE_TASK_SUCCESS });
    refreshTasks(dispatch, projectID);
  } catch (error) {
    console.error("Operation failed:", error);
    // Display error status
    dispatch({
      type: TaskListAvailableAction.UPDATE_TASK_FAILURE,
      payload: "Unable to update task",
    });
  }
};
