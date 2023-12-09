function adduser() {
    player1 = document.getElementById("p1").value;
    player2 = document.getElementById("p2").value;
    localStorage.setItem("player1",player1);
    localStorage.setItem("player2",player2);
    window.location = "quiz_game_login.html";
}