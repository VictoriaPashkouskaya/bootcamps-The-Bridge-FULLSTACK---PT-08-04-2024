1 Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
    document.querySelector('h1').textContent = "Generasión 1 Pokemon"

2 Cambia el color de fondo de la primera generación de Pokimon.
    document.querySelector('.infocard').style.backgroundColor = "red"

3. Imprime por consola la URL de la página.
    console.log(window.location.href)
4.Imprime por consola el dominio de la página.
    console.log(window.location.hostname)

5. Imprime todos los nodos de imagen.
    document.querySelectorAll('img').forEach(img => console.log(img))
6.Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
document.querySelectorAll('img').forEach(img => img.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif");


Premium:

Cambia el fondo de todos los infocard - lg - data text - muted para todos los Pokimon voladores itype flying
document.querySelectorAll('.infocard-lg-data.text-muted').forEach(card => card.style.backgroundColor = "red")