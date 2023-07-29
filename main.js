// Get the date input element
const dateInput = document.getElementById('date');

// Get today's date and set it max date
dateInput.max = new Date().toISOString().split('T')[0];

let result = document.getElementById("result");
const msg = document.getElementById('spcl-msg');
const img = document.getElementById('spcl-img');

function ageCalculate() {
    //Birth Date
    let birthDate = new Date(dateInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;//+1 becasue in JS month start from 0
    let y1 = birthDate.getFullYear();

    //Today's date
    let todayDate = new Date();

    let d2 = todayDate.getDate();
    let m2 = todayDate.getMonth() + 1;//+1 becasue in JS month start from 0
    let y2 = todayDate.getFullYear();

    //For displaying Happy Birthday msg & img
    if (d1 === d2 && m1 === m2) {
        img.classList.add('scale-100');
        msg.classList.add('scale-100');
    }
    else {
        img.classList.remove('scale-100');
        msg.classList.remove('scale-100');
    }

    //Calculating difference
    let d3, m3, y3;

    y3 = y2 - y1;//Year difference

    /*If current month in greater than birth month then simply substract
    else if decrease a year and add 12 to diff of todays month & birth month
    */
    if (m2 >= m1) {//Month Gap
        m3 = m2 - m1;
    }
    else {
        y3--;
        m3 = 12 + (m2 - m1);
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    }
    else {
        m3--;
        d3 = getNoOfDaysInMonth(y1, m1) + (d2 - d1);
    }

    if (m3 < 0)//If in case while doing m3-- it becomes negetive
    {
        m3 = 11;
        y3--;
    }

    //If input field is empty
    if (isNaN(y3) || isNaN(m3) || isNaN(d3)) {
        result.innerHTML = "Enter you Birth Date first !!";
    }
    else {
        result.innerHTML = `You are <span style="color: yellow">${y3}</span> years, <span style="color: yellow">${m3}</span> months, and <span style="color: yellow">${d3}</span> days old`;
    }

    function getNoOfDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
        //Will return the last day of the month means we can say the number of days in a month
    }
}
