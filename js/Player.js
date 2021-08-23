class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }
  //players - player1 player2
// update the player name, player xposition and yposition in the database
  addPlayer() {
    var playerIndex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionX = width / 2 + 100;
    }

    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY
    });
  }
  //read the playerCount value in the database
  getCount(){
    database.ref("playerCount").on("value", function(data){
      playerCount = data.val()
    })
  }
  //writing the playerCount value to the database
  updateCount(state){
    database.ref("/").update({
      playerCount: state
    })
  }

  //collect all the players information from the database
  static getPlayersInfo() {
    database.ref("players").on("value", data => {
      allPlayers = data.val();
    });
  }
}
