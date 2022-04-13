import React from 'react'
import data from '../../../../mock/newData.json'
import TransferWrapper from './transferWrapper'

interface TransferItemControlElement{
  
}


const style ={
    container:`flex flex-wrap`,
}
const TransferItemControl: React.FC<TransferItemControlElement> = () => {
 
    console.log("data: ", data.assets[0].last_sale.transaction.block_number);
    return (

        <div className={style.container}>

            {data?.assets.map((value, id) =>
                <TransferWrapper key={id} value={value} />
            )}
        </div>

  )
}

export default TransferItemControl