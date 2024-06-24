const messageBar=document.querySelector('.message');
const messageBarImg=document.querySelector('.message img');
const messageBarText=document.querySelector('.message p');
const searchForm=document.querySelector('.search-form');
const searchInput=document.querySelector('.search-input');
const deleteForm=document.querySelector('.delete-form');
const deleteInput=document.querySelector('.delete-input');
const tabs=document.querySelectorAll('.tabs');
const buttons=document.querySelectorAll('ul li');
// const enterStd=document.querySelector('.enter-std');

const addStdForm=document.querySelector('.addstd-form');
const stdRollNo=document.querySelector('.add-rollno');
const stdName=document.querySelector('.add-name');
const stdMarks=document.querySelector('.add-marks');
const stdStatus=document.querySelector('.add-status');
const stdRecordTable=document.querySelector('.std-record table tbody');
const searchRecordTable=document.querySelector('.search-std-table table tbody');
const deleteRecordTable=document.querySelector('.delete-std-table table tbody');

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        tabs.forEach((tab)=>{
            tab.classList.add('hidden');
            if(tab.getAttribute('data-tab')===e.target.getAttribute('data-tab1')){
                tab.classList.remove('hidden');
            }
        })
    })
})
tabs.forEach((tab)=>{
    tab.classList.add('hidden');
    if(tab.getAttribute('data-tab')==='tab1'){
        tab.classList.remove('hidden');
    }
})


let stdData=[];

const addStudent=e=>{
    e.preventDefault();
    const stdRollNoValue=stdRollNo.value;
    const stdNameValue=stdName.value;
    const stdMarksValue=stdMarks.value;
    const stdStatusValue=stdStatus.value;
    errorCheck();
    const obj=createObject(stdRollNoValue,stdNameValue,stdMarksValue,stdStatusValue);
    if(stdData.length!==0){
        let findRollNo=false;
        for(let element of stdData){
            if(element.rollNo==stdRollNoValue){
                findRollNo=true;
            }
        }
        if(findRollNo===true){
            falseRecord();
        }else{
            stdData.push(obj);
            trCreator(obj);
            trCreatorForDelete(obj);
            trueRecord();

        }
    }else{
        stdData.push(obj);
        trCreator(obj);
        trCreatorForDelete(obj);
        trueRecord();
    }
}

const trCreator=(obj)=>{
    const tr=document.createElement('tr');
    tr.innerHTML=`<td>${obj.rollNo}</td>
    <td>${obj.stdName}</td>
    <td>${obj.stdMarks}</td>
    <td>${obj.stdStatus}</td>`
    stdRecordTable.append(tr);
}

const trueRecord=()=>{
    messageBarImg.src='img/accept.png';
    messageBarText.textContent="your record has been submitted.";
    messageBar.style.color="lightgreen";
}

const falseRecord=()=>{
    messageBarImg.src='img/delete-button.png';
    messageBarText.textContent="Record Already Exists On This Roll No.";
    messageBar.style.color="red";
}

const createObject=(rollNo,stdName,stdMarks,stdStatus)=>{
    let stdInfo={};
    stdInfo.rollNo=rollNo;
    stdInfo.stdName=stdName;
    stdInfo.stdMarks=stdMarks;
    stdInfo.stdStatus=stdStatus;

    return stdInfo;
}

const errorCheck=()=>{
    const stdRollNoValue=stdRollNo.value;
    const stdNameValue=stdName.value;
    const stdMarksValue=stdMarks.value;
    const stdStatusValue=stdStatus.value;
    const rollNoError=document.querySelector('.rollno-error');
    const nameError=document.querySelector('.name-error');
    const marksError=document.querySelector('.marks-error');
    const statusError=document.querySelector('.status-error');
    if(stdRollNoValue===''){
        stdRollNo.style.boxShadow="0 0 3px red";
        rollNoError.textContent="**Please Enter Roll No.";
    }
    else if(stdNameValue===''){
        stdName.style.boxShadow="0 0 3px red";
        nameError.textContent="**Please Enter Student Name.";
    }
    else if(stdMarksValue===''){
        stdMarks.style.boxShadow="0 0 3px red";
        marksError.textContent="**Please Enter Student Marks.";
    }
    else if(stdStatusValue===''){
        stdStatus.style.boxShadow="0 0 3px red";
        statusError.textContent="**Please Enter Student Status.";
    }
    
    if(stdRollNoValue!==''){
        stdRollNo.style.boxShadow="0 0 3px Green";
        rollNoError.textContent="";
    }
    if(stdNameValue!==''){
        stdName.style.boxShadow="0 0 3px Green";
        nameError.textContent="";
    }
    if(stdMarksValue!==''){
        stdMarks.style.boxShadow="0 0 3px Green";
        marksError.textContent="";
    }
    if(stdStatusValue!==''){
        stdStatus.style.boxShadow="0 0 3px Green";
        statusError.textContent="";
    }

    if(stdRollNoValue!=='' && stdNameValue!=='' && stdMarksValue!=='' && stdStatusValue!==''){
        stdRollNo.value='';
        stdName.value='';
        stdMarks.value='';
        stdStatus.value='';
        stdRollNo.style.boxShadow="0 0 3px rgba(0,0,0,0.2)";
        stdName.style.boxShadow="0 0 3px rgba(0,0,0,0.2)";
        stdMarks.style.boxShadow="0 0 3px rgba(0,0,0,0.2)";
        stdStatus.style.boxShadow="0 0 3px rgba(0,0,0,0.2)";
        messageBar.style.height='50px';
        messageBar.style.visibility='visible';
        messageBar.style.opacity='1';
        setTimeout(()=>{
            messageBar.style.height='0px';
            messageBar.style.visibility='hidden';
            messageBar.style.opacity='0';
        },1800)
    }
}

const checkRollNoInput=()=>{
        const stdRollNoValue=stdRollNo.value;
        const rollNoError=document.querySelector('.rollno-error');
        if(stdRollNoValue!==''){
            stdRollNo.style.boxShadow="0 0 3px Green";
            rollNoError.textContent="";
        }
}

const checkNameInput=()=>{
        const stdNameValue=stdName.value;
        const nameError=document.querySelector('.name-error');
        if(stdNameValue!==''){
            stdName.style.boxShadow="0 0 3px Green";
            nameError.textContent="";
        }
}

const checkMarksInput=()=>{
    const stdMarksValue=stdMarks.value;
    const marksError=document.querySelector('.marks-error');
    if(stdMarksValue!==''){
        stdMarks.style.boxShadow="0 0 3px Green";
        marksError.textContent="";
    }
}

const checkStatusInput=()=>{
    const stdStatusValue=stdStatus.value;
    const statusError=document.querySelector('.status-error');
    if(stdStatusValue!==''){
        stdStatus.style.boxShadow="0 0 3px Green";
        statusError.textContent="";
    }
}
const searchErrorCheck=()=>{
    const seachInputValue=searchInput.value;
    const searchError=document.querySelector('.search-error');
    // For search input start
    if(seachInputValue===''){
        searchInput.style.boxShadow="0 0 3px red";
        searchError.textContent="**Please Enter Roll No.";
    }
    // search input end

    if(seachInputValue!==''){
        searchInput.value='';
        searchInput.style.boxShadow="0 0 3px rgba(0,0,0,0.2)";
        searchError.textContent='';
    }
}
const checkSearchInput=()=>{
    const searchInputValue=searchInput.value;
    const searchError=document.querySelector('.search-error');
    if(searchInputValue!==''){
        searchInput.style.boxShadow="0 0 3px Green";
        searchError.textContent="";
    }
}

const trCreatorForSearch=(obj)=>{
    const tr=document.createElement('tr');
    tr.innerHTML=`<td>${obj.rollNo}</td>
    <td>${obj.stdName}</td>
    <td>${obj.stdMarks}</td>
    <td>${obj.stdStatus}</td>`
    searchRecordTable.appendChild(tr);
}
const searchStudent=e=>{
    const searchInputValue=searchInput.value;
    e.preventDefault();
    searchErrorCheck();
    if(stdData.length!==0){
        let index=-1;
        stdData.forEach((data,i)=>{
            if(data.rollNo===searchInputValue){
                index=i;
            }
            showMessageBar();
            trueRecord();
            messageBarText.textContent="Record Has Found.";
        });
        if(index!==-1){
            trCreatorForSearch(stdData[index]);
        }else{
            showMessageBar();
            messageBarText.textContent="Record Not Found!";
        }
    }else{
        showMessageBar();
        messageBarText.textContent="Empty Record!";
    }
}

const showMessageBar=()=>{
    messageBar.style.height='50px';
    messageBar.style.visibility='visible';
    messageBar.style.opacity='1';
    setTimeout(()=>{
        messageBar.style.height='0px';
        messageBar.style.visibility='hidden';
        messageBar.style.opacity='0';
    },1800);
    messageBarImg.src='img/delete-button.png';
    messageBar.style.color="red";
}

const trCreatorForDelete=(obj)=>{
    const tr=document.createElement('tr');
    tr.innerHTML=`<td>${obj.rollNo}</td>
    <td>${obj.stdName}</td>
    <td>${obj.stdMarks}</td>
    <td>${obj.stdStatus}</td>`
    deleteRecordTable.append(tr);
}

const deleteStudent=e=>{
    const deleteInputValue=deleteInput.value;
    e.preventDefault();
    deleteErrorCheck();
    if(stdData.length!==0){
        let index=-1;
        stdData.forEach((data,i)=>{
            if(data.rollNo===deleteInputValue){
                index=i;
            }
        });
        if(index!==-1){
            stdData.splice(index,1);
            if(deleteRecordTable){
                while(deleteRecordTable.firstChild){
                    deleteRecordTable.removeChild(deleteRecordTable.firstChild);
                }
            }
            stdRecordTable.innerHTML="";
            searchRecordTable.innerHTML="";
            stdData.forEach((element)=>{
                trCreatorForDelete(element);
                trCreator(element);
                // trCreatorForSearch(element);
            });
            showMessageBar();
            trueRecord();
            messageBarText.textContent="Record Has Deleted."
        }else{
            showMessageBar();
            messageBarText.textContent="Record Not Found."
        }
    }else{
        showMessageBar();
        messageBarText.textContent="Empty Record!";
    }
}

const deleteErrorCheck=()=>{
    const deleteInputValue=deleteInput.value;
    const deleteError=document.querySelector('.delete-error');
    // For delete input start
    if(deleteInputValue===''){
        deleteInput.style.boxShadow="0 0 3px red";
        deleteError.textContent="**Please Enter Roll No.";
    }
    // delete input end

    if(deleteInputValue!==''){
        deleteInput.value='';
        deleteInput.style.boxShadow="0 0 3px rgba(0,0,0,0.2)";
        deleteError.textContent='';
    }
}

const checkDeleteInput=()=>{
    const deleteInputValue=deleteInput.value;
    const deleteError=document.querySelector('.delete-error');
    if(deleteInputValue!==''){
        deleteInput.style.boxShadow="0 0 3px Green";
        deleteError.textContent="";
    }
}

addStdForm.addEventListener("submit",addStudent);
stdRollNo.addEventListener("input",checkRollNoInput);
stdName.addEventListener("input",checkNameInput);
stdMarks.addEventListener("input",checkMarksInput);
stdStatus.addEventListener("input",checkStatusInput);
searchForm.addEventListener("submit",searchStudent);
searchInput.addEventListener("input",checkSearchInput);
deleteForm.addEventListener("submit",deleteStudent);
deleteInput.addEventListener("input",checkDeleteInput);
// li.addEventListener("click",()=>{
//     if(messageBar.style.height==='50px'){
//         messageBar.style.height='0px';
//         messageBar.style.visibility='hidden';
//         messageBar.style.opacity='0';
//     }else{
//         messageBar.style.height='50px';
//         messageBar.style.visibility='visible';
//         messageBar.style.opacity='1';
//     }
// })