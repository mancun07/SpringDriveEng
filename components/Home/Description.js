import React from 'react'
import SocialsLink from './SocialsLink'
import classes from './Description.module.scss'

const Description = (props) => {
    return (
        <section className={`${classes[`about-us`]} container`}>
            <div className={classes[`about-us__desc`]}>
                <p>SPRING DRIVE (Ex Leather Jackets) is a musical band from St. Petersburg founded in 2012 with the goal of bringing love to life and freedom through experiments with such genres of music as electronic rock, psychedelic rock, arena rock, indie rock, garage rock, industrial rock, pop rock.</p>
                <p>The songs of the band will be understood by every person who loves life and freedom! Founded in 2012, SPRING DRIVE has amassed a wealth of experience in songwriting and live performance since then.</p>
            </div>
            <div className={classes[`about-us__socials`]}>
                <h3>We are in social networks</h3>
                <ul>
                {props.socials.map(el => {
                    return <SocialsLink key={el.id} el={el}/>
                })}
                </ul>
            </div>
        </section>
    )
}

export default Description
