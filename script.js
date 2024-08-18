let products = [
    {name : "I Phone" ,Headline : "Latest Features" , Price :"95000" , image:"https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "Samsung" ,Headline : "with 100x Zoom" , Price : "102000" , image:"https://images.unsplash.com/photo-1709744722656-9b850470293f?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "Motorola HeadPhone" , Headline: "Best Prices", Price: "4500" , image: "https://cdn.pixabay.com/photo/2017/07/26/22/29/music-2543389_640.jpg"},
    {name : "Addidas Shoes" ,Headline : "Athleisure" , Price : "28599" , image:"https://images.unsplash.com/photo-1518894781321-630e638d0742?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWRkaWRhcyUyMHNob2VzfGVufDB8fDB8fHww"}
]

let popular = [
    
    {name: "Monalisa Painting", Headline:"free", Price:"0.00",image: "https://images.unsplash.com/photo-1576773689115-5cd2b0223523?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhaW50aW5nfGVufDB8fDB8fHww"},
    {name: "Canon" , Headline: "Pure", Price:"39999", image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D"}
]

let cart = [

]


function addProduct(){

let clutter = ""
products.forEach(function(val,index){
    clutter = clutter + `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                    <img class="w-full h-full object-cover" src="${val.image}" alt =""/>
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${val.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${val.Headline}</h3>
                            <h4 class="font-semibold mt-2">&#8377; ${val.Price}</h4>
                        </div>
                        <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index="${index}" class=" add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`
})

document.querySelector(".products").innerHTML = clutter
}

function addPopularProduct(){

    let cluttertwo = ""
    popular.forEach(function(val){
        cluttertwo = cluttertwo + `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[70%] flex-shrink-0">
                    <div class="w-20 h-20  flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover" src=${val.image}>
                            
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${val.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${val.Headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">${val.Price}</h4>
                    </div>
                </div>`
    })

    document.querySelector(".populars").innerHTML = cluttertwo
}


function addToCart(){
    document.querySelector(".products").addEventListener("click", function(e){
        if(e.target.classList.contains('add')){
            cart.push(products[e.target.dataset.index])
            
            
        }
    })
}

function showCart(){
    document.querySelector(".carticon").addEventListener("click", function(){
        document.querySelector(".cartexpnd").computedStyleMap.display = "block"

        let clutter = ""
        cart.forEach(function(prod,index){
            clutter = clutter + `<div class="flex gap-2 bg-white p-2 rounded-lg">
                    <div class="w-10 h-10 flex-shrink-0 rounded-lg bg-red-500 overflow-hidden">
                        <img class="w-full h-full oblject-cover" src="${prod.image}"/>
                    </div>
                <div>
                    <h3 class="font-semibold">${prod.name}</h3>
                    <h5 class="text-sm font-semibold opacity-80">${prod.Price}</h5>
                </div>
            </div>`
        })
        document.querySelector(".cartexpnd").innerHTML = clutter
    })
}


addPopularProduct()
addProduct()
addToCart()
showCart()

