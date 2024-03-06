let inputDay= document.getElementById('day') as HTMLInputElement;
let inputMonth= document.getElementById('month') as HTMLInputElement;
let inputYear= document.getElementById('year') as HTMLInputElement;
let button= document.getElementById('button') as HTMLButtonElement
let outYear= document.getElementById('outYear') as HTMLSpanElement
let outMonth= document.getElementById('outMonth') as HTMLSpanElement
let outDay= document.getElementById('outDay') as HTMLSpanElement
let outYear2= document.getElementById('outYear2') as HTMLSpanElement
let outMonth2= document.getElementById('outMonth2') as HTMLSpanElement
let outDay2= document.getElementById('outDay2') as HTMLSpanElement
let dayL= document.getElementById('dayL') as HTMLLabelElement
let monthL= document.getElementById('monthL') as HTMLLabelElement
let yearL= document.getElementById('yearL') as HTMLLabelElement
let yearError= document.getElementById('yearError') as HTMLParagraphElement;
let monthError= document.getElementById('monthError') as HTMLParagraphElement;
let dayError= document.getElementById('dayError') as HTMLParagraphElement;




let errors: HTMLParagraphElement[]=[yearError, monthError, dayError];
let input: HTMLInputElement[]=[inputYear, inputMonth, inputDay];
let label: HTMLLabelElement[]=[yearL, monthL, dayL];

let date = new Date();
let currentDay= date.getDate();
let currentMonth= date.getMonth()+1;
let currentYear= date.getFullYear();


function daysInTheMonth(year:number, month:number):number{
    return new Date(year, month, 0).getDate();
}

function monthName(month:number):string{
    let date = new Date(month).toDateString();
    return date;
}


function refresh(){
    for (let i=0; i<input.length; i++){
        errors[i].innerText= "";
        label[i].style.color='black';
        input[i].style.borderColor='black';
    };


}

button.addEventListener('click', function calculateAge(){

    refresh();

    let months: string[] = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let day: number = Number (inputDay.value);
    let month: number = Number (inputMonth.value);
    let year: number = Number (inputYear.value);
    let daysMonth:number = daysInTheMonth(year, month);
    // let monthName= ().toLocaleString("en-ng", {month: "long"});

    let ageYear: number= currentYear-year;
    let ageMonth:number =  currentMonth-month;
    let ageDay:number =  currentDay-day;

    // let dateValues:number[]=[ageYear, ageMonth, ageDay];
    // let outP: HTMLSpanElement[]=[outYear, outMonth, outDay];

    let previousMonthDays:number= daysInTheMonth(year, (month-1))
    
    if (day >0 && month > 0 && year > 0 && month<=12 && year <= currentYear ){

        refresh();
        
        if (day ===31){
            if (month ===4|| month ===6 ||month===9
                || month===11 ){
                    
                    inputDay.style.borderColor= 'red';
                    dayError.innerText = ("Days in " + months[month-1] + " can't exceed 30 days");
                    dayL.style.color='red';

                    inputMonth.style.borderColor= 'red';
                    monthError.innerText = ("Days in " + months[month-1] + " can't exceed 30 days");
                    monthL.style.color='red';
                
                }};
        if (month===2){
            if(day >daysMonth){

                inputDay.style.borderColor= 'red';
                dayError.innerText = ("February " + year+ " was "+ daysMonth+" days.");
                dayL.style.color='red';

                inputMonth.style.borderColor= 'red';
                monthError.innerText = ("February " + year+ " was "+ daysMonth+" days.");
                monthL.style.color='red';
             
            }};
        if (year === currentYear){
            if(month > currentMonth){
                inputMonth.style.borderColor= 'red';
                monthError.innerText = ("Future date not valid");
                monthL.style.color='red';

                inputDay.style.borderColor= 'red';
                dayError.innerText = ("Future date not valid");
                dayL.style.color='red';

            };


            if (month === currentMonth && day > currentDay){
                // currentDay=0;
                
                inputDay.style.borderColor= 'red';
                dayError.innerText = ("Future date not valid");
                dayL.style.color='red';

                inputMonth.style.borderColor= 'red';
                monthError.innerText = ("Future date not valid");
                monthL.style.color='red';
             
            };



        };

        if (month >currentMonth && year != currentYear){
            currentYear-=1
            ageMonth = (currentMonth+12)-month
        };

        if (month >currentMonth && year === currentYear){
            
            ageDay = 0-day;
        };


        
        if (day>currentDay && month !=currentMonth && year !=currentYear){

            currentMonth -= 1;
            currentDay += previousMonthDays
            ageDay= currentDay-day;           
        };

        let dateValues:number[]=[ageYear, ageMonth, ageDay];
        let outP: HTMLSpanElement[]=[outYear, outMonth, outDay];
        let outP2: HTMLSpanElement[]=[outYear2, outMonth2, outDay2];

        for(let i=0; i<dateValues.length; i++){
            if (dateValues[i]<0){
                outP[i].innerText="--";
                outP2[i].innerText="Invalid";
                outP2[i].style.color='red'
            };

            if (dateValues[i]>=0  && dateValues[i]<10){
                outP[i].innerText= String ("0"+dateValues[i]);

                if (dateValues[i]<10){
                    outP[i].innerText= String ("0"+dateValues[i]);
    
                };

            };
        }
                
    
    } else{

        error();
    
    };

    function error(){
    
    
        for (let i=0; i<input.length; i++){
            if (Number (input[i].value)===0){
                errors[i].innerText= "This field is required";
                label[i].style.color='red';
                input[i].style.borderColor='red';
    
            }
        };

        if (day>31){
            inputDay.style.borderColor= 'red';
            dayError.innerText = ("Day can't exceed 31.");
            yearL.style.color='red';
        
        };
    

        if (month>12){
            inputMonth.style.borderColor= 'red';
            monthError.innerText = (month+"!"+ " Month can't exceed 12.");
            monthL.style.color='red';
        
        };
    
        if (year>currentYear){
            inputYear.style.borderColor= 'red';
            yearError.innerText = (year+" is beyond current year "+ currentYear);
            yearL.style.color='red';
        
        };
    
    
    };
})
