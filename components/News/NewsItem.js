import React from 'react'
import classes from './NewsItem.module.scss'
import { useRouter } from 'next/router'
import Image from 'next/image'
import PropTypes from 'prop-types';

const NewsItem = ({el}) => {
    const router = useRouter();

    const goToSingleNewsHandler = () => {
        router.push('/news/' + el.id)
    }


    const modifiedDate = new Date(el.date)
    const day = modifiedDate.getDate() + 1;
    const month = modifiedDate.getMonth() + 1;
    const year = modifiedDate.getFullYear();

    return (
        <div className={classes.newsItem}>
            <div className={classes.imageWrapper}>
                  <Image src={el.image} alt={el.title}
                  width="200" height="130"
                //   layout="responsive"
                  />
            </div>
            <p>{day < 10 ? '0' : ''}{day}{'.'}{month < 10 ? '0' : ''}{month}{'.'}{year}</p>
            <h2>{el.title}</h2>
            <p>{el.content}</p>
            <button className={classes.btn} onClick={goToSingleNewsHandler}>Read More</button>
        </div>
    )
}

NewsItem.propTypes = {
    el: PropTypes.object
  };


export default NewsItem
