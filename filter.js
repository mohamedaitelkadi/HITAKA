orderbutton = document.querySelectorAll(".order");

orderbutton.forEach(element => {

        element.addEventListener("click",function(){
            const pe = element.parentElement ;
            const name = pe.querySelector(".name").innerHTML;
            const price = pe.querySelector(".price").innerHTML;
            
            let pannier = document.querySelector(".rec");
           
            let h  = `<div class="command">
            <p class="name">${name}</p>
            <p class="price">${price}</p> 
        <div class="q">
            <p class="quantity">quantity :</p>
            <input type="number" class="quantity-num" value="1" min="1">
        </div>
        <i class="bi bi-trash3-fill"></i>
        <hr class="commandline">
    </div>`

    
    
    pannier.insertAdjacentHTML("beforeend",h);
    const rmvbtn = document.querySelectorAll('.bi-trash3-fill');
             // console.log(rmvbtn);
             rmvbtn.forEach((element)=>{
            element.addEventListener('click',()=>{
            // console.log(element.parentNode.remove());
            const div = element.parentElement;
            div.remove(); 
        })
    })
            })
        })
        let total;
        let calculate = document.querySelector("#calc");
        calculate.addEventListener("click",function(){
           
            let calculateArray = [];
            let command = document.querySelectorAll(".command");
            command.forEach(element=>{
                let prix = element.querySelector(".price");
    
                let quantity = element.querySelector(".quantity-num");
    
                console.log(quantity.value);
                calculateArray.push(Number(prix.innerHTML.replace("dh",""))*quantity.value);
                
                
            })
            total = calculateArray.reduce( (pre,curr) => pre+curr);
            let totalr = document.querySelector(".totalr")
            totalr.innerHTML = total

        })

        
        
let allChoice = document.getElementById("all");
let sushiChoice = document.getElementById("sushi");
let soupChoice = document.getElementById("soup");
let saladChoice = document.getElementById("salad");
let sushiplats = document.querySelector(".sushi");
let soupplats = document.querySelector(".soup");
let saladplats = document.querySelector(".salad");

allChoice.addEventListener("click",function(){
    console.log("allll");
    sushiplats.style.display="grid";
    soupplats.style.display="grid";
    saladplats.style.display="grid";
    saladChoice.style = "background-color:white";
    allChoice.style = "background-color:#FF7F7F";
    sushiChoice.style = "background-color:white";
    soupChoice.style = "background-color:white";
})

sushiChoice.addEventListener("click",function(){
    console.log("sushiiiiiiii");
    soupplats.style.display="none";
    saladplats.style.display="none";
    sushiplats.style.display="grid";
    saladChoice.style = "background-color:white";
    allChoice.style = "background-color:white";
    sushiChoice.style = "background-color:#FF7F7F";
    soupChoice.style = "background-color:white";
})
soupChoice.addEventListener("click",function(){
    console.log("souppppppp")
    sushiplats.style.display="none";
    saladplats.style.display="none";
    soupplats.style.display="grid";
    saladChoice.style = "background-color:white";
    allChoice.style = "background-color:white";
    sushiChoice.style = "background-color:white";
    soupChoice.style = "background-color:#FF7F7F";
})
saladChoice.addEventListener("click",function(){
    console.log("saladdddddd")
    soupplats.style.display="none";
    sushiplats.style.display="none";
    saladplats.style.display="grid";
    saladChoice.style = "background-color:#FF7F7F";
    allChoice.style = "background-color:white";
    sushiChoice.style = "background-color:white";
    soupChoice.style = "background-color:white";
})
let alert = document.querySelector(".alert");
let order = document.querySelector("#orderr");
let ptotal = alert.querySelector(".totalmsg")
let valid = document.querySelector("#valid");
let cancel = document.querySelector("#cancel");
let validate = document.querySelector("#validate");
let close = document.querySelector("#close");
let body = document.querySelector(".body");
let pointless = document.querySelector(".pointless");

order.addEventListener("click",function(){
    alert.style.display="flex";
    ptotal.innerHTML = `your total is : ${total} `
    pointless.style = "pointer-events: none";

})
valid.addEventListener("click",function(){
    validate.style.display="flex";
})
validate.addEventListener("click",function(){
    valid.style.display="none";
})
close.addEventListener("click",function(){
    window.location.reload();
})
cancel.addEventListener("click",function(){
    alert.style.display="none";
    pointless.style = "pointer-events: auto";
})






