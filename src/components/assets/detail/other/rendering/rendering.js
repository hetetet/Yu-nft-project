import React from 'react'
import ImageRendering from './imageRendering'
import data from '../../../../../mock/newData.json'
const RenderingPage = () => {
    return (
        <div className='flex flex-wrap'>
            {data?.assets.map((value, _id) =>
                <ImageRendering key={_id} value={value} />)}
        </div>

    )
}

export default RenderingPage