
const app = new Vue({
    el : "#app",  
    data : { 
        title : "New Carousel", 
        multimedia : [
            {
                name : "Four elements",
                description : "Life",
                image : "img/146108.jpg", 
        
            },
        
            {
                name : "Anchestor",
                description : "Beautiful",
                image : "img/sculpture_starry_sky_stone_123440_3840x2160.jpg",
            },
        
            {
                name : "Nature",
                description : "We respect",
                image : "img/nature-5325442_960_720.jpg", 
                
            },
        
            {
                name : "Reflect",
                description: "Moments",
                image : "img/pexels-photo-1323550.jpeg",
            },
        
            {
                name : "Island in the sky",
                description: "Sky and sea merge",
                image : "img/sunset-3087145_960_720.jpg",
            },
        
        ]

    }, 
}
  
);


// const title = document.getElementById("my-before-carousel");  
// title.innerHTML=`<h1> GO VEGAN  <h1>`;  done
// const photo = document.querySelector("div.my-carousel-images"); done 
// const preview = document.querySelector("div.my-thumbnails"); done
// for(let i = 0; i <multimedia.length; i++){                   done
    
//     photo.innerHTML+=
//     `
//     <img class="my-img" src="img/${multimedia[i].image}" alt="${multimedia[i].name}"> 
//     `;  
    
//     preview.innerHTML += 
//     `
    
//     <img class="dom-preview" src="img/${multimedia[i].image}" alt="${multimedia[i].nome}">
//     `; 
// } 

// let activeElement= 0;
// document.getElementsByClassName("my-img")[activeElement].classList.add("active");
// document.getElementsByClassName("dom-preview")[activeElement].classList.add("filter"); 

// const nextOne = document.querySelector("div.my-previous"); 

// nextOne.addEventListener("click", function(){ 
    
//     document.getElementsByClassName("my-img")[activeElement].classList.remove("active"); 
//     document.getElementsByClassName("dom-preview")[activeElement].classList.remove("filter"); 

//     if(activeElement === 0){
//         activeElement= multimedia.length -1; 
//     }else{
//         activeElement--;
//     }; 

//     document.getElementsByClassName("my-img")[activeElement].classList.add("active"); 
//     document.getElementsByClassName("dom-preview")[activeElement].classList.add("filter");
// }); 

// const fewer = document.querySelector("div.my-next");  

// fewer.addEventListener("click", function() {
//     document.getElementsByClassName("my-img")[activeElement].classList.remove("active"); 
//     document.getElementsByClassName("dom-preview")[activeElement].classList.remove("filter"); 
   

//     if( activeElement === multimedia.length -1){
//         activeElement= 0;
//     }else{
//         activeElement++;
//     }
    
//     document.getElementsByClassName("my-img")[activeElement].classList.add("active");
//     document.getElementsByClassName("dom-preview")[activeElement].classList.add("filter");
      
// });   




//  setInterval (next, 1500);


// function next(){ 
    
//     document.getElementsByClassName("my-img")[activeElement].classList.remove("active");
// 	document.getElementsByClassName("dom-preview")[activeElement].classList.remove("filter");
	
// 	if ( activeElement === multimedia.length - 1 ){
// 		activeItem = 0;
// 	} else {
// 		activeElement++;
// 	}
// 	document.getElementsByClassName("my-img")[activeElement].classList.add("active");
// 	document.getElementsByClassName("dom-preview")[activeElement].classList.add("filter");
	
// }; 





