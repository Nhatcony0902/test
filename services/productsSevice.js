import { del, get, patch, post } from "../utils/request"

export const getProductList=async()=>{
    const result=await get("hotel");
    return result;
};
export const createProductList=async(option)=>{
    const result=await post("products",option);
    return result;
};
export const deleteProductList=async(id)=>{
    const result=await del(`products/${id}`);
    return result;
};
export const editProductList=async(id,option)=>{
    const result=await patch(`products/${id}`,option);
    return result;
};
export const getdetailProducts=async(id)=>{
    const result=await get(`hotel/${id}`);
    return result;
}