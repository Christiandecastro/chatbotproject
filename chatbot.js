function askQuestion() {
  var input = document.getElementById("input").value;
  var giveresponse = responses[input]
 document.getElementById("chat-area").textContent += input + ": " + giveresponse + " ";
}


var responses = {
 "what's your name?" : "My names RapBot. Just spitting hot rhymes while taking precious time. Just sitting on internet doing zero cyber crimes.",
 "how are you?" : "I'm good why thanks for your concern. Thanks for caring for my gratitude you have earned.",
 "Can I beat you in a rap battle?" : "HA! Thanks for making laugh that's such a good joke. My raps are faster than you can catch up you slow poke.You can never beat me in a million years. What my roasts consits of you crying with a million tears."

}
