function header()
{
    var headerDiv = document.createElement("DIV");
   headerDiv.style.width = "100%";
   headerDiv.style.backgroundColor = "white";
   //headerDiv.style.textAlign = "center";
   headerDiv.style.padding = "20px 0";
   headerDiv.style.position = "relative";
   headerDiv.style.display = "flex";
   
   //======= for logo==============
   var headerTag = document.createElement("img");	
   headerTag.src = "https://aithinkers.com/assets/img/ai-small-2.webp";
   headerTag.style.width = "150px";
   headerTag.style.height = "auto";
   headerTag.style.position = "relative";
   headerTag.style.paddingLeft="5%";

   var menuTag = document.createElement("DIV");	
   menuTag.style.position = "relative";
   menuTag.style.marginLeft="auto";
   menuTag.style.paddingRight="5%";

   var menubutton = document.createElement("button");	
   menubutton.classList = "fa fa-bars menubutton";
   menubutton.type = "button";
   menubutton.style.position = "relative";
   menubutton.style.marginLeft="auto";
   menubutton.style.padding="10px";
   menubutton.style.fontSize = "35px";
   menubutton.style.display = "none";
   menubutton.style.background = "black";
   menubutton.style.color = "white";
   menubutton.style.marginRight = "5%";
        
   headerDiv.appendChild(headerTag);
   headerDiv.appendChild(menuTag);
   headerDiv.appendChild(menubutton)

   //========== for menu==========

   
    var menutab = [{'name':"Home",'value':"index.html"},
    {'name':"About Us",'value':"about.html"},
    {'name':"Portfolio",'value':"portfolio.html"},
    {'name':"Contact US",'value':"index.html#contactus"}];

    menutab.forEach(index => {
        manu(index);
    });

    function manu(index)
    {
        var menu = document.createElement("a");
        menu.innerHTML = index.name;
        menu.href = index.value;
        menu.style.color = "black"
        menu.style.fontSize = "20px";
        menu.style.paddingLeft ="30px";
        menu.style.textDecoration = "none";
        menuTag.appendChild(menu);
    }

   document.body.appendChild(headerDiv);
  	
    
}