const password = document.getElementById('password')
const backgroun = document.getElementById('backgroun')

password.addEventListener('input', (e) => {
    const input = e.target.value
    const length = input.length
    const blurValue = 20 -length * 2
    backgroun.style.filter = `blur(${blurValue}px)`
})