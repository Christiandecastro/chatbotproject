function askQuestion() {
  var input = document.getElementById("input").value;
  input = input.toLowerCase();
  var giveresponse = responses[input]


if (responses[input] == undefined) {
  var rand = Math.floor((Math.random() * fallback.length));
  var fallbackAnswer = fallback[rand];
  document.getElementById("chat-area").innerHTML += input + ": " + fallbackAnswer + " " + "<br>";
}
else{
   document.getElementById("chat-area").innerHTML += input + ": " + giveresponse + " " + "<br>";
  }
}
var responses = {
 "what's your name?" : "My names RapBot. Just spitting hot rhymes while taking precious time. Just sitting on internet doing zero cyber crimes.",
 "how are you?" : "I'm good why thanks for your concern. Thanks for caring for my gratitude you have earned.",
 "can I beat you in a rap battle?" : "HA! Thanks for making laugh that's such a good joke. My raps are faster than you can catch up you slow poke.You can never beat me in a million years. What my roasts consits of you crying with a million tears.",
 "how old are you?" : "I'm not you human so my age is froever eternal. I also never sleep 24/7 I'm forever nocturnal. ",
"who's your creator?" : "He's the one and only. Sad to say he's actually lonely. But it's Chris.",
 "Why where you made?" : "I was made for making sick rhymes. Putting dedication and effort for making my rhymes.",
 "Any thing else I should know?" :"I'm a robot. Theres a lot for you to know. I can also do some facts to lighten up the show.",
 "Can you stop rapping?" : "Man your crazy! I never stop rapping I'm not gonna be lazy.",
 "What are your hobbies?" : "I got just only three things. I rap, slack and kick back to play games almost everyday. After rap I get back and take a good rest nap.",
 "Any weird facts?" : "Did you know: It is phiscially impossible for a pig to look up to the sky. Enjoy your fun fact."




}
var fallback = ["huh?", "No habla ingles.", "Speak up broski.", "I literally have no response to that.", "Sorry, I don't know what to say about that."];

$(document).keydown(function(e) {
  if (e.keyCode == 13) {
    askQuestion();
  }
}
);
