const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const btnSoma = document.getElementById('btnSoma')
const btnAdicao = document.getElementById('btnAdicao')
const btnMult = document.getElementById('btnMult')
const btnDivisao = document.getElementById('btnDivisao')

function soma() {

	const n1 = parseInt(num1.value)
  const n2 = parseInt(num2.value)
  const r  = n1 + n2 
  resultado.value = r
}

function adicao() {
	const n1 = parseInt(num1.value)
  const n2 = parseInt(num2.value)
  const r  = n1 - n2
  resultado.value = r
}

function mult() {
	const n1 = parseInt(num1.value)
  const n2 = parseInt(num2.value)
  const r  = n1 * n2
  resultado.value = r
}

function divisao() {
	const n1 = parseInt(num1.value)
  const n2 = parseInt(num2.value)
  const r  = n1 / n2
  resultado.value = r
}

function limpaCampos() {
	num1.value = '';
  num2.value = '';
  resultado.value = '';
}