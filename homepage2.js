   
let n=0


let arrOfImages = [
"https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_1_FG.webp",
  "https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/LT_Desktop_2_FG.webp",
  "https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/LT_Desktop_3_FG.webp",
 
];

let back=["#fff7e2",
"#def8ff",
"#ddffec"

]
let image=document.getElementById("imagesOfHome")


let next=document.getElementById("next")
next.addEventListener("click",function(){
  if(n===arrOfImages.length-1){
n=0
  }else{
      n++
  }
  let div=document.createElement("div")
  div.style.backgroundColor=back[n]
  let img=document.createElement("img")
  img.src=arrOfImages[n]
  div.append(img)
  image.innerHTML=""
  image.append(div)

})
let prev=document.getElementById("prev")
prev.addEventListener("click",previous)

function previous(){
  if(n===0){
      n=arrOfImages.length-1
  }else{
      n--
  }
  let div=document.createElement("div")
  div.style.backgroundColor=back[n]
  let img=document.createElement("img")
  img.src=arrOfImages[n]
  div.append(img)
  image.innerHTML=""
  image.append(div)
}
// sanitized and safe car
 
let arrOfImage1 = [
  "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/thumbnails/Group+84.png",
  "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_01-min.jpg","https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_02-min.jpg","https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_03-min.jpg","https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_04-min.jpg"
];

let key1 = document.querySelectorAll(".button1");
function normaldata1() {
  let img = document.createElement("img");
  img.src = arrOfImage1[0];
  let box = document.createElement("div");
  box.append(img);

  let img1 = document.createElement("img");
  img1.src = arrOfImage1[1];
  let box1 = document.createElement("div");
  box1.append(img1);

  let img2 = document.createElement("img");
  img2.src = arrOfImage1[2];
  let box2 = document.createElement("div");
  box2.append(img2);


  let img3 = document.createElement("img");
  img3.src = arrOfImage1[3];
  let box3 = document.createElement("div");
  box3.append(img3);
  let container = document.getElementById("container1");
  container.append(box, box1, box2,box3);
}

normaldata1();
let j = 0;
key1[1].addEventListener("click", function () {
  if (j == arrOfImage1.length - 4) {
    j = 0;
  } else {
    j++;
  }
  let img = document.createElement("img");
  img.src = arrOfImage1[j];
  let box = document.createElement("div");
  box.append(img);

  let img1 = document.createElement("img");
  img1.src = arrOfImage1[j + 1];
  let box1 = document.createElement("div");
  box1.append(img1);

  let img2 = document.createElement("img");
  img2.src = arrOfImage1[j + 2];
  let box2 = document.createElement("div");
  box2.append(img2);

  let img3 = document.createElement("img");
  img3.src = arrOfImage1[j + 3];
  let box3 = document.createElement("div");
  box3.append(img3);

  let container = document.getElementById("container1");
  container.innerHTML = "";
  container.append(box, box1, box2, box3);
});

key1[0].addEventListener("click", function () {
  console.log("sach");
  if (j == 0) {
    j = arrOfImage1.length - 4;
  } else {
    j--;
  }
  let img = document.createElement("img");
  img.src = arrOfImage1[j];
  let box = document.createElement("div");
  box.append(img);

  let img1 = document.createElement("img");
  img1.src = arrOfImage1[j + 1];
  let box1 = document.createElement("div");
  box1.append(img1);

  let img2 = document.createElement("img");
  img2.src = arrOfImage1[j + 2];
  let box2 = document.createElement("div");
  box2.append(img2);

  let img3 = document.createElement("img");
  img3.src = arrOfImage1[j + 3];
  let box3 = document.createElement("div");
  box3.append(img3);
  let container = document.getElementById("container1");
  container.innerHTML = "";
  container.append(box, box1, box2,box3);
});

// faq
let p = 1
function faq1() {

   let x = document.getElementById("faq11");
   if (p == 1) {
      x.setAttribute("src", "./icons/minus-icon.png");
      document.getElementById("para1").innerText = "Your car will be covered by comprehensive insurance, to take care of damage cases when it is a Mahindra car subscription. On every case of damage, your liability would be limited to the difference between the costs incurred to repair the damage and the proceeds from insurance claim with maximum liability limited to INR 10,000. In situations of irresponsible or unsafe or negligent usage, there could be discretionary exceptions to this policy, whereby you could be liable for all damages irrespective of whether or not we are able to claim insurance in such cases."
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
      document.getElementById("para2").innerText = "Yes, you can extend the Mahindra car subscription anytime at normal prices or chose to return the car anytime by just paying the fee difference. Extending the car subscription is very convenient in Bangalore and so is the returning of the car."
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
      document.getElementById("para3").innerText = "Getting a Mahindra car subscription in Bangalore is very easy with Revv. You can use the car for pretty much all the normal requirements. Abnormal usage (e.g., speed racing, towing/pushing/propelling, transportation of goods or people on commercial basis, transportation of large/heavy/hazardous items) is not allowed."
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
      document.getElementById("para4").innerText = "The Mahindra car subscription offer in Bangalore is gaining eyeballs. The benefits of - No upfront payments such as down payment or road tax, flexibility of subscribing for min. 1 month and extending or returning anytime, insurance and maintenance included in monthly fees, 24X7 roadside assistance and hassle-free service & maintenance make the Mahindra car subscription a superb deal."
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
      document.getElementById("para5").innerText = "To make it convenient for the users in Bangalore, the car for Mahindra car subscription will be registered as a premium commercial vehicle (black plate) with an All India permit and can be driven anywhere within India without any concerns. It will be registered in the name of Revv (PrimeMover Mobility Technologies Pvt. Ltd.) or its supply partners."
      t = 2;
   }
   else if (t == 2) {
      x.setAttribute("src", "./icons/plus-icon.png");
      document.getElementById("para5").innerText = "";
      t = 1
   }
}

// page directiing
function callmehyundai(){
   event.preventDefault();
   let obj = {
     pageName : "./hyundai1.html"
 }
 localStorage.setItem("page",JSON.stringify(obj));
 window.location.href="./processing.html";
 }
 
 function callmemahindra(){
   event.preventDefault();
   let obj = {
     pageName : "./mahindra1.html"
 }
 localStorage.setItem("page",JSON.stringify(obj));
 window.location.href="./processing.html";
 }
 
 function callmefaq() {
   event.preventDefault();
   let obj = {
     pageName : "./fag.html"
 }
 localStorage.setItem("page",JSON.stringify(obj));
 window.location.href="./processing.html";
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