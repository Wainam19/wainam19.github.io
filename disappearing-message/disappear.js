const imageInput = document.getElementById('image-input')
const messageInput = document.getElementById('message-input')
const generateBtn = document.getElementById('generate-btn')
const url = document.getElementById('url')

generateBtn.onclick = function() {
	//console.log(imageInput.value)
	//console.log(messageInput.value)

	const longUrl = 
		window.location.host +
		'/disappearing-message/message.html?img=' + 
		encodeURIComponent(imageInput.value) + 
		'&msg=' + 
		encodeURIComponent(messageInput.value)

		axios.get('https://api.rebrandly.com/v1/links/new', {
		params: {
			apikey: '16ae7f7c28484d2eaf2bf21a209a1b92',
			destination: 'http://' + longUrl
		}
	})
		.then(result => {
			console.log(result)
			const shortUrl = result.data.shortUrl
			const id = result.data.id
			url.innerHTML = `<a href="http://${shortUrl}">${shortUrl}</a>`

			axios.post(`https://api.rebrandly.com/v1/links/${id}`,{
				apikey: '16ae7f7c28484d2eaf2bf21a209a1b92',
				title: 'GotCha',
				destination: 'http://' + longUrl + `&id=${id}`
			})
		})
	}
 