import React from 'react';
import Img1 from '../assets/11.jpg';
import Img2 from '../assets/22.jpg';
import Img3 from '../assets/33.jpg';
import { Link } from 'react-router';

const Expertise = () => {
  return (
    <div className="my-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold text-blue-700 my-5">Our Experts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img src={Img1} alt="Shoes" className="w-full object-cover h-50" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mjjfdjfds</h2>
            <div className="flex justify-between">
              <h3 className="font-medium ">
                Rating: <span className="text-blue-600">3.5</span>
              </h3>
              <h3 className="font-medium ">
                Rating: <span className="text-blue-600">500</span>
              </h3>
            </div>
            <div className="card-actions justify-end mt-5">
              <Link className="btn btn-primary w-full">View Details</Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img src={Img2} alt="Shoes" className="w-full object-cover h-50" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mjjfdjfds</h2>
            <div className="flex justify-between">
              <h3 className="font-medium ">
                Rating: <span className="text-blue-600">3.5</span>
              </h3>
              <h3 className="font-medium ">
                Rating: <span className="text-blue-600">500</span>
              </h3>
            </div>
            <div className="card-actions justify-end mt-5">
              <Link className="btn btn-primary w-full">View Details</Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img src={Img3} alt="Shoes" className="w-full object-cover h-50" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mjjfdjfds</h2>
            <div className="flex justify-between">
              <h3 className="font-medium ">
                Rating: <span className="text-blue-600">3.5</span>
              </h3>
              <h3 className="font-medium ">
                Rating: <span className="text-blue-600">500</span>
              </h3>
            </div>
            <div className="card-actions justify-end mt-5">
              <Link className="btn btn-primary w-full">View Details</Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img src={Img1} alt="Shoes" className="w-full object-cover h-50" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mjjfdjfds</h2>
            <div className="flex justify-between">
              <h3 className="font-medium ">
                Rating: <span className="text-blue-600">3.5</span>
              </h3>
              <h3 className="font-medium ">
                Price: <span className="text-blue-600">500</span>
              </h3>
            </div>
            <div className="card-actions justify-end mt-5">
              <Link className="btn btn-primary w-full">View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
