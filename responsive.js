function responsive()
{
    if(screen.width<=500)
   {
        var aboutImg = document.getElementById('aboutimg');
        aboutImg.style.width = '80%';
        abputP.style.width = '80%';
        abputP.style.padding = '100px';
        
        var aboutsecondUs = document.getElementById('aboutsection');
        aboutsecondUs.style.display = "block";

        var ifreamDiv = document.getElementsByTagName('iframe');
        ifreamDiv.height = "800px";
        var centerDiv = document.getElementsByClassName('responsive');
        for(var i=0;i<=centerDiv.length;i++)
        {
            centerDivfun(i);
        }
        function centerDivfun(i)
        {
            centerDiv[i].style.width = "45%";
            centerDiv[i].style.margin = "12px";
        }
    var fontSize = document.getElementsByClassName('fontSize');
        for(var i=0;i<=fontSize.length;i++)
        {
            fontSizefun(i);
        }
        function fontSizefun(i)
        {
            fontSize[i].style.fontSize = "23px";
            fontSize[i].style.lineHeight = "1.9em";
        }
   }else if(screen.width < 1000 && screen.width > 500)
   {
        var responsiveimg = document.getElementsByClassName('responsive');
        for(var i=0;i<=responsiveimg.length;i++)
        {
            responsiveimgfun(i);
        }
        function responsiveimgfun(i)
        {
            responsiveimg[i].style.width = "30%";
            responsiveimg[i].style.margin = "10px";
        }
    var fontSize = document.getElementsByClassName('fontSize');
        for(var i=0;i<=fontSize.length;i++)
        {
            fontSizefun(i);
        }
        function fontSizefun(i)
        {
            fontSize[i].style.fontSize = "20px";
            fontSize[i].style.lineHeight = "1.6em";
        }
   }else {
        var hTag = document.getElementsById('abputP');
        hTag.appendChild(pTagsecond);
        //aboutsecondUs.appendChild(pTagsecond);
   }   
}