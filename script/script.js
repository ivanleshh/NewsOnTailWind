let html = document.querySelector('html')

function toggleTheme() {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
    } else {
        html.classList.add('dark')
    }
}
