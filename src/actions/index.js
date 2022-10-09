/* eslint-disable import/prefer-default-export */
import jsonPlaceholder from '../apis/jsonPlaceholder';

// eslint-disable-next-line arrow-body-style
export const fetchPosts = () => async (dispatch) => {
  const { data } = await jsonPlaceholder.get('/posts');

  dispatch({
    type: 'FETCH_POST',
    payload: data,
  });
};
