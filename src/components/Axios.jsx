// import axios from 'axios';

// // axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// // axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_API_KEY;
// // const TREND_FILMS_URL = 'https://api.themoviedb.org/3/trending/movie/week';
// // export async function fetchTrendFilms() {
// //   try {
// //     const response = await axios(TREND_FILMS_URL, {
// //       params: {
// //         api_key: process.env.REACT_APP_API_KEY,
// //       },
// //     });
// //     console.log(response.data);
// //     return response.data;
// //   } catch (error) {
// //     console.log(error);
// //     return 'error';
// //   }
// // }
// async function getMovieById(id) {
//   try {
//     const response = await axios(`https://api.themoviedb.org/3/movie/${id}`, {
//       params: {
//         api_key: process.env.REACT_APP_API_KEY,
//       },
//     });
//     console.log(response.data);
//     return response.data;
//   } catch (error) {}
// }
