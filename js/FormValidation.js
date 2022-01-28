window.addEventListener('DOMContentLoaded',(event)=>{
    // validateName();
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
  
     })
}
function salaryRange(){
    const salary = document.querySelector("#salary");
        const output = document.querySelector('.salary-output');
        salary.addEventListener('input', function () {
            output.textContent = salary.value;
        })
}

const save=()=>{
    try{
    let employeePayrollData= payrollData();
    // Store in local storage data

    }
    catch(e){return;}
}
const payrollData=()=>{
    let employeePayrollData = new EmployeePayrollData();
    //validation for Name
    try {
    
        employeePayrollData.name=document.querySelector('#empName').value;

        const textError=document.querySelector('.text-error');
        setTextValue(".text-error", "");
      } catch (e) {
        setTextValue(".text-error", e);
      }
    // For thr date
   
    try{
        let date=getInputValueId('#day')+" "+getInputValueId('#month')+" "+getInputValueId('#year');

        employeePayrollData.startDate=new Date(Date.parse(date))
        setTextValue('.date-error',"")
    }
    catch(e)
    {
        setTextValue('.date-error',e);
       
    }
    
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues("[name=department]");
    employeePayrollData.salary = document.querySelector('#salary').value;
    employeePayrollData.note = document.querySelector('#notes').value;

    employeePayrollData.id=new Date().getTime()+1
    return employeePayrollData;
}
const getInputValueId=(id)=>{
    return document.querySelector(id).value;
}
const setTextValue = (id, message) => {
    const textError = document.querySelector(id);
    textError.textContent = message;
  };
  const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if (item.checked) selItems.push(item.value);
    });
    return selItems;
}

