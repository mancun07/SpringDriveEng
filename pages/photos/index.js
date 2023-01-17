import React, {Fragment} from 'react'
import PhotosList from '../../components/Photos/PhotosList'
import { v4 } from "uuid";
import Head from 'next/head'

const bandPhotos = [
    {id: v4(), title: 'Band Photo1', src:'/about1.jpg'},
    {id: v4(), title: 'Band Photo2', src:'/about2.jpg'},
    {id: v4(), title: 'Band Photo3', src:'/about3.jpg'},
    {id: v4(), title: 'Band Photo4', src:'/about4.jpg'},
    {id: v4(), title: 'Band Photo5', src:'/about5.jpg'},
    {id: v4(), title: 'Band Photo6', src:'/about6.jpg'},
    {id: v4(), title: 'Band Photo7', src:'/concert1.jpg'},
    {id: v4(), title: 'Band Photo8', src:'/concert2.jpg'},
    {id: v4(), title: 'Band Photo9', src:'/concert3.jpg'}
  ]

const PhotosPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Photos / Spring Drive Band</title>
                <meta name="description" content="Official website of the rock band Spring Drive. News, concerts, photo albums, music and much more." />
            </Head>
            <div className="container">
                <PhotosList photos={bandPhotos}/>
            </div>
        </Fragment>
    )
}

export default PhotosPage
