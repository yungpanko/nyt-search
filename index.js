let page = 1
$(document).ready(function () {
  // call functions here
  submitForm()
  nextPage()
});

// define functions here

function submitForm() {
  $('#form').on('submit', function (event) {
    page = 1
    $('#articles').empty()
    $('#searchPagination').empty()
    let search = $('#search').val();
    search = search.trim().replace(/ /g, "+")
    searchArticles(search, page, createAndDisplayArticles)
    event.preventDefault();
  })
}

function nextPage() {
  $('#searchPagination').on('click', 'a', function (event) {
    switch (event.target.id) {
      case "next":
        page += 1
        break;
      case "previous":
        page -= 1
        break;
    }
    $('#articles').empty()
    $('#searchPagination').empty()
    let search = $('#search').val();
    search = search.trim().replace(/ /g, "+")
    searchArticles(search, page, createAndDisplayArticles)
    event.preventDefault();
  })
}

function createAndDisplayArticles(data) {
  let results = parseInt(data.response.meta.hits, 10)
  let pageResults = Math.ceil(results / 10) - 1
  let articles = data.response.docs
  let displayArticles = articles.map((object) => {
    return new Article(object)
  })
  displayArticles.forEach((article, index) => {
    $('#articles').append(`<li id=article${index + 1} class="story"><div class="element2"><a href=${article.url}><h3>${article.headline}</h3></a><p class="summary">${article.lead}</p><div class="storyMeta"><span class="dateline">${article.date}</span> - <span class="byline">${article.author}</span> - <span>${article.printHeadline}</span></div></div></li>`)
    if (article.hasImage()) {
      $(`#article${index + 1}`).prepend(`<div class="element1 thumb"><a href=${article.url}><img src=${article.imgUrl} width=75></a></div>`)
    }
  })
  if (results > 10 && page < pageResults) {
    $('#searchPagination').append(`<div><span class="pageNumber selectedPage">${page}</span><span><a href="#" id=next class="stepToPage next">Next >></a></span></div>`)
  }
  if (page > 1) {
    $('#searchPagination >').prepend(`<a href="#" id=previous class="stepToPage previous"><< Previous</a></span><span></span></div>`)
  }
}
