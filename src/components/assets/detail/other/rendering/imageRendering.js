import React from 'react'


const style = {
    img: `flex `,
}
const ImageRendering = ({value}) => {
    return (
        <div>
            <div className={style.img}>
                <img src={value?.image_url || "Not Availabe"} />
            </div>
        </div>
    )
}

export default ImageRendering