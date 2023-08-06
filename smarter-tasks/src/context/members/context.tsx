// src/context/members/context.tsx

// This is the place where we use useReducer => takes reducer func and initial state as args / ip
// and for using the state and dispatch entire the app, wee need to do create contexts for them
// and here in we need to share the values of state and dispatch for other components   so value will be as like as that

import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState, MembersState, MembersActions } from "./reducer";

type MembersDispatch = React.Dispatch<MembersActions>;

const MembersStateContext = createContext<MembersState | undefined>(undefined);
const MembersDispatchContext = createContext<MembersDispatch | undefined>(
  undefined
);

export const MembersProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MembersStateContext.Provider value={state}>
      <MembersDispatchContext.Provider value={dispatch}>
        {children}
      </MembersDispatchContext.Provider>
    </MembersStateContext.Provider>
  );
};
export const useMembersState = () => useContext(MembersStateContext);
export const useMembersDispatch = () => useContext(MembersDispatchContext);
