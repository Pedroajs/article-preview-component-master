let testBool = true;
function showIcons(){
    const iconsContainer = document.querySelector('.icons-container');

    testBool = testBool? false : true;

    if(testBool === false){
        iconsContainer.style.visibility = 'visible';
    }else{
        iconsContainer.style.visibility = 'hidden';
    }
    
    

    console.log('bool is '+ testBool)
   
}
