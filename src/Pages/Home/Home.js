import React from 'react'
import { Charts } from '../../Components/Charts/Charts'
import { HeaderCards } from '../../Components/HeaderCards/HeaderCards'
import { AddProduct } from '../AppProdct/AddProduct'
import "./Home.css"

export function Home() {

  return (
    <div>
      Home
      <HeaderCards />
      <Charts />
      <AddProduct />
    </div>
  )
}
