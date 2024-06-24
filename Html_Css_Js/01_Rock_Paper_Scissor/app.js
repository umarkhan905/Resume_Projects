const userName=document.querySelector('.name');
const nameForm=document.querySelector('.card-form');
const first=document.querySelector('.first');
const hero=document.querySelector('.hero');
const last=document.querySelector('.last')
let name=document.querySelector('.userName');
const winsImage=document.querySelector('.win-img');
const winsMessage=document.querySelector('.wins');
const loader=document.querySelector('.loader');
const playAgain=document.querySelector('.play-again');



window.addEventListener("load",()=>{
    loader.style.visibility="hidden";
    loader.style.opacity="0";
    first.style.visibility="visible";
    first.style.opacity="1";
})

nameForm.addEventListener("submit",(e)=>{
    e.preventDefault();
   const userNameValue=userName.value;
    first.style.visibility="hidden";
    first.style.opacity='0';
    name.textContent=userNameValue;
})
let userScoreValue=0;
let compScoreValue=0;
let userChoice=document.querySelector('.user');
let compChoice=document.querySelector('.comp');
const userValue=document.querySelectorAll('.userValue img');
const userScore=document.querySelector('.userScore');
const compScore=document.querySelector('.compScore');
playAgain.addEventListener("click",()=>{
    last.style.visibility="hidden";
    last.style.opacity="0";
    hero.style.visibility="visible";
    hero.style.opacity="1";
    compScore.textContent=0;
    userScore.textContent=0;
    userScoreValue=0;
    compScoreValue=0;
})
userValue.forEach(user=>{
    user.addEventListener("click",(e)=>{
        const compValue=['stone','paper','scissor'];
        const randomIndex=Math.floor(Math.random()*3);
        const target=e.target;
        const value=target.getAttribute('value');
        userChoice.textContent=value;
        compChoice.textContent=compValue[randomIndex];
        const reslut=document.querySelector('.winner');
        reslut.style.opacity="1";
        if(value==compValue[randomIndex]){
            reslut.textContent="Oops!Game has been tied";
            compScore.textContent=compScoreValue;
            userScore.textContent=userScoreValue;
        }else if(value=='stone' && compValue[randomIndex]=='paper'){
            compScoreValue++;
            compScore.textContent=compScoreValue;
            reslut.textContent="Computer Wins";
        }else if(value=='stone' && compValue[randomIndex]=='scissor'){
            userScoreValue++;
            userScore.textContent=userScoreValue;
            reslut.textContent="You Wins";
        }else if(value=='paper' && compValue[randomIndex]=='scissor'){
            compScoreValue++;
            compScore.textContent=compScoreValue;
            reslut.textContent="Computer Wins";
        }else if(value=='paper' && compValue[randomIndex]=='stone'){
            userScoreValue++;
            userScore.textContent=userScoreValue;
            reslut.textContent="You Wins";
        }else if(value=='scissor' && compValue[randomIndex]=='stone'){
            compScoreValue++;
            compScore.textContent=compScoreValue;
            reslut.textContent="Computer Wins";
        }else if(value=='scissor' && compValue[randomIndex]=='paper'){
            userScoreValue++;
            userScore.textContent=userScoreValue;
            reslut.textContent="You Wins";
        }
        setTimeout(()=>{
            reslut.style.opacity="0";
        },2000);
        
        if(userScoreValue==5){
            last.style.opacity="1";
            last.style.visibility="visible";
            hero.style.opacity="0";
            winsImage.src="img/happy.gif";
            winsMessage.textContent="You Win The Game!"
            
        }else if(compScoreValue==5){
            last.style.opacity="1";
            last.style.visibility="visible";
            hero.style.opacity="0";
            winsImage.src="img/sad.gif";
            winsMessage.textContent="You Loss The Game!"
        }     
    })
})