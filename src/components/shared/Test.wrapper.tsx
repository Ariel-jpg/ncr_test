import {render} from '@testing-library/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const AllTheProviders = ({ children } : { children: any }) => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/test' Component={children} />
        </Routes>
    </BrowserRouter>
  )
}

const customRender = (ui: any, options: any) =>
  render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'

// override render default method
export { customRender as render }