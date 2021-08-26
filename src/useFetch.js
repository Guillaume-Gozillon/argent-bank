import { useEffect, useState } from 'react'

const useFetch = url => {

  const [data, setData] = useState(null)
  
  /**
   * That useFetch return an object filtered by ID
   * due to the URL PATHNAME
   * @param {String} url = BASE_URL + Id (history.location.pathname)
   * @return {Object} Data fetched
   */
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url)
      const data = await res.json()
      
      setData(data.data)
    }
    fetchData()
  }, [])

  return data
}

export default useFetch
