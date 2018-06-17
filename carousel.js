//user can click two buttons to view pictures
//user sees three pictures depending of direction of buttons
//user cycles through pictures
var carousel = ["Meandbigbro.jpg", "hsMe.jpg", "meAndRalphy.jpg", "pWedding.jpg", "miMadre.jpg", "MesismoandEngrid.jpg", "shhh.jpg"]
$(document).ready(function(){
 var pictureIndex = 0
 $('.left').on("click", function(){
   if(pictureIndex === 0 ){
     pictureIndex = carousel.length - 1
   }else{
     pictureIndex = pictureIndex -1
   }
   $('#imgCarousel').attr('src', carousel[pictureIndex])
 })

 $('.right').on("click", function(){
   if(pictureIndex === carousel.length - 1){
     pictureIndex = 0;
   }else{
     pictureIndex+=1;
   }
   $('#imgCarousel').attr('src', carousel[pictureIndex])
   console.log(pictureIndex)
 })
});
