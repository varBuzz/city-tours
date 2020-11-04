import React, { Component } from 'react'
import Tour from '../Tour/Tour'
import './TourList.scss'
import {tourData} from '../../tourData'

export default class TourList extends Component {
    state = {
        tours: tourData
    }
    render() {
        const {tours} = this.state
        return (
         <section className='tourlist'>
           { tours.map(tour => {
                return(
                    <Tour key={tour.id}
                    tour= {tour}
                    />
                )
            })}
         </section>
        )
    }
}
