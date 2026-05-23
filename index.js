// alert("Javascript is connected");
// Funtionn to toggle menu
function toggleMenu() {
  const menu = document.getElementById("toggleMenu");
  const img = menu.querySelector("img");
  const listItems = document.getElementById("mobileMenu");

  let isOpen = false;

  menu.addEventListener("click", function () {
    isOpen = !isOpen;

    if (isOpen) {
      img.src = "./images/menu-close.png";
      //   Including a function to make the list items visible when the hamburger menu is clicked
      listItems.style.display = "block";
    } else {
      img.src = "./images/menu open.png";
      listItems.style.display = "none";
    }
  });
}

toggleMenu();
// Making the List items visible when the hamburger menu is clicked
// Acccesing the input field in the form
const form = document.getElementById("shorten-form");
const formInput = document.getElementById("formInput");
const submitBtn = document.getElementById("submitBtn");
// Code to integrate the API into the form
async function shortenURL(url) {
  try {
    const response = await fetch(
      `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`,
    );

    const data = await response.text();

    return data;
  } catch (error) {
    console.error("Error shortening URL:", error);
  }
}
form.addEventListener("submit", async function (event) {
  event.preventDefault();
  const url = formInput.value.trim();
  const shortenedUrl = await shortenURL(url);
  if (shortenedUrl) {
    formInput.value = shortenedUrl;
  } else {
    formInput.value = "Error shortening URL. Please try again.";
  }
});
