import React from 'react';
import { connect } from 'react-redux';
import { fetchLoadData, fetchRewardData,fetchTimesData,fetchLuckyReward} from '../actions/postAction';
import { run } from '../actions/moveAction';
import { Rewardli } from './layout/Rewardli.jsx';
import { Modal } from 'antd';

@connect((store) => {
  return {
    content: store.content.posts,
    index:store.content.index,
    speed:store.content.speed,
    i:store.content.i,
    times:store.allprize.times,
    reward:store.allprize.reward,
    msg:store.allprize.msg,
  };
})
export class Reward extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchRewardData());
    this.props.dispatch(fetchTimesData());
    this.props.dispatch(fetchLuckyReward());
  }

  render() {
    let {speed, dispatch,index,i,times,reward,msg}=this.props;
    if (i<=70+reward&&i>0) {
      borderMove();
    }else if(i>70+reward){
      const title = "幸运大奖：";
      info(title,msg);
    }

    function borderMove(){
      if (times>0) {
        const timer = setTimeout(()=>{
          if (i<35) {
            dispatch(run(speed ,"fast",index,i,reward));
          }else{
            dispatch(run(speed,"slow",index,i,reward));
          }
        },speed);
      }else{
        info('抽奖活动规则',"对不起，你的次数用完了！");
      }
    }
    function info(title,content) {
      Modal.info({
        title: title,
        content: content,
      });
    }
    const timess = {
      width:"1.5rem",
      height:"0.6rem",
      borderRadius:"10px",
      background:"orange",
      margin:"0.7rem auto 0rem",
      textAlign:"center",
    }
    const liStyle = {
      border: ".05333rem solid #4b140d",
      float: "left",
      width: "2.29333rem",
      height: "2.29333rem",
      margin: ".01333rem",
      borderRadius: ".06667rem",
      background:"#fff",
      WebkitOrder:5,
      order:5,
    }
    const divStyle = {
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      padding: ".61333rem",
      display:"-webkit-flex",
      }
    const ulStyle = {
      height:"7rem",
      position:"relative",
      display:"flex",
      display:"-webkit-flex",
      flexWrap:"wrap"
    }
    let mark = false;
    let aLi = [];
    const { content } = this.props;
    if (content.rewards) {
      const arr = content.rewards;
      aLi = arr.map((post,i)=>{
        if (i==index) {
          mark = true;
        }else{
          mark = false;
        }
        return <Rewardli key={i} index={i+1} mark={mark} imgUrl={ post.rewardImg }
              dispatch={this.props.dispatch}/>;
      });
    }
    return(
        <div style={divStyle}>
          <ul style={ulStyle}>
            {aLi}
            <li ref='startBtn' style={liStyle} onClick={borderMove}>
              <div>点击领取</div>
              <div style={timess}>剩余{this.props.times}次</div>
            </li>
          </ul>
        </div>
      )
  }
}