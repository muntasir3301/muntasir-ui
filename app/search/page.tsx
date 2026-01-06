"use client"
import { useSearchParams } from "next/navigation"

export default function Search() {
  const searchValue = useSearchParams().get('value');

  return (
    <div className="h-screen flex gap-2 justify-center items-center">
      <h2>Search For: </h2>
      <p>{searchValue}</p>
    </div>
  )
}