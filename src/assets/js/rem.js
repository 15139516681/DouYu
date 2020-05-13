
function setDevice(deviceW){
　　var html = document.documentElement;
　　var hWidth = html.getBoundingClientRect().width;
　　html.style.fontSize = hWidth/deviceW*100 + 'px';
};
export default  setDevice
// setDevice(750)