let scoreA=0
let scoreB=0

let teamA= document.getElementById('scoreA')
let teamB= document.getElementById('scoreB')

function increasescoreA(){
    scoreA+=1
    teamA.innerHTML=scoreA
}

function decreasescoreA(){
    scoreA-=1
    teamA.innerHTML=scoreA
}

function increasescoreB(){
    scoreB+=1
    teamB.innerHTML=scoreB
}

function decreasescoreB(){
    scoreB-=1
    teamB.innerHTML=scoreB
}

function reset(){
    scoreA=scoreB=0
    teamA.innerHTML=scoreA
    teamB.innerHTML=scoreB
}

