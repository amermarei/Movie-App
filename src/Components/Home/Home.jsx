
import React, { Fragment, useContext } from "react";
import { ApiContext } from "../../Context/MediaContext";
import MediaItem from "../MediaItem/MediaItem";
export default function Home() {
  let { trendingMovie, trendingTv, trendingPeople } = useContext(ApiContext);
  console.log(trendingMovie)
  return <Fragment>
    {trendingMovie.length > 0 && trendingTv.length > 0 && trendingPeople.length > 0 ? <div className="row py-5 gy-4">
      <div className="col-lg-4 m-0 col-md-12 parent position-relative align-self-center">
        <h3 className="mt-3">Trending <br />Movie<br />To Watch Now</h3>
        <p className="text-muted mb-3">Most Watched Movies By Days</p>
      </div>
      {trendingMovie.slice(0, 10).map((item, index) => <MediaItem key={index} item={item} />)}
      <div className="col-lg-4 m-0 col-md-12 parent position-relative  align-self-center">
        <h3 className="mt-3">Trending <br />Tv Show<br />To Watch Now</h3>
        <p className="text-muted mb-3">Most Watched Tv Show By Days</p>
      </div>
      {trendingTv.slice(0, 10).map((item, index) => <MediaItem key={index} item={item} />)}
      <div className="col-lg-4 m-0 col-md-12 parent position-relative  align-self-center">
        <h3 className="mt-3">Trending <br />People<br />To Watch Now</h3>
        <p className="text-muted mb-3">Most Watched People By Days</p>
      </div>
      {trendingPeople.filter(e => e.profile_path !== null).slice(0, 10).map((item, index) => <MediaItem key={index} item={item} />)}
    </div> : <div className="vh-100 d-flex justify-content-center align-items-center">
      <i className="fas fa-spinner text-white fa-spin fa-4x"></i>
    </div>}
  </Fragment>;
}


function sum(a, b) {
  return a + b
}

console.log(sum(1, 4))