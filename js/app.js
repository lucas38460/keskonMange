function coalApi() {
  fetch("https://themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const SpicyArrabiata = document.querySelector(".SpicyArrabiata");
      SpicyArrabiata.innerHTML = data.meals[0].strMeal;
      const SpicyArrabiataImg = document.querySelector(".SpicyArrabiataImg");
      SpicyArrabiataImg.setAttribute("src", data.meals[0].strMealThumb)
      console.log(data.meals[0])
    })
    .catch((e) => {
      console.log(e);
    });
}

coalApi();
