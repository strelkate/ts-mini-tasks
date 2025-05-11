const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'

interface Comment {
    id: number
    email: string
}

const getData = async (url: string): Promise<Comment[]> => {
    const response = await fetch(url)
    const data = await response.json() as Comment[]
    return data
}

getData(COMMENTS_URL)
    .then((data) => {
        data.forEach(({ id, email }) => {
            console.log('[Task 3] Fetch Comments', `ID: ${id}, Email: ${email}`)
        })
    })
