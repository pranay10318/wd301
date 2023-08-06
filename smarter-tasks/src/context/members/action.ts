import { API_ENDPOINT } from "../../config/constants";

// these actions are called from any other child components with a argument dispatch in it

export const fetchMembers = async (dispatch: any) => {
  const token = localStorage.getItem("authToken") ?? "";

  try {
    dispatch({ type: "FETCH_MEMBERS_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    dispatch({ type: "FETCH_MEMBERS_SUCCESS", payload: data });
  } catch (error) {
    console.log("Error fetching Members:", error);
    dispatch({
      type: "FETCH_MEMBERS_FAILURE",
      payload: "Unable to load Members",
    });
  }
};

export const addMember = async (dispatch: any, args: any) => {
  try {
    const token = localStorage.getItem("authToken") ?? "";
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      // Next, I'll pass the `args` here
      body: JSON.stringify(args),
    });
    if (!response.ok) {
      throw new Error("Failed to create member");
    }
    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message };
    }

    dispatch({ type: "ADD_MEMBER_SUCCESS", payload: data.user });

    return { ok: true };
  } catch (error) {
    console.error("Operation failed:", error);
    return { ok: false, error };
  }
};

export const deleteMember = async (dispatch: any, id: number) => {
  try {
    const token = localStorage.getItem("authToken") ?? "";
    const response = await fetch(`${API_ENDPOINT}/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to delete member");
    }
    dispatch({ type: "DELETE_MEMBER_SUCCESS", payload: id });
    return { ok: true };
  } catch (error) {
    console.log("delete unsuccessfull");
    return { ok: false, error };
  }
};
