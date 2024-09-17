let differenceMin = 0;
let differenceHour = 0;
const submitBtn = document.getElementById('sumbit');

function insertRow(ststus, date, employeeName, employeeNo, department, EntryTime, ExitTime) {
    const table = document.getElementById('table-box').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);

    cell1.innerHTML = employeeName;
    cell2.innerHTML = employeeNo;
    cell3.innerHTML = date;
    cell4.innerHTML = department;
    // cell5.innerHTML = ststus;
    if(ststus == 'present'){
        cell5.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>'
        cell5.style.color = 'green';
    }
    else {
        cell5.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>'
        cell5.style.color = 'red';
    }
    cell5.style.fontSize = "30px";
    cell6.innerHTML = EntryTime;
    cell7.innerHTML = ExitTime;
    cell8.innerHTML = `${differenceHour}H:${differenceMin}M`;
}

const displayName = document.getElementById('display-name');
const displayNumber = document.getElementById('display-number');
const displayDepartment = document.getElementById('display-department');
const displayAttendence = document.getElementById('display-attendence');
const displayEntryTime = document.getElementById('display-entry-time');
const displayExitTime = document.getElementById('display-exit-time');
const displayDate = document.getElementById('display-date');

function displayData(ststus, date, employeeName, employeeNo, department, EntryTime, ExitTime, totalMinutesEntry, totalMinutesExit) {
    displayName.innerHTML = employeeName;
    displayNumber.innerHTML = employeeNo;
    displayDepartment.innerHTML = department;
    displayAttendence.innerHTML = ststus;
    displayEntryTime.innerHTML = EntryTime;
    displayExitTime.innerHTML = ExitTime;
    displayDate.innerHTML = date
}
const moveBtn = document.getElementById('move-btn');
moveBtn.addEventListener('click', function(){
    insertRow(displayAttendence.innerHTML, displayDate.innerHTML, displayName.innerHTML, displayNumber.innerHTML, displayDepartment.innerHTML, displayEntryTime.innerHTML, displayExitTime.innerHTML);
})
submitBtn.addEventListener('click', function() {
    attendenceStatusInput = document.getElementById('attendence').value;
    presentDate = document.getElementById('present-date').value;
    employeeName = document.getElementById('employee-name').value;
    employeeNo = document.getElementById('employee-no').value;
    department = document.getElementById('department').value;
    officeEntryTime = document.getElementById('office-entry-time').value;
    officeExitTime = document.getElementById('office-exit-time').value;


    const [hour, min] = officeEntryTime.split(':').map(Number);
    const totalMinutesEntry = (hour * 60) + min;

    const [hour2, min2] = officeExitTime.split(':').map(Number);
    const totalMinutesExit = (hour2 * 60) + min2;

    differenceHour = Math.floor((totalMinutesExit - totalMinutesEntry) / 60);
    differenceMin = (totalMinutesExit - totalMinutesEntry) % 60;
    displayData(attendenceStatusInput, presentDate, employeeName, employeeNo, department, officeEntryTime, officeExitTime);
})