class Game {
  constructor() {}
  //reading the gamestate value from the database
  getState(){
    database.ref("gameState").on("value", function(data){
      gameState = data.val()
    })
  }
  //writing the gamestate value to the database
  updateState(state){
    database.ref("/").update({
      gameState: state
    })
  }
  start() {
    form = new Form();
    form.display();
    player = new Player();
    player.getCount()
    car1 = createSprite(width /2 - 100, height - 100)
    car1.addImage(carImage1)
    car1.scale = 0.07
    car2 = createSprite(width /2 + 100, height - 100)
    car2.addImage(carImage2)
    car2.scale = 0.07
    cars = [car1, car2]
  }

  //!== not equal
  play(){
    form.hide()
    Player.getPlayersInfo()
    if(allPlayers!== undefined){
      image(TheEntireMap, 0, -height*5,width,height*6)
      drawSprites()
    }
  }
}
