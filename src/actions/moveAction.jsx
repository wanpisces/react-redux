export function run(speed,type,index,i,reward){
  index++;
  if (type=="fast") {
    speed *= 0.9;
  }else if (type=="slow") {
    speed += 5;
    if (i>70+reward) {
      i = 0;
      index = 0;
      speed = 1200;
    }
  }
  i++;
  if (index>7) {
    index = 0;
  }

  return {
    type: 'BORDER_MOVE_DATA',
    speed: speed,
    index:index,
    i:i
  }
}

export function prizedRun(top,maxHeight){
  top -= 0.5;
  if (top<-maxHeight) {
    top = 2.6;
  }
  return {
    type: 'FETCH_ALLPRIZE_DATA',
    top:top,
  }
}