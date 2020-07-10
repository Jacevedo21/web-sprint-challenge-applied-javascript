// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const content = document.querySelector('div.header-container')

function beginning() {

    const head = document.createElement('div')
    const date = document.createElement('span')
    const text = document.createElement('h1')
    const temp = document.createElement('span')

    head.appendChild(date)
    head.appendChild(text)  
    head.appendChild(temp)  

    head.className = 'header'
    date.className = 'date'
    temp.className = 'temp'

    date.textContent = 'MARCH 28, 2020'
    text.textContent = 'Lambda Times'
    temp.textContent = '98°'

    
    return head

}

content.appendChild(beginning())