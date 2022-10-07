import _ from "lodash";
import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPostsAndUsers = () => {
    return async (dispatch, getState) => {
        await dispatch(fetchPosts());
        // use lodash to get unique list of userIds from state.posts
        const userIds = _.uniq(_.map(getState().posts, "userId"));

        for (const id of userIds) {
            dispatch(fetchUser(id));
        }
    };
};

// fetchPosts function returns manual async dispatch function
export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response.data });
};
/* -------- Long Form ------------------------------
    export const fetchPosts = () => {
        return async function (dispatch, getState) {

            dispatch({ type: "FETCH_POSTS", payload: response });
        };
    };
------------------------------------------------- */

export const fetchUser = (id) => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get(`/users/${id}`);

        dispatch({ type: "FETCH_USER", payload: response.data /* .name */ });
    };
};

/* -------- Lodash memoize -------------------------
export const fetchUser = (id) => {
    return (dispatch) => {
        _fetchUser(id, dispatch);
    };
};

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: "FETCH_USER", payload: response.data});
});
------------------------------------------------- */
