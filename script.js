// let options = new Array(3)
// options[0] = new Image()
// options[0].src = "https://th.bing.com/th?q=Big+Snake+Cartoon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
// options[1] = new Image()
// options[1].src = "water.jpg"
// options[2] = new Image()
// options[2].src = "https://th.bing.com/th/id/OIP.i3gwgFIp_N7u36c0sYRfCQHaFH?w=221&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"

let options = ["snake.jpg","water.jpg" , "gun.jpg"]
            // I have placed snake at 0 index , water at 1 index and gun at 2 index

const snakeHiss = new Audio("Snake Strike - QuickSounds.com.mp3")
const  waterDrop = new Audio("Stone-Dropping-in-Water-A4-www.fesliyanstudios.com.mp3")
const laserBeam = new Audio("blaster-2-81267.mp3")

let op = document.getElementsByClassName("options")

let num
let pc
let player

document.getElementById("result").style.visibility = "hidden"
document.getElementById("play").style.visibility = "hidden"

function congrats(){
    document.getElementById("result").innerHTML = `<pre>CONGRATULATIONS🎉\nYou Won</pre>`
}
function loose(){
    document.getElementById("result").innerHTML = `<pre>OOPS!😶\nYou Loose</pre>`
}
function draw(){
    document.getElementById("result").innerHTML = `<pre>CLOSE CALL!😮\nYou Draw</pre>`
}

let p_score=0,c_score=0
p_score = Number.parseInt(p_score)
c_score = Number.parseInt(c_score)

function win(){
    let comp
    num = Math.floor(Math.random()*options.length)    
    pc = options[num]
    if(num == "0"){
        comp = "snake";
    }
    else if(num == "1"){
        comp = "water";
    }
    else{
        comp = "gun";
    }
    
    pcImage.style.visibility = "visible"
    pcImage.setAttribute("src" , pc)

    if (comp == "snake") {
        if (player == comp) {            
            console.log("You Draw!")
            draw()
        }
        else if (player == "gun") {
            console.log("CONGRATULATIONS, You Won!")
            congrats()
            p_score++
        }
        else {
            console.log("You Loose!")
            loose()
            c_score++
        }
    }
    else if (comp == "water") {
        if (player == comp) {
            console.log("You Draw!")
            draw()
        }
        else if (player == "snake") {
            console.log("CONGRATULATIONS, You Won!")
            congrats()
            p_score++
        }
        else {
            console.log("You Loose!")
            loose()
            c_score++
        }
    }
    else if (comp == "gun") {
        if (player == comp) {
            console.log("You Draw!")
            draw()
        }
        else if (player == "water") {
            console.log("CONGRATULATIONS, You Won!")
            congrats()
            p_score++
        }
        else {
            console.log("You Loose!")
            loose()
            c_score++
        }
    }
    console.log(p_score , c_score)
}

function func1(){
    player = document.getElementById("option1").getAttribute("value")
    document.getElementById("playerImage").style.visibility = "visible"
    playerImage.setAttribute("src" , "snake.jpg")
    op[0].style.visibility = "hidden"
    document.getElementsByClassName("vsLogo")[0].style.animation = "fight 400ms 1 forwards"  
    snakeHiss.play()  
    win()
    document.getElementById("result").style.visibility = "visible" // displaying result
    document.getElementById("play").style.visibility = "visible"    // displaying play again
}
function func2(){
    player = document.getElementById("option2").getAttribute("value")
    document.getElementById("playerImage").style.visibility = "visible"
    playerImage.setAttribute("src" , "water.jpg")
    op[0].style.visibility = "hidden"
    document.getElementsByClassName("vsLogo")[0].style.animation = "fight 400ms 1 forwards"
    waterDrop.play()
    win()
    document.getElementById("result").style.visibility = "visible" // displaying result
    document.getElementById("play").style.visibility = "visible"    // displaying play again
}
function func3(){
    player = document.getElementById("option3").getAttribute("value")
    document.getElementById("playerImage").style.visibility = "visible"
    playerImage.setAttribute("src" , "gun.jpg")
    op[0].style.visibility = "hidden"
    document.getElementsByClassName("vsLogo")[0].style.animation = "fight 400ms 1 forwards"
    laserBeam.play()
    win()
    document.getElementById("result").style.visibility = "visible" // displaying result
    document.getElementById("play").style.visibility = "visible"    // displaying play again
}

function start(){
    op[0].style.visibility = "visible"
    document.getElementById("playerImage").style.visibility = "hidden"
    document.getElementById("pcImage").style.visibility = "hidden"
    document.getElementsByClassName("vsLogo")[0].style.animation = "cancel"
    document.getElementById("result").style.visibility = "hidden"
    document.getElementById("play").style.visibility = "hidden"
}



    


