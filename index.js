let selectedColor = 'green'
const painting = document.querySelector('.painting')

painting.addEventListener('click', function(e){
	e.target.style.backgroundColor = selectedColor
})