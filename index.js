//navbar
//first
    
let n=0


let arrOfImages = [
"https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_1_FG.webp",
  "https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_2_FG.webp",
  "https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_3_FG.webp",
 
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

//second

let featured_array=[
    "https://revvselfdrivecar.s3.us-west-2.amazonaws.com/WhatsApp+Image+2022-08-05+at+1.11.06+PM.jpeg",
    "https://revvselfdrivecar.s3.us-west-2.amazonaws.com/5+days.png",
    "https://revvselfdrivecar.s3.us-west-2.amazonaws.com/10+days.png",
    "https://revvselfdrivecar.s3.us-west-2.amazonaws.com/15+days.png",
    "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_01-min.jpg",
    "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_01-min.jpg",
    "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_03-min.jpg",
    "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_04-min.jpg",
    ]
    let leftimage=document.querySelector("#f1");
    let midimage=document.querySelector("#f2");
    let rightimage=document.querySelector("#f3");
    let lbutn=document.querySelector(".lb");
    let rbutn=document.querySelector(".rb");
    let p=0;
    let q=1;
    let r=2;
    lbutn.addEventListener("click",moveleft);
    function moveleft(){
        console.log("main");
        p--;q--;r--;
        if(p==-1){
            p=featured_array.length-1;
        }
        if(q==-1){
            q=featured_array.length-1;
        }
        if(r==-1){
            r=featured_array.length-1;
        }
        leftimage.src=featured_array[p];
        midimage.src=featured_array[q];
        rightimage.src=featured_array[r];
        
    }
    rbutn.addEventListener("click",moveright);
    function moveright(){
        console.log("main");
        p++;q++;r++;
        if(p==featured_array.length){
            p=0;
        }
        if(q==featured_array.length){
            q=0;
        }
        if(r==featured_array.length){
            r=0;
        }
        leftimage.src=featured_array[p];
        midimage.src=featured_array[q];
        rightimage.src=featured_array[r];
    }

    // second is complete
    
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
//   third is complete
//fourth is complete

let arrOfDetails=[
    {name:"Sachin pandey ",discription:"Nice service with on time pickup and delivery. Good customer support with friendly and very helpful staff. The car was also very smooth and the packages are pocket friendly. Overall an amazing experience. Would highly recommend😄"},
    {name:"Prakash gariya",discription:"The car delivery was done on time and we were satisfied with the entire booking entire experience. We also got instant refund and the overall service was Revv"},
    {name:"Sunil Rawat ",discription:"Nice service with on time pickup and delivery. Good customer support with friendly and very helpful staff. The car was also very smooth and the packages are pocket friendly. Overall an amazing experience. Would highly recommend😄"},
    {name:"Shivam Kumar ",discription:"The car delivery was done on time and we were satisfied with the entire booking entire experience. We also got instant refund and the overall service was Revv"},
    {name:"lalit sharma",discription:"The car delivery was done on time and we were satisfied with the entire booking entire experience. We also got instant refund and the overall service was Revv"},
    {name:"akshit bisht ",discription:"Nice service with on time pickup and delivery. Good customer support with friendly and very helpful staff. The car was also very smooth and the packages are pocket friendly. Overall an amazing experience. Would highly recommend😄"},
    {name:"trilok pandey ",discription:"The car delivery was done on time and we were satisfied with the entire booking entire experience. We also got instant refund and the overall service was Revv"},
]

function Happy_Customer_slider1(){
    console.log("sachin");
let div=document.createElement("div")
let div1=document.createElement("h2")
div1.innerText=arrOfDetails[0].name
let div2=document.createElement("h4")
div2.innerText=arrOfDetails[0].discription

div.append(div1,div2)

let div9=document.createElement("div")
let div11=document.createElement("h2")
div11.innerText=arrOfDetails[1].name
let div21=document.createElement("h4")
div21.innerText=arrOfDetails[1].discription

div9.append(div11,div21)

let div6=document.createElement("div")
let div111=document.createElement("h2")
div111.innerText=arrOfDetails[2].name
let div211=document.createElement("h4")
div211.innerText=arrOfDetails[2].discription

div6.append(div111,div211)



let div67=document.createElement("div")
let div1111=document.createElement("h2")
div1111.innerText=arrOfDetails[3].name
let div2111=document.createElement("h4")
div2111.innerText=arrOfDetails[3].discription

div67.append(div1111,div2111)


let cont=document.getElementById("Happy_Customer")

cont.append(div,div9,div6,div67)


}
let hola=0
Happy_Customer_slider1()
let token1=document.querySelectorAll(".button11")
token1[0].addEventListener("click",()=>{
if(hola==arrOfDetails.length-4){
hola=0

}else{
hola++
}

let div=document.createElement("div")
let div1=document.createElement("h2")
div1.innerText=arrOfDetails[hola].name
let div2=document.createElement("h4")
div2.innerText=arrOfDetails[hola].discription

div.append(div1,div2)

let div9=document.createElement("div")
let div11=document.createElement("h2")
div11.innerText=arrOfDetails[hola+1].name
let div21=document.createElement("h4")
div21.innerText=arrOfDetails[hola+1].discription

div9.append(div11,div21)

let div6=document.createElement("div")
let div111=document.createElement("h2")
div111.innerText=arrOfDetails[hola+2].name
let div211=document.createElement("h4")
div211.innerText=arrOfDetails[hola+2].discription

div6.append(div111,div211)



let div67=document.createElement("div")
let div1111=document.createElement("h2")
div1111.innerText=arrOfDetails[hola+3].name
let div2111=document.createElement("h4")
div2111.innerText=arrOfDetails[hola+3].discription

div67.append(div1111,div2111)


let cont=document.getElementById("Happy_Customer")
cont.innerHTML=""
cont.append(div,div9,div6,div67)


})
token1[1].addEventListener("click",()=>{
if(hola==0){
hola=arrOfDetails.length-4

}else{
hola--
}

let div=document.createElement("div")
let div1=document.createElement("h2")
div1.innerText=arrOfDetails[hola].name
let div2=document.createElement("h4")
div2.innerText=arrOfDetails[hola].discription

div.append(div1,div2)

let div9=document.createElement("div")
let div11=document.createElement("h2")
div11.innerText=arrOfDetails[hola+1].name
let div21=document.createElement("h4")
div21.innerText=arrOfDetails[hola+1].discription

div9.append(div11,div21)

let div6=document.createElement("div")
let div111=document.createElement("h2")
div111.innerText=arrOfDetails[hola+2].name
let div211=document.createElement("h4")
div211.innerText=arrOfDetails[hola+2].discription

div6.append(div111,div211)



let div67=document.createElement("div")
let div1111=document.createElement("h2")
div1111.innerText=arrOfDetails[hola+3].name
let div2111=document.createElement("h4")
div2111.innerText=arrOfDetails[hola+3].discription

div67.append(div1111,div2111)


let cont=document.getElementById("Happy_Customer")
cont.innerHTML=""
cont.append(div,div9,div6,div67)

})
// fifth is done 


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
    pageName : "./faq.html"
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
  alert("Logout ?")
  callmeDis_name(login_data);
}