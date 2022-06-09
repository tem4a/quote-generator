import axios from 'axios';

export const publicAxios = axios.create({
  baseURL: 'https://famous-quotes4.p.rapidapi.com/',
  timeout: 1000,
  headers: {
    'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
    'X-RapidAPI-Key': 'ccc9cbb4f6msh9b49f87bc937684p15e628jsnb641bd4a145a',
  },
});
