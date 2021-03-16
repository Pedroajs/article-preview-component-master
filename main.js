let testBool = true;
function showIcons(){
    const iconsContainer = document.querySelector('.icons-container');

    // iconsContainer.style.visibility = 'visible';
    testBool = testBool? false : true;

    if(testBool === false){
        iconsContainer.style.visibility = 'visible';
    }else{
        iconsContainer.style.visibility = 'hidden';
    }
    
    

    console.log('bool is '+ testBool)
   
}
// buttonAtr.addEventListener("onClick", showIcons);
// let testBool = true; 
          
    
  
// function toggle() { 
//     testBool = !testBool; 
      
//     console.log('Toggled bool is', 
//                         testBool); 
// } 
 