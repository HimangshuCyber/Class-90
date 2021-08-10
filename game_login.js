function add_user(){
    player_1_name = document.getElementById('player_1').value;
    player_2_name = document.getElementById('player_2').value;
    localStorage.setItem('Player 1 name', player_1_name);
    localStorage.setItem('Player 2 name', player_2_name);
    window.location.replace('game_page.html')
}