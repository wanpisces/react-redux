import React from 'react';
import { connect } from 'react-redux';
import { Reward } from '../components/Reward';
import { Allreward }from '../components/Allreward';
import { Checkmyprize } from '../components/checkMyPrize';
import { fetchLoadData,fetchRewardData } from '../actions/postAction';
import { Modal, Button } from 'antd';
@connect((store) => {
  return {
    load: store.load,
    content: store.content.posts,
    record:store.allprize.record,
  };
})

export default class Content extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchLoadData());
    this.props.dispatch(fetchRewardData());
  }
  render() {
    const {content} = this.props;
     function info() {
      Modal.info({
        title: '抽奖活动规则',
        content: content.title,
      });
    }
    return (
      <div style={{overflow: "scroll",height: "100%"}}>
        <section className="weday-share">
            <img className="weday-flag" src="http://weixin.handsight.cn/WeDay_files/weday-flag.png"/>
            <div id="rule"><Button onClick={info}>规则说明</Button></div>
            <section className="wednesday-prize" style={{paddingTop: "0.4rem"}}>
                <div className="prize-box-container" style ={{position: "relative",width: "8.58667rem",margin: "0 auto"}}>
                    <svg version="1.1" id="prize-box" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 644 644" stroke="#4b140d" strokeWidth="2">
                        <path fill="#E9A02A" d="M633,6H11c-2.761,0-5,2.239-5,5v622c0,2.762,2.239,5,5,5h622c2.762,0,5-2.238,5-5V11 C638,8.239,635.762,6,633,6z" stroke="none"></path>
                        <path fill="#a68bff" d="M629,0H7C4.239,0,2,2.238,2,5v622c0,2.762,2.239,5,5,5h622c2.762,0,5-2.238,5-5V5 C634,2.238,631.762,0,629,0z"></path>
                        <path fill="#7c5ce4" d="M600.459,29H35.541C33.033,29,31,31.033,31,33.541v564.918c0,2.508,2.033,4.541,4.541,4.541h564.918 c2.508,0,4.541-2.033,4.541-4.541V33.541C605,31.033,602.967,29,600.459,29z"></path>
                        <ellipse cx="17.974" cy="17" rx="7" ry="7"></ellipse>
                        <ellipse cx="49.729" cy="17" rx="7" ry="7"></ellipse>
                        <ellipse cx="80.415" cy="17" rx="7" ry="7"></ellipse>
                        <ellipse cx="112.17" cy="17" rx="7" ry="7"></ellipse>
                        <ellipse cx="142.415" cy="17" rx="7" ry="7"></ellipse>
                        <ellipse cx="174.681" cy="17" rx="7" ry="7"></ellipse>
                        <ellipse cx="206.367" cy="17" rx="7" ry="7"></ellipse>
                        <ellipse cx="238.122" cy="17" rx="7" ry="7"></ellipse>
                        <ellipse cx="268.878" cy="17" rx="7" ry="7"></ellipse>
                        <ellipse cx="300.633" cy="17" rx="7" ry="7"></ellipse>
                        <ellipse cx="332.318" cy="17" rx="7" ry="7"></ellipse>
                        <ellipse cx="364.074" cy="17" rx="7" ry="7"></ellipse>
                        <ellipse cx="394.83" cy="17" rx="7" ry="7"></ellipse>
                        <ellipse cx="426.585" cy="17" rx="7" ry="7"></ellipse>
                        <ellipse cx="458.271" cy="17" rx="7" ry="7"></ellipse>
                        <ellipse cx="488.026" cy="17" rx="7" ry="7"></ellipse>
                        <ellipse cx="520.83" cy="17" rx="7" ry="7"></ellipse>
                        <ellipse cx="552.585" cy="17" rx="7" ry="7"></ellipse>
                        <ellipse cx="583.271" cy="17" rx="7" ry="7"></ellipse>
                        <ellipse cx="615.026" cy="17" rx="7" ry="7"></ellipse>
                        <ellipse cx="618" cy="48.983" rx="7" ry="7"></ellipse>
                        <ellipse cx="618" cy="80.764" rx="7" ry="7"></ellipse>
                        <ellipse cx="618" cy="112.545" rx="7" ry="7"></ellipse>
                        <ellipse cx="618" cy="143.325" rx="7" ry="7"></ellipse>
                        <ellipse cx="618" cy="175.035" rx="7" ry="7"></ellipse>
                        <ellipse cx="618" cy="206.816" rx="7" ry="7"></ellipse>
                        <ellipse cx="618" cy="237.596" rx="7" ry="7"></ellipse>
                        <ellipse cx="618" cy="269.377" rx="7" ry="7"></ellipse>
                        <ellipse cx="618" cy="301.088" rx="7" ry="7"></ellipse>
                        <ellipse cx="618" cy="332.869" rx="7" ry="7"></ellipse>
                        <ellipse cx="618" cy="363.648" rx="7" ry="7"></ellipse>
                        <ellipse cx="618" cy="395.43" rx="7" ry="7"></ellipse>
                        <ellipse cx="618" cy="427.14" rx="7" ry="7"></ellipse>
                        <ellipse cx="618" cy="457.92" rx="7" ry="7"></ellipse>
                        <ellipse cx="618" cy="489.749" rx="7" ry="7"></ellipse>
                        <ellipse cx="618" cy="521.53" rx="7" ry="7"></ellipse>
                        <ellipse cx="618" cy="552.24" rx="7" ry="7"></ellipse>
                        <ellipse cx="618" cy="584.021" rx="7" ry="7"></ellipse>
                        <ellipse cx="49.729" cy="617" rx="7" ry="7"></ellipse>
                        <ellipse cx="80.415" cy="617" rx="7" ry="7"></ellipse>
                        <ellipse cx="112.17" cy="617" rx="7" ry="7"></ellipse>
                        <ellipse cx="143.926" cy="617" rx="7" ry="7"></ellipse>
                        <ellipse cx="174.681" cy="617" rx="7" ry="7"></ellipse>
                        <ellipse cx="206.367" cy="617" rx="7" ry="7"></ellipse>
                        <ellipse cx="238.122" cy="617" rx="7" ry="7"></ellipse>
                        <ellipse cx="268.878" cy="617" rx="7" ry="7"></ellipse>
                        <ellipse cx="300.633" cy="617" rx="7" ry="7"></ellipse>
                        <ellipse cx="332.318" cy="617" rx="7" ry="7"></ellipse>
                        <ellipse cx="364.074" cy="617" rx="7" ry="7"></ellipse>
                        <ellipse cx="394.83" cy="617" rx="7" ry="7"></ellipse>
                        <ellipse cx="426.585" cy="617" rx="7" ry="7"></ellipse>
                        <ellipse cx="458.271" cy="617" rx="7" ry="7"></ellipse>
                        <ellipse cx="489.026" cy="617" rx="7" ry="7"></ellipse>
                        <ellipse cx="520.83" cy="617" rx="7" ry="7"></ellipse>
                        <ellipse cx="552.585" cy="617" rx="7" ry="7"></ellipse>
                        <ellipse cx="583.271" cy="617" rx="7" ry="7"></ellipse>
                        <ellipse cx="615.026" cy="617" rx="7" ry="7"></ellipse>
                        <ellipse cx="17.974" cy="617" rx="7" ry="7"></ellipse>
                        <ellipse cx="17" cy="583.585" rx="7" ry="7"></ellipse>
                        <ellipse cx="17" cy="551.83" rx="7" ry="7"></ellipse>
                        <ellipse cx="17" cy="520.074" rx="7" ry="7"></ellipse>
                        <ellipse cx="17" cy="489.319" rx="7" ry="7"></ellipse>
                        <ellipse cx="17" cy="457.633" rx="7" ry="7"></ellipse>
                        <ellipse cx="17" cy="425.878" rx="7" ry="7"></ellipse>
                        <ellipse cx="17" cy="395.123" rx="7" ry="7"></ellipse>
                        <ellipse cx="17" cy="363.367" rx="7" ry="7"></ellipse>
                        <ellipse cx="17" cy="331.682" rx="7" ry="7"></ellipse>
                        <ellipse cx="17" cy="299.926" rx="7" ry="7"></ellipse>
                        <ellipse cx="17" cy="269.17" rx="7" ry="7"></ellipse>
                        <ellipse cx="17" cy="237.415" rx="7" ry="7"></ellipse>
                        <ellipse cx="17" cy="205.73" rx="7" ry="7"></ellipse>
                        <ellipse cx="17" cy="174.974" rx="7" ry="7"></ellipse>
                        <ellipse cx="17" cy="143.17" rx="7" ry="7"></ellipse>
                        <ellipse cx="17" cy="111.415" rx="7" ry="7"></ellipse>
                        <ellipse cx="17" cy="80.729" rx="7" ry="7"></ellipse>
                        <ellipse cx="17" cy="48.974" rx="7" ry="7"></ellipse>
                    </svg>
                    <Reward/>
                    <Allreward/>
                    <Checkmyprize/>
                </div>

            </section>
        </section>
      </div>
      )
  }
}
// <Allreward/>