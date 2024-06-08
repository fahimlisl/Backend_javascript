import {v2 as cloudinary} from 'cloudinary'
import fs from "fs"   // node js defualt file system librarey 




import {v2 as cloudinary} from 'cloudinary';

(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    
    // Upload an image
    // const uploadResult = await cloudinary.uploader.upload("", {
    //   resource_type:"auto"
    //   // file has been uploaded successfully
    // }).catch((error)=>{console.log(error)});
    
    // console.log(uploadResult);
    






    // Optimize delivery by resizing and applying auto-format and auto-quality
    // const optimizeUrl = cloudinary.url("shoes", {
    //     fetch_format: 'auto',
    //     quality: 'auto'
    // });
    
    // console.log(optimizeUrl);
    
    // // Transform the image: auto-crop to square aspect_ratio
    // const autoCropUrl = cloudinary.url("shoes", {
    //     crop: 'auto',
    //     gravity: 'auto',
    //     width: 500,
    //     height: 500,
    // });
    
    // console.log(autoCropUrl);    
})();


const uploadOnCloudinary = async (localFilePath) => {
  try {
    if(!localFilePath) return null
    //upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath,{
      resource_type:"auto"
    })
    //file has been uploaded successfully
    console.log("file has been uploaded to cloudinary",response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath) // remove the locally sved temoprary file as the upload opertaiton got failed
    return null;
  }
}


export {uploadOnCloudinary}