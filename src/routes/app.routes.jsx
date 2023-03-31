import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/index'
import { Details } from '../pages/Details'
import { CreateDish } from '../pages/CreateDish'

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/createdish' element={<CreateDish />} />
        </Routes>
    )
}