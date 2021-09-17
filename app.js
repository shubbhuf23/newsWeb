console.log("This is app.js");

// Fetching the DOM
const container = document.querySelector(".container");

const newsUrl =
  "https://newsapi.org/v2/top-headlines?apiKey=19e2f5ba2c6c467da35f4504573232ab&language=en";

// Fetching the news and it's components from the News API ==>
fetch(newsUrl)
  .then((respose) => respose.json())
  .then((data) => {
    const articles = data.articles;
    articles.forEach((element, index) => {
      // Fetching the news components -->
      const author = element["author"];
      const title = element["title"];
      const sourceUrl = element["url"];
      const urlToImg = element["urlToImage"];
      const content = element["content"];

      // Populating the Dom -->
      const card = `
        <div class="card">
            <img src="${urlToImg}" alt="" class="newsImage" />
            <p class="title">${title}</p>
            <p class="content">
            ${content}
            <br /><div class="author">By <span>${author}</span></div>
            </p>
            <button class="read-more"><a href="${sourceUrl}" target="_blank">Read More</a></button>
        </div>
      `;
      container.innerHTML += card;
    });
  });
