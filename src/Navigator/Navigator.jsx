import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from '../Components/Landing'
import Rules from '../Components/Rules'
import WinScreen from '../Components/WinScreen'
import LooseScreen from '../Components/LooseScreen'
import RiddleGame from '../Components/RiddleGame'

export default function Navigator() {
    return (
        <div>
            <Routes>
                <Route path='/' element = {<Landing />}></Route>
                <Route path='/Rules' element = {<Rules />}></Route>
                <Route path='/Game' element = {<RiddleGame/>}></Route>
                <Route path='/You-Won' element = {<WinScreen />}></Route>
                <Route path='/You-Lost' element = {<LooseScreen />}></Route>
            </Routes>
        </div>
    )
}
