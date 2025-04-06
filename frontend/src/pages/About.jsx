import React from 'react';

const About = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-8 text-center">About Deco Wale</h1>

        <p className="mb-6 text-lg">
          At <strong>Deco Wale</strong>, we believe every celebration deserves to be unforgettable. Whether it's a
          birthday, baby shower, anniversary, or a themed surprise party, our goal is to bring your vision to life with
          elegant and creative decoration setups tailored to your needs.
        </p>

        <p className="mb-6 text-lg">
          What started as a passion project has now grown into a trusted name in event decoration. We specialize in a
          variety of decor themes including <em>Rustic Charm</em>, <em>Luxury Glam</em>, <em>Balloon Magic</em>, and
          <em>Garden Celebrations</em>. Our decorators work closely with you to ensure a seamless and stunning setup that
          fits your occasion perfectly.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Wide range of modern and classic decor themes</li>
          <li>Affordable packages for all budgets</li>
          <li>Highly experienced decorators & on-time service</li>
          <li>Direct contact via call, WhatsApp, or email — no sign-up needed</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Our Mission</h2>
        <p className="mb-6 text-lg">
          We’re on a mission to make beautiful decorations more accessible and stress-free for everyone. Every booking
          you make helps support local artists and decorators across the region.
        </p>

        <p className="mt-10 text-center text-sm text-gray-500">
          Thank you for making Deco Wale a part of your celebrations.
        </p>
      </div>
    </section>
  );
};

export default About;
