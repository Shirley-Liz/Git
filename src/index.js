// *check if the like button is clicked
//count the number of times the button is clicked
//send the number of times to display

var buttonlike= document.getElementById("like");
if(buttonlike){
    var counter = 0;
    buttonlike.onclick = function increment(event){
        const inc = document.getElementById("increase")
        if(inc){
        event.preventDefault();

        counter++;
        var numberOfLikes = counter === 1
            ? counter.toString() + "like"
            : counter.toString() + "likes"
        
        document.getElementById("increase").innerHTML = numberOfLikes
       
    } else{
        console.warn("you have an error");
    }
}
}
else{
    console.warn("you have an error");
}

const comm = document.getElementById("commentbutton")
comm.addEventListener("click", addNewComment);
function addNewComment(event){
    event.preventDefault();
    // var newComment = {
    //   "comment": document.getElementById("comment1").value
     
    // }
    alert("Hello");
}

