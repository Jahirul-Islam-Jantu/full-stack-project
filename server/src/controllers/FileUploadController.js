export const fileUpload = async (req, res) => {
    try {
        if(req.files.length > 0){
            return res.status(200).json({ file:req.files, msg: "File Upload Successfully"})

        }else{
            return res.status(200).json({msg: "No file uploaded"})

        }
    }catch (e){
        return res.status(400).json({msg: "upload failed"})

    }
}