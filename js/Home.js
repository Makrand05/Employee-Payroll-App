window.addEventListener('DOMContentLoaded',()=>{
    emplyeeList=getEmplyeCountFromStorage();
    
    document.querySelector(".emp-count").textContent=emplyeeList.length;
    createInnerHTML();
});

const getEmplyeCountFromStorage=()=>{
  //  console.log(localStorage.getItem('EmployeePayrollList'));
return localStorage.getItem('EmployeePayrollList')? JSON.parse(localStorage.getItem('EmployeePayrollList')):[];
}
const createInnerHTML = () => {
       const headerHtml = `
    
    <tr>
    <th>Profile</th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>
    </tr>
    
    `;
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmplyeePayrollJSON();
    for (const empPayrollData of empPayrollList) {
        innerHtml =`${innerHtml}
        <tr>
            <td><img class="profile" src="${empPayrollData._profilePic}"></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>  ${getDeptHTML(empPayrollData._department)}
            </td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
                <img id="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="../assert/icons/delete-black-18dp.svg">
                <img id="${empPayrollData._id}" alt="edit" onclick="update(this)" src="../assert/icons/create-black-18dp.svg">
            </td>
        </tr>
    
        `;
    }
        document.querySelector('#display').innerHTML = innerHtml;
    }
const createEmplyeePayrollJSON=()=>{
    let empPayrollList=[
        {
            "id": 1,
            "_name": "Mark",
            "_gender": "male",
            "_department": [
              "Finance"
            ],
            "_salary": "500000",
            "_startDate": 1572287400000,
            "_note": "All In One",
            "_profilePic": "../assert/profile-images/Ellipse -3.png"
          },
          {
            "id": 2,
            "_name": "Bill",
            "_gender": "male",
            "_department": [
              "Engineering","Finance"
            ],
            "_salary": "500000",
            "_startDate": "29 Oct 2019",
            "_note": "Terrific Engineer",
            "_profilePic": "../assert/profile-images/Ellipse -4.png"
          }
    ];
    return empPayrollList;
}

const getDeptHTML=(deptList)=>{
    let deptHTML='';
    for (const dept of deptList){

        deptHTML=`${deptHTML}
        <div class="dept-label">${dept}</div>
        `;
    }
    return deptHTML;
}