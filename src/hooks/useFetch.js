import { useState, useEffect } from 'react'

const useFetch = url => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const res = await fetch(url )
        console.log(res)
        if (!res.ok) {
          setError('Failed to fetch')
        }
        const result = await res.json()
        console.log(result)
        setData(result.data)
        setLoading(false)
      } catch (err) {
        console.log(err)
        setError(err.message)
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return {
    data,
    error,
    loading
  }
}

export default useFetch
