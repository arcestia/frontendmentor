import { info } from "./data.js"

function createFooter () {
    const attributionEl = document.body.querySelector(".attribution")
    
    const attributionHTML = `
    <span>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a>.
    </span>
    <span class="block-footer">Other <a href=${info.link}>Frontend Mentor Challenges</a
        > by <a href=${info.twitter}>Laurensius Jeffrey C</a>.
    </span
  >
    `

    attributionEl.insertAdjacentHTML("afterbegin", attributionHTML)
}

createFooter()