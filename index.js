
  
  let arrOfImage = [
    "https://revvselfdrivecar.s3.us-west-2.amazonaws.com/WhatsApp+Image+2022-08-05+at+1.11.06+PM.jpeg",
    "https://revvselfdrivecar.s3.us-west-2.amazonaws.com/5+days.png",
    "https://revvselfdrivecar.s3.us-west-2.amazonaws.com/10+days.png",
    "https://revvselfdrivecar.s3.us-west-2.amazonaws.com/15+days.png",
    "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_01-min.jpg",
    "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_02-min.jpg",

    "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_03-min.jpg",
    "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_04-min.jpg",
  ];

  let key = document.querySelectorAll("button");
  function normaldata() {
    let img = document.createElement("img");
    img.src = arrOfImage[0];
    let box = document.createElement("div");
    box.append(img);

    let img1 = document.createElement("img");
    img1.src = arrOfImage[1];
    let box1 = document.createElement("div");
    box1.append(img1);

    let img2 = document.createElement("img");
    img2.src = arrOfImage[2];
    let box2 = document.createElement("div");
    box2.append(img2);
    let container = document.getElementById("container");
    container.append(box, box1, box2);
  }

  normaldata();
  let i = 0;
  key[1].addEventListener("click", function () {
    if (i == arrOfImage.length - 3) {
      i = 0;
    } else {
      i++;
    }
    let img = document.createElement("img");
    img.src = arrOfImage[i];
    let box = document.createElement("div");
    box.append(img);

    let img1 = document.createElement("img");
    img1.src = arrOfImage[i + 1];
    let box1 = document.createElement("div");
    box1.append(img1);

    let img2 = document.createElement("img");
    img2.src = arrOfImage[i + 2];
    let box2 = document.createElement("div");
    box2.append(img2);
    let container = document.getElementById("container");
    container.innerHTML = "";
    container.append(box, box1, box2);
  });

  key[0].addEventListener("click", function () {
    if (i == 0) {
      i = arrOfImage.length - 3;
    } else {
      i--;
    }
    let img = document.createElement("img");
    img.src = arrOfImage[i];
    let box = document.createElement("div");
    box.append(img);

    let img1 = document.createElement("img");
    img1.src = arrOfImage[i + 1];
    let box1 = document.createElement("div");
    box1.append(img1);

    let img2 = document.createElement("img");
    img2.src = arrOfImage[i + 2];
    let box2 = document.createElement("div");
    box2.append(img2);
    let container = document.getElementById("container");
    container.innerHTML = "";
    container.append(box, box1, box2);
  });

//   second
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
// happy customer

let arrOfDetails=[
    {name:"Sachin pandey ",discription:"Nice service with on time pickup and delivery. Good customer support with friendly and very helpful staff. The car was also very smooth and the packages are pocket friendly. Overall an amazing experience. Would highly recommend😄"},
    {name:"Prakash gariya",discription:"The car delivery was done on time and we were satisfied with the entire booking entire experience. We also got instant refund and the overall service was Revv"},
    {name:"Sunil Rawat ",discription:"Nice service with on time pickup and delivery. Good customer support with friendly and very helpful staff. The car was also very smooth and the packages are pocket friendly. Overall an amazing experience. Would highly recommend😄"},
    {name:"Shivam Kumar ",discription:"The car delivery was done on time and we were satisfied with the entire booking entire experience. We also got instant refund and the overall service was Revv"},
    {name:"Lalit Sharma",discription:"withervice with on time pickupnice service with on time pickupnice service with on time pickupnice service with on time pickupnice service with on time pickupnice service with on time pickupnice service with on time pickupnice service with on time pickupnice service with on time pickupnice service with on time pickup"}
    ,{name:"Abhishek lathha",discription:"withervice with on time pickupnice service with on time pickupnice service with on time pickupnice service with on time pickupnice service with on time pickupnice service with on time pickupnice service with on time pickupnice service with on time pickupnice service with on time pickupnice service with on time pickup"},
    {name:"Akshit  bisht",discription:"withervice with on time pickupnice service with on time pickupnice service with on time pickupnice service with on time pickupnice service with on time pickupnice service with on time pickupnice service with on time pickupnice service with on time pickupnice service with on time pickupnice service with on time pickup"}
]
console.log(arrOfDetails[0].discription);
function Happy_Customer_slider(){
  
let div=document.createElement("div")
let div1=document.createElement("h2")
div1.innerText=arrOfDetails[0].name
let div2=document.createElement("h4")
div2.style.color="grey"
div2.innerText=arrOfDetails[0].discription

div.append(div1,div2)

let div9=document.createElement("div")
let div11=document.createElement("h2")
div11.innerText=arrOfDetails[1].name
let div21=document.createElement("h4")
div21.style.color="grey"
div21.innerText=arrOfDetails[1].discription

div9.append(div11,div21)

let div6=document.createElement("div")
let div111=document.createElement("h2")
div111.innerText=arrOfDetails[2].name
let div211=document.createElement("h4")
div211.style.color="grey"
div211.innerText=arrOfDetails[2].discription

div6.append(div111,div211)



let div67=document.createElement("div")
let div1111=document.createElement("h2")
div1111.innerText=arrOfDetails[3].name
let div2111=document.createElement("h4")
div2111.style.color="grey"
div2111.innerText=arrOfDetails[3].discription

div67.append(div1111,div2111)


let cont=document.getElementById("Happy_Customer")

cont.append(div,div9,div6,div67)


}
let hola=0
Happy_Customer_slider()
let token=document.querySelectorAll("button1")
token[0].addEventListener("click",function(){
    console.log("working");
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















token[1].addEventListener("click",()=>{
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