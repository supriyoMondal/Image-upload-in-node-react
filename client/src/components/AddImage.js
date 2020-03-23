import React, { useState } from 'react'
import { FilePond } from 'react-filepond'
import axios from 'axios'
const AddImage = () => {

    const [imageType, setImageType] = useState('')
    const [data, setData] = useState('')
    const submitForm = async (e) => {
        e.preventDefault();
        if (data != '' && imageType != '') {
            let imageData = JSON.stringify({ data, imageType })
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }
            try {
                const res = await axios.post('/upload', imageData, config);
                return;
            } catch (err) {
                console.log(err.message);
                return;
            }
        } else {
            return;
        }

    }
    return (
        <div>
            <h1 className='text-primary text-center font-weight-light mb-2' >Add Image</h1>
            <form onSubmit={(e) => submitForm(e)}>
                <FilePond
                    onupdatefiles={
                        fileItems => {
                            fileItems.map(fileItem => {
                                try {
                                    setData(fileItem.getFileEncodeBase64String());
                                    setImageType(fileItem.fileType);
                                } catch (error) {
                                    console.log(error)
                                }
                            })
                        }
                    }
                    allowMultiple={true} maxFiles={1}
                    onremovefile={
                        () => {
                            setData('')
                            setImageType('')
                        }
                    } />
                <button className="btn btn-primary btn-block mb-2" type="submit">Add Image</button>
            </form>

        </div>
    )
}

export default AddImage
