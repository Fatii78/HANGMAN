const categoryButtons = document.querySelectorAll(".category")

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.category
    // خزنته جديه لانه بستخدمه في اكثر من page
    localStorage.setItem("selectedCategory", selectedCategory)
    localStorage.setItem("roundNumber", 1)
     localStorage.setItem(`lastDone_${selectedCategory}`, "0")
    window.location.href = "game.html"
  })
})




