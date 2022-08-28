let p = 1
function faq1() {

   let x = document.getElementById("faq11");
   if (p == 1) {
      x.setAttribute("src", "./icons/minus-icon.png");
      document.getElementById("para1").innerText = "Your Hyundai car will be covered by comprehensive insurance, to take care of damage cases. In case of damage, your liability would be limited to the difference between the costs incurred to repair the damage and the proceeds from insurance claim with maximum liability limited to INR 10,000. In situations of irresponsible or unsafe or negligent usage, there could be discretionary exceptions to this policy, whereby you could be liable for all damages irrespective of whether we are able to claim insurance in such cases."
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
      document.getElementById("para2").innerText = "Yes, you can extend the car subscription anytime at normal prices. If you wish to return the car; you can do so anytime by just paying the fee difference."
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
      document.getElementById("para3").innerText = "You can use the Hyundai car you have subscribed to for pretty much all the normal requirements. Abnormal usage (e.g., speed racing, towing/pushing/propelling, transportation of goods or people on commercial basis, transportation of large/heavy/hazardous items) is not allowed."
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
      document.getElementById("para4").innerText = "No upfront payments such as down payment or road tax, flexibility of subscribing for min. 1 month and extending or returning anytime, insurance and maintenance included in monthly fees, 24X7 roadside assistance and hassle-free service & maintenance are just a few benefits of Revv Hyundai Subscriptions."
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
      document.getElementById("para5").innerText = "The car will be registered as a premium commercial vehicle (black plate) with an All India permit and can be driven anywhere within India without any concerns. It will be registered in the name of Revv (PrimeMover Mobility Technologies Pvt. Ltd.) or its supply partners."
      t = 2;
   }
   else if (t == 2) {
      x.setAttribute("src", "./icons/plus-icon.png");
      document.getElementById("para5").innerText = "";
      t = 1
   }


}
// -----------------------------------------------REVIEWS------------------------------------------------------
let arr = [
   `<img src="https://www.revv.co.in/imgs/ratingStart.png" alt="" class="star">
   <img src="https://www.revv.co.in/imgs/ratingStart.png" alt="" class="star">
   <img src="https://www.revv.co.in/imgs/ratingStart.png" alt="" class="star">
   <img src="https://www.revv.co.in/imgs/ratingStart.png" alt="" class="star">
   <img src="https://www.revv.co.in/imgs/ratingStart.png" alt="" class="star">
   <h2>Devanjan Khuntia</h2>
   <img src="https://www.revv.co.in/imgs/noun-quote.png" alt="" id="end">
   <p>This is my first experience of hiring Revv car. And I am really happy with the services I received from Revv.
     1. The car I received was brand new. 2. Totally cleaned. 3. No issues with car pickup, no engine noise. 4. AC
     and music system was really good. In total it was a highly comfortable travel. Thanks, Revv. Highly recommended.
   </p>`,


   `<img src="https://www.revv.co.in/imgs/ratingStart.png" alt="" class="star">
   <img src="https://www.revv.co.in/imgs/ratingStart.png" alt="" class="star">
   <img src="https://www.revv.co.in/imgs/ratingStart.png" alt="" class="star">
   <img src="https://www.revv.co.in/imgs/ratingStart.png" alt="" class="star">
   <img src="https://www.revv.co.in/imgs/ratingStart.png" alt="" class="star">
   <h2>GIRIDHAR MINDOLKAR</h2>
   <img src="https://www.revv.co.in/imgs/noun-quote.png" alt="" id="end">
   <p>I have used Revv app for my first car driving experience from Chandigarh for 5 days. The car was absolutely clean and tidy, the delivery executives were right on time for delivering the car and even during return. The car was in very good condition and enjoyed the experience with Revv. I would strongly recommend anyone to use Revv wherever possible.
   </p>`,


   `<img src="https://www.revv.co.in/imgs/ratingStart.png" alt="" class="star">
   <img src="https://www.revv.co.in/imgs/ratingStart.png" alt="" class="star">
   <img src="https://www.revv.co.in/imgs/ratingStart.png" alt="" class="star">
   <img src="https://www.revv.co.in/imgs/ratingStart.png" alt="" class="star">
   <img src="https://www.revv.co.in/imgs/ratingStart.png" alt="" class="star">
   <h2>Sandeep Chowdhury</h2>
   <img src="https://www.revv.co.in/imgs/noun-quote.png" alt="" id="end">
   <p>Self Drive cars are new to me, I was not so comfortable with the idea. However, after using the services of Revv, I am satisfied and look forward to my next trip.
   </p>`,

   `<img src="https://www.revv.co.in/imgs/ratingStart.png" alt="" class="star">
   <img src="https://www.revv.co.in/imgs/ratingStart.png" alt="" class="star">
   <img src="https://www.revv.co.in/imgs/ratingStart.png" alt="" class="star">
   <img src="https://www.revv.co.in/imgs/ratingStart.png" alt="" class="star">
   <img src="https://www.revv.co.in/imgs/ratingStart.png" alt="" class="star">
   <h2>Gobinda Manna</h2>
   <img src="https://www.revv.co.in/imgs/noun-quote.png" alt="" id="end">
   <p>India has so many unexplored destinations and my plan to travel to all these places is slowly shaping up. And I find renting your car for a self-drive travel just perfect. The car I last hired from Revv was in perfect shape and I got a good offer too because of the coupons.
   </p>`,


   `<img src="https://www.revv.co.in/imgs/ratingStart.png" alt="" class="star">
   <img src="https://www.revv.co.in/imgs/ratingStart.png" alt="" class="star">
   <img src="https://www.revv.co.in/imgs/ratingStart.png" alt="" class="star">
   <img src="https://www.revv.co.in/imgs/ratingStart.png" alt="" class="star">
   <img src="https://www.revv.co.in/imgs/ratingStart.png" alt="" class="star">
   <h2>Bhuvnesh Ojha</h2>
   <img src="https://www.revv.co.in/imgs/noun-quote.png" alt="" id="end">
   <p>My First Experience with Revv Was just Ultimate, Better conditioned, cleaned Car. Affordable and Honest charges. overall a perfect experience
   </p>`
]


let i = 0
function right() {
   if (i < arr.length) {
      let x = document.getElementById("feedback1");
      x.innerHTML = arr[i];

      i++;
   }
   else {
      i = 0;
      let x = document.getElementById("feedback1");
      x.innerHTML = arr[i];

      i++;
   }

}
function left() {
   if (i > 0 && i != arr.length) {

      if (i < arr.length) {
         --i;
         let x = document.getElementById("feedback1");
         x.innerHTML = arr[i];

      }
      else {
         i = arr.length - 1;
         let x = document.getElementById("feedback1");
         x.innerHTML = arr[i];


      }
   }
   else {
      if (i) {

      }
      i = arr.length - 1;
      let x = document.getElementById("feedback1");
      x.innerHTML = arr[i];

      i--;
   }
}


function faqpage(){
   window.location.href="faq.html"
}

function indexpage()
{
   window.location.href="index.html" 
}

function faqsection01(){
   window.location.href="faq.html"
}

function hyundaisub(){
   
  let x=document.getElementById("selectcity").value;
  let y=document.getElementById("selectdate").value;
  let z=x&&y;
  console.log(z)
  if(z)
  {
   window.location.href="hyundai_search_result.html"
  }
else{
   alert("Please select Date and Time")
}

   
}
function cityname()
{
   let name=document.getElementById("selectcity").value;
   document.getElementById("heading").innerText=`Hyundai Cars Subscription in ${name}`
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