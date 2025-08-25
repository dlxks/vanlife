
import { useCallback, useState } from "react";

function useLoading<T>() {

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const run = useCallback((promiseFn: () => Promise<T>) => {
    setLoading(true)
    setError(null)

    return promiseFn()
      .then((res) => {
        setData(res)
        return res
      })
      .catch((err) => {
        const message = err instanceof Error ? err.message : "Unknown error"
        setError(message)
        throw err
      })
      .finally(() =>
        setLoading(false))
  }, [])

  return { data, setData, loading, error, run }
}

export default useLoading