import React from 'react';
import { connect } from 'react-redux';
import { allRewardInfo} from '../actions/postAction';
import { prizedRun } from '../actions/moveAction.jsx';
import { Allrewardli } from './layout/Rewardli.jsx';
import { Modal, Button } from 'antd';


@connect((store) => {
  return {
    rewardList: store.content.rewardList,
    top:store.allprize.top,
  };
})
export class Allreward extends React.Component {
  componentWillMount() {
    this.props.dispatch(allRewardInfo());
  }
  move(){
    const { rewardList,top } = this.props;
    const _this = this;
    let aLi = [];
    let maxHeight = 0;
    if (rewardList) {
      aLi = rewardList.map((post,index)=>{
        return <Allrewardli key={index}
              dispatch={this.props.dispatch}  content={"恭喜"+post.nickName+"获得"+post.rewardsName } />;
      });
      maxHeight = rewardList.length*0.5;
    }
    setTimeout(()=>{
      _this.props.dispatch(prizedRun(top,maxHeight));
    },600);
    return aLi;
  }

  render() {
    const aLi = this.move();
    const ulDiv ={
      height:'2.5rem',
      width:'100%',
      overflow:'hidden',
      position:'relative'
    };
    const ulStyle = {
      position:'absolute',
      top:this.props.top+'rem',
    };

    function info() {
      Modal.info({
        title: '抽奖活动规则',
        content: "我的中奖纪录",
      });
    }
    return(
          <div style={ulDiv}>
            <ul style={ulStyle}>
              { aLi }
            </ul>
          </div>
      )
  }
}
