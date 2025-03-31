const cards = document.querySelectorAll(".card");
const links = document.querySelectorAll(".link");

fetch("/data.json")
  .then((response) => response.json())
  .then((data) => {
    // Loop through the cards and update the data
    cards.forEach((card, index)=>{
        const title = card.querySelector(".card-type");
        const current = card.querySelector(".current-hours");
        const previous = card.querySelector(".previous-hours");

        // Initial data display
        title.textContent = data[index].title;
        current.textContent = data[index].timeframes.weekly.current + "hrs";
        previous.textContent = "Last week - " + data[index].timeframes.weekly.previous + "hrs";

        // Link event listeners
        links.forEach((link)=>{
            link.addEventListener("click",(e)=>{
                e.preventDefault();

                const timeframe = link.getAttribute("data-timeframe");
                current.textContent = data[index].timeframes[timeframe].current + "hrs";
                const reducedName = timeframe.replace(/ly$/i, "");
                const goodName = reducedName.replace(/i/i, "y");
            })
        })
    })
  });
