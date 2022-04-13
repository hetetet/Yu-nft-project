import React from 'react'
import MaxMenu from './maxMenu/maxMenu'
import MinMenu from './minMenu/minMenu'

interface MenuProps {
  active: any
}

const MenuMainControl = ({ active }: MenuProps) => {
  return <div>{active ? <MaxMenu /> : <MinMenu />}</div>
}

export default MenuMainControl
