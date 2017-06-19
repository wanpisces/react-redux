export default function reducer(state = {
  fetching: false,
  fetched: false,
  posts: {},
  index:0,
  i:0,
  speed:1200,
  error: null,
}, action) {
  switch (action.type) {
    case 'FETCH_POSTS_PENDING':
      {
        return {
          ...state,
          fetching: true,
        }
      }
    case 'FETCH_POSTS_REJECTED':
      {
        return { ...state,
          fetching: false,
          error: action.payload,
        }
      }
    case 'FETCH_POSTS_FULFILLED':
    {
        return {
          ...state,
          posts: action.payload,
        }
    }
    case 'FETCH_REWARD_DATA':
      {
        return {
          ...state,
          fetched: true,
          posts: action.payload,
        }
      }
    case 'BORDER_MOVE_DATA':
      {
          return {
            ...state,
            fetched: true,
            index: action.index,
            i:action.i,
            speed:action.speed,

          }

      }
      case 'FETCH_ALLREWARD_DATA':
      {
          return {
            ...state,
            fetched: true,
            rewardList:action.payload,
          }

      }
    default:
      return {
        ...state,
      }
  }
}
