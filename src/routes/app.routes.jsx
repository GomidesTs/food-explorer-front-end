import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { CreateDish } from '../pages/CreateDish'
import { EditDish } from '../pages/EditDish'
import { Profile } from '../pages/Profile'
import { Favorites } from '../pages/Favorites'
import { Cart } from '../pages/Cart'
import { Orders } from '../pages/Orders'

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/createdish' element={<CreateDish />} />
            <Route path='/editdish/:id' element={<EditDish />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/carts' element={<Cart />} />
            <Route path='/orders' element={<Orders />} />
        </Routes>
    )
}