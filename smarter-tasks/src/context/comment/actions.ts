import { API_ENDPOINT } from "../../config/constants";
import { CommentAvailableAction, CommentsDispatch, Comment } from "./types";
// The function will take a dispatch as first argument, which can be used to send an action to `reducer` and update the state accordingly

export let fetchComments = async (
  dispatch: CommentsDispatch,
  projectID: string,
  taskID: string
) => {
  const token = localStorage.getItem("authToken") ?? "";

  function compi(a: any, b: any) {
    const timestampA = new Date(a.createdAt).getTime();
    const timestampB = new Date(b.createdAt).getTime();

    if (timestampA > timestampB) {
      return -1;
    } else if (timestampA < timestampB) {
      return 1;
    } else {
      return 0;
    }
  }
  try {
    dispatch({ type: CommentAvailableAction.FETCH_COMMENTS_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    let comments = await response.json();
    comments = comments.sort(compi);
    dispatch({
      type: CommentAvailableAction.FETCH_COMMENTS_SUCCESS,
      payload: comments,
    });
  } catch (error) {
    console.log("Error fetching comments:", error);
    dispatch({
      type: CommentAvailableAction.FETCH_COMMENTS_FAILURE,
      payload: "Unable to load comments",
    });
  }
};
export const addComment = async (
  dispatch: CommentsDispatch,
  project_id: string,
  task_id: string,
  comment: Comment
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: CommentAvailableAction.CREATE_COMMENT_REQUEST });
    console.log(project_id, " and ", task_id, "are being fetched...");
    const response = await fetch(
      `${API_ENDPOINT}/projects/${project_id}/tasks/${task_id}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(comment),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create comment");
    }
    const payload = await response.json();
    dispatch({
      type: CommentAvailableAction.CREATE_COMMENT_SUCCESS,
      payload: payload,
    });
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentAvailableAction.CREATE_COMMENT_FAILURE,
      payload: "Unable to create comment",
    });
  }
};
