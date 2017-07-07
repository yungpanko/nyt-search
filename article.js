class Article {
  constructor(object) {
    this.headline = object.headline.main
    this.lead = object.lead_paragraph
    this.date = new Date(object.pub_date)
    this.author = object.byline ? object.byline.original : null
    this.desk = object.new_desk
    this.printHeadline = object.headline.print_headline
    this.url = object.web_url
    this.imgUrl = object.multimedia[0] ? 'https://static01.nyt.com/' + object.multimedia[0].url : null
  }

  hasImage() {
    if (this.imgUrl !== null) {
      return true
    } else {
      return false
    }
  }
}
