var BaseUrl = "https://superheroapi.com/api.php/136899909020706";

const searchInput = document.getElementById("SearchInput"); // input:search
const searchbtn = document.getElementById("searchId"); // search button
const btn = document.getElementById("newherrobtn"); // random hero btn
const heroImageDiv = document.getElementById("heroImage"); // output image
const downloadImageBtn = document.getElementById("downloadImg"); // download the image

const getSupperHero = (id) => {
  fetch(`${BaseUrl}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      const name = `<h2>${json.name}</h2>`;
      heroImageDiv.innerHTML = `${name} <img src= "${json.image.url}" height=200 width=200/>`;

      console.log(json.image.url);
      downloadImageBtn.addEventListener("click", () => {
        const imageUrl = json.image.url;
        downloadImage(imageUrl);
      });
    });
};

const getSearchSuperHero = (name) => {
  fetch(`${BaseUrl}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      const hero = json.results[0];
      console.log(hero);
      const hero2 = `<h2>${name}</h2>`;
      heroImageDiv.innerHTML = `${hero2} <img src= "${hero.image.url}" height=200 width=200/>`;

      console.log(hero.image.url);
      downloadImageBtn.addEventListener("click", () => {
        const imageUrl = hero.image.url;
        downloadImage(imageUrl);
      });
    });
};

// Download the image function
function downloadImage(imageUrl) {
  const aTag = document.createElement("a");
  aTag.href = imageUrl;
  aTag.download = imageUrl.split("/").pop();
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
}

const randomid = () => {
  return Math.floor(Math.random() * 731) + 1;
};

btn.onclick = () => getSupperHero(randomid());

searchbtn.onclick = () => getSearchSuperHero(searchInput.value);
