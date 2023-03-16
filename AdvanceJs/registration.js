const name = document.querySelector('.customerid');
const gender = document.querySelector('.customername');
const age = document.querySelector('.email');
const campus = document.querySelector('.mobno');
const tableBody= document.querySelector('.tableBody')
let allData = [
    {
        customerid: 'Maria',
        customername: 'female',
        email:"180",
        mobno: "cago"
    },{
        customerid: 'ria',
        customername: 'male',
        email:"181",
        mobno: "icago"
        
    },{
        customerid: 'ia',
        customername: 'fee',
        email:"18",
        mobno: "hicago"
    }
    
];
// function editName(index){
//    let editedText =  prompt("Enter something")
//    allData[index].name =editedText
//    displayData()
// }
// function deleteRow(index){
//     allData.splice(index,1);
//     displayData()
// }


//arr=[a,b,c]==> [...arr,d] ==>[a,b,c,d]
function displayData(){
    tableBody.innerHTML="";
    allData.map((item,index)=>{
        tableBody.innerHTML+=
        // <tr>
        // <td>${item.customerid} <button onclick="editName(${index})">edit</button> </td>
        `<tr>
        <td>${item.customername}</td>        
        <td>${item.email}</td>
       <td>${item.mobno}</td>
       <td><button onclick="submitBtn(${index}">Submit</button></td>
             </tr>`
    //    <td> <button onclick="deleteRow(${index})">Delete </button> </td>
    //     </tr>
    //     `
    
    })

}
function storeData(){
    allData = [...allData,
        {
            "customerid": customerid.value,
            "customername": customername.value,
            "email": email.value,
            "mobno": mobno.value
        }
    ];
   
    displayData()
}

const submitBtn = document.querySelector('.submitBtn');
submitBtn.addEventListener('click', storeData)
displayData()