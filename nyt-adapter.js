console.log("am I in this file?")

const apiKey = "7b3a605d0ebc4d708c54f350efe5bf1d"


function searchArticles(searchTerm, page, createAndDisplayArticles) {
  $.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + apiKey + '&q=' + searchTerm + '&page=' + page, function (data, status, response) {
    createAndDisplayArticles(data)
  })

}
