import React from 'react';
import { connect } from 'react-redux';
import { myPrizeRecord } from '../actions/postAction';
import { Modal, Button } from 'antd';

@connect((store) => {
  return {
    record:store.allprize.record.data,
  };
})
export class Checkmyprize extends React.Component {
  componentWillMount() {
    this.props.dispatch(myPrizeRecord());
  }
  render() {
    const { record }=this.props;
    let content = "";
    if (record) {
      for (var i = 0; i < record.length; i++) {
        content += "<p>恭喜"+record[i].nickName+"获得"+record[i].rewardsName+"时间："+record[i].createTime+"<p>";
      }
    }
    function info() {
      Modal.info({
        title: '抽奖活动规则',
        content: <div dangerouslySetInnerHTML={{__html: content}}></div>,
      });
    }
      return (
        <div>
              <span><Button onClick={info}>查看我的中奖纪录</Button></span>
        </div>
     )
  }
}