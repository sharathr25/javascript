function publication (title, author, pubDate) {
  return {
    print () {
      console.log(`
            Title: ${title}
            Author: ${author}
            ${pubDate}`)
    }
  }
}

function book (title, author, pubDate, publisher, isbn) {
  const pub = publication(title, author, pubDate)

  return {
    print () {
      pub.print()
      console.log(`Publisher: ${publisher} 
            ISBN: ${isbn}`)
    }
  }
}

function blogPost (title, author, pubDate, url) {
  const pub = publication(title, author, pubDate)

  return {
    print () {
      pub.print()
      console.log(`            URL: ${url}`)
    }
  }
}

const YDKJS = book(
  "You Don't Know JS",
  'Kyle Simpson',
  'June 2014',
  "O'Reilly",
  '123456-789'
)

const forAgainstLet = new blogPost(
  'For and against let',
  'Kyle Simpson',
  new Date('October 27, 2014'),
  'https://davidwalsh.name/for-and-against-let'
)

YDKJS.print()
forAgainstLet.print()
