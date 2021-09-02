import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)

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
