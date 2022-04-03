//task1
const firstButton = document.getElementById("but1");
firstButton.onclick = () => (firstButton.style.background = ('#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()));
<<<<<<< HEAD
=======

>>>>>>> master
//task2
const task2 = document.getElementById("task2");
let timer = 0;
let timerId;
task2.onmouseover = () => {
  timerId = setInterval(() => 
  {
    timer++;
    task2.innerHTML = timer;
  }, 1000);
};
task2.onmouseleave = () => clearInterval(timerId);
<<<<<<< HEAD
=======

>>>>>>> master
//task3
const dropMenu = document.getElementById('menu');
function Content()
{ (dropMenu.classList.toggle('reveal'));}
window.onclick = (event) => 
{
    if (!event.target.matches('#but2')) 
    {
        if (dropMenu.classList.contains('reveal')) dropMenu.classList.remove('reveal');
    }
}
<<<<<<< HEAD
=======

>>>>>>> master
//task4
const ball = document.getElementById("circle");
const zone = document.getElementById("empty");
let ballClicked = 0;
ball.onclick = () => ( ballClicked = 1);
document.addEventListener("keydown", (event) => 
{if (event.code == "Escape") ballClicked = 0;});
zone.onmousemove = (event) =>{
    if (ballClicked)
    {
        let x = event.pageX - zone.offsetLeft;
        let y = event.pageY - zone.offsetTop;
        if (x < 10) x = 10;
        if (y < 10) y = 10;
        const rightBorder = zone.offsetWidth - ball.offsetWidth + 6;
        const bottomBorder = zone.offsetHeight - ball.offsetHeight + 6 ;
        if (x > rightBorder) x = rightBorder;
        if (y > bottomBorder) y = bottomBorder;
        ball.style.left = x + 'px';
        ball.style.top = y + 'px';
    }
}