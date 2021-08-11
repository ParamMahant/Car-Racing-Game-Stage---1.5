class Form{
    constructor(){
         this.input = createInput("Name")
        this.button = createButton("Play")
        this.greeting = createElement("h3")
    }
    display(){
        var title = createElement("h2")
        title.html("Car Racing Game")
        title.position(width/2 - 50,0) 
        
        this.input.position(width/2 - 40,height/2 - 80)
        this.button.position(width/2 + 30, height/2)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount++
            player.index = playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("Hello "+player.name)
            this.greeting.position(width/2 - 70, height/4)
        })
    }

    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
        
    }
}