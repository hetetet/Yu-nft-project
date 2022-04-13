import React from 'react'
import TransferItemControl from './TransferItemControl';

interface TransferItemsElement{
    
}

const style = {
    container: `flex flex w-[70vw] ml-[3rem]  mt-[2rem]`,
    wrapper: `flex flex-col w-[70vw] `,
    titleCon: `flex font-bold justify-between border-b-2`,
    title: `flex font-bold  text-center text-lg mb-[1rem]`,
    cardinfo: `flex  cursor-pointer text-lg mt-5 justify-between  items-center text-center  font-semi  `,
    subtitle: `flex justify-center items-center `,
    childwrap:`flex justify-center items-center w-[30rem]`,
    childrenwrap:`flex justify-between items-center w-[49rem]`,
}

const TransferItems = () => {

    // <TransferItems key={id} value={value}/>
    // ))
    return (

        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.titleCon}>
                    <div className={style.childwrap}>
                        <p className={style.title}>Item</p>
                    </div>
                    <div className={style.childrenwrap}>
                        <p className={style.title}>Price</p>
                        <p className={style.title}>Quantity</p>
                        <p className={style.title}>From</p>
                        <p className={style.title}>To</p>
                        <p className={style.title}>Time</p>
                    </div>
                </div>
                <div className={style.cardinfo}>
                    <div >
                        <TransferItemControl />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TransferItems;