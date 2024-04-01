let Computer_choice
let Result
let loader = document.getElementById("loader")
let result_path = document.getElementById("result")
let stats_path = document.getElementById("stats")

result_path.style.display = "none"
loader.style.display = "none"
stats_path.style.opacity = "0"

function Choose_Computer_move(num){
    if (num === 0){
        Computer_choice = "rock"
    }
    
    else if (num === 1){
        Computer_choice = "paper"
    }
    
    else if (num === 2){
        Computer_choice = "scissor"
    }
    
    console.log(Computer_choice)
    return Computer_choice
    
}





function start_game(choice){
    stats_path.style.opacity = "0"
    result_path.style.display = "none"
    Choose_Computer_move(Math.round((Math.random()*10) / 5))
    loader.style.display = "block"
    setTimeout(function() {
        loader.style.display = "none"
        console.log(choice)
        result_path.src = "img/" + Computer_choice + ".svg"
        result_path.style.display = "inline-block"
        stats_path.style.opacity = "1"
        
        if(choice === 'rock'){
            if(Computer_choice === 'rock'){
                Result = "its a tie"
                console.log(Result)
                stats_path.innerHTML = Result
                return "its a tie"
            }
            if(Computer_choice === 'paper'){
                Result = "you loose"
                console.log(Result)
                stats_path.innerHTML = Result
                return "you loose"
            }
            if(Computer_choice === 'scissor'){
                Result = "you win"
                console.log(Result)
                stats_path.innerHTML = Result
                return "you win"
            }
        }
    
        if(choice === 'paper'){
            if(Computer_choice === 'paper'){
                Result = "its a tie"
                console.log(Result)
                stats_path.innerHTML = Result
                return "its a tie"
            }
            if(Computer_choice === 'scissor'){
                Result = "you loose"
                console.log(Result)
                stats_path.innerHTML = Result
                return "you loose"
            }
            if(Computer_choice === 'rock'){
                Result = "you win"
                console.log(Result)
                stats_path.innerHTML = Result
                return "you win"
            }
        }
    
        if(choice === 'scissor'){
            if(Computer_choice === 'scissor'){
                Result = "its a tie"
                console.log(Result)
                stats_path.innerHTML = Result
                return "its a tie"
            }
            if(Computer_choice === 'rock'){
                Result = "you loose"
                console.log(Result)
                stats_path.innerHTML = Result
                return "you loose"
            }
            if(Computer_choice === 'paper'){
                Result = "you win"
                console.log(Result)
                stats_path.innerHTML = Result
                return "you win"
            }
        }
    
    }, (Math.random()+100)*10);
}









   

