import jsonPlaceholder from "../api/jsonPlaceholder";

// fetchPosts function returns manual async dispatch function
export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response });
};

/* -------- Long Form ------------------------------
    export const fetchPosts = () => {
        return async function (dispatch, getState) {
            const response = await jsonPlaceholder.get("/posts");

            dispatch({ type: "FETCH_POSTS", payload: response });
        };
    };
------------------------------------------------- */
