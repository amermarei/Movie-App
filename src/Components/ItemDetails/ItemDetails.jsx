import axios from 'axios';
import React, { useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
export default function ItemDetails() {
    let [details, setdetails] = useState([])
    let [genres, setgenres] = useState([])
    let { id, media_type } = useParams();
    async function getDetailsApi(id, mediaType) {
        let { data } = await axios.get(`
        https://api.themoviedb.org/3/${mediaType}/${id}?api_key=c4299cc882b49c1d2bffebc52a5d9066&language=en-US`);
        setdetails(data);
        setgenres(data.genres)
    }
    useEffect(() => {
        getDetailsApi(id, media_type);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Fragment>
            {details.id !== undefined ? <div className='row py-5 gx-4'>
                <div className='col-md-3'>
                    {details.poster_path ? <img
                        src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                        className="w-100  rounded shadow api-img"
                        alt=""
                    ></img> : <img
                        src={`https://image.tmdb.org/t/p/w500${details.profile_path}`}
                        className="w-100 rounded  shadow api-img"
                        alt=""
                    ></img>}
                </div>
                <div className='col-md-9'>
                    <h2 className='mb-4 h1 text-white'>{details.title}{details.name}</h2>
                    {(genres && <ul className='list-unstyled d-flex mb-5'>
                        {genres && genres.map((e, i) => <li className='me-3 p-2 rate shadow rounded' key={i}>{e.name}</li>)}
                    </ul>)}
                    {(details.vote_average && <h5 className='text-secondary mb-4'> Vote : {details.vote_average.toFixed(1)}</h5>)}
                    {(details.vote_count && <h5 className='text-secondary mb-4'> Vote-count : {details.vote_count}</h5>)}
                    {(details.popularity && <h5 className='text-secondary mb-4'> popularity : {details.popularity.toFixed(2)}</h5>)}
                    {(details.release_date && <h5 className='text-secondary mb-5'> release date : {details.release_date}</h5>)}
                    <p className='text-secondary fw-bold lh-lg'>{details.overview}{details.biography}</p>
                </div>
            </div> : <div className="vh-100 d-flex justify-content-center align-items-center">
                <i className="fas fa-spinner text-white fa-spin fa-4x"></i>
            </div>}
        </Fragment>
    )
}
