window.addEventListener('DOMContentLoaded',(event)=>{
    validateName();
    salaryRange();
});

function validateName(){
    const name=document.querySelector('#name1');
    // console.log(name);
    const textError=document.querySelector('.text-error');
    name.addEventListener('input',function(){
        try{
            const emp= new EmployeePayrollData();
            emp.name=name.value;
            console.log(name.value);
            textError.textContent="";
        }
        catch(e){

            textError.textContent=e;
        }
    // const nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$')
    // if(nameRegex.test(name.value)){
    //     textError.textContent="";
    // }
    // else{
    //     textError.textContent="*Name is invalid";
    // }
     })
}
function salaryRange(){
    const salary = document.querySelector("#salary");
        const output = document.querySelector('.salary-output');
        salary.addEventListener('input', function () {
            output.textContent = salary.value;
        })
}