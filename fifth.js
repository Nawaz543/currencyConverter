//https://api.frankfurter.app/latest?amount=1&from=USD&toINR.json
//adding option and passing change in option for set image
let dropdowns=document.querySelectorAll("#option");
for(let select of dropdowns){
    for(code in countryList){
       let nopt=document.createElement("option");
       nopt.innerText=code;
       nopt.value=code;
       if(select.name==="from" && code==="USD"){
        nopt.selected="selected";
       }
       else if(select.name==="to" && code==="INR"){
        nopt.selected="selected";
       }
       select.append(nopt);
    }
    select.addEventListener("change",(evt)=>{
        setimage(evt.target);
    });
}
//set image
function setimage( element){
   let code=element.value;
   let countrycode=countryList[code];
   let link=`https://flagsapi.com/${countrycode}/flat/64.png`;
   let img=element.parentElement.querySelector("img");
    img.src=link;
}
//converting amount
let exchangelink="https://api.frankfurter.app/latest?amount=1&from=USD&toINR.json";
let btn=document.querySelector("button");
let fromc=document.querySelector("#selectf select");
let toc=document.querySelector("#selectt select");
btn.addEventListener("click" , async (evt) => {
    evt.preventDefault();
    let amount=document.querySelector("#amount");
    if(amount.value=="" || amount.value<1){
        amount.value="1";
        amount=1;
    }
   
    let nel=`https://api.frankfurter.app/latest?amount=${amount.value}&from=${fromc.value}&to${toc.value}.json`;
    let responce=await fetch(nel);
    let data=await responce.json();
    let para=document.querySelector("#output p");
    if (data && data.rates[toc.value]) {
        // Accessing the value of INR
        let inrValue = data.rates[toc.value];
        let output=`${amount.value} ${fromc.value} = ${inrValue} ${toc.value}`;
       
        para.innerText=output;
    } else {
        para.innerText="Enter Valid Amount or Country";
    }
});
function setoutput(output){
    let para=document.querySelector("#outputp").value;
    console.log(para);
}