score = 0;
function save_score (){
    localStorage.setItem("score", score);
}
function update_score (){
    score = score + 1;
    document.getElementById("score").innerHTML = "Score: " + score;
}
function next_page (){
    window.location = 'activity_2.html'
}