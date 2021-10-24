const search = document.querySelector(".search"),
  searchForm = document.querySelector(".search-form"),
  googleUrl = "https://www.google.com/search?q=";

function searching(e) {
  e.preventDefault();
  location.href = googleUrl + search.value;
}

searchForm.addEventListener("submit", searching);
