import React from 'react'

export type CustomState<T> = [T, React.Dispatch<React.SetStateAction<T>>]