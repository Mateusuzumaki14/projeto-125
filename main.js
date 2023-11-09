var noseX = 0
var noseY = 0
var leftWristX = 0
var rightWristX = 0
var difference = 0
function setup() {
    var video = createCapture(VIDEO);
    video.size(500, 500)
    canvas = createCanvas(500, 500)
    canvas.position(550, 90)
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', got_poses)
}
function modelLoaded() {
    console.log('poseNet carregado')
}
function got_poses(results) {
    if (results.length > 0) {
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y

        leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x
        difference = floor(leftWristX - rightWristX)
    }
}

function draw() {
    background('green')
    textSize(difference)
    fill('yellow')
    text('quando vc e cria a sorte vem junto',noseX,noseY)


}