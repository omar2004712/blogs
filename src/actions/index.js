/* eslint-disable import/prefer-default-export */
import jsonPlaceholder from '../apis/jsonPlaceholder';

// eslint-disable-next-line arrow-body-style
export const fetchPosts = async (dispatch) => async () => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({
    type: 'FETCH_POST',
    payload: response,
  });
};
