import React from 'react';

const winterTips = [
  {
    title: 'Keep Them Warm',
    description:
      'Provide warm bedding and blankets to your pets to keep them cozy during cold nights.',
  },
  {
    title: 'Proper Nutrition',
    description:
      'Increase high-calorie food slightly to help them maintain body heat and energy.',
  },
  {
    title: 'Limit Outdoor Exposure',
    description:
      'Avoid long walks in freezing weather, especially for smaller or short-haired pets.',
  },
  {
    title: 'Hydration is Key',
    description:
      'Ensure your pets have access to fresh water; cold weather can reduce thirst but dehydration still occurs.',
  },
  {
    title: 'Check for Frostbite',
    description:
      'Inspect paws, ears, and tails for signs of frostbite after being outdoors.',
  },
];

const Winter = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {winterTips.map((tip, index) => (
        <div
          key={index}
          className="border p-4 rounded shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
          <p className="text-gray-700">{tip.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Winter;
