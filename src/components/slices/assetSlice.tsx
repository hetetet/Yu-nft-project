import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import assets from '../../mock/assets.json'




const initialState = {
    filteredAsset: [],
    collection: {}
}
const assetSlice = createSlice({
    name: 'asset',
    initialState:  initialState  ,
    reducers: {
        getAsset: (state: any, action: PayloadAction<any>) => {
            const {id} = action.payload;  
            const {collection} = action.payload;
            state.collection = collection;
            let result: any[] = [];
            assets.map((outer:any) => {
                for(let i =0; i<= outer?.assets?.length; i++){
                    if(outer?.assets[i]?.asset_contract?.owner === id) {
                        result.push(outer?.assets[i])
                    }
                }
            })
            if(!!result.length) {
                // window.localStorage.setItem('state', JSON.stringify(result))
                state.filteredAsset = result
            }else{
                state.filteredAsset = [{
                    name: 'nonename'
                }]
            }
        }
    }
})
export const assetAction = assetSlice.actions

export default assetSlice.reducer
;