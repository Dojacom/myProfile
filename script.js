const currentDayOfTheWeek = document.querySelector(".currentDayOfTheWeek");
const currentUTCTime = document.querySelector(".currentUTCTime");

function todayDate(){
    const date =  new Date();
    //formatting current date
    const formattedDate = date.toDateString();

    //formatting time 
    const formattedTime = date.toLocaleTimeString("en-US")

    //output in the HTML
    currentDayOfTheWeek.innerHTML = formattedDate;
    currentUTCTime.innerHTML = formattedTime

    
    setTimeout(() => {
        todayDate();
      }, 1000)
} 
todayDate()