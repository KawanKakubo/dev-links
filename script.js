function toggleMode() {
    const html = document.documentElement

    /* 
    if (html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }
    */

    html.classList.toggle('light')

    const image = document.querySelector("#profile img")

    if (html.classList.contains('light')) {
        image.setAttribute('src', './assets/Avatar-light.png')
    } else {
        image.setAttribute('src', './assets/Avatar.png')
    }
}