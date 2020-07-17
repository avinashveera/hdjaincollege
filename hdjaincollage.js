var i = 0;
var inf = 1;
      
setInterval( function slide(){
  var x=document.getElementById("img-slide");
  
              if(i===5)
              {
                  i=0;
              }

      images=["images/collage1.jpg","images/collage2.jpg","images/collage3.jpg","images/collage4.gif","images/collage5.gif"]
              x.src=images[i]
     
              i++;
     

   },2000)

   function showalltext(){
     let x= document.getElementById("remaintext");
     let y =document.getElementsByClassName("about-collage");
     let z=document.getElementById("readmorebtn");

     if(x.style.display==="none")
     {
      x.style.display="block"
      y[0].style.overflow="scroll"
      z.textContent="show less"
     }
     else
     {
      x.style.display="none"
      y[0].style.overflow="hidden"
      z.textContent="read more"
     }
       
   }
     

        function showmenu(){
             let x=document.getElementsByClassName("ancordiv")
               
        
             console.log(x[0]) 
        
             if(x[0].style.display==="none")
        
            {
              x[0].style.display="block"
            }
        
            else
            {
              x[0].style.display="none"
            }
        
          if(inf===1)
          {
            info();
            inf++
          }
            
           }
        
      //     addEventListener("DOMContentLoaded",function(){
        //    var header=document.getElementsByTagName("header");
          //  var about=document.getElementsByClassName("about-collage");
             
            //   about[0].append(header[0].innerHTML)
          
               
          
              //});


              $(function(){
                $("#header").load("about.html"); 
                $("#footer").load("about.html"); 
              });
          