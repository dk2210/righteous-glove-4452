let citychange=()=>{
    let x=document.getElementById("selectcity").value;
   
    let y=document.getElementById("nameofcity");
    y.innerText=`New Hyundai Car Subscription in ${x}`;

    if(x=="Bangalore")
    {
      document.getElementById("amount1").innerText="16,720";
      document.getElementById("amount2").innerText="15,799";
      
    }
    else if(x=="Hyderabad")
    {
        document.getElementById("amount1").innerText="15,610";
        document.getElementById("amount2").innerText="13,999";
    }
    else if(x=="Mumbai")
    {
        document.getElementById("amount1").innerText="14,170";
        document.getElementById("amount2").innerText="13,199";
    }
    else if(x=="Delhi-NCR")
    {
        document.getElementById("amount1").innerText="18,250";
        document.getElementById("amount2").innerText="16,499";
    }
    else if(x=="Chennai")
    {
        document.getElementById("amount1").innerText="15,200";
        document.getElementById("amount2").innerText="14,399";
    }
    else{
        document.getElementById("amount1").innerText="14,170";
        document.getElementById("amount2").innerText="12,699";
    }
}

// ,,,,,Pune