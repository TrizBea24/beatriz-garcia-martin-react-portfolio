import React from "react";

const BlogFeaturedImage = props => {
  if (!props.img) { //si props.img da falso (o sea que no existe), devuelve null
    return null;
  }

  return (
    <div className="featured-image-wrapper">
      <img src={props.img} />
    </div>
  );
};

export default BlogFeaturedImage;