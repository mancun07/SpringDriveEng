import React, {useEffect} from 'react'
import classes from './NotFound.module.scss'
import { useRouter} from 'next/router'

const NotFound = () => {

 const router = useRouter();

 useEffect(() => {

    const timer = setTimeout(() => {
        router.push('/');
     }, 5000)
    
     return () => clearTimeout(timer);
 }, [])


  return (
    <div className={classes[`not-found`]}>
        <p>We are sorry. The page does not exist<br />
        You will be redirected to the Home Page.
        </p>

    </div>
  )
}

export default NotFound