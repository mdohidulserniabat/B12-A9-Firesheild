import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router';

const Details = () => {
  const [service, setServices] = useState();
  const { id } = useParams();
  const data = useLoaderData();

  console.log(service);

  useEffect(() => {
    const serviceDetails = data.find(singleData => singleData.serviceId == id);
    setServices(serviceDetails);
  }, [data, id]);

  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden col-span-8 my-6">
        {/* Image */}
        <div className="relative w-full h-80 overflow-hidden">
          <img
            src={service?.image}
            alt={service?.serviceName}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />

          {/* Category Badge */}
          <span className="absolute top-3 left-3 bg-orange-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {service?.category}
          </span>

          {/* Rating Badge */}
          <span className="absolute top-3 right-3 flex items-center gap-1 bg-white text-yellow-500 text-sm font-semibold px-2 py-1 rounded-full shadow">
            <FaStar size={14} /> {service?.rating}
          </span>
        </div>

        {/* Content */}
        <div className="p-4 space-y-1">
          <h2 className="text-lg font-bold">{service?.serviceName}</h2>
          <p className="text-gray-500 text-sm">By {service?.providerName}</p>
          <p className="text-gray-700 text-sm line-clamp-2">
            {service?.description}
          </p>
        </div>

        {/* Info Box */}
        <div className="px-4 py-2 border-t flex justify-between text-sm font-medium">
          <p>💰 ${service?.price}</p>
          <p>🟢 Slots: {service?.slotsAvailable}</p>
        </div>
      </div>
      <div className="col-span-4">
        <div className="hero bg-base-200 ">
          <div className="hero-content flex-col lg:flex-row-reverse w-full">
            <form className="card bg-base-100 w-full  shrink-0 shadow-xl">
              <div className="card-body w-full">
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="name"
                    className="input"
                    placeholder="Name"
                    required
                  />
                  <label className="label">Name</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    required
                  />
                  <button type="submit" className="btn btn-neutral mt-4">
                    Book Now
                  </button>
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
