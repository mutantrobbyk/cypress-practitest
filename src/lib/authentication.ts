import axios from 'axios'
const {YOUR_EMAIL, YOUR_TOKEN} = process.env

interface AuthHeader {
    date: string
    connection: 'close' | 'open'
}

interface AuthResponse {
    status: number
    statusText: string
    headers: AuthHeader
}

const authenticate = async () => {
   await axios.get<AuthResponse>(`https://api.practitest.com/api/v2/projects.json?developer_email=${YOUR_EMAIL}&api_token=${YOUR_TOKEN}`).then(result => (
        console.log(result.status)
    ))
}

authenticate()