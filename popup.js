const apiKey = ''
const URL = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=cat&rating=g`

async function getCatGif() {
    try {
        const response = await fetch(URL)
        console.log(response.ok)
        const data = await response.json()
        const imageUrl = data.data.images.original.url
        
        document.getElementById("cat-gif").src = imageUrl
    } catch (error) {
        console.error("Error fetching cat GIF:", error)
    }
}

getCatGif()

