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

let outP: HTMLSpanElement[]=[outYear, outMonth, outDay];
let outP2: HTMLSpanElement[]=[outYear2, outMonth2, outDay2];


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
 
    let ageYear: number= currentYear-year;
    let ageMonth:number =  currentMonth-month;
    let ageDay:number =  currentDay-day;
 

    let previousMonthDays:number= daysInTheMonth(year, (month-1))
    
    if (day >0 && month > 0 && year > 0 && month<=12 && year <= currentYear ){      
        
        if (day ===31){
            if (month ===4|| month ===6 ||month===9
                || month===11 ){
                    currentDay=0;
                    currentMonth=0;
                    ageDay=0-day;
                    ageMonth= 0-month;
                    ageYear = 0-year;

                    output(ageYear, ageMonth, ageDay);
                    

                    inputDay.style.borderColor= 'red';
                    dayError.innerText = ("Days in " + months[month-1] + " can't exceed 30 days");
                    dayL.style.color='red';
                    
                    inputMonth.style.borderColor= 'red';
                    monthError.innerText = ("Days in " + months[month-1] + " can't exceed 30 days");
                    monthL.style.color='red';
                
                }};
        if (month===2){
            if(day >daysMonth){

                currentDay=0;
                currentMonth=0;
                ageDay=0-day;
                ageMonth= 0-month;
                ageYear = 0-year;

                output(ageYear, ageMonth, ageDay);
                    

                inputDay.style.borderColor= 'red';
                dayError.innerText = ("February " + year+ " was "+ daysMonth+" days.");
                dayL.style.color='red';

                inputMonth.style.borderColor= 'red';
                monthError.innerText = ("February " + year+ " was "+ daysMonth+" days.");
                monthL.style.color='red';
             
            }};
        if (year === currentYear){
            if(month > currentMonth){

                currentDay=0;
                currentMonth=0;
                ageDay=0-day;
                ageMonth= 0-month;
                ageYear = 0-year;

                output(ageYear, ageMonth, ageDay);
                
                inputMonth.style.borderColor= 'red';
                monthError.innerText = ("Future date not valid");
                monthL.style.color='red';

                inputDay.style.borderColor= 'red';
                dayError.innerText = ("Future date not valid");
                dayL.style.color='red';

            };


            if (month === currentMonth && day > currentDay){
 
                currentDay=0;
                currentMonth=0;
                ageDay=0-day;
                ageMonth= 0-month;
                ageYear = 0-year;

                output(ageYear, ageMonth, ageDay);
                
                
                inputDay.style.borderColor= 'red';
                dayError.innerText = ("Future date not valid");
                dayL.style.color='red';

                inputMonth.style.borderColor= 'red';
                monthError.innerText = ("Future date not valid");
                monthL.style.color='red';
             
            };



        };

        if (month >currentMonth && year < currentYear){
            currentMonth+=12;
            if (day>currentDay){
                currentMonth-=1;
                currentDay+=previousMonthDays;
                ageMonth = currentMonth-month;
                ageDay=currentDay-day;
                ageYear=currentYear-year;
                ageYear-=1

                output(ageYear, ageMonth, ageDay);
            };
            
            if (day<=currentDay){
                ageMonth = currentMonth-month;
                ageDay=currentDay-day;
                ageYear=currentYear-year;

                output(ageYear, ageMonth, ageDay);
            };
            
        };

        
        if (day>currentDay){
            if (month <currentMonth && year <currentYear){
                currentMonth -= 1;
                currentDay += previousMonthDays
                ageDay= currentDay-day; 
                ageMonth= currentMonth-month;
                ageYear= currentYear-year;
                // done
 

                output(ageYear, ageMonth, ageDay);
                 

            };

            if (month >=currentMonth && year <currentYear){
                console.log(currentYear);
                currentMonth +=12;
                currentMonth -= 1;
                currentDay += previousMonthDays
                ageDay= currentDay-day; 
                ageMonth= currentMonth-month;
                ageYear= currentYear-year;
                console.log(ageMonth);

                // done
            };

            
        // ageDay=currentDay-day;
        // ageMonth=currentMonth-month;
        // ageYear=currentYear-year;

        // output(ageYear, ageMonth, ageDay);

            

                       
        } else{
            ageYear=currentYear-year;
            ageMonth=currentMonth-month;
            ageDay=currentDay-day;
            output(ageYear, ageMonth, ageDay);


        };
    


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

    function output(ageYear:number, ageMonth:number, ageDay:number) {

        let dateValues:number[]=[ageYear, ageMonth, ageDay];
        
        


        for(let i=0; i<dateValues.length; i++){
            outP[i].innerText= String (dateValues[i])

            if (dateValues[i]>=0  && dateValues[i]<10){
                // let outAnswer:string =String (dateValues[i])
                outP[i].innerText= 0+String ( dateValues[i]);
 
            };

            if (dateValues[i]>10){
                outP[i].innerText= String (dateValues[i]);
            }
            if (dateValues[i]<0){
                outP[i].innerText="--";
                outP[i].style.color='red'
                outP2[i].innerText="Invalid";
                outP2[i].style.color='red'
            };

            

            
        };
                
    


        
    };
})
