function gallery(title, portfolio)
{
    var portfolio = portfolio;
    var portfolioDiv = document.createElement("DIV");
        portfolioDiv.id = "portfolio";
        portfolioDiv.style.height = "auto";
        portfolioDiv.style.width = "100%";
        portfolioDiv.style.backgroundColor = "#fff4f4";
        portfolioDiv.style.justifyContent = "space-between";
        portfolioDiv.textAlign = "center";
   //portfolioDiv.style.paddingRight = "10px";

        //===== Portfolio heading ========
        var thirdfirstheading = document.createElement("h1");
            thirdfirstheading.innerHTML = title;
            thirdfirstheading.style.margin = "0px";
            thirdfirstheading.style.padding = "1.5em 0 10px";
            thirdfirstheading.style.borderBottom = "1px solid gray";
            thirdfirstheading.style.textAlign = "center";
        portfolioDiv.appendChild(thirdfirstheading);

        //===============
        var thirdfirstDiv = document.createElement("DIV");
            thirdfirstDiv.style.display = "flex";
            thirdfirstDiv.style.flexWrap = "wrap";
            thirdfirstDiv.style.padding = "40px 80px";
            thirdfirstDiv.style.justifyContent = "center";

        portfolioDiv.appendChild(thirdfirstDiv);
            //======= portfolio
            
            portfolio.forEach(index => {
                portfoliofun(index)
            });

            function portfoliofun(index)
            {
                var centerDiv = document.createElement("img");	
                centerDiv.classList = 'responsive';
                centerDiv.src = index.src;
                centerDiv.style.width = "22%";
                centerDiv.style.padding = "2px";
                centerDiv.style.margin = "8px";
                centerDiv.style.display = "block";
                centerDiv.style.border = "1px solid white";
                centerDiv.style.boxShadow = "black 4px 6px 6px";
                thirdfirstDiv.appendChild(centerDiv);
            }

   document.body.appendChild(portfolioDiv);
}