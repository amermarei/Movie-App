import React, { Fragment, useContext } from "react";
import { ApiContext } from "../../Context/MediaContext";
import MediaItem from "../MediaItem/MediaItem";
export default function Tv() {
  let { trendingTv } = useContext(ApiContext);
  return <Fragment>
    {trendingTv.length > 0 ? <div className="row py-5 gy-4">
      {trendingTv.map((item, index) => <MediaItem key={index} item={item} />)}
    </div> : <div className="vh-100 d-flex justify-content-center align-items-center">
      <i className="fas fa-spinner text-white fa-spin fa-4x"></i>
    </div>}
  </Fragment>;
}

