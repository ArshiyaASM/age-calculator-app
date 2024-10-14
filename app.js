const input = document.querySelectorAll("input[type = 'text']");
const button = document.querySelector(".button");
const error = document.querySelectorAll(".error");
const year = document.querySelector(".year_age");
const month = document.querySelector(".month_age");
const day = document.querySelector(".day_age");
const label = document.querySelectorAll("label");


let checker = false;
let checker1 = false;
let checker2 = false;
let checker3 = false;


// for days input

input[0].addEventListener("blur" , ()=>{
    if(!(input[0].value.length == 0) || !(input[0].value == " ")){
        checker = true;
        input[0].style.border = "1px solid #6f6b6b";
        input[0].style.color = "#6f6b6b";
        error[0].innerHTML = "";
        label[0].style.color = "#6f6b6b";
    }

    else {
        checker = false;
        input[0].style.border = "1px solid rgb(255, 87, 87)";
        input[0].style.color = "rgb(255, 87, 87)";
        error[0].innerHTML = "Must be valid day";
        label[0].style.color = "rgb(255, 87, 87)";
    }

    if(Number(input[0].value) <= 31 && Number(input[0].value) > 0 && checker == true){
        checker = true;
        input[0].style.border = "1px solid #6f6b6b";
        input[0].style.color = "#6f6b6b";
        error[0].innerHTML = "";
        label[0].style.color = "#6f6b6b";
    }

    else {
        checker = false;
        input[0].style.border = "1px solid rgb(255, 87, 87)";
        input[0].style.color = "rgb(255, 87, 87)";
        error[0].innerHTML = "Must be valid day";
        label[0].style.color = "rgb(255, 87, 87)";
    }

    for(let item of input[0].value){


        if(Number(item) || item == 0 && checker == true){
            checker = true;
            input[0].style.border = "1px solid #6f6b6b";
            input[0].style.color = "#6f6b6b";
            error[0].innerHTML = "";
            label[0].style.color = "#6f6b6b";
        }

        else {
            checker = false;
            input[0].style.border = "1px solid rgb(255, 87, 87)";
            input[0].style.color = "rgb(255, 87, 87)";
            error[0].innerHTML = "Must be valid day";
            label[0].style.color = "rgb(255, 87, 87)";
        }
    
    }

})




// for month input 


input[1].addEventListener("blur" , ()=>{


    if(!(input[1].value.length == 0) || !(input[1].value == " ")){
        checker1 = true;
        input[1].style.border = "1px solid #6f6b6b";
        input[1].style.color = "#6f6b6b";
        error[1].innerHTML = "";
        label[1].style.color = "#6f6b6b";
    }

    else {
        checker1 = false;
        input[1].style.border = "1px solid rgb(255, 87, 87)";
        input[1].style.color = "rgb(255, 87, 87)";
        error[1].innerHTML = "Must be valid month";
        label[1].style.color = "rgb(255, 87, 87)";
    }


    
    if(checker1 == true){

        if(Number(input[1].value) <= 12 && Number(input[1].value) > 0){
            checker1 = true;
            input[1].style.border = "1px solid #6f6b6b";
            input[1].style.color = "#6f6b6b";
            error[1].innerHTML = "";
            label[1].style.color = "#6f6b6b";
        }

        else {
            checker1 = false;
            input[1].style.border = "1px solid rgb(255, 87, 87)";
            input[1].style.color = "rgb(255, 87, 87)";
            error[1].innerHTML = "Must be valid month";
            label[1].style.color = "rgb(255, 87, 87)";
        }
 
    }



    if(checker1 == true){
       for(let item of input[1].value){


            if(Number(item) || item == 0){
                
                checker1 = true;
                input[1].style.border = "1px solid #6f6b6b";
                input[1].style.color = "#6f6b6b";
                error[1].innerHTML = "";
                label[1].style.color = "#6f6b6b";
            }

            else {
                checker1 = false;
                input[1].style.border = "1px solid rgb(255, 87, 87)";
                input[1].style.color = "rgb(255, 87, 87)";
                error[1].innerHTML = "Must be valid month";
                label[1].style.color = "rgb(255, 87, 87)";
            }
    
        } 
    }
    
})



// for year input 






input[2].addEventListener("blur" , ()=>{


    if(!(input[2].value.length == 0) || !(input[2].value == " ")){
        checker2 = true;
        input[2].style.border = "1px solid #6f6b6b";
        input[2].style.color = "#6f6b6b";
        error[2].innerHTML = "";
        label[2].style.color = "#6f6b6b";
    }

    else {
        checker2 = false;
        input[2].style.border = "1px solid rgb(255, 87, 87)";
        input[2].style.color = "rgb(255, 87, 87)";
        error[2].innerHTML = "Must be valid year";
    }


    const todyDate = new moment();
    const date = new moment(input[2].value);



    if(checker2 == true){
        const different = todyDate.diff(date);
        if(different > 0){
            checker2 = true;
            input[2].style.border = "1px solid #6f6b6b";
            input[2].style.color = "#6f6b6b";
            error[2].innerHTML = "";
            label[2].style.color = "#6f6b6b";
        }

        else {
            checker2 = false;
            input[2].style.border = "1px solid rgb(255, 87, 87)";
            input[2].style.color = "rgb(255, 87, 87)";
            error[2].innerHTML = "Must be valid year"; 
            label[2].style.color = "rgb(255, 87, 87)";
        }
    }

    if(checker2 == true){
        if(input[2].value.length == 4){
            checker2 = true;
            input[2].style.border = "1px solid #6f6b6b";
            input[2].style.color = "#6f6b6b";
            error[2].innerHTML = "";
            label[2].style.color = "#6f6b6b";
        }

        else {
            checker2 = false;
            input[2].style.border = "1px solid rgb(255, 87, 87)";
            input[2].style.color = "rgb(255, 87, 87)";
            error[2].innerHTML = "Must be valid year"; 
            label[2].style.color = "rgb(255, 87, 87)";
        }
    }
    
    if(checker2 == true){
        if(input[2].value > 1900){
            checker2 = true;
            input[2].style.border = "1px solid #6f6b6b";
            input[2].style.color = "#6f6b6b";
            error[2].innerHTML = "";
            label[2].style.color = "#6f6b6b";
        }

        else {
            checker2 = false;
            input[2].style.border = "1px solid rgb(255, 87, 87)";
            input[2].style.color = "rgb(255, 87, 87)";
            error[2].innerHTML = "Must be valid year"; 
            label[2].style.color = "rgb(255, 87, 87)";
        }
        
    }
    

    if(checker2 == true){
       for(let item of input[2].value){


            if(Number(item) || item == 0){
                
                checker2 = true;
                input[2].style.border = "1px solid #6f6b6b";
                input[2].style.color = "#6f6b6b";
                error[2].innerHTML = "";
                label[2].style.color = "#6f6b6b";
            }

            else {
                checker2 = false;
                input[2].style.border = "1px solid rgb(255, 87, 87)";
                input[2].style.color = "rgb(255, 87, 87)";
                error[2].innerHTML = "Must be valid year";
                label[2].style.color = "rgb(255, 87, 87)";
            }
    
        } 
    }
    
})



button.addEventListener("click" , ()=>{
    if(checker == true && checker1 == true && checker2 == true){
        checker2 = true;
        input[2].style.border = "1px solid #6f6b6b";
        input[2].style.color = "#6f6b6b";
        error[2].innerHTML = "";
        label[2].style.color = "#6f6b6b";

        checker1 = true;
        input[1].style.border = "1px solid #6f6b6b";
        input[1].style.color = "#6f6b6b";
        error[1].innerHTML = "";
        label[1].style.color = "#6f6b6b";

        checker = true;
        input[0].style.border = "1px solid #6f6b6b";
        input[0].style.color = "#6f6b6b";
        error[0].innerHTML = "";
        label[0].style.color = "#6f6b6b";



        const toDayDate = new moment();
        const dateInInput = new moment(input[2].value+"-"+input[1].value+"-"+input[0].value);

        const different = toDayDate.diff(dateInInput);


        if(different > 0) {
            checker2 = true;
            input[2].style.border = "1px solid #6f6b6b";
            input[2].style.color = "#6f6b6b";
            error[2].innerHTML = "";
            label[2].style.color = "#6f6b6b";

            checker1 = true;
            input[1].style.border = "1px solid #6f6b6b";
            input[1].style.color = "#6f6b6b";
            error[1].innerHTML = "";
            label[1].style.color = "#6f6b6b";

            checker = true;
            input[0].style.border = "1px solid #6f6b6b";
            input[0].style.color = "#6f6b6b";
            error[0].innerHTML = "";
            label[0].style.color = "#6f6b6b";

            checker3 = true;
        }

        else {
            checker2 = false;
            input[2].style.border = "1px solid rgb(255, 87, 87)";
            input[2].style.color = "rgb(255, 87, 87)";
            error[2].innerHTML = "Must be valid year";
            label[2].style.color = "rgb(255, 87, 87)";

            checker1 = false;
            input[1].style.border = "1px solid rgb(255, 87, 87)";
            input[1].style.color = "rgb(255, 87, 87)";
            error[1].innerHTML = "Must be valid month";
            label[1].style.color = "rgb(255, 87, 87)";

            checker = false;
            input[0].style.border = "1px solid rgb(255, 87, 87)";
            input[0].style.color = "rgb(255, 87, 87)";
            error[0].innerHTML = "Must be valid day";
            label[0].style.color = "rgb(255, 87, 87)";

            checker3 = false;

        }

        if(checker3 == true){

            const dob = new Date((input[2].value+"-"+input[1].value+"-"+input[0].value));
            const currentDate = new Date();

            const ageInMilliseconds = currentDate - dob;
            const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
            const age = Math.floor(ageInYears);

            currentDate.setFullYear(currentDate.getFullYear() - age);
            const monthDiff = currentDate.getMonth() - dob.getMonth();

            let months = monthDiff;
            if (currentDate.getDate() < dob.getDate()) {
                months--;
            }

            if(currentDate.getMonth() < dob.getMonth()){
                months += 12;
            }

            let days = currentDate.getDate() - dob.getDate();
            if (days < 0) {
                const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
                days = lastDayOfMonth - dob.getDate() + currentDate.getDate();
            }

            year.innerHTML = age;
            day.innerHTML =days;
            month.innerHTML = months;
        


        
            
        }

        
    }
    else {
        checker2 = false;
        input[2].style.border = "1px solid rgb(255, 87, 87)";
        input[2].style.color = "rgb(255, 87, 87)";
        error[2].innerHTML = "Must be valid year";
        label[2].style.color = "rgb(255, 87, 87)";

        checker1 = false;
        input[1].style.border = "1px solid rgb(255, 87, 87)";
        input[1].style.color = "rgb(255, 87, 87)";
        error[1].innerHTML = "Must be valid month";
        label[1].style.color = "rgb(255, 87, 87)";

        checker = false;
        input[0].style.border = "1px solid rgb(255, 87, 87)";
        input[0].style.color = "rgb(255, 87, 87)";
        error[0].innerHTML = "Must be valid day";
        label[0].style.color = "rgb(255, 87, 87)";

    }
})