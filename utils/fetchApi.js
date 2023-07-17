import axios from 'axios';

// headers: {
//     'X-RapidAPI-Key': '941eee0da7msh7d0f535dd701c18p1e06fajsn1b8789459f03',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }

export const baseUrl='https://bayut.p.rapidapi.com'

export const fetchApi=async (url)=>{

   const {data}=await axios.get((url),{
        headers: {
    'X-RapidAPI-Key': '941eee0da7msh7d0f535dd701c18p1e06fajsn1b8789459f03',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }

    }) 
    return data;
}
