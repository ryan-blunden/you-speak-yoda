const App = {
  stars: (container, count) => {
    for (let i = 0; i < count; i++) {
      let star = document.createElement('span')
      star.className = 'star ' + (i % 30 == 0 ? 'star-lg' : i % 15 == 0 ? 'star-md' : 'star')
      star.setAttribute(
        'style',
        `top: ${Math.round(Math.random() * window.innerHeight)}px; left: ${Math.floor(
          Math.random() * window.innerWidth
        )}px`
      )
      container.appendChild(star)
    }
  },

  setDefaultSelectedText: () => {
    const defaultText = 'Secrets must not be stored in git repositories'
    const textField = document.querySelector('input[name="text"]')
    if (!textField.value) {
      textField.setAttribute('value', defaultText)
      textField.select()
    }
  },
}

document.addEventListener('DOMContentLoaded', () => {
  App.stars(document.getElementById('stars'), 600)
  App.setDefaultSelectedText()
})
