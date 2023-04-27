// Load the JSON data
fetch('data.json')
  .then(response => response.json())
  .then(jsonData => {
    console.log(jsonData);
    // Loop through the JSON data and dynamically create cards
    for (var i = 0; i < jsonData.length; i++) {
      var cardRow = document.getElementById("card-row");

      // Create a new card div element
      var cardDiv = document.createElement("div");
      cardDiv.classList.add("col", "s12", "m12", "l12", "card");

      // Create the card content
      var cardContent = document.createElement("div");
      cardContent.classList.add("card-content");

      // Create the card title
      var cardTitle = document.createElement("span");
      cardTitle.classList.add("card-title");
      cardTitle.innerText = jsonData[i].name;

      // Create the iframe element
      var iframeElement = document.createElement("iframe");
      iframeElement.setAttribute("src", jsonData[i].linkToPage);
      iframeElement.setAttribute("width", "100%");
      iframeElement.setAttribute("height", "500");
      iframeElement.setAttribute("frameborder", "0");
      iframeElement.setAttribute("allowfullscreen", "");

      // Create the button link element
      var buttonLink = document.createElement("a");
      buttonLink.classList.add("card-link");
      buttonLink.setAttribute("href", jsonData[i].linkToPage);
      buttonLink.setAttribute("target", "_blank");
      buttonLink.innerText = "Till bidraget ➡";

      // Add the elements to the card content
      cardContent.appendChild(cardTitle);
      cardContent.appendChild(iframeElement);
      cardContent.appendChild(buttonLink);

      // Add the card content to the card div
      cardDiv.appendChild(cardContent);

      // Add the card div to the card row
      cardRow.appendChild(cardDiv);
    }
  });