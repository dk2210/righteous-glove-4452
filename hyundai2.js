let citychange = () => {
    let x = document.getElementById("selectcity").value;

    let y = document.getElementById("nameofcity");
    y.innerText = `New Hyundai Car Subscription in ${x}`;

    if (x == "Bangalore") {
        document.getElementById("amount1").innerText = "16,720";
        document.getElementById("amount2").innerText = "15,799";

    }
    else if (x == "Hyderabad") {
        document.getElementById("amount1").innerText = "15,610";
        document.getElementById("amount2").innerText = "13,999";
    }
    else if (x == "Mumbai") {
        document.getElementById("amount1").innerText = "14,170";
        document.getElementById("amount2").innerText = "13,199";
    }
    else if (x == "Delhi-NCR") {
        document.getElementById("amount1").innerText = "18,250";
        document.getElementById("amount2").innerText = "16,499";
    }
    else if (x == "Chennai") {
        document.getElementById("amount1").innerText = "15,200";
        document.getElementById("amount2").innerText = "14,399";
    }
    else {
        document.getElementById("amount1").innerText = "14,170";
        document.getElementById("amount2").innerText = "12,699";
    }
}

// ------------------------------mod------------------------------

// -----------------------------faq1-------------------------------------------------------------------------------
let p = 1
function faq1() {

    let x = document.getElementById("faq11");
    if (p == 1) {
        x.setAttribute("src", "./icons/minus-icon.png");
        document.getElementById("para1").innerText = "Hyundai car subscription vehicle will be covered by comprehensive insurance, to take care of damage cases. On every case of damage, your liability would be limited to the difference between the costs incurred to repair the damage and the proceeds from insurance claim with maximum liability limited to INR 10,000 In situations of irresponsible or unsafe or negligent usage, there could be discretionary exceptions to this policy, whereby you could be liable for all damages irrespective of whether or not we are able to claim insurance in such cases."
        p = 2;
    }
    else if (p == 2) {
        x.setAttribute("src", "./icons/plus-icon.png");
        document.getElementById("para1").innerText = "";
        p = 1;
    }


}

// -----------------------------faq2-------------------------------------------------------------------------------
let q = 1
function faq2() {

    let x = document.getElementById("faq22");
    if (q == 1) {
        x.setAttribute("src", "./icons/minus-icon.png");
        document.getElementById("para2").innerText = "The Hyundai car subscription process in Bangalore is very smooth. You can extend the car subscription anytime at normal prices or chose to return the car anytime by just paying the fee difference"
        q = 2;
    }
    else if (q == 2) {
        x.setAttribute("src", "./icons/plus-icon.png");
        document.getElementById("para2").innerText = "";
        q = 1
    }


}
// -----------------------------faq3-------------------------------------------------------------------------------
let r = 1
function faq3() {

    let x = document.getElementById("faq33");
    if (r == 1) {
        x.setAttribute("src", "./icons/minus-icon.png");
        document.getElementById("para3").innerText = "You can use the car from Hyundai car subscription for pretty much all the normal requirements in and around Bangalore. However abnormal usage (e.g., speed racing, towing/pushing/propelling, transportation of goods or people on commercial basis, transportation of large/heavy/hazardous items) is not allowed."
        r = 2;
    }
    else if (r == 2) {
        x.setAttribute("src", "./icons/plus-icon.png");
        document.getElementById("para3").innerText = "";
        r = 1
    }


}
// -----------------------------faq4-------------------------------------------------------------------------------
let s = 1
function faq4() {

    let x = document.getElementById("faq44");
    if (s == 1) {
        x.setAttribute("src", "./icons/minus-icon.png");
        document.getElementById("para4").innerText = "Hyundai car subscription offers the same benefits in Bangalore as other cities within India. The benefits of - No upfront payments such as down payment or road tax, flexibility of subscribing for min. 1 month and extending or returning anytime, insurance and maintenance included in monthly fees, 24X7 roadside assistance and hassle-free service & maintenance will make the car subscription decision a winner."
        s = 2;
    }
    else if (s == 2) {
        x.setAttribute("src", "./icons/plus-icon.png");
        document.getElementById("para4").innerText = "";
        s = 1
    }


}
// -----------------------------faq5-------------------------------------------------------------------------------
let t = 1
function faq5() {

    let x = document.getElementById("faq55");
    if (t == 1) {
        x.setAttribute("src", "./icons/minus-icon.png");
        document.getElementById("para5").innerText = "The car will be registered as a premium commercial vehicle (black plate) with an All India permit and can be driven anywhere within India without any concerns. It will be registered in the name of Revv (PrimeMover Mobility Technologies Pvt. Ltd.) or its supply partners. You can thus choose the Hyundai car subscription in Bangalore without any apprehension."
        t = 2;
    }
    else if (t == 2) {
        x.setAttribute("src", "./icons/plus-icon.png");
        document.getElementById("para5").innerText = "";
        t = 1
    }


}


function unboxed() {
    document.getElementById("un").style.color = "#1caba2";
    document.getElementById("ne").style.color = "black";
    let x = document.getElementById("detail");
    x.innerHTML = `<table>
  
   <tr >
     <td></td>
     <td><img class="small" src="https://www.revv.co.in/grapheneImages/newopen/ic-howit-work-1@2x.png" alt=""></td>
     <td></td>
     <td><img class="small" src="https://www.revv.co.in/grapheneImages/newopen/ic-howit-work-2@2x.png" alt=""></td>
  </tr>
 
  <tr>
    <td><img src="https://www.revv.co.in/grapheneImages/newopen/ic-web-x-1.svg" alt=""></td>
    <td>
      <h3>Select & Reserve</h3>
      <p>Pick your car model and reserve online</p>
    </td>
    <td><img  src="https://www.revv.co.in/grapheneImages/newopen/ic-web-x-2.svg" alt=""></td>
    <td>
     <h3>Super Fast Processing</h3>
      <p>We will call you to understand your </p>
      <p> preferences, basic KYC, Refundable Security </p>
      <p> Deposit etc. (No CIBIL Check Required)</p></td>
    </tr>
 
 
    <tr >
     <td></td>
     <td><img class="small" src="https://www.revv.co.in/grapheneImages/newopen/ic-howit-work-3@2x.png" alt=""></td>
     <td></td>
     <td><img class="small" src="https://www.revv.co.in/grapheneImages/newopen/ic-howit-work-4@2x.png" alt=""></td>
  </tr>
  <tr>
   <td><img src="https://www.revv.co.in/grapheneImages/newopen/ic-web-n-3.svg" alt=""></td>
   <td>
     <h3>Preparing Your Car</h3>
     <p>After detailed quality checks and deep cleaning, your Hyundai car is ready for delivery within 10-14 days</p>
   </td>
   <td><img  src="https://www.revv.co.in/grapheneImages/newopen/ic-web-x-4.svg" alt=""></td>
   <td><h3>Home Delivery</h3>
     <p>Get your Hyundai car delivered at your </p>
     <p> doorstep </p>
     </td>
   </tr>
   
 
 
   <tr >
     <td></td>
     <td><img class="small" src="https://www.revv.co.in/grapheneImages/newopen/ic-howit-work-5@2x.png" alt=""></td>
     <td></td>
     <td><img class="small" src="https://www.revv.co.in/grapheneImages/newopen/ic-howit-work-6@2x.png" alt=""></td>
  </tr>
 
 
  <tr>
   <td><img src="https://www.revv.co.in/grapheneImages/newopen/ic-web-x-5.svg" alt=""></td>
   <td>
     <h3>
       Hassle Free Experience</h3>
     <p>Enjoy your Hyundai car! We'll take care of routine service & insurance claims with doorstep service</p>
   </td>
   <td><img  src="https://www.revv.co.in/grapheneImages/newopen/ic-web-x-6.svg" alt=""></td>
   <td><h3>Return Anytime or Extend</h3>
     <p>Continue using the Hyundai car or return it anytime. </p>
    
     </td>
   </tr>
 
 
 
 
 
 
 </table>`
}

function newcar() {

    document.getElementById("ne").style.color = "#1caba2";
    document.getElementById("un").style.color = "black";
    let x = document.getElementById("detail");
    x.innerHTML = `<table>
  
   <tr >
     <td></td>
     <td><img class="small" src="https://www.revv.co.in/grapheneImages/newopen/ic-howit-work-1@2x.png" alt=""></td>
     <td></td>
     <td><img class="small" src="https://www.revv.co.in/grapheneImages/newopen/ic-howit-work-2@2x.png" alt=""></td>
  </tr>
 
  <tr>
    <td><img src="https://www.revv.co.in/grapheneImages/newopen/ic-web-x-1.svg" alt=""></td>
    <td>
      <h3>Select & Reserve</h3>
      <p>Pick your favorite Hyundai car and reserve online for free</p>
    </td>
    <td><img  src="https://www.revv.co.in/grapheneImages/newopen/ic-web-x-2.svg" alt=""></td>
    <td>
     <h3>Super Fast Processing</h3>
      <p>We will call you to understand your </p>
      <p> preferences, basic KYC, Refundable Security </p>
      <p> Deposit etc. (No CIBIL Check Required)</p></td>
    </tr>
 
 
    <tr >
     <td></td>
     <td><img class="small" src="https://www.revv.co.in/grapheneImages/newopen/ic-howit-work-3@2x.png" alt=""></td>
     <td></td>
     <td><img class="small" src="https://www.revv.co.in/grapheneImages/newopen/ic-howit-work-4@2x.png" alt=""></td>
  </tr>
  <tr>
   <td><img src="https://www.revv.co.in/grapheneImages/newopen/ic-web-n-3.svg" alt=""></td>
   <td>
     <h3>Car Ordering</h3>
     <p>We will order your brand new Hyundai car for you and get it within 30-45 days</p>
   </td>
   <td><img  src="https://www.revv.co.in/grapheneImages/newopen/ic-web-x-4.svg" alt=""></td>
   <td><h3>Delivery - Home or Showroom</h3>
     <p>Get your Hyundai car delivered at your </p>
     <p> doorstep or pick it up from showroom </p>
     </td>
   </tr>
 
 
 
   <tr >
     <td></td>
     <td><img class="small" src="https://www.revv.co.in/grapheneImages/newopen/ic-howit-work-5@2x.png" alt=""></td>
     <td></td>
     <td><img class="small" src="https://www.revv.co.in/grapheneImages/newopen/ic-howit-work-6@2x.png" alt=""></td>
  </tr>
 
 
  <tr>
   <td><img src="https://www.revv.co.in/grapheneImages/newopen/ic-web-x-5.svg" alt=""></td>
   <td>
     <h3>
       Hassle Free Experience</h3>
       
     <p>Enjoy your Hyundai car! We'll take care of routine service & insurance claims with doorstep service</p>
   </td>
   <td><img  src="https://www.revv.co.in/grapheneImages/newopen/ic-web-x-6.svg" alt=""></td>
   <td><h3>Return the Car or Acquire it</h3>
     <p>Continue using the car or return it anytime. </p>
     <p> And if you fall in love with it, you can buy it </p>
     <p>from us by paying a settlement fee.</p>
     </td>
   </tr>
 
 </table>`

}

let f = 1;
function gotoright() {
    if (f <= 7 && f > 0) {
        dikshant(f)
        f++;
    }
    if (f > 7 || f <= 0) {
        f = 1;
        dikshant(1)
    }


}


function gotoleft() {
    if (f <= 7 && f > 0) {
        dikshant(f)
        f--;
    }
    else {
        f = 1;
        dikshant(1);
        f = 7;
    }
}




function dikshant(f) {

    switch (f) {
        case 1:
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/zeroDownPayment_Web.webp")
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/insuranceMaintenance_Web.webp")
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/doorstepDelivery_Web.webp")
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/commitment_Web.webp")
            break;

        case 2:
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/doorstepDelivery_Web.webp")
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/commitment_Web.webp")
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/commitment_Web.webp")
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/deposit_Web.webp")
            break;
        case 3:
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/doorstepDelivery_Web.webp")
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/commitment_Web.webp")
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/deposit_Web.webp")
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/flexibility_Web.webp")
            break;
        case 4:
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/commitment_Web.webp")
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/deposit_Web.webp")
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/flexibility_Web.webp")
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/safeSanitized_Web.webp")
            break;
        case 5:
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/deposit_Web.webp")
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/flexibility_Web.webp")
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/safeSanitized_Web.webp")
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/zeroDownPayment_Web.webp")
            break;
        case 6:
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/flexibility_Web.webp")
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/safeSanitized_Web.webp")
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/zeroDownPayment_Web.webp")
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/insuranceMaintenance_Web.webp")
            break;
        case 7:
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/safeSanitized_Web.webp")
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/zeroDownPayment_Web.webp")
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/insuranceMaintenance_Web.webp")
            document.getElementById("item10").setAttribute("src", "https://www.revv.co.in/assets/subscription/home/webp/web/doorstepDelivery_Web.webp")
            break;

    }


}


function newcar2() {
    document.getElementById("ne1").style.color = "#1caba2";
    document.getElementById("un1").style.color = "black";
    document.getElementById("firstcar").innerText = "13,270/"
    document.getElementById("secoundcar").innerText = "17,580/"
    document.getElementById("thirdcar").innerText = "19,000/"
}

function unboxed1() {
    document.getElementById("un1").style.color = "#1caba2";
    document.getElementById("ne1").style.color = "black";
    document.getElementById("firstcar").innerText = "15,799/"
    document.getElementById("secoundcar").innerText = "18,899/"
    document.getElementById("thirdcar").innerText = "24,899/"
}

function faqsection(){
    window.location.href="faq.html";
 }
 function login(){
    window.location.href="signup.html";
 }

 function knowmore(){
    window.location.href="faq.html";
 }
 function newcars(){
    window.location.href="hyundai_search_result.html";
 }
 function unboxcar()
 {
    window.location.href="hyundai_search_result.html";
 }
 function seeall(){
    window.location.href="hyundai_search_result.html";
 }


 function callmelogin() {
    if( document.getElementById("login_bar").innerText!="Login or Signup"){
      alert("You have alerady logged in !");
    }else  {
      console.log("hello")
      event.preventDefault();
      let obj = {
        pageName : "./login.html"
    }
    localStorage.setItem("page",JSON.stringify(obj));
    window.location.href="./processing.html";
    }
  }
  
  // ------------------linking of login page to the index page----------//
  
  
  let login_data;
  if(localStorage.getItem("loginUser")==null){
    login_data=[];
  }else{
    login_data = JSON.parse(localStorage.getItem("loginUser"));
  
  };
  
  callmeDis_name(login_data)
  
  function callmeDis_name(login_data){
    let loginUserName = document.getElementById("login_bar")
  if(login_data.length!=0){
    loginUserName.innerText=login_data[login_data.length-1].Email;
    loginUserName.style.color="teal";
    loginUserName.style.fontWeight="bold";
    loginUserName.style.textDecoration = "underline";
    loginUserName.disabled=true
  }else {
    loginUserName.innerText = "Login or Signup";
  }
  console.log(login_data)
  }
  
  // logout calling;
  document.getElementById("exit_Log").addEventListener("click",callmeLogOut);
  
  function callmeLogOut(){
    login_data=[];
    localStorage.setItem("loginUser",JSON.stringify(login_data));
    callmeDis_name(login_data);
  }