
import React, { Fragment, useContext } from "react";
import { ApiContext } from "../../Context/MediaContext";
import MediaItem from "../MediaItem/MediaItem";
export default function Movies() {
  let { trendingMovie } = useContext(ApiContext);
  console.log(trendingMovie)
  return <Fragment>
    {trendingMovie.length > 0 ? <div className="row py-5 gy-4">
      {trendingMovie.map((item, index) => <MediaItem key={index} item={item} />)}
    </div> : <div className="vh-100 d-flex justify-content-center align-items-center">
      <i className="fas fa-spinner text-white fa-spin fa-4x"></i>
    </div>}
  </Fragment>;
}

