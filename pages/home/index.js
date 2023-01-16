import {Fragment, useEffect} from 'react'
import Head from 'next/head'
import SwiperSlider from '../../components/Home/SwiperSlider'
import Description from '../../components/Home/Description'
import React from 'react'
import MembersList from '../../components/Home/MembersList'
import { useDispatch } from 'react-redux'
import { navbarActions } from '../../store/navbarSlice'
import Presentation from '@/components/Home/Presentation'




const images = [
  {id: '1', src:'/concert1.jpg', title:"concert"},
  {id: '2', src:'/concert2.jpg', title:"concert" },
  {id: '3', src:'/concert3.jpg', title:"concert"},
]

const socials = [
  {id: '1', 
  title: 'Band channel on YouTube', 
  pic: <i className="fa fa-youtube" aria-hidden="true"></i>, href:'https://www.youtube.com/channel/UCcUbnoi0qkje6LeWTYyEIcg',
  color: 'tomato'
  },

  {id: '2', 
  title: 'Band community in VK', 
  pic: <i className="fa fa-vk" aria-hidden="true"></i>, href: 'https://vk.com/springdriveband',
  color: 'steelblue'
  }
]

const members = [
  {id: '1', title: 'Boris Britva - vocal, guitar', src: '/boris.jpg', direction: 'row-reverse'},
  {id: '2', title: 'Boyarskiy Maksim - drums', src: '/maxim.jpg', direction: 'row'},
  {id: '3', title: 'Muzychenko Dmitry - bass', src: '/dima.jpg', direction: 'row-reverse'}
]




const HomePage = () => {

   const dispatch = useDispatch();

  useEffect(() => {
      dispatch(navbarActions.changeNavbarColor())

      return () => dispatch(navbarActions.changeNavbarColor())
  }, [dispatch])


  return (
    <Fragment>
      <Head>
        <title>About The Band / Spring Drive Band</title>
        <meta name="description" content="Official website of the rock band Spring Drive. News, concerts, photo albums, music and much more." />
      </Head>
      <SwiperSlider images={images}/>
      {/* <Presentation /> */}
      <Description socials={socials}/>
      <MembersList members={members}/>
    </Fragment>
  )
}

export default HomePage
