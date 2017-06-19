import axios from 'axios';



export function fetchLuckyReward() {
  return function(dispatch){
    axios.get('/luckyReward/get')
    .then((res) => {
      dispatch({
        type: 'FETCH_LUCKY_REWARD',
        reward: res.data.data.type,
        msg:res.data.msg,
      })
    })
    .catch((err) => {
      dispatch({
        type: 'FETCH_POSTS_REJECTED',
        payload: err,
      });
    })
  }
}

export function fetchTimesData() {
  return function(dispatch){
    axios.get('/getTimes/get')
    .then((res) => {
      dispatch({
        type: 'FETCH_TIMES_DATA',
        times: res.data.data,
      })
    })
    .catch((err) => {
      dispatch({
        type: 'FETCH_POSTS_REJECTED',
        payload: err,
      });
    })
  }
}

export function fetchLoadData() {
  return function(dispatch){
    axios.get('/loadOptions/get')
    .then((res) => {
      dispatch({
        type: 'FETCH_LOAD_DATA',
        payload: res,
      })
    })
    .catch((err) => {
      dispatch({
        type: 'FETCH_POSTS_REJECTED',
        payload: err,
      });
    })
  }
}

export function fetchRewardData(){

   return function(dispatch){
    axios.get('/rewardInfoOptions/get')
    .then((res) => {
      dispatch({
        type: 'FETCH_REWARD_DATA',
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: 'FETCH_POSTS_REJECTED',
        payload: err,
      });
    })
  }
}

export function allRewardInfo(){
   return function(dispatch){
    axios.get('/allRewardInfo/get')
    .then((res) => {
      dispatch({
        type: 'FETCH_ALLREWARD_DATA',
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: 'FETCH_POSTS_REJECTED',
        payload: err,
      });
    })
  }
}

export function myPrizeRecord(){
   return function(dispatch){
    axios.get('/myPrizeRecord/get')
    .then((res) => {
      dispatch({
        type: 'FETCH_MYREWARD_DATA',
        record: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: 'FETCH_POSTS_REJECTED',
        record: err,
      });
    })
  }
}

