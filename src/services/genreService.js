import http from './httpService'
import config from '../config'

// export const getGenres = async ()=> {
//     const {data: genres} = await http.get(config.apiGenreEndpoint)
//     "
// }

export async function getGenres() {
    return await http.get(`${config.apiUrl}/genres`)
}

