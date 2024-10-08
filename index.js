export function domAlf(string, parent = document.body) {
    if (string.split('')[string.split('').length - 1] === '>' && string.split('')[0]) {
        parent.innerHTML += string
        let result = {}
        Array.from(parent.querySelectorAll('[id]')).forEach(e => {
            result[e.id] = e
        })
        return result
    } else {
        console.error('argument is not a valid html tag: ', string)
    }
}
export function creAppend(pere, child, content = null) { let c = document.createElement(child); pere.appendChild(c); if (content) c.innerHTML = content; return c }