import React from 'react';


export class Rewardli extends React.Component {
  render() {
    const { mark, index,imgUrl } = this.props;
    let group = index;
    if (index==4) {
      group = 6;
    }else if (index==5) {
      group = 9;
    }else if (index==6) {
      group = 8;
    }else if (index==8) {
      group =4;
    }
    const imgStyle = {
      width:"2.2rem",
      height:"2.2rem"
    }
    const liStyle = {
      border: ".05333rem solid #4b140d",
      float:"left",
      width: "2.29333rem",
      height: "2.29333rem",
      margin: ".01333rem",
      borderRadius: ".06667rem",
      background:"#fff",
      WebkitOrder:group,
      order:group,
    }
    const firstLi = {
      border: ".05333rem solid #fff799",
      boxShadow: "0px 0px 10px #fff799",
      float: "left",
      width: "2.29333rem",
      height: "2.29333rem",
      margin: ".01333rem",
      borderRadius: ".06667rem",
      background: "#fff",
      WebkitOrder:group,
      order:group,
    };

      return (
        <li style={mark?firstLi:liStyle}>
            <img src={imgUrl} style={imgStyle} />
        </li>
     )
  }
}

export class Allrewardli extends React.Component {
  render() {
      return (
        <li>
          {this.props.content}
        </li>
     )
  }
}

