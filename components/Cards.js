// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const link = `https://lambda-times-backend.herokuapp.com/articles`
// console.log(link)
const mainHead = document.querySelector('.cards-container')

// axios.get(link)
// .then(function (response) {
//     console.log(response.data.articles)
//     work(response.data.articles.bootstrap[1])
//     mainHead.append(work(response.data.articles.bootstrap[1]))
// })
// .catch(function (error) {
//     console.log(error)
// })


//Step: 1 retrieve the articles from the API using axios
    axios.get(link)
    .then(function (response){

        //Step: 1.5 Loop through the array of articles received from the API
        // console.log(response.data.articles)
        // Object.values is grabbing the values from the key:value pairs from response.data.articles
        Object.values(response.data.articles).forEach( element => {
            // console.log(element)
            //what is element???? -> array of objects
            //How do we get the objects from the array??? --> using the forEach method, we 
            // mainHead.append(work(element.forEach())
            //Step: 2 Inside the loop, call the work function and pass the article(One article)
            element.forEach( article =>{
                // console.log(article)
                //Step: 3 Append the loop output into the main container to display on web
                mainHead.append(work(article))
            })
        });
    })
    .catch(function(error) {
        console.log(error)
    })
    







function work(article) {
    // console.log(article)
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const container = document.createElement('div')
    const img = document.createElement('img')
    const authorName = document.createElement('span')

    card.className = 'card'
    headline.className = 'headline'
    author.className = 'author'
    container.className = 'img-container'
    headline.textContent = article.headline
    img.src = article.authorPhoto
    authorName.textContent = article.authorName

    card.append(headline, author)
    author.append(container, authorName)
    container.append(img)
    
    card.addEventListener('click', (e) => {
        console.log(e.target.textContent)
    })

    return card
}





//Step: 1 Loop through the array of articles received from the API

//Step: 2 Inside the loop, call the work function and pass the article(One article)

//Step: 3 Append the loop output into the main container to display on web

// axios.get('https://lambda-times-backend.herokuapp.com/articles')
// .then(response => {
//     console.log(response.data.articles)

// })
// .catch()
