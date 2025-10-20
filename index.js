let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let score1 = 0
let score2 = 0

function h1(){
    score1 += 1
    homeScore.textContent = score1
}

function h2(){
    score1 += 2
    homeScore.textContent = score1
}

function h3(){
    score1 += 3
    homeScore.textContent = score1
}

function g1(){
    score2 += 1
    guestScore.textContent = score2
}

function g2(){
    score2 += 2
    guestScore.textContent = score2
}

function g3(){
    score2 += 3
    guestScore.textContent = score2
}
