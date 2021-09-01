noseX=0;
noseY=0;
function preload()
{
  clown_nose = loadImage('clown_nose.png');
}

function setup()
{
  canvas = createCanvas(600,600);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(600,600);
  video.hide(); 
  
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if (results.length > 0) 
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);  
  }
}

function draw()
{
  image(video,0,0,600,600);
  image(clown_nose, noseX-80, noseY-70, 160,160);
}

function take_snapshot()
{
  save('Lazy.png');  
}