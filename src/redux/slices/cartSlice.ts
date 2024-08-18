import { createSlice } from "@reduxjs/toolkit";
import { productType } from "../../components/feautures/ProductList";
import { RootState } from "../store";

let initialState:cartItem[] =[]
export type cartItem=productType & {
    quantity:number
}

const cartSlice=createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
        addItem:(state,action)=>{
            let filteredArr=state.filter((item)=>item.id===action.payload.id)
            if(filteredArr.length){
                 return state
            }
            else{
                return [...state,action.payload]
            }
        },
        removeItem:(state,action)=>{
            let id=action.payload.id
            return state.filter((item)=>{
                return item.id!==id
            })
        },
        updateQuantity:(state,action)=>{
            let {id,qty}=action.payload
            return state.map((item)=>{
                if(item.id===id && qty<=item.maxQuantity){
                    console.log(qty,item.maxQuantity)
                        return {...item, "quantity":qty}
                }else{
                    return item
                }
            })
        }
    }
})
export const getCartItems=(store:RootState)=>store.cartSlice
export default cartSlice.reducer
export const {addItem,removeItem,updateQuantity}=cartSlice.actions