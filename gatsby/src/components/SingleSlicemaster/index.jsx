import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import StyledSingleSlicemaster from './styled';

const SingleSlicemaster = ({ slicemaster }) => (
  <StyledSingleSlicemaster>
    <Link to={`/slicemasters/${slicemaster.slug.current}`}>
      <h2 className="mark">
        <span className="slicemaster-name">{slicemaster.name}</span>
      </h2>
    </Link>
    <Img fluid={slicemaster.image.asset.fluid} alt={slicemaster.name} />
    <p className="description">{slicemaster.description}</p>
  </StyledSingleSlicemaster>
);

export default SingleSlicemaster;
