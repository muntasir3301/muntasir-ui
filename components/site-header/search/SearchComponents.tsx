"use client"
import { Command, Search } from "lucide-react"
import { useState } from "react"

export default function SearchComponents() {
  const [value, setValue] = useState("")

  return (
    <div className="pr-2">
      <div className="flex items-center gap-2 w-72 rounded-md border border-gray-200 bg-white px-3 py-2 shadow-xs focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500/20">
        <Search className="h-4 w-4" />

        <input
          type="search"
          placeholder="Search anyting..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
        
        <div className="flex items-center gap-0.5 px-1 py-0.5 bg-gray-100 text-gray-500 rounded">
          <Command size={14} />
          <span className="text-xs font-semibold">K</span>
        </div>
      </div>
    </div>
  )
}