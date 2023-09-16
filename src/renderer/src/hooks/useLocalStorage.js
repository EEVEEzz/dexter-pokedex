import React, { useState } from 'react'

const useLocalStorage = (key, initialValue) => {

    const [
        localStorageValue,
        setlocalStorageValue
    ] = useState(() => getLocalStorageValue(key, initialValue))

    const setValue = (value) => {
        // check if function
        const valueToStore = value instanceof Function ? value(localStorageValue) : value
        // set to state
        setlocalStorageValue(value)
        // set to local storage
        localStorage.setItem(key, JSON.stringify(valueToStore))
    }

    return [localStorageValue, setValue]
}

export const getLocalStorageValue = (key, initialValue) => {
    const itemFromStorage = localStorage.getItem(key)

    return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
}

export default useLocalStorage
