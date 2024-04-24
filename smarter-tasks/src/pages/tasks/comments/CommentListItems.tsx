import React from "react";
import { useCommentsState } from "../../../context/comment/context";
import { CommentState } from "../../../context/comment/types";
import { MembersState } from "../../../context/members/reducer";
import { useMembersState } from "../../../context/members/context";
import { useTranslate } from "../../../context/translate";

const CommentListItems = () => {
  const state: CommentState = useCommentsState();
  const memberState: MembersState | undefined = useMembersState();
  const { members }: any = memberState;
  const { comments, isLoading, isError, errorMessage } = state;
  const {t, i18n:{changeLanguage, language}} = useTranslate();
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }
  const findOwner = (id: number) => {
    const member = members.find((member: any) => member.id === id);
    if (member) return member.name;
    return "unknown";
  };

  return (
    <>
      <div></div>
      {comments.map((comment: any) => (
        <div
          key={comment.id}
          className="comment block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {comment.description}
          </h5>
          by: {findOwner(comment.owner)} at{" "}
          {new Date(comment.createdAt).toLocaleString((language=="en"? "en-US":"es-ES"))}
        </div>
      ))}
    </>
  );
};
export default CommentListItems;
