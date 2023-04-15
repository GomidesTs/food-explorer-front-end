import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { CreateDish } from '../pages/CreateDish'
import { EditDish } from '../pages/EditDish'
import { Profile } from '../pages/Profile'

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/createdish' element={<CreateDish />} />
            <Route path='/editdish/:id' element={<EditDish />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
    )
}