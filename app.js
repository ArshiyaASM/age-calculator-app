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
    

    new Promise((resolve , reject)=>{

        if(!(input[0].value.length == 0) || !(input[0].value == " ")){
        input[0].style.border = "1px solid #6f6b6b";
        input[0].style.color = "#6f6b6b";
        error[0].innerHTML = "";
        label[0].style.color = "#6f6b6b";
        checker = true;
        resolve()
        }else {
            reject()
        }
    }).then(()=>{
        return new Promise((resolve, reject)=>{
            if(Number(input[0].value) <= 31 && Number(input[0].value) > 0){
                input[0].style.border = "1px solid #6f6b6b";
                input[0].style.color = "#6f6b6b";
                error[0].innerHTML = "";
                label[0].style.color = "#6f6b6b";
                checker = true;
                resolve()
            }else {
                reject()
            }
        })
    }).then(()=>{
        return new Promise((resolve, reject)=>{
            for(let item of input[0].value){
                if(Number(item) || item == 0 && checker == true){
                    input[0].style.border = "1px solid #6f6b6b";
                    input[0].style.color = "#6f6b6b";
                    error[0].innerHTML = "";
                    label[0].style.color = "#6f6b6b";
                    checker = true;
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
        checker = false;
    })
})




// for month input 


input[1].addEventListener("blur" , ()=>{


    return new Promise((resolve, reject)=>{
        if(!(input[1].value.length == 0) || !(input[1].value == " ")){
            resolve()
            checker1 = true;
            input[1].style.border = "1px solid #6f6b6b";
            input[1].style.color = "#6f6b6b";
            error[1].innerHTML = "";
            label[1].style.color = "#6f6b6b";
        }else {
            reject() 
        }
    }).then(()=>{
        return new Promise((reslove, reject)=>{
            if(Number(input[1].value) <= 12 && Number(input[1].value) > 0){
                reslove();
                checker1 = true;
                input[1].style.border = "1px solid #6f6b6b";
                input[1].style.color = "#6f6b6b";
                error[1].innerHTML = "";
                label[1].style.color = "#6f6b6b";
            }else {
                reject();
            }
        })
    }).then(()=>{
        return new Promise((reslove, reject)=>{
            for(let item of input[1].value){
                if(Number(item) || item == 0){
                    reslove();
                    checker1 = true;
                    input[1].style.border = "1px solid #6f6b6b";
                    input[1].style.color = "#6f6b6b";
                    error[1].innerHTML = "";
                    label[1].style.color = "#6f6b6b";
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

    new Promise((resolve , reject)=>{
        if(!(input[2].value.length == 0) || !(input[2].value == " ")){
        resolve()
        input[2].style.border = "1px solid #6f6b6b";
        input[2].style.color = "#6f6b6b";
        error[2].innerHTML = "";
        label[2].style.color = "#6f6b6b";
        checker2 = true;
        }else {
            reject()
        }
    }).then(()=>{
        return new Promise((resolve , reject)=>{
            const different = todyDate.diff(date);
            if(different > 0){
                resolve()
                input[2].style.border = "1px solid #6f6b6b";
                input[2].style.color = "#6f6b6b";
                error[2].innerHTML = "";
                label[2].style.color = "#6f6b6b";
                checker2 = true;
            }else {
                reject()
                
            }
        })
    }).then(()=>{
        return new Promise((resolve, reject)=>{
            if(input[2].value.length == 4){
                resolve()
                input[2].style.border = "1px solid #6f6b6b";
                input[2].style.color = "#6f6b6b";
                error[2].innerHTML = "";
                label[2].style.color = "#6f6b6b";
                checker2 = true;
            }else {
                reject()
            }
        })
    }).then(()=>{
        return new Promise((resolve, reject)=>{
            if(input[2].value > 1900){
                resolve
                input[2].style.border = "1px solid #6f6b6b";
                input[2].style.color = "#6f6b6b";
                error[2].innerHTML = "";
                label[2].style.color = "#6f6b6b";
                checker2 = true;
            }else {
                reject()
            }
        })
    }).then(()=>{
        return new Promise((resolve, reject)=>{
            for(let item of input[2].value){
                if(Number(item) || item == 0){
                    resolve()
                    input[2].style.border = "1px solid #6f6b6b";
                    input[2].style.color = "#6f6b6b";
                    error[2].innerHTML = "";
                    label[2].style.color = "#6f6b6b";
                    checker2 = true;
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
    new Promise((resolve, reject)=> {
        if(checker == true && checker1 == true && checker2 == true){
            resolve();
        }else {
            reject();
        }
    }).then(()=>{
        return new Promise((resolve, reject)=>{
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


            let different = new Date() - new Date(input[2].value+"-"+input[1].value+"-"+input[0].value);
            console.log(different)
            if(different > 0) {
                resolve()
            }
            
            else {
                reject()
            }

        })
    }).then(()=>{
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
        

        if(input[0].value.length == 1){
            input[0].value = `0${input[0].value}`;
            console.log(input[0].value);
        }

        if(input[1].value.length == 1){
            input[1].value = `0${input[1].value}`;
            console.log(input[1].value);
        }



        let dob = new Date((input[2].value+"-"+input[1].value+"-"+input[0].value + "T00:00:00"));
        console.log(dob);

        const currentDate = new Date();
        const utcOffset = currentDate.getTimezoneOffset() * 60000;
        const UTCcurrentDate = new Date(currentDate.getTime() + utcOffset);


        let age = UTCcurrentDate.getFullYear() - dob.getFullYear();
        year.innerHTML = age;

        let monthDiff = UTCcurrentDate.getMonth() - dob.getMonth();
        let dayDiff = UTCcurrentDate.getDate() - dob.getDate();

        if(monthDiff < 0 || monthDiff === 0 && dayDiff < 0){
            age--;
        }




        if(dayDiff < 0){
            const dayInPrevMonth = new Date(UTCcurrentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
            dayDiff = dayInPrevMonth + UTCcurrentDate.getDate() - dob.getDate();
            monthDiff--;
        }

        if(monthDiff < 0){
            monthDiff += 12
        }

        year.innerHTML = age;
        month.innerHTML = monthDiff;
        day.innerHTML = dayDiff;

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

        checker = false;
        input[0].style.border = "1px solid rgb(255, 87, 87)";
        input[0].style.color = "rgb(255, 87, 87)";
        error[0].innerHTML = "Must be valid day";
        label[0].style.color = "rgb(255, 87, 87)";
        checker3 = false;
    })
})



