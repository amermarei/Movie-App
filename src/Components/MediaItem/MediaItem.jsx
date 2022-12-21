import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function MediaItem({ item }) {

    return (
        <Fragment>
            <div className="col-md-3 col-lg-2 col-sm-4 text-center">
                <Link className='text-decoration-none text-white' to={`/Details/${item.id}/${item.media_type}`}>
                    <div className='content position-relative rounded overflow-hidden bg-black'>
                        {item.poster_path ? <img
                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                            className="w-100 rounded shadow api-img"
                            alt=""
                        ></img> : <img
                            src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                            className="w-100 rounded  shadow api-img"
                            alt=""
                        ></img>}
                        <div className='details'>
                            {<h4 className="p-3">{item.title}{item.name}</h4>}
                        </div>
                        {(item.vote_average && <div className='rate position-absolute top-0 end-0 p-2'>{item.vote_average.toFixed(1)}</div>)}
                    </div>
                </Link>
            </div>
        </Fragment>
    )
}
