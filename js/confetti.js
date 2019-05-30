var canvas = document.getElementById('confetti');
var ctx = canvas.getContext('2d');
var startTime = new Date().getTime();
var currentTime = startTime;
var width, height;

var items = [];
var colors = ['#3EDA8D7', '#C5ED9F', '#FFD626', '#F8CEA8', '#00a944', '#F36F6E', '#43c4c0'];
var index = 150;

function resize(){
  width = canvas.width = window.innerWidth
  //set up height here so the confetti panel appears above fine print.
  height = canvas.height = 620
}

function particle(x, y, i, minv){
  var angle = Math.random()*(Math.PI*2);
  var amount = Math.random()*15.0 + minv;
  var vx = Math.sin(angle) * amount;
  var vy = Math.cos(angle) * amount;
  
  return {
    x: x,
    y: y,
    vx: vx,
    vy: vy,
    width: (Math.random() * 15) + 8,
    height: (Math.random() * 20) + 8,
    color: colors[i % colors.length],
    circle: (Math.random() > 0.8),
    rotate: Math.random() * 180,
    direction: (Math.random() * 5) - 2.5,
    fallSpeed: (Math.random() / 10) + 0.1
  }
}

function render(){
  ctx.clearRect(0, 0, width, height);
  var time = new Date().getTime();
  var delta = (time - currentTime) / (1000/60);
  currentTime = time;
  
  if(time - startTime > 1500){
    items[++index % 600] = particle(Math.random() * width, -20, index, 10)
  }
  
  items.forEach(function(item){
    item.vx *= (1.0 - 0.05*delta);
    item.vy += (delta * item.fallSpeed);
    item.vy /= 1.0 + 0.05*delta;
    item.x += (delta * item.vx);
    item.y += (delta * item.vy);
    item.rotate += (delta * item.direction);
    
    ctx.fillStyle = item.color;
    if(item.circle){
      ctx.beginPath();
      ctx.arc(item.x, item.y, item.width / 2, 0, 2*Math.PI);
      ctx.fill();
      ctx.closePath();
    } else {
      ctx.save();
      ctx.beginPath();
      ctx.translate(item.x, item.y);
      ctx.rotate(item.rotate * Math.PI / 180);
      ctx.fillRect(-item.width / 2, -item.height / 2, item.width, item.height);
      ctx.translate(-item.x, -item.y);
      ctx.restore();
      ctx.closePath();
    }
  });

  window.requestAnimationFrame(render);
}


resize()
for(var i = 0; i < index; i++){
  items[i] = particle(width / 2, height / 2, i, 10);
}

window.onclick = function(e){
  for(var i = 0; i < 150; i++){
    items[(index + 150 + i) % 600] = particle(e.clientX, e.clientY, i, 10);
  }
  index = (index + 150) % 600;
}

window.ontouchstart = function(e){
  for(var d = 0; d < e.changedTouches.length; d++){
    for(var i = 0; i < 150; i++){
      items[(index + 150 + i) % 600] = particle(e.changedTouches[d].pageX, e.changedTouches[d].pageY, i, 10);
    }
    index = (index + 150) % 600;
  }
}

window.onresize = resize
render();