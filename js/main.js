
const app = new Vue(
    {
    el : "#app",  
    data : { 
        title : "New Carousel",
        // contatore 
        activeElements : 0,  
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
    methods : {
        nextImg: function(){
            if( this.activeElements === this.multimedia.length -1){
                this.activeElements= 0;
            }else{
                this.activeElements++;
            }
                    
        }, 
        prevImg : function(){
            if(this.activeElements === 0){
                this.activeElements= this.multimedia.length -1; 
            }else{
                this.activeElements--;
            }; 
        },  

    }
} 
)

// let activeElement= 0; done
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





