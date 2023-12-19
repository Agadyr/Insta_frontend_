'use client'
import Filters from "./filters"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { faSmile } from "@fortawesome/free-solid-svg-icons"
export default function ModalWindow({closeModal,onSelect}){
    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [step, setstep] = useState(1)
    const[countvalueofinput,Setcountvalueofinput] = useState('')
    const handleFileChange = (event) => {
        const file = event.target.files[0];

        setSelectedFile(file);
        const previewUrl = URL.createObjectURL(file);
        setImagePreview(previewUrl);
        setstep(2)
  };
    const Save = () =>{
        onSelect(imagePreview,countvalueofinput)
    }
    const handleClose = () => {
        closeModal(1);
      };

    
    return(
        <div className="main-window" style={{zIndex:10}}>
            <div className="uploadphoto">
                <FontAwesomeIcon icon={faClose} className="close" onClick={handleClose}/>
                {step== 1 && <div className="Modal-window">
                    
                    <h1>Create New Post</h1>
                    <div className="hr">
                    </div>
                    <div className="load">
                        <svg  fill="currentColor" height="77" role="img" viewBox="0 0 97.6 77.3" width="96"><path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path><path d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path><path d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path></svg>
                        <h2>Drag photos and videos here</h2>
                        
                        <button className="btn btn-upload">
                            Select from Computer
                            <input type="file" accept=".png, .jpg, .jpeg" onChange={handleFileChange} className="selectimage-btn" />
                        </button>
                    </div>
                </div>}
                {step == 2 && 
                <div className="image-filters"> 
                    <div className="all-img">
                        <div className="header-filters df jcsb aic">
                            <svg onClick={() => setstep(1)} aria-label="Back" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Back</title><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="2.909" x2="22.001" y1="12.004" y2="12.004"></line><polyline fill="none" points="9.276 4.726 2.001 12.004 9.276 19.274" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline></svg>
                            <h1>Edit</h1>
                            <h2 onClick={() => setstep(3)} onChange={() => SetCountValue(0)}>Next</h2>
                        </div>
                        <div className="main-filters">
                            <div className="image-from-modal">
                                <img src={imagePreview} alt="Preview" />
                            </div>
                            <div className="right-filters">
                                <h1>Filters</h1>
                                <Filters/>
                            </div>
                        </div>

                    </div>  
                </div>} 
                {step == 3 && 
                    <div className="image-filters"> 
                        <div className="all-img">
                            <div className="header-filters df jcsb aic">
                                <svg onClick={() => setstep(2)} ariaLabel="Back" className="x1lliihq x1n2onr6 x5n08af back" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Back</title><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="2.909" x2="22.001" y1="12.004" y2="12.004"></line><polyline fill="none" points="9.276 4.726 2.001 12.004 9.276 19.274" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline></svg>
                                <h1>Create New Post</h1>
                                <h2 onClick={() => {
                                    handleClose()
                                    Save()
                                    }}>Share</h2>
                            </div>
                            <div className="main-filters">
                                <div className="image-from-modal">
                                    <img src={imagePreview} alt="Preview" />
                                </div>
                                <div className="about-post">
                                    <div className="header-post df aic">
                                        <img src="/filters/Michael.jpg" alt="" />
                                        <h1>decode.kz</h1>
                                    </div>
                                    <div className="caption">
                                        <textarea rows="10" placeholder="Write Caption" onChange={e => Setcountvalueofinput(e.target.value)}></textarea>
                                        <FontAwesomeIcon icon={faSmile} className="smile" onClick={handleClose}/>
                                        <div className="count">
                                            <h2>{ countvalueofinput.length }</h2> <h2>/ 2,200</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>  
                    </div>} 
            </div>
        </div>
        
    )
}