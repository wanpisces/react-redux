export default function reducer(state = {
  fetching: false,
  fetched: false,
  posts: "",
  error: null,
}, action) {
  switch (action.type) {
    case 'FETCH_POSTS_PENDING':
      {
        return {
          ...state,
          fetching: true,
          posts:"",
        }
      }
    case 'FETCH_POSTS_REJECTED':
      {
        return { ...state,
          fetching: false,
          error: action.payload,
        }
      }
    case 'FETCH_LOAD_DATA':
      {
        return {
          ...state,
          fetched: true,
          posts: action.payload,
        }
      }
    default:
      return {
        ...state,
      }
  }
}
