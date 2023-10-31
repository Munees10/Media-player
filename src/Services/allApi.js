import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

//upload a vedio
export const uploadVideo = async (reqBody)=>{
    //make post http request to http://localhost:4000/videos to add video in json sever and return response to Add component
    return await commonAPI("POST",`${serverURL}/videos`,reqBody)
}

//get all videos from json server
export const getALLVideos = async ()=>{
    //make ger hhtp request to http://localhost:4000/videos to get all vedios  from json server  and return respose to View component
    return await commonAPI("GET",`${serverURL}/videos`,"") 
}

//get a video from json Server
export const  getAVideo = async (id) => {
    //make get http request http://localhost:4000/videos/id to get a video from json server and return response to videoCard component
    return await commonAPI ("GET",`${serverURL}/videos/${id}`,"")
}

//get a video from json Server
export const  deleteAVideo = async (id) => {
    //make get http request http://localhost:4000/videos/id to renove a video from json server and return response to videoCard component
    return await commonAPI ("DELETE",`${serverURL}/videos/${id}`,{})
    
}

//store watching video history to json server
export const addToHistory = async (videoDetails)=>{
     //make get http request http://localhost:4000/history to add a video history from json server and return response to videoCard component
    return await commonAPI ("POST",`${serverURL}/history`,videoDetails)
}

//get all video history from json server
export const getAllHistory = async ()=>{
    //make get http request http://localhost:4000/history to get  video history from json server and return response to watch history component
   return await commonAPI ("GET",`${serverURL}/history`,"")
}

//delete all video history from json server
export const deleteHistory = async (id)=>{
    //make get http request http://localhost:4000/history/id to delete history from json server and return response to watch history component
   return await commonAPI ("DELETE",`${serverURL}/history/${id}`,{})
}

//add a category to json server
export const addCategory = async (reqBody)=>{
    //make post http request to http://localhost:4000/categories to add categories in json sever and return response to Category component
    return await commonAPI("POST",`${serverURL}/categories`,reqBody)
}

//get all  category from json server
export const getAllCategory = async ()=>{
    //make post http request to http://localhost:4000/categories to get all categories in json sever and return response to Category component
    return await commonAPI("GET",`${serverURL}/categories`,"")
}

//delete all category from json server
export const deleteCategory = async (id)=>{
    //make post http request to http://localhost:4000/categories/id to delete all categories in json sever and return response to Category component
    return await commonAPI("DELETE",`${serverURL}/categories/${id}`,{})
}

//updat a category from json server
export const updateCategory = async (id,body)=>{
 //make post http request to http://localhost:4000/categories/id to delete all categories in json sever and return response to Category component
 return await commonAPI("PUT",`${serverURL}/categories/${id}`,body)

}



