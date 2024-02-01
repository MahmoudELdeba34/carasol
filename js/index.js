// var imgs=document.querySelectorAll(".img-fluid")

// console.log(imgs);
// var lightBoxContanir=document.querySelector(".ParentLayer")
// var childLayer=document.querySelector(".childLayer");
// for(var i=0;i<imgs.length;i++){
//     imgs[i].addEventListener("click",function(eventInfo){
//         lightBoxContanir.style.display="flex"
//         var imgSrc=eventInfo.target.src;
//         childLayer.style.backgroundImage=`url(${imgSrc})`;
//     })
// }


// var childLayer=document.querySelector(".childLayer");
// //colse 
// var colse=document.getElementById("close");
// colse.addEventListener("click",function(){
//     lightBoxContanir.style.display="none"
// })

var ParentLayer=document.querySelector(".ParentLayer")
var childLayer=document.querySelector(".childLayer")
var prev=document.getElementById("prev");
var colse=document.getElementById("close");
var next=document.getElementById("next");
var imgs=Array.from(document.querySelectorAll(".img-fluid"));    //iam convert nodelist into array
var currentIndex=0;
for(var i=0;i<imgs.length;i++){
    imgs[i].addEventListener("click",function(eventInfo){
        ParentLayer.style.display="flex";
       var imgSrc=eventInfo.target.src;
        childLayer.style.backgroundImage=`url(${imgSrc})`;
        currentIndex=imgs.indexOf(eventInfo.target );
    })
}

//close
colse.addEventListener("click",colseSlider)
function colseSlider(){
    ParentLayer.style.display="none";
}

// //next
// next.addEventListener("click",function(){
//     currentIndex++;
//     if(currentIndex==imgs.length){
//         currentIndex=0;
//     }
//     var imgSrc=imgs[currentIndex].src;
//     childLayer.style.backgroundImage=`url(${imgSrc})`;
// })

// //prev
// prev.addEventListener("click",function(){
//     currentIndex--;
//     if(currentIndex<0){
//         currentIndex=imgs.length-1;
//     }
//     var imgSrc=imgs[currentIndex].src;
//     childLayer.style.backgroundImage=`url(${imgSrc})`;
// })



//next
//انا جزئت الداله علشان خاطر ال البرفورمنس وعلاشن هستخدمهم بعد كدا
function gitNextSide(){
    currentIndex++
    if(currentIndex==imgs.length){
        currentIndex=0;
    }
   var imgSrc=imgs[currentIndex].src
   childLayer.style.backgroundImage=`url(${imgSrc})`
}
next.addEventListener('click',gitNextSide)
//prev
function getPrevousSide(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex=imgs.length-1;
    }
   var imgSrc=imgs[currentIndex].src;
   childLayer.style.backgroundImage=`url(${imgSrc})`
}
prev.addEventListener('click', getPrevousSide)

document.addEventListener('keydown',function(e){
    if(e.key=="Escape"){
        colseSlider();
    }else if(e.key=="ArrowRight"){
        gitNextSide()
    }
    else if(e.key=="ArrowLeft"){
        getPrevousSide()
    }
})
//دى علشان لما اضغط على اى مكان فى بره يطلع من ال الديف الصغيره
ParentLayer.addEventListener('click',function(e){
    if(e.target!==childLayer&&e.target!==next&&e.target!==prev){
        colseSlider();
    }
    
})





