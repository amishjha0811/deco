import React from 'react';

const Terms = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms & Conditions</h1>

        <p className="mb-6">
          These terms and conditions outline the rules and regulations for the use of <strong>Deco Wale</strong>'s website.
          By accessing this website, we assume you accept these terms and conditions. Do not continue to use Deco Wale if
          you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Intellectual Property</h2>
        <p className="mb-6">
          Unless otherwise stated, Deco Wale and/or its licensors own the intellectual property rights for all material
          on this website. All intellectual property rights are reserved. You may access this from Deco Wale for your own
          personal use subjected to restrictions set in these terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Use of Our Services</h2>
        <p className="mb-6">
          You agree not to use our services for any unlawful or prohibited activities. You may not use the site to:
          distribute malware, spam, or collect data without user consent. You must not:
          <ul className="list-disc list-inside mt-2">
            <li>Republish material from Deco Wale</li>
            <li>Sell, rent, or sub-license material</li>
            <li>Reproduce, duplicate or copy material</li>
            <li>Redistribute content without our consent</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Limitation of Liability</h2>
        <p className="mb-6">
          In no event shall Deco Wale be liable for any indirect, special, incidental, or consequential damages, or for any
          loss of data or profits, arising out of the use—or the inability to use—materials on this website.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Modifications</h2>
        <p className="mb-6">
          Deco Wale reserves the right to revise these terms at any time without prior notice. By using this website,
          you agree to be bound by the current version of these Terms and Conditions.
        </p>

        <p className="mt-10 text-sm text-gray-500 text-center">
          Last updated: April 5, 2025
        </p>
      </div>
    </section>
  );
};

export default Terms;
