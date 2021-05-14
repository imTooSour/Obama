var data=["https://media.npr.org/assets/img/2020/11/15/gettyimages-1229382449-491a2d86b509b916f858149d375a9479bba6abf9-s800-c85.jpg", "https://i1.wp.com/www.pbs.org/wgbh/frontline/wp-content/uploads/2015/11/1432578779_AP574955647676.jpg?resize=1200%2C630", "https://i.kym-cdn.com/entries/icons/facebook/000/027/879/yobammarere.jpg", "https://pbs.twimg.com/media/CgrBZm3UoAAz-1O.jpg", "https://www.thestar.com/content/dam/thestar/news/world/2013/04/29/obama_fun_with_photoshop/obama.jpg", "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQ3NTI2OTA4NzY5MjE2MTI4/drake_photo_by_prince_williams_wireimage_getty_479503454.jpg", "https://i.insider.com/568d2247e6183eee168b7028?width=1136&format=jpeg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-12/7/16/campaign_images/webdr01/things-everybody-does-but-doesnt-talk-about-featu-2-6150-1449524820-6_dblbig.jpg?resize=1200:*", "https://ih1.redbubble.net/image.926047412.3102/mwo,x1000,ipad_2_snap-pad,750x1000,f8f8f8.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4yq0MAURDNZf3rmSnhlRHvuOMozv4E8hifg&usqp=CAU", "data:image/jpeg;base64,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", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb0rKjq793Q_iadP6iPWeIUfHyoCGY59v9Sw&usqp=CAU"]

function appendlist (text){                
    var node = document.createElement("Li");
    var textnode=document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("list_item").appendChild(node);
}
document.getElementById("add").onclick  = function() {
    
    var text = document.getElementById("user_input").value; 
    var currentItems = document.getElementById('list_item')
    // console.log(currentItems.children[0])


    // if(currentItems.children.length != 0){
    //     for (var item = 0 ; item < currentItems.children.length; item++) {
    //         console.log(currentItems.children.length)
    //         var listText = currentItems.children[item].textContent
    //         console.log(listText, text)
    //         if(listText === text){
    //             console.log("wrong")
    //         } 
    //         else{   
    //             appendlist(text)
    //         }
    //         console.log("loop end")
    //     }
    // }        else{appendlist(text)}

    
    appendlist(text)
    const randomElement = data[Math.floor(Math.random() * data.length)];
    document.getElementById("obama").setAttribute("src", randomElement);
}
var test = document.getElementById("invert");
console.log(test)

function invert(){
    document.getElementById("invert").style.filter="invert(100%)";
    }

test.addEventListener("mouseenter", function( event ) {

  event.target.style.color = "purple";
  console.log("hover");
})
test.addEventListener("mouseover", function( event ) {

  event.target.style.color = "orange";
})


