var cl = console.log;
var imgArray=[
    "https://source.unsplash.com/random/?nature/",
    "https://source.unsplash.com/random/?food/",
    "https://source.unsplash.com/random/?animal/",
    "https://source.unsplash.com/random/?flower/",
    "https://source.unsplash.com/random/?drinks/",
    "https://source.unsplash.com/random/?news/"
]
var imgContainer=document.getElementById("imgContainer");
var result="";
for(var i=0; i<imgArray.length;i++){
    cl(imgArray[i]);
    result+=` <div class="col-4 mb-4">
                    <div class="card myThumbnail">
                        <div class="card-body">
                            <img src="${imgArray[i]}">
                        </div>
                    </div>
              </div>
            `
}
imgContainer.innerHTML=result;