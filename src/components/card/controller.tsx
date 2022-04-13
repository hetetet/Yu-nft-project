import React from 'react'
import cards from '../../mock/cards.json'
import NFTcard from './NFTcard'

interface ChildCardControlElement {
  value: any
}

const ChildCardControl: React.FC<ChildCardControlElement> = () => {
  return (
    <>
      <div className="flex flex-wrap">
        {cards.info.map((value, id) => (
          <NFTcard key={id} value={value} />
        ))}
      </div>
    </>
  )
}

export default ChildCardControl
