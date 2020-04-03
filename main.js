const h1 = document.querySelector('.h1')
let pixels = window.pageYOffset

function updateFont(pixels, tag) {
	const WDTH = (pixels * 0.3) + 100
	const WGHT = (pixels * 0.6) + 100
	tag.style.fontVariationSettings = `'wght' ${WGHT}, 'wdth' ${WDTH}`
}

window.addEventListener('scroll', () => {
	pixels = window.pageYOffset
	updateFont(pixels, h1)
})

updateFont(pixels, h1)