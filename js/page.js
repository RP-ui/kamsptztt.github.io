var nav_width;

setInterval(()=>{
    nav_width = getComputedStyle(document.getElementById("js-nav"),null).width;
    if(Number(nav_width.replace("px",""))>166){
        
    }
},1);
