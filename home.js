const categoryButtons = document.querySelectorAll(".category")

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.category
    // خزنته جديه لانه بستخدمه في اكثر من page
    localStorage.setItem("selectedCategory", selectedCategory)
    
    window.location.href = "game.html"
  })
})




