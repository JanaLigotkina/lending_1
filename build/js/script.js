let popupBackground=document.getElementById("popup"),openButton=document.getElementById("open--popup"),close=document.getElementById("popup__close");openButton.addEventListener("click",function(){document.getElementById("popup").style.display="block",document.querySelector("body").style.overflow="hidden"}),close.addEventListener("click",function(){document.getElementById("popup").style.display="none",document.querySelector("body").style.overflow="scroll"}),popupBackground.addEventListener("click",function(e){"popup__body"==e.target.className&&"none"!==popupBackground.style.display&&(popupBackground.style.display="none",document.querySelector("body").style.overflow="scroll")});let videoPl=document.getElementById("story-video"),playButton=document.getElementById("playButton");playButton.addEventListener("click",function(){document.getElementById("playButton").style.display="none",videoPl.setAttribute("controls","controls"),setTimeout(function(){videoPl.play()},60)}),videoPl.addEventListener("click",function(){setTimeout(function(){videoPl.pause()},60)});