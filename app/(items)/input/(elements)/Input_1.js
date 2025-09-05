import React from 'react'

export default function Input_1() {
  return (
    <fieldset className="w-40 space-y-1 dark:text-gray-800">
	<label htmlFor="url" className="block text-sm font-medium">Website</label>
	<div className="flex">
		<span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md dark:bg-gray-300 bg-gray-200">https://</span>
		<input type="text" name="url" id="url" placeholder="www.mambaui.com" className="flex flex-1 border sm:text-sm rounded-r-md focus:ring-inset dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-default-600" />
	</div>
</fieldset>
  )
}
