

function openAccount() {
    window.location.href = "openAccount.html"
}
function yesSign() {
    window.location.href = "userInfo.html"
}

function toSignIn() {
    alert("Go back and SignUp")
    window.location.href = "signInGtApp.html"
}
function goLogIn() {
        window.location.href = "signInGtApp.html"
    }
 
   function backDashBoard(){
    window.location.href = "gtDashboard.html"
   }

  function transfer(){
    window.location.href = "transfer.html"
  } 
  function transferBack(){
    window.location.href = "gtDashboard.html"
  } 

  function paymentBack(){
  window.location.href = "gtDashboard.html"
} 
  function payment(){
    window.location.href = "payment.html"
  } 


var allUsers = []
if (localStorage.gtUsers) {
    allUsers = JSON.parse(localStorage.getItem("gtUsers"))
    //  = oldUsers
}

function proceedIn() {
   if(mobileNumber ==""|| fName.value==""|| ln.value==""||
    accountGender.value==""|| accountPurpose.value==""||dob.value==""||em.value=="" ||mn.value==""||
    ad.value=="" || mt.value=="" || ps.value==""|| pin.value =="")
    {alert("Fill all Informations")}

    else{
        
        eachUser = {
        mobilenumber: mobileNumber.value,
        bvn: bvn.value,
        firstname: fName.value,
        middlename: middleName.value,
        lastname: ln.value,
        accountgender: accountGender.value,
        accountpurpose: accountPurpose.value,
        dateofbirth: dob.value,
        email: em.value,
        mothername: mn.value,
        address: ad.value,
        monthlyturnover: mt.value,
        password: ps.value,
        accountNo: `${Math.floor(Math.random() * 10000000000)}`,
        balance: 1000.00,
        transactionpin: pin.value,
        timeSection: `${new Date()}`,
        history: [],
    }
    console.log(allUsers)
    allUsers.push(eachUser);
    // console.log(allUsers)
    localStorage.setItem('gtUsers', JSON.stringify(allUsers))
    window.location.href = "signInGtApp.html"
}

    // mobileNumber.value = ""
    // bvn.value = ""
    // fName.value = ""
    // middleName.value = ""
    // ln.value = ""
    // accountPurpose.value = ""
    // accountPurpose.value = ""
    // dob.value = ""
    // em.value = ""
    // mn.value = ""
    // ad.value = ""
    // mt.value = ""
    // ps.value = ""

}



function loginUser() {

    
    let userEmail = em.value
    userPassword = ps.value
    var found = false

     if(ps.value == "" || ps.value == ""){
        alert("Fill in Your Email & Password")
    }

    else {
        for (let index = 0; index < allUsers.length; index++) {
            if (allUsers[index].email == userEmail && allUsers[index].password == userPassword) {
                localStorage.setItem('presentUserIndex', index)
                found = true
                break;
            }
        }

        if (found == true) {
            window.location.href = "gtDashboard.html"

        } else (
            alert("User Not Found")
        )
    }
    ps.value = ""

}



function signUp() {
    window.location.href = "gtSignUp.html"
}


currentUserIndex = localStorage.getItem('presentUserIndex')

function loadUser() {

    display.innerHTML = `
            <h4 style="color: white;">${allUsers[currentUserIndex].firstname}</h4>
            <h5 style="color: white;"> Acc.No = ${allUsers[currentUserIndex].accountNo}</h5>
            <h6 style="color: white;" id="myBalance"> Balance : # ${allUsers[currentUserIndex].balance}</h6> 
            `
    showName.innerHTML = `<h4 style="color: white;"> Hi ${allUsers[currentUserIndex].firstname}</h4>`  
    showBvn.innerHTML = `<h4 style="color: white;"> BVN: ${allUsers[currentUserIndex].bvn}</h4>`   
    showTime.innerHTML = `<h5 style="color: white;"> Last Login: <br> ${allUsers[currentUserIndex].timeSection}</h5>`  
}


function depositMoney() {
    allUsers[currentUserIndex].balance = Number(allUsers[currentUserIndex].balance) + Number(userInput.value)
    myBalance.innerHTML = `Balance : # ${allUsers[currentUserIndex].balance}`
    localStorage.setItem('gtUsers', JSON.stringify(allUsers))
    userInput.value=""
}
function withdrawMoney() {
    if(userInput.value > allUsers[currentUserIndex].balance ){
        alert("Insufficient Fund")
    }
        else{
            allUsers[currentUserIndex].balance
            = Number(allUsers[currentUserIndex].balance) - Number(userInput.value)
           myBalance.innerHTML = `Balance : # ${allUsers[currentUserIndex].balance}`
        }
   
    localStorage.setItem('gtUsers', JSON.stringify(allUsers))
    userInput.value=""
}

function airtimeData() {
    window.location.href = "airtimeData.html"
}

function toSignUp() {
    window.location.href = "signInGtApp.html"
}


currentUserIndex = localStorage.getItem('presentUserIndex');

function goBack() {
    window.location.href = "gtDashboard.html"
}

function stay(param) {
    if (param == 'vtu') {
        displayMe.innerHTML = "VTU";
    }
    else if (param == 'epin') {
        displayMe.innerHTML = "EPIN";
    }
}
function stayCard(param) {
    if (param == 'transfer other') {
        displayMe.innerHTML = "transfer other";
    }
    else if (param == 'transfer gtbank') {
        displayMe.innerHTML = "transfer gtbank";
    }
}

function collectData() {
    myAccount.innerHTML = `${allUsers[currentUserIndex].firstname}  ${allUsers[currentUserIndex].balance}`
}

function displayInsideMe() {
    displayYou.innerHTML = myAccount.innerHTML
}



    function continueBox(){
      if(airtimeAmount.value == ""){ alert("Input airtime amount")}
      else if(numberCard.value == ""){ alert("Input Number")}
      else{
    
      }
    }


function confirmTransaction() {
        if(airtimeAmount.value > allUsers[currentUserIndex].balance ){
            alert("Insufficient Fund")}
        else if(pinBox.value != allUsers[currentUserIndex].transactionpin){
                alert("Incorrect Pin")
        }
    else{
        const airtimeHistory = {
            pn: numberCard.value,
            am: airtimeAmount.value,
            da: allUsers[currentUserIndex].accountNo
        }
        allUsers[currentUserIndex].balance = Number(allUsers[currentUserIndex].balance) - Number(airtimeAmount.value)
        // alert(`You have successfully recharge  ${airtimeAmount.value} airtime to ${numberCard.value} `)
        allUsers[currentUserIndex].history.push(airtimeHistory)
        localStorage.setItem('gtUsers', JSON.stringify(allUsers))
        window.location.href = "historyDetails.html"
    }


    
}
function cancelTransaction(){
    window.location.href = "airtimeData.html"
}

function transactionDetails(){
    window.location.href = "historyDetails.html" 
   }

   function makeDisplay(){
    showThis.innerHTML = ` <h3 id="acStyle">${allUsers[currentUserIndex].accountpurpose}</h3> <br>
                           <h3 id="acNoStyle"> ${allUsers[currentUserIndex].accountNo} </h3>  <br>
                           <h3 id="acBalace">Account Balance: #${allUsers[currentUserIndex].balance} </h3> 
                          `
eachHistory = allUsers[currentUserIndex].history

for (let index = 0; index < eachHistory.length; index++) {
    historyCon.innerHTML += `
    <div class=" historyBox my-4 py2">
    <div class="eChannel text-danger "> <h6>E- Channels</h6></div>
    <div id="dA">${eachHistory[index].am}</div>
    <div id="pN">${eachHistory[index].pn}</div>
    <div id="bene">Beneficiary</div>
  
    </div>
    `
    
}
                        
   }
//    <div id="tR">${eachHistory[index].da}</div>


function displayInsid() {
    displaying.innerHTML = myAccount.innerHTML
}










