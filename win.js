//home button
const homeb = document.getElementById("homeb")
homeb.addEventListener("click", () => {
  window.location.href = "index.html"
})

//ROUND
const ROUND = document.getElementById("ROUND")
const selectedCategory = localStorage.getItem("selectedCategory")
const currentRound = Number(localStorage.getItem("roundNumber")) || 1
const key = `lastDone_${selectedCategory}`
const prev = Number(localStorage.getItem(key)) || 0
const newDone = Math.max(prev, currentRound)
localStorage.setItem(key, String(newDone))
const lastDone = newDone


for (let i = 1; i <= 8; i++) {
  const button = document.createElement("button")
  button.className = "roundButton"
  if (i <= lastDone) {
    button.textContent = "✔"
    button.disabled = true
  } else if (i === lastDone + 1) {
    button.textContent = `ROUND ${i}`
    button.addEventListener("click", () => {
      localStorage.setItem("roundNumber", i)
      window.location.href = "game.html"
    })
  } else {
    button.textContent = `ROUND ${i}`
    button.disabled = true
  }
  ROUND.appendChild(button)
}
