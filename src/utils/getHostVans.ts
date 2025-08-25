import { useEffect, useState } from "react";
import type { Van } from "../types/van";
import { getHostVans as fetchVansFromFirestore } from "../api/api";

export function getHostVans(hostId: string, vanId?: string, limit?: number) {
  const [vans, setVans] = useState<Van[]>([]);
  const [van, setVan] = useState<Van | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVans = async () => {
      setLoading(true)
      setError(null)

      try {
        const result = (await fetchVansFromFirestore(hostId, vanId))

        if (vanId) {
          setVan(result as Van)
        } else {
          const allVans = result as Van[]
          setVans(limit ? allVans.slice(0, limit) : allVans);
        }
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchVans();
  }, [hostId, vanId, limit]);

  return { vans, van, loading, error };
}
