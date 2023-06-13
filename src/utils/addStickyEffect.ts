export function addStickyEffect () {
  window.addEventListener("scroll", function() {
    const el = document.getElementById("newTaskContainer")!
    const position = window.getComputedStyle(el).position
    const hasSticky = position === "sticky" && el.getBoundingClientRect().top <= 0
    hasSticky ? el.classList.add('stickyEffect') :  el.classList.remove('stickyEffect')
  })
}