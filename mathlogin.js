function adduser(){
    player_1_name = document.getElementById("player1_name_input").value;
    player_2_name = document.getElementById("player2_name_input").value;
    localStorage.setItem("player1name",player_1_name);
    localStorage.setItem("player2name",player_2_name);

    window.location = "mathpage.html"
}