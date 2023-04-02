import React from 'react'
import { Link } from 'react-router-dom'
import blog_01 from "../images/blog-01.webp"

const BlogsCard = () => {
  return (
    <div className="col-3">
        <div className="blog-card">
            <div className="card-image">
                <img src={blog_01} className='img-fluid' alt="blog" />
            </div>
            <div className="blog-content">
              <p className='date'>23 March, 2023</p>
              <h5 className='title'>
                In New Zealand, Fish Are Helping Scientists Find Gold
              </h5>
              <p className='desc'>
                Enormous amounts of gold lie buried beneath the rubble of New Zealand’s mountains, and scientists are using freshwater fish genetics to find it.
              </p>
              <Link className='button' to="/" >Read More</Link>
            </div>
        </div>

    </div>
  )
}

export default BlogsCard
