// \src\context\members\reducer.ts

// Reducer  is a function which would update state based on dispatched actions.
// takes '''currentState''' and '''dispatchedAction''' as input and returns '''updatedState'''.
// typescript requires the type of state and actions
// state in reducer have only data  NO setter function required
// action i.e. dispatched action would have a type as js object, containing type of dispatch and args like payload
interface Member {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface MembersState {
  members: Member[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export type MembersActions =
  | { type: "FETCH_MEMBERS_REQUEST" }
  | { type: "FETCH_MEMBERS_SUCCESS"; payload: Member[] }
  | { type: "FETCH_MEMBERS_FAILURE"; payload: string }
  | { type: "ADD_MEMBER_SUCCESS"; payload: Member }
  | { type: "DELETE_MEMBER_SUCCESS"; payload: number };

export const initialState: MembersState = {
  members: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const reducer = (
  state: MembersState = initialState,
  action: MembersActions
): MembersState => {
  switch (action.type) {
    case "ADD_MEMBER_SUCCESS":
      return { ...state, members: [...state.members, action.payload] };
    case "FETCH_MEMBERS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_MEMBERS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        members: action.payload,
      };
    case "FETCH_MEMBERS_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case "DELETE_MEMBER_SUCCESS":
      const deletedMemberId = action.payload;
      const updatedMembers = state.members.filter(
        (member) => member.id !== deletedMemberId
      );
      return { ...state, members: updatedMembers };
    default:
      return initialState;
  }
};
