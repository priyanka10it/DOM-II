// Your code goes here

    
    /*mouseover*/
   let funBus = document.querySelector('img');
    funBus.addEventListener('mouseover',(event)=> {
        event.target.style.transform = 'scale(1.2)';
    });
 
    /*mouseleave*/
    funBus.addEventListener('mouseleave',(event)=> {
        event.target.style.transform = 'scale(1.0)';
    });

    /*keydown*/ 
   let container = document.querySelector('body');
   container.addEventListener('keydown',(event)=>{
       event.target.style.backgroundColor = 'pink';
       event.target.style.color = 'blue';
       
   });

   /* keyup*/
   container.addEventListener('keyup',(event)=>{
    event.target.style.backgroundColor = 'white';
    event.target.style.color = 'black';
});

/*dbclick*/
const changeImage = document.querySelector(".content-destination img");
changeImage.addEventListener("dblclick", () => {
  changeImage.src = "img/new_destination.jpg";
  changeImage.alt = "New Destination";
});

/*drag*/
let lastImage = document.querySelector('.content-destination img');
lastImage.addEventListener('dragstart', function(){
    alert("This image can not be moved");
  })


/*load*/
window.addEventListener('load', (event) => {
    alert('Thanks for visiting Fun Bus. Have a great day!!');
  });

 /*mouseenter*/
let foot = document.querySelector('.footer');
foot.addEventListener('mouseenter',(event)=>{
    event.target.style.color='purple';
    event.target.style.backgroundColor='magenta';
    });

  /*mouseleave*/  
  foot.addEventListener('mouseleave',(event)=>{
    event.target.style.color='black';
    event.target.style.backgroundColor='#FFEBCD';
    });
   
 
 /*click*/
 let image = document.querySelector('.img-content');
 image.addEventListener('click',(event)=>{
     event.target.style.visibility='hidden';
     alert('Please refresh the page for image');
 });
 
 /*stopPropagation*/
    const background = document.querySelectorAll('.destination')
    background.forEach(element =>{
        element.addEventListener('click',(event)=>{
            event.target.style.color='green';
        });
    });
    const button = document.querySelectorAll('.btn')
    button.forEach(item => {
        item.addEventListener('click', (event)=> { 
            alert("Thank you for the click");
            event.stopPropagation()})
    })

 /*preventDefault*/  
 let navStop = document.querySelector('.nav');
  navStop.addEventListener('click', (event)=>{
    event.preventDefault();
    alert(`No Action!`);
  });

  

