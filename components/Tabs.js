// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const topics = document.querySelector('div.topics')

const link = `https://lambda-times-backend.herokuapp.com/topics`

axios.get(link)
.then(function (response) {
    const dataTop = response.data.topics
    // console.log(dataTop)
    dataTop.forEach( element => {
        //creating new class each time it goes through array. 
        const tab = document.createElement('div')
        tab.className = 'tab'
        //slapping each new div into the main div.
        topics.appendChild(tab)
        // console.log(topics)
        //add the text content of each item in the array.
        tab.textContent = element
    });
})
.catch(function(error){
    console.log(error)
})






// const link = 'https://lambda-times-backend.herokuapp.com/topics'
// function markUp(object){
// const array = ` https://lambda-times-backend.herokuapp.com/${object}`
// console.log(array)

//     console.log(object)
//     const tabs = document.querySelector('.tabs')
//     const topics = document.querySelector('.topics')
//     const title = document.querySelector('.title')
// }




// const link = `https://lambda-times-backend.herokuapp.com/${topics}`
// link.forEach( element => {

// const topics = document.querySelector('div.topics')

// axios.get(link)
//  .then(function (response) {
//      topics.appendChild(response.topic)
//      console.log(topics)
//  })
//  .catch(function (error) {
//      console.log(error)
//  })

// })

