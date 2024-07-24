
function calculate(){
    const principal = document.getElementById('principal')
    const rate = document.getElementById('rate')
    const time = document.getElementById('time')
    const interest = document.getElementById ('total-interest')
    let p = principal.value
    let r  = rate.value
    let t = time.value
    const result =  (p*r*t)/100
    interest.textContent = result.toLocaleString(undefined)
}   

