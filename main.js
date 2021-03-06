prediction_1="";
prediction_2="";

Webcam.set({
    width:350,height:300,image_format:'png',png_quality:90
});
camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version ',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bFCouO_cU/model.json',modelloaded);

function modelloaded(){
    console.log('model loaded');
}

function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotresult);
    
}

function gotresult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        document.getElementById("result_emotion_name2").innerHTML=results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        if(results[0].label=="Good luck"){
            document.getElementById("update_emoji").innerHTML="&#129310;";
        }
        if(results[0].label=="Amazing"){
            document.getElementById("update_emoji").innerHTML="&#128076;";
        }
        if(results[0].label=="Best"){
            document.getElementById("update_emoji").innerHTML="&#128077;";
        }
        if(results[0].label=="Victory"){
            document.getElementById("update_emoji").innerHTML="&#9996;";
        }
        if(results[1].label=="Good luck"){
            document.getElementById("update_emoji2").innerHTML="&#129310;";
        }
        if(results[1].label=="Amazing"){
            document.getElementById("update_emoji2").innerHTML="&#128076;";
        }
        if(results[1].label=="Victory"){
            document.getElementById("update_emoji2").innerHTML="&#9996;";
        }
        if(results[1].label=="Best"){
            document.getElementById("update_emoji2").innerHTML="&#128077;";
        }
    }
}