function getPrice(product,price){
    const memory = document.getElementById(product);
    memory.innerText = price;
    calc()
}
 
// Total cost 
function calc(){
    const bestPrice = document.getElementById("best-price").innerText;
    const memoryCost = document.getElementById("memory-cost").innerText;
    const storageCost = document.getElementById("stroage-cost").innerText;
    const deliveryCost = document.getElementById("delivery-cost").innerText;

    
    const total= parseInt(bestPrice)+parseInt(memoryCost)+parseInt(storageCost)+parseInt(deliveryCost)
    document.getElementById("total").innerText=total;
    document.getElementById("last-total").innerText=total;
}

// for memory

const firstMemory = document.getElementById("memory-first").addEventListener("click", function () {
    getPrice("memory-cost",0);
})

const secondMemory = document.getElementById("memory-second").addEventListener("click", function () {
    getPrice("memory-cost",180);
})




// for stroage 

const firstStorage = document.getElementById("storage-first").addEventListener("click", function () {
    getPrice("stroage-cost",0);
})
const secondStorage = document.getElementById("storage-second").addEventListener("click", function () {
    getPrice("stroage-cost",100);
})
const thirdStorage = document.getElementById("storage-third").addEventListener("click", function () {
    getPrice("stroage-cost",180);
})




// for delevery 

const firstDelivery = document.getElementById("delivery-first").addEventListener("click", function () {
    getPrice("delivery-cost",0);
})
const secondDelivery = document.getElementById("delivery-second").addEventListener("click", function () {
    getPrice("delivery-cost",20);
})




// for promocode 

document.getElementById("promo-btn").addEventListener("click" ,function(){
    const promoInput = document.getElementById("promo-Input");
    if(promoInput.value=="stevekaku"){
        const promoOutput=document.getElementById("last-total");
        const promoParcentage=promoOutput.innerText*20/100;
        promoOutput.innerText=promoOutput.innerText-promoParcentage;
    }
    document.getElementById("promo-btn").disabled=true;
    promoInput.value=""
})