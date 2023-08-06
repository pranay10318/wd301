// src/pages/members/MemberListItems.tsx
import React from "react";
import {
  useMembersDispatch,
  useMembersState,
} from "../../context/members/context";
import trash from "../../assets/images/trash.png";
import { deleteMember } from "../../context/members/action";
export default function MemberListItems() {
  let state: any = useMembersState();

  const { members, isLoading, isError, errorMessage } = state;
  console.log(members);
  const dispatchMembers = useMembersDispatch();

  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>{errorMessage}</span>;
  }
  const handleOnClick = async (id: number) => {
    // console.log('deleting member with id: ', id);
    // const response =
    await deleteMember(dispatchMembers, id);
    // console.log(response);
  };

  return (
    <>
      {members.map((member: any) => (
        <div
          key={member.id}
          className="member block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5
            id="name"
            className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white"
          >
            {member.name}
          </h5>
          <h5
            id="email"
            className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white"
          >
            {member.email}
          </h5>
          <button
            onClick={() => {
              handleOnClick(member.id);
            }}
          >
            <img
              src={trash}
              style={{
                width: "10%",
                height: "auto",
              }}
              alt="Delete"
              className="trash"
              id="new-member-btn"
            />
          </button>
        </div>
      ))}
    </>
  );
}
