(function() {
  const languageTogglers = Array.from($('.language-toggle'))
  languageTogglers.forEach(toggler => {
    toggler.addEventListener('click', (e) => {
      const {id} = e.target
      document.cookie = `ulang=${id}; path=/`
      localStorage.setItem('ulang', `ulang=${id}; path=/`)
    })
  })
})()