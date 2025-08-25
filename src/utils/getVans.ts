import { useEffect, useState } from "react";
import type { Van } from "../types/van";
import { getVans as fetchVansFromFirestore } from "../api/api";

export function getVans(limit?: number) {
  const [vans, setVans] = useState<Van[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVans = async () => {
      setLoading(true)
      try {
        const result = (await fetchVansFromFirestore()) as Van[]
        setVans(limit ? result.slice(0, limit) : result);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchVans();
  }, []);

  return { vans, loading, error };
}
