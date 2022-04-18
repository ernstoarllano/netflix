import { useState, useEffect } from "react"
import { Movie } from "../interfaces/Movie"

const useList = (uid: Array<Movie>) => {
  const [list, setList] = useState<Movie[] | []>([])

  useEffect(() => {
    if (!uid) return

    setList(uid)
  }, [uid])

  return list
} 

export default useList