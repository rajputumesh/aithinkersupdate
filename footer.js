function footer()
{
    var footerDiv = document.createElement("DIV");
   footerDiv.id = "contactus";
   footerDiv.style.height = "auto";
   footerDiv.style.width = "100%";
   footerDiv.style.backgroundColor = "#212121";
   footerDiv.style.padding = "20px 0";
   footerDiv.style.display = "flex";
   footerDiv.style.justifyContent = "center";
   footerDiv.style.alignItems = "center";
   
   var divContainer = document.createElement("div");
   divContainer.style.width= "100%";
   divContainer.style.display = "flex";
   divContainer.style.flexWrap = "wrap";
   divContainer.style.justifyContent = "space-between";
   divContainer.style.alignItems = "center";
   divContainer.style.paddingLeft = "100px";
   divContainer.style.paddingRight = "100px";
   divContainer.style.color = "white";

   var footerFirstDiv = document.createElement("div");
   footerFirstDiv.innerHTML = "© Copyright Portfolio. All Rights Reserved";
   footerFirstDiv.style.width = "50%";
   footerFirstDiv.style.height = "auto";
   footerFirstDiv.style.fontSize = "20px";
   footerFirstDiv.style.padding = "20px 0";
   
   var footerSecondDiv = document.createElement("div");
   footerSecondDiv.innerHTML = "Contact Us - &nbsp;&nbsp;<i class='fa fa-phone'></i> 91+7078049692 , &nbsp;&nbsp;<i class='fa fa-envelope-o'></i> rajputumesh117@gmail.com";
   footerSecondDiv.style.width = "50%";
   footerSecondDiv.style.fontSize = "20px";
   footerSecondDiv.style.height = "auto";
   
   divContainer.appendChild(footerFirstDiv);
   divContainer.appendChild(footerSecondDiv);
   
   footerDiv.appendChild(divContainer);  
   
   document.body.appendChild(footerDiv);
   
}