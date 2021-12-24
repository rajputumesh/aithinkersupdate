function slider(array,data)
{
    // creating first section
   var firstDiv = document.createElement("DIV");
   firstDiv.id = "bgslider";
   firstDiv.style.backgroundImage = "url('img/4.jpg')";
   firstDiv.style.backgroundRepeat = "no-repeat";
   firstDiv.style.backgroundPosition = "center";
   firstDiv.style.opacity = '0.7';
   firstDiv.style.height = "500px";
   firstDiv.style.width = "100%";
   firstDiv.style.backgroundColor = "#607D8B";
   firstDiv.style.display = "flex";
   firstDiv.style.justifyContent = "center";
   firstDiv.style.alignItems = "center";
   
   var centerTag = document.createElement("p");	
   
   centerTag.classList = "fontSize";
   centerTag.style.width = "50%";
   centerTag.style.border = "1px solid white";
   centerTag.style.color = "white";
   centerTag.style.backgroundColor = "#000000ad";
   centerTag.style.lineHeight = "1.4em";
   centerTag.style.fontSize = "18px";
   centerTag.innerHTML = data;
   centerTag.style.fontFamily = "Montserrat";
   centerTag.style.display = "flex";
   centerTag.style.justifyContent = "center";
   centerTag.style.alignItems = "center";
   centerTag.style.textAlign = "justify";
   centerTag.style.padding = "15px 20px";

   
   firstDiv.appendChild(centerTag);
   
   document.body.appendChild(firstDiv);

   var array = array;
    var i=0;
    sliderbackground();
    function sliderbackground() {
        document.getElementById('bgslider').style.backgroundImage = "url("+array[i]+")";
        setTimeout(function() {sliderbackground()}, 3000);
        i++;
        if(array.length==i)
        {
            i=0;
        }
    }
}

