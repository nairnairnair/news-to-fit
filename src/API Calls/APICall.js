const getData = (section) => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=v97qrqfyJPaSUWALRGwGmN5dk2QePpEZ`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status + " " + response.statusText)
        } else {
            return response.json()
        }
    })
} 

export default getData