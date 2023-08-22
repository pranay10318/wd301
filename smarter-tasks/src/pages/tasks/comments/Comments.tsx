import React, { Suspense, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useCommentsDispatch } from "../../../context/comment/context";
import { addComment, fetchComments } from "../../../context/comment/actions";
import { CommentListItems } from "./CommentListItems";
import { Comment } from "../../../context/comment/types";
import ErrorBoundary from "../../../components/ErrorBoundary";

export const Comments = () => {
  const CommentsDispatch = useCommentsDispatch();
  const { projectID, taskID } = useParams();
  useEffect(() => {
    fetchComments(CommentsDispatch, projectID!, taskID!);
  }, [CommentsDispatch, projectID, taskID]);
  console.log(useParams());

  type Inputs = {
    description: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { description } = data; //destructuring form data
    console.log("comment is: ", description);
    if (!description.trim()) {
      return;
    }
    const comment: Comment = {
      description: description,
    };
    try {
      console.log("project id: ", projectID, " taskID: ", taskID);
      addComment(CommentsDispatch, projectID!, taskID!, comment);
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {/* {error && <span>{error}</span>} //here in we can use error stateoutside the form*/}
          <label className="block text-gray-700 font-semibold mb-2">
            Comment:
          </label>
          <input
            type="text"
            id="commentBox"
            {...register("description", { required: true })}
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
          />
          {errors.description && <span>This field is required</span>}
        </div>
        <button
          type="submit"
          id="addCommentBtn"
          className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4"
        >
          Comment
        </button>
      </form>
      {/* <button onClick={handleSignup}>Don't have an account?</button> */}
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <CommentListItems />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
