// to do list hrf = tera link and new category adult will be adeed 
let cards = document.querySelector('.popular-movies .cards')
let mcards = document.querySelector('.movies-card')
let search_cards = document.querySelector('.search-result')

// movies fetching
// for popular section
const json_url = new XMLHttpRequest();
request.open( "https://json.extendsclass.com/bin/e0cfac108646", true);
request.onreadystatechange = () => {
	alert(request.responseText);
};
request.send();
// let json_url = fetch('https://json.extendsclass.com/bin/e0cfac108646');



fetch(json_url).then(Response => Response.json())
.then((data)=> {

    // poplular movies section
    data.forEach((ele,i) => {
        let {tittle,mposter,gener,type,teralink} = ele;
        let card = document.createElement('div')
        card.classList.add('card');
        card.innerHTML =
       `<div class="card-img-box">
        <img src="${mposter}" alt="${tittle}">
    </div>
    <div class="card-text-box">
        <h1>${tittle}</h1>
        <p><span id="type">${type}</span> <span id="gener">${gener}</span></p>
        <a href="${teralink} class="play_btn" target="_blank">play <i class="fa-solid fa-play"></i></a>
        
    </div>`
    cards.appendChild(card)
    });

    // search section
    data.forEach((ele,i) => {
        let {tittle,mposter,gener,type,teralink} = ele;
        let card_s = document.createElement('div')
        card_s.classList.add('search-results-card');
        card_s.innerHTML =
       `<div class="sr-img-box"><img src="${mposter}" alt="${tittle}"></div>
       <div class="sr-text-box">
           <h1>${tittle}</h1>
           <p><span id="type">${type}</span><span id="gener">${gener}</span></p>
       
       </div>
       <div class="sr-watch-box"><a href="${teralink}" class="play_btn" target="_blank">play<i class="fa-solid fa-play"></i></a></div>`
    
    search_cards.appendChild(card_s)
    });
    
// main movies section
    data.forEach((ele,i) => {
        let {tittle,mposter,gener,type,teralink} = ele;
        let card = document.createElement('div')
        card.classList.add('card');
        card.innerHTML =
       `<div class="card-img-box">
        <img src="${mposter}" alt="${tittle}">
    </div>
    <div class="card-text-box">
        <h1>${tittle}</h1>
        <p><span id="type">${type}</span> <span id="gener">${gener}</span></p>
        <a href="${teralink}" class="play_btn" target="_blank">Play <i class="fa-solid fa-play"></i></a>
    </div>`
   
    mcards.appendChild(card)
    });


      


    // NAV FILTER FOR BOLLY WOOD
    let bollywood = document.querySelectorAll("#Bollywood")
    
    for(let i= 0;i<=bollywood.length;i++){
    //   question mark after type eroor in js ??????????????????????????????????????????????
        bollywood[i]?.addEventListener('click', () => {
            // below 2 lines are for close ham burder screen or 
            let ham_menu = document.querySelector('header .hamburger');
            ham_menu.classList.remove('active')
            // 2 lines complete
        mcards.innerHTML =''
        let series_array = data.filter(ele=>{
            return ele.type === "bollywood"
        })
        series_array.forEach((ele,i) => {
            let {tittle,mposter,gener,type,teralink,description} = ele;
            let card = document.createElement('div')
            card.classList.add('card');
            card.innerHTML =
           `<div class="card-img-box">
            <img src="${mposter}" alt="${tittle}">
        </div>
        <div class="card-text-box">
            <h1>${tittle}</h1>
            <p><span id="type">${type}</span> <span id="gener">${gener}</span></p>
            <a href="#" class="play_btn">Play <i class="fa-solid fa-play"></i></a>
        </div>`
        
        mcards.appendChild(card)
        });
    })}

    // nav filter for hollywood 
    let hollywood = document.querySelectorAll("#Hollywood")
    for(let i= 0;i<=hollywood.length;i++){
        
    hollywood[i]?.addEventListener('click',()=>{
        let ham_menu = document.querySelector('header .hamburger');
        ham_menu.classList.remove('active')
        mcards.innerHTML =''
        let series_array = data.filter(ele=>{
            return ele.type === "hollywood"
        })
        series_array.forEach((ele,i) => {
            let {tittle,mposter,gener,type,teralink,description} = ele;
            let card = document.createElement('div')
            card.classList.add('card');
            card.innerHTML =
           `<div class="card-img-box">
            <img src="${mposter}" alt="${tittle}">
        </div>
        <div class="card-text-box">
            <h1>${tittle}</h1>
            <p><span id="type">${type}</span> <span id="gener">${gener}</span></p>
            <a href="#" class="play_btn">Play <i class="fa-solid fa-play"></i></a>
        </div>`
        
        mcards.appendChild(card)
        });
    })}

     // NAV FILTER FOR adult
     let Adult = document.querySelectorAll("#hot")
    
     for(let i= 0;i<=Adult.length;i++){
     //   question mark after type eroor in js ??????????????????????????????????????????????
         Adult[i]?.addEventListener('click', () => {
             // below 2 lines are for close ham burder screen or 
             let ham_menu = document.querySelector('header .hamburger');
             ham_menu.classList.remove('active')
             // 2 lines complete
         mcards.innerHTML =''
         let series_array = data.filter(ele=>{
             return ele.type === "hot"
         })
         series_array.forEach((ele,i) => {
             let {tittle,mposter,gener,type,teralink,description} = ele;
             let card = document.createElement('div')
             card.classList.add('card');
             card.innerHTML =
            `<div class="card-img-box">
             <img src="${mposter}" alt="${tittle}">
         </div>
         <div class="card-text-box">
             <h1>${tittle}</h1>
             <p><span id="type">${type}</span> <span id="gener">${gener}</span></p>
             <a href="#" class="play_btn">Play <i class="fa-solid fa-play"></i></a>
         </div>`
         
         mcards.appendChild(card)
         });
     })}

      
    // nav filter for series
    let sereis = document.querySelectorAll("#series")
    for(let i= 0;i<=sereis.length;i++){
    sereis[i]?.addEventListener('click',()=>{
        let ham_menu = document.querySelector('header .hamburger');
        ham_menu.classList.remove('active')
        mcards.innerHTML =''
        let series_array = data.filter(ele=>{
            return ele.type === "series"
        })
        series_array.forEach((ele,i) => {
            let {tittle,mposter,gener,type,teralink,description} = ele;
            let card = document.createElement('div')
            card.classList.add('card');
            card.innerHTML =
           `<div class="card-img-box">
            <img src="${mposter}" alt="${tittle}">
        </div>
        <div class="card-text-box">
            <h1>${tittle}</h1>
            <p><span id="type">${type}</span> <span id="gener">${gener}</span></p>
            <a href="#" class="play_btn">Play <i class="fa-solid fa-play"></i></a>
        </div>`
        
        mcards.appendChild(card)
        });
    })}
    // nav filter for south hindi dubbed
    let shm = document.querySelectorAll("#shm")
    for(let i= 0;i<=shm.length;i++){
    shm[i]?.addEventListener('click',()=>{
        let ham_menu = document.querySelector('header .hamburger');
        ham_menu.classList.remove('active')
        mcards.innerHTML =''
        let series_array = data.filter(ele=>{
            return ele.type === "south hindi dubbed"
        })
        series_array.forEach((ele,i) => {
            let {tittle,mposter,gener,type,teralink,description} = ele;
            let card = document.createElement('div')
            card.classList.add('card');
            card.innerHTML =
           `<div class="card-img-box">
            <img src="${mposter}" alt="${tittle}">
        </div>
        <div class="card-text-box">
            <h1>${tittle}</h1>
            <p><span id="type">${type}</span> <span id="gener">${gener}</span></p>
            <a href="#" class="play_btn">Play <i class="fa-solid fa-play"></i></a>
        </div>`
        
        mcards.appendChild(card)
        });
    })}
    // nav filter for gener drama
    let drama = document.querySelectorAll("#drama")
    for(let i= 0;i<=drama.length;i++){
    drama[i]?.addEventListener('click',()=>{
        let ham_menu = document.querySelector('header .hamburger');
        ham_menu.classList.remove('active')
        mcards.innerHTML =''
        let series_array = data.filter(ele=>{
            return ele.gener === "drama"
        })
        series_array.forEach((ele,i) => {
            let {tittle,mposter,gener,type,teralink,description} = ele;
            let card = document.createElement('div')
            card.classList.add('card');
            card.innerHTML =
           `<div class="card-img-box">
            <img src="${mposter}" alt="${tittle}">
        </div>
        <div class="card-text-box">
            <h1>${tittle}</h1>
            <p><span id="type">${type}</span> <span id="gener">${gener}</span></p>
            <a href="#" class="play_btn">Play <i class="fa-solid fa-play"></i></a>
        </div>`
        
        mcards.appendChild(card)
        });
    })}
    // nav filter for gener mystery
    let mystery = document.querySelectorAll("#mystery")
    for(let i= 0;i<=mystery.length;i++){
    mystery[i]?.addEventListener('click',()=>{
        let ham_menu = document.querySelector('header .hamburger');
        ham_menu.classList.remove('active')
        mcards.innerHTML =''
        let series_array = data.filter(ele=>{
            return ele.gener === "mystery"
        })
        series_array.forEach((ele,i) => {
            let {tittle,mposter,gener,type,teralink,description} = ele;
            let card = document.createElement('div')
            card.classList.add('card');
            card.innerHTML =
           `<div class="card-img-box">
            <img src="${mposter}" alt="${tittle}">
        </div>
        <div class="card-text-box">
            <h1>${tittle}</h1>
            <p><span id="type">${type}</span> <span id="gener">${gener}</span></p>
            <a href="#" class="play_btn">Play <i class="fa-solid fa-play"></i></a>
        </div>`
        
        mcards.appendChild(card)
        });
    })}
    // nav filter for gener romance
    let romance = document.querySelectorAll("#romance")
    for(let i= 0;i<=romance.length;i++){
    romance[i]?.addEventListener('click',()=>{
        let ham_menu = document.querySelector('header .hamburger');
        ham_menu.classList.remove('active')
        mcards.innerHTML =''
        let series_array = data.filter(ele=>{
            return ele.gener === "romance"
        })
        series_array.forEach((ele,i) => {
            let {tittle,mposter,gener,type,teralink,description} = ele;
            let card = document.createElement('div')
            card.classList.add('card');
            card.innerHTML =
           `<div class="card-img-box">
            <img src="${mposter}" alt="${tittle}">
        </div>
        <div class="card-text-box">
            <h1>${tittle}</h1>
            <p><span id="type">${type}</span> <span id="gener">${gener}</span></p>
            <a href="#" class="play_btn">Play <i class="fa-solid fa-play"></i></a>
        </div>`
        
        mcards.appendChild(card)
        });
    })}
    // nav filter for gener thriller
    let thriller = document.querySelectorAll("#thriller")
    for(let i= 0;i<=thriller.length;i++){
    thriller[i]?.addEventListener('click',()=>{
        let ham_menu = document.querySelector('header .hamburger');
        ham_menu.classList.remove('active')
        mcards.innerHTML =''
        let series_array = data.filter(ele=>{
            return ele.gener === "thriller"
        })
        series_array.forEach((ele,i) => {
            let {tittle,mposter,gener,type,teralink,description} = ele;
            let card = document.createElement('div')
            card.classList.add('card');
            card.innerHTML =
           `<div class="card-img-box">
            <img src="${mposter}" alt="${tittle}">
        </div>
        <div class="card-text-box">
            <h1>${tittle}</h1>
            <p><span id="type">${type}</span> <span id="gener">${gener}</span></p>
            <a href="#" class="play_btn">Play <i class="fa-solid fa-play"></i></a>
        </div>`
        
        mcards.appendChild(card)
        });
    })}
    // nav filter for gener war
    let war = document.querySelectorAll("#war")
    for(let i= 0;i<=war.length;i++){
    war[i]?.addEventListener('click',()=>{
        let ham_menu = document.querySelector('header .hamburger');
        ham_menu.classList.remove('active')
        mcards.innerHTML =''
        let series_array = data.filter(ele=>{
            return ele.gener === "war"
        })
        series_array.forEach((ele,i) => {
            let {tittle,mposter,gener,type,teralink,description} = ele;
            let card = document.createElement('div')
            card.classList.add('card');
            card.innerHTML =
           `<div class="card-img-box">
            <img src="${mposter}" alt="${tittle}">
        </div>
        <div class="card-text-box">
            <h1>${tittle}</h1>
            <p><span id="type">${type}</span> <span id="gener">${gener}</span></p>
            <a href="#" class="play_btn">Play <i class="fa-solid fa-play"></i></a>
        </div>`
        
        mcards.appendChild(card)
        });
    })}
    // nav filter for gener comedy
    let comedy = document.querySelectorAll("#comedy")
    for(let i= 0;i<=comedy.length;i++){
    comedy[i]?.addEventListener('click',()=>{
        let ham_menu = document.querySelector('header .hamburger');
        ham_menu.classList.remove('active')
        mcards.innerHTML =''
        let series_array = data.filter(ele=>{
            return ele.gener === "comedy"
        })
        series_array.forEach((ele,i) => {
            let {tittle,mposter,gener,type,teralink,description} = ele;
            let card = document.createElement('div')
            card.classList.add('card');
            card.innerHTML =
           `<div class="card-img-box">
            <img src="${mposter}" alt="${tittle}">
        </div>
        <div class="card-text-box">
            <h1>${tittle}</h1>
            <p><span id="type">${type}</span> <span id="gener">${gener}</span></p>
            <a href="#" class="play_btn">Play <i class="fa-solid fa-play"></i></a>
        </div>`
        
        mcards.appendChild(card)
        });
    })}
    // nav filter for gener cartoon
    let cartoon = document.querySelectorAll("#cartoon")
    for(let i= 0;i<=cartoon.length;i++){
    cartoon[i]?.addEventListener('click',()=>{
        let ham_menu = document.querySelector('header .hamburger');
        ham_menu.classList.remove('active')
        mcards.innerHTML =''
        let series_array = data.filter(ele=>{
            return ele.gener === "cartoon"
        })
        series_array.forEach((ele,i) => {
            let {tittle,mposter,gener,type,teralink,description} = ele;
            let card = document.createElement('div')
            card.classList.add('card');
            card.innerHTML =
           `<div class="card-img-box">
            <img src="${mposter}" alt="${tittle}">
        </div>
        <div class="card-text-box">
            <h1>${tittle}</h1>
            <p><span id="type">${type}</span> <span id="gener">${gener}</span></p>
            <a href="#" class="play_btn">Play <i class="fa-solid fa-play"></i></a>
        </div>`
        
        mcards.appendChild(card)
        });
    })}
    // nav filter for gener adventure
    let adventure = document.querySelectorAll("#adventure")
    for(let i= 0;i<=adventure.length;i++){
    adventure[i]?.addEventListener('click',()=>{
        let ham_menu = document.querySelector('header .hamburger');
        ham_menu.classList.remove('active')
        mcards.innerHTML =''
        let series_array = data.filter(ele=>{
            return ele.gener === "adventure"
        })
        series_array.forEach((ele,i) => {
            let {tittle,mposter,gener,type,teralink,description} = ele;
            let card = document.createElement('div')
            card.classList.add('card');
            card.innerHTML =
           `<div class="card-img-box">
            <img src="${mposter}" alt="${tittle}">
        </div>
        <div class="card-text-box">
            <h1>${tittle}</h1>
            <p><span id="type">${type}</span> <span id="gener">${gener}</span></p>
            <a href="#" class="play_btn">Play <i class="fa-solid fa-play"></i></a>
        </div>`
        
        mcards.appendChild(card)
        });
    })}
    // nav filter for gener action
    let action = document.querySelectorAll("#action")
    for(let i= 0;i<=action.length;i++){
    action[i]?.addEventListener('click',()=>{
        // ###################
        let ham_menu = document.querySelector('header .hamburger');
        ham_menu.classList.remove('active')

        // ###############################
        mcards.innerHTML =''
        let series_array = data.filter(ele=>{
            return ele.gener === "action"

        })
        series_array.forEach((ele,i) => {
            let {tittle,mposter,gener,type,teralink,description} = ele;
            let card = document.createElement('div')
            card.classList.add('card');
            card.innerHTML =
           `<div class="card-img-box">
            <img src="${mposter}" alt="${tittle}">
        </div>
        <div class="card-text-box">
            <h1>${tittle}</h1>
            <p><span id="type">${type}</span> <span id="gener">${gener}</span></p>
            <a href="#" class="play_btn">Play <i class="fa-solid fa-play"></i></a>
        </div>`
        
        mcards.appendChild(card)
        });
        
        
    })}

   
   
  
})





    // search filter

// ###############################################################################################################
// very import filter  input filter
    const search = ()=>{
        const input = document.getElementById("search_input").value.toUpperCase()
        const storemovies = document.getElementById("movie-list")
        const movies = document.querySelectorAll(".search-results-card")
        var filter = input;
    
     for (let index = 0; index < movies.length; index++) {
        var a = movies[index].getElementsByClassName("sr-text-box")[0];
        var txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          movies[index].style.display = "flex";
          storemovies.style.visibility ="visible";
          storemovies.style.opacity =1;
        } 
        else {
          movies[index].style.display = "none";
          
        }
        if(input == 0){
            storemovies.style.visibility ="hidden";
          storemovies.style.opacity =0;
        }
      }
     }













// more menu function
let more_menu = document.querySelector('header .more');
document.querySelector("#more-item").onclick = () =>{
    more_menu.classList.toggle('active');
}
// mobile ham burger menu active
let ham_menu = document.querySelector('header .hamburger');
document.querySelector("#ham-btn").onclick = () =>{
    ham_menu.classList.toggle('active');
}
// mobile ham burger menu remove
let redclosebtn = document.querySelector("#close-btn")
redclosebtn.onclick=()=>{
    ham_menu.classList.remove('active')
}




  










