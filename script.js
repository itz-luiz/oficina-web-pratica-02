function calcular() {

    var raio = parseFloat(document.querySelector('input#raio').value)
    var para = document.querySelector('p#respostas')

    var comprimento = 2 * Math.PI * raio
    para.innerHTML = `<p>O comprimento da circunferencia é: ${comprimento.toFixed(2)} cm</p>`

    var area = Math.PI * Math.pow(raio, 2)
    para.innerHTML += `<p>A area da circunferencia é: ${area.toFixed(2)} cm<sup>2</sup></p>`

    var vol = 4 / 3 * Math.PI * Math.pow(raio, 3)
    para.innerHTML += `<p>O volume da circunferencia é: ${vol.toFixed(2)} cm<sup>3</sup</p>`
}