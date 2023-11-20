const getMeals = (iputText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${iputText}`
  fetch(url)
    .then((res) => res.json())
    .then((data) => showMeals(data.meals));
};

const showMeals = (meals) => {
  const mealSection = document.getElementById("meals-container");
  mealSection.innerHTML = "";
  meals.forEach(meal => {
    // console.log(meal)
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
      <div class="card">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="">
          <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.</p>
          </div>
      </div>
      `;
      mealSection.appendChild(mealDiv);
  });
  
};

document.getElementById("search-btn").addEventListener("click", function(){
    const inputText = document.getElementById("input").value;
    getMeals(inputText);
})

getMeals('fish');
