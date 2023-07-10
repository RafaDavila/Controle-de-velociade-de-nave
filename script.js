let spaceShip = {
    velocity: 0,
    speedup: function(acceleration){
        this.velocity += acceleration
    }
}

function registerSpaceShip(){
    spaceShip.name = prompt("Informe o nome da nave:")
    spaceShip.type = prompt("Informe o tipo da nave: ")
    spaceShip.maxVelocity = Number(prompt("Informe a velocidade máxima da nave(km/s): "))
}

function acelarate(){
    let acceleration = Number(prompt("Quanto você quer acelerar?(km/s)"))
    spaceShip.speedup(acceleration)
    if(spaceShip.velocity > spaceShip.maxVelocity){
        alert("VELOCIDADE MÁXIMA ULTRAPASSADA! \n VELOCIDADE DA NAVE: " + spaceShip.velocity + "km/s\n" + "velocidade máxima da Nave " + spaceShip.maxVelocity + "km/s")

    }
}

function stop(){
    alert("Nome da nave: " + spaceShip.name + "\nTipo: " +spaceShip.type + "\nVelocidade da nave: " + spaceShip.velocity + "\nVelocidade Máxima da nave: " + spaceShip.maxVelocity)
    spaceShip.velocity = 0
}

function showMenu(){
    let chosenOption
    do{
        chosenOption = prompt("Você deseja : \n1-Acelerar \n2-Parar")
        switch(chosenOption){
            case "1":
                acelarate()
                break;
            case "2":
                stop()
                break;
            default:
                alert("Opção inválida")
                    
        }
    } while(chosenOption != "2")
}

registerSpaceShip()
showMenu()