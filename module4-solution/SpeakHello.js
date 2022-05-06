(function (window){

var helloSpeaker = {};
helloSpeaker.name= "Hello";
//var speakWord = "Hello";

helloSpeaker.speak = function (name) {
  console.log(helloSpeaker.name + " " + name);
}

window.helloSpeaker = helloSpeaker;

})(window);
