import React from 'react';

const Disclaimer = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-8 text-center">Website Disclaimer</h1>

        <p className="mb-6">
          The information provided by <strong>Deco Wale</strong> (“we,” “us,” or “our”) on this website is for
          general informational purposes only. All information on the site is provided in good faith, however we make
          no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity,
          reliability, availability, or completeness of any information on the site.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Professional Advice Disclaimer</h2>
        <p className="mb-6">
          The content on this site does not constitute professional advice. Users should consult with a qualified
          professional for advice concerning their individual needs before making any decisions or taking any action
          based on the information provided on this website.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">External Links Disclaimer</h2>
        <p className="mb-6">
          This website may contain links to other websites or content belonging to or originating from third parties
          or links to websites and features in banners or other advertising. Such external links are not investigated,
          monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Limitation of Liability</h2>
        <p className="mb-6">
          Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a
          result of the use of the site or reliance on any information provided on the site. Your use of the site and
          your reliance on any information on the site is solely at your own risk.
        </p>

        <p className="mt-10 text-sm text-gray-500 text-center">
          Last updated: April 5, 2025
        </p>
      </div>
    </section>
  );
};

export default Disclaimer;
