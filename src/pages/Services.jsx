import React, { useEffect, useState } from 'react';

const Services = () => {
  const [services, setServices] = useState();
  useEffect(() => {
    fetch('/services.json')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-semibold py-3">Popular</h1>

      <div className="grid grid-cols-1  sm:grid-cols-3 mx-[20px] sm:mx-[80px] gap-6 mb-4">
        {services?.map(service => (
          <div key={service.serviceId} className="card bg-base-100 shadow-sm">
            <figure>
              <img
                src={service.image}
                alt="Shoes"
                className="w-full object-cover h-50"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.serviceName}</h2>
              <div className="flex justify-between">
                <h3 className="font-medium ">
                  Rating:{' '}
                  <span className="text-blue-600">{service.rating}</span>
                </h3>
                <h3 className="font-medium ">
                  Rating: <span className="text-blue-600">{service.price}</span>
                </h3>
              </div>
              <div className="card-actions justify-end mt-5">
                <button className="btn btn-primary w-full">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
