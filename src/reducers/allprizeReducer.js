export default function reducer(state = {
  fetching: false,
  fetched: false,
  top:2.6,
  record:{},
  times:0,
  reward:0,
  msg:"",
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
    case 'FETCH_ALLPRIZE_DATA':
      {
        return {
          ...state,
          fetched: true,
          top: action.top,
        }
      }
    case 'FETCH_MYREWARD_DATA':
      {
        return {
          ...state,
          fetched: true,
          record: action.record,
        }
      }
    case 'FETCH_TIMES_DATA':
      {
        return {
          ...state,
          fetched: true,
          times: action.times,
        }
      }
    case 'FETCH_LUCKY_REWARD':
      {
        return {
          ...state,
          fetched: true,
          reward: action.reward,
          msg:action.msg,
        }
      }
    default:
      return {
        ...state,
      }
  }
}
