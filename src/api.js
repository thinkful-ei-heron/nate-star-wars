const BASE_URL = 'https://swapi.co/api/';

async function search(category, attr) { 
  let result = await fetch(`${BASE_URL}${category}/?search=${attr}`)
    .then(res => { 
      if (res.ok){
        return res.json()
      } else { 
        throw new Error(res.status)
      }
    })
    return result
}

export default search