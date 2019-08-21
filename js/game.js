var khmerGame = () => {
    // console.log("PlayGame");
    let mix1 = Math.floor(Math.random() * 6 + 1);
    let mix2 = Math.floor(Math.random() * 6 + 1);
    let mix3 = Math.floor(Math.random() * 6 + 1);
    // console.log(mix);
    let ouput1 = "";
    let ouput2 = "";
    let ouput3 = "";

    // checkbox
    let users = document.getElementsByClassName("game");
    let userChecked = "";
    for (let i = 0; i < users.length; i++) {
        if (users[i].checked) {
            if (users[i].value == mix1 || users[i].value== mix2 || users[i].value == mix3) {
                alert("Congratulation");
            }
        }
    }
    switch (mix1) {
        case 1:
            ouput1 = "<img src ='../img/1.PNG' style ='width:100px;heith:100px;'>";
            break;
        case 2:
            ouput1 = "<img src ='../img/2.PNG'style ='width:100px;heith:100px;'>";
        case 3:
            ouput1 = "<img src ='../img/3.PNG'style ='width:100px;heith:100px;'>";
            break;
        case 4:
            ouput1 = "<img src ='../img/4.PNG'style ='width:100px;heith:100px;'>"
        case 5:
            ouput1 = "<img src ='../img/5.PNG'style ='width:100px;heith:100px;'>";
            break;
        case 6:
            ouput1 = "<img src ='../img/6.PNG'style ='width:100px;heith:100px;'>";
    }
    switch (mix2) {
        case 1:
            ouput2 = "<img src ='../img/1.PNG' style ='width:100px;heith:100px;'>";
            break;
        case 2:
            ouput2 = "<img src ='../img/2.PNG'style ='width:100px;heith:100px;'>";
        case 3:
            ouput2 = "<img src ='../img/3.PNG'style ='width:100px;heith:100px;'>";
            break;
        case 4:
            ouput2 = "<img src ='../img/4.PNG'style ='width:100px;heith:100px;'>"
        case 5:
            ouput2 = "<img src ='../img/5.PNG'style ='width:100px;heith:100px;'>";
            break;
        case 6:
            ouput2 = "<img src ='../img/6.PNG'style ='width:100px;heith:100px;'>";
    }
    switch (mix3) {
        case 1:
            ouput3 = "<img src ='../img/1.PNG' style ='width:100px;heith:100px;'>";
            break
        case 2:
            ouput3 = "<img src ='../img/2.PNG'style ='width:100px;heith:100px;'>";
        case 3:
            ouput3 = "<img src ='../img/3.PNG'style ='width:100px;heith:100px;'>";
            break;
        case 4:
            ouput3 = "<img src ='../img/4.PNG'style ='width:100px;heith:100px;'>"
        case 5:
            ouput3 = "<img src ='../img/5.PNG'style ='width:100px;heith:100px;'>";
            break;
        case 6:
            ouput3 = "<img src ='../img/6.PNG'style ='width:100px;heith:100px;'>";
    }
    setTimeout(function () {
        document.querySelector("#result").innerHTML = ouput1 + " " + ouput2 + " " + ouput3;
    }, 1000);
}

var PlayGame = document.querySelector("#play");
PlayGame.addEventListener("click", khmerGame);
// clear result
var playAgain = () => {
    let result = document.querySelector("#result");
    // result.innerHTML = "";
    console.log("Clear");
}
var playAgain = document.getElementById("playAgain");
playAgain.addEventListener("click", playAgain);