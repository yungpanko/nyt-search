console.log("am I in this file?")

const apiKey = ""

function searchArticles(searchTerm, page, createAndDisplayArticles) {
  $.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + apiKey + '&q=' + searchTerm + '&page=' + page, function (data, status, response) {
    createAndDisplayArticles(data)
  })

}
