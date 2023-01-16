import React, {useRef, useEffect} from 'react'
import classes from './Presentation.module.scss'

const Presentation = () => {

    const videoRef = useRef(null);
    // console.log(videoRef)
    // videoRef.play();

    useEffect(() => {
        videoRef.current.play();
    }, [])


  return (
    <video ref={videoRef} controls className={classes.screen}>
        <source src="video534.mp4" type="video/mp4" />
        <source src="video534.webm" type="video/webm" />
        {/* <p>
            Your browser doesn't support HTML video. Here is a
            <a href="rabbit320.mp4">link to the video</a> instead.
        </p> */}
    </video>
  )
}

export default Presentation