const dolphine1Game = 97;
const dolphine2Game = 112;
const dolphine3Game = 101;

const koalas1Game = 109;
const koalas2Game = 95;
const koalas3Game = 106;

const dolphineAvg = (dolphine1Game + dolphine2Game + dolphine3Game) / 3;
const koalasAvg = (koalas1Game + koalas2Game + koalas3Game) / 3;

if (dolphineAvg > koalasAvg && dolphineAvg >= 100) {
    console.log("Team Dolphine Wins");
}
else if (koalasAvg > dolphineAvg && koalasAvg >= 100) {
    console.log("Team Koalas Wins")
}
else if (dolphineAvg===koalasAvg && dolphineAvg>=100 && koalasAvg>=100)
{
    console.log("Draw");
}
else {
    console.log("No one Wins");
}
