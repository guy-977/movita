const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=39637281ff4d0f7a15dfb6417aec37dc&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=39637281ff4d0f7a15dfb6417aec37dc&query='

const main = document.getElementById('section')
const form = document.getElementById('form')
const search = document.getElementById('query')

return_movies(APILINK)

function return_movies(url) {
	fetch(url)
	.then(res => res.json())
	.then(function(data){
		console.log(data.results)
		data.results.forEach(element => {
			const div_card = document.createElement('div')
			const div_row = document.createElement('div')
			const div_column = document.createElement('div')
			const image = document.createElement('img')
			const title = document.createElement('h3')
			const center = document.createElement('center')

			div_card.className = 'card'
			div_row.className = 'row'
			div_column.className = 'column'
			image.className = 'thumbnail'

			image.id = 'image'
			title.id = 'title'

			title.innerHTML = `${element.title}`
			image.src = IMG_PATH + element.poster_path

			center.appendChild(image)
			center.appendChild(title)

			div_card.appendChild(center)
			div_column.appendChild(div_card)
			div_row.appendChild(div_column)

			main.appendChild(div_row)

		})
	})
}

form.addEventListener('submit', (search_query) => {
	search_query.preventDefault()
	main.innerHTML = ''

	const searchItem = search.value

	if (searchItem) {
		return_movies(SEARCHAPI + searchItem)
		search.value = ''
	}
})
