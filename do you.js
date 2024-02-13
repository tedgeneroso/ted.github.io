let isEarlyClick = false;
let timeoutIds = [];


timeoutIds.push(setTimeout(function() {
    document.getElementById('gifContainer').style.display = 'block';

    
    timeoutIds.push(setTimeout(function() {
        document.getElementById('gifContainer').style.display = 'none';
        document.getElementById('sadGifContainer').style.display = 'block';

        
        timeoutIds.push(setTimeout(function() {
            document.getElementById('sadGifContainer').style.display = 'block';

            
            timeoutIds.push(setTimeout(function() {
                document.getElementById('sadGifContainer').style.display = 'none';
                document.getElementById('sadGifContainer1').style.display = 'block';
                
                timeoutIds.push(setTimeout(function() {
                    document.getElementById('sadGifContainer1').style.display = 'block';

                    
                    timeoutIds.push(setTimeout(function() {
                        document.getElementById('sadGifContainer1').style.display = 'none';
                        document.getElementById('sadGifContainer2').style.display = 'block';
                        
                        timeoutIds.push(setTimeout(function() {
                            document.getElementById('sadGifContainer2').style.display = 'block';
                            
                        }, 2500));
                    }, 2500));
                }, 2500));
            }, 2500));
        }, 2500));
    }, 2500));
}, 0));

let yesButtonGrowing = false;
let mouseInsideNoBtn = false;

document.getElementById('noBtn').addEventListener('mouseenter', function() {
    mouseInsideNoBtn = true;
    growYesButton(0, 1); 
});

document.getElementById('noBtn').addEventListener('mouseleave', function() {
    mouseInsideNoBtn = false;
});

function growYesButton(currentTime, growthFactor) {
    if (!mouseInsideNoBtn || currentTime >= 10) {
        return;
    }

    let siBtn = document.getElementById('siBtn');
    let initialWidth = siBtn.offsetWidth;
    let initialHeight = siBtn.offsetHeight;
    let initialFontSize = parseFloat(window.getComputedStyle(siBtn).fontSize);

    siBtn.style.transition = 'width 0.5s, height 0.5s, font-size 0.5s';
    siBtn.style.width = (initialWidth * growthFactor) + 'px';
    siBtn.style.height = (initialHeight * growthFactor) + 'px';
    siBtn.style.fontSize = (initialFontSize * growthFactor) + 'px';

    setTimeout(function() {
        growYesButton(currentTime + 2, growthFactor + 0.1);
    }, 1000);
}




document.getElementById('siBtn').addEventListener('click', function() {

      
      isEarlyClick = true;

      
      for (let id of timeoutIds) {
          clearTimeout(id);
      }
  
    
    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'block';

    
    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';

    
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = 'Oh yes! I knew you were going to say yes <br> hehe';


    
    setTimeout(function() {
        document.getElementById('happyGifContainer').style.display = 'none';
        document.getElementById('happyGifContainer2').style.display = 'block';
    }, 1000);

    setTimeout(function() {
        document.getElementById('happyGifContainer2').style.display = 'none';
        document.getElementById('happyGifContainer3').style.display = 'block';
    }, 2000);
    setTimeout(function() {
        document.getElementById('happyGifContainer3').style.display = 'none';
        document.getElementById('happyGifContainer4').style.display = 'block';
    }, 3000);
  
});


let noButtonMoving = false; 


document.getElementById('noBtn').addEventListener('mouseenter', function() {

    if (noButtonMoving) {
        return;
    }

    noButtonMoving = true;

    
    document.getElementById('noBtn').classList.add('disabled');

   
    var posX = Math.random() * (window.innerWidth - 200); 
    var posY = Math.random() * (window.innerHeight - 50); 

    
    document.getElementById('noBtn').style.position = 'absolute';
    document.getElementById('noBtn').style.transition = 'all 0.5s'; 
    document.getElementById('noBtn').style.left = posX + 'px';
    document.getElementById('noBtn').style.top = posY + 'px';


    setTimeout(function() {
        noButtonMoving = false; 
        document.getElementById('noBtn').classList.remove('disabled'); 
    }, 500); 
});