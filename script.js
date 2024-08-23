// H1
const tituloElement = document.getElementById('titulo')
tituloElement.innerText = 'Proz Educação AWS'

// Tag 'a'
const linkElement = document.querySelector('a')
linkElement.innerText = 'Visite a Proz Educação'


// Lista ordenada
const olElement = document.getElementById('lista-ordenada')
olElement.innerHTML = `
    <li><a href="https://google.com.br">Google</a></li>
    <li><a href="https://apple.com.br">Apple</a></li>
    <li><a href="https://github.com">GitHub</a></li>
`

// Lista não-ordenada
const ulElement = document.querySelector('ul')
ulElement.innerHTML = `
    <li>Item 1 da lista não ordenada</li>
    <li>Item 2 da lista não ordenada</li>
    <li>Item 3 da lista não ordenada</li>
`
