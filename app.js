const input = document.querySelectorAll("input[type = 'text']");
const button = document.querySelector(".button");
const error = document.querySelectorAll(".error");
const year = document.querySelector(".year_age");
const month = document.querySelector(".month_age");
const day = document.querySelector(".day_age");
const label = document.querySelectorAll("label");


let check = false;
let checker1 = false;
let checker2 = false;
let checker3 = false;

// for days input

input[0].addEventListener("blur" , ()=>{
    function back(){
        input[0].style.border = "1px solid #6f6b6b";
        input[0].style.color = "#6f6b6b";
        error[0].innerHTML = "";
        label[0].style.color = "#6f6b6b";
        check = true;
    }

    new Promise((resolve , reject)=>{

        if(!(input[0].value.length == 0) || !(input[0].value == " ")){
        back();
        resolve();
        }else {
            reject()
        }
    }).then(()=>{
        return new Promise((resolve, reject)=>{
            if(Number(input[0].value) <= 31 && Number(input[0].value) > 0){
                back();
                resolve()
            }else {
                reject()
            }
        })
    }).then(()=>{
        return new Promise((resolve, reject)=>{
            for(let item of input[0].value){
                if(Number(item) || item == 0 && check == true){
                    back();
                    resolve()
                }else {
                   reject()
                }
            }  
        })
    }).catch(()=>{
        input[0].style.border = "1px solid rgb(255, 87, 87)";
        input[0].style.color = "rgb(255, 87, 87)";
        error[0].innerHTML = "Must be valid day";
        label[0].style.color = "rgb(255, 87, 87)";
        check = false;
    })
})




// for month input 


input[1].addEventListener("blur" , ()=>{

    function back(){
        checker1 = true;
        input[1].style.border = "1px solid #6f6b6b";
        input[1].style.color = "#6f6b6b";
        error[1].innerHTML = "";
        label[1].style.color = "#6f6b6b";
    }

    return new Promise((resolve, reject)=>{
        if(!(input[1].value.length == 0) || !(input[1].value == " ")){
            resolve();
            back();
        }else {
            reject() 
        }
    }).then(()=>{
        return new Promise((reslove, reject)=>{
            if(Number(input[1].value) <= 12 && Number(input[1].value) > 0){
                reslove();
                back();   
            }else {
                reject();
            }
        })
    }).then(()=>{
        return new Promise((reslove, reject)=>{
            for(let item of input[1].value){
                if(Number(item) || item == 0){
                    reslove();
                    back();
                }else {
                    reject();
                }
            } 
        })
    }).catch(()=>{
        checker1 = false;
        input[1].style.border = "1px solid rgb(255, 87, 87)";
        input[1].style.color = "rgb(255, 87, 87)";
        error[1].innerHTML = "Must be valid month";
        label[1].style.color = "rgb(255, 87, 87)";
    })
})



// for year input 






input[2].addEventListener("blur" , ()=>{
    const todyDate = new moment();
    const date = new moment(input[2].value);

    function back(){
        input[2].style.border = "1px solid #6f6b6b";
        input[2].style.color = "#6f6b6b";
        error[2].innerHTML = "";
        label[2].style.color = "#6f6b6b";
        checker2 = true;
    }

    new Promise((resolve , reject)=>{
        if(!(input[2].value.length == 0) || !(input[2].value == " ")){
        resolve()
        back()
        }else {
            reject()
        }
    }).then(()=>{
        return new Promise((resolve , reject)=>{
            const different = todyDate.diff(date);
            if(different > 0){
                resolve()
                back()
            }else {
                reject()
                
            }
        })
    }).then(()=>{
        return new Promise((resolve, reject)=>{
            if(input[2].value.length == 4){
                resolve()
                back()
            }else {
                reject()
            }
        })
    }).then(()=>{
        return new Promise((resolve, reject)=>{
            if(input[2].value > 1900){
                resolve()
                back()

            }else {
                reject()
            }
        })
    }).then(()=>{
        return new Promise((resolve, reject)=>{
            for(let item of input[2].value){
                if(Number(item) || item == 0){
                    resolve()
                    back()
                }else {
                    reject()
                }
        
            } 
        })
    })
    .catch(()=>{
        input[2].style.border = "1px solid rgb(255, 87, 87)";
        input[2].style.color = "rgb(255, 87, 87)";
        error[2].innerHTML = "Must be valid year"; 
        label[2].style.color = "rgb(255, 87, 87)";
        checker2 = false;
    })
    
})



button.addEventListener("click" , ()=>{
    function back(){
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

        check = true;
        input[0].style.border = "1px solid #6f6b6b";
        input[0].style.color = "#6f6b6b";
        error[0].innerHTML = "";
        label[0].style.color = "#6f6b6b";
    }



    new Promise((resolve, reject)=> {
        if(check == true && checker1 == true && checker2 == true){
            resolve();
        }else {
            reject();
        }
    }).then(()=>{
        return new Promise((resolve, reject)=>{
            back();

            let different = new Date() - new Date(input[2].value+"-"+input[1].value+"-"+input[0].value);
            if(different > 0) {
                resolve()
            }
            
            else {
                reject()
            }

        })
    }).then(()=>{
        back();
        ageCalculator();
    }).catch((Error)=>{
        console.log(Error)
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

        check = false;
        input[0].style.border = "1px solid rgb(255, 87, 87)";
        input[0].style.color = "rgb(255, 87, 87)";
        error[0].innerHTML = "Must be valid day";
        label[0].style.color = "rgb(255, 87, 87)";
        checker3 = false;
    })
})




function ageCalculator(){
    if(input[0].value.length == 1){
        input[0].value = `0${input[0].value}`;
    }
    if(input[1].value.length == 1){
        input[1].value = `0${input[1].value}`;
    }

    let UTCdob = new Date(input[2].value, input[1].value - 1, input[0].value);
    // console.log(dob)
    const currentDate = new Date();
    const UTCcurrentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());


    let age = UTCcurrentDate.getFullYear() - UTCdob.getFullYear();
    let monthDiff = UTCcurrentDate.getMonth() - UTCdob.getMonth();
    let dayDiff = UTCcurrentDate.getDate() - UTCdob.getDate();

    if(monthDiff < 0 || monthDiff === 0 && dayDiff < 0){
        age--;
    }

    if(dayDiff < 0){
        const dayInPrevMonth = new Date(UTCcurrentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        dayDiff = dayInPrevMonth + UTCcurrentDate.getDate() - UTCdob.getDate();
        monthDiff--;
    }

    if(monthDiff < 0){
        monthDiff += 12
    }

    year.innerHTML = age;
    month.innerHTML = monthDiff;
    day.innerHTML = dayDiff;
}