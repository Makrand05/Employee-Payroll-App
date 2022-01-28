window.addEventListener('DOMContentLoaded',()=>{
    createInnerHTML();
    console.log("hello");
});

const createInnerHTML = () => {

  const innnerHTML = `
    
    <tr>
    <th>Profile</th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>
</tr>
    
        <tr>
            <td><img class="profile" src="../assert/profile-images/Ellipse -5.png"></td>
            <td>Mak</td>
            <td>Male</td>
            <td>
                <div class="dept-label">HR</div>
                <div class="dept-label">Engineer</div>
            </td>
            <td>400000</td>
            <td>16 Nov 2021</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete" src="../assert/icons/delete-black-18dp.svg">
                <img id="1" alt="edit" onclick="update(this)" src="../assert/icons/create-black-18dp.svg">
            </td>
        </tr>
    
    `;

    document.querySelector('#display').innerHTML=innnerHTML;
};
