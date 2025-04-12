'use client'
import React from 'react';

const Pricing: React.FC = () => {
  return (
 
    <div className="min-h-screen mt-8 p-4 bg-black text-white flex flex-col items-center">
    <h1 className="text-3xl mt-6">Pricing Scheme</h1>
      <div className="flex flex-col md:flex-row gap-4 mt-8 p-4 border border-black rounded-lg">
      
        
        {/* Left Column */}
        <div className="flex flex-col gap-4 border border-black p-2 rounded-md w-full md:w-1/3">
          <div className="text-white text-center">INDIVIDUAL PACKAGE</div>
          <div className="bg-white text-black p-4 border rounded-md hover:shadow-lg transition">Project Code : <b>₹1000</b> (Individual)</div>
          <div className="bg-white text-black p-4 border rounded-md hover:shadow-lg transition">Project PPTs (3 PPTs): <b>₹1000</b> (Individual)</div>
          <div className="bg-white text-black p-4 border rounded-md hover:shadow-lg transition">Research Paper : <b>₹1000</b> (Individual)</div>
          <div className="bg-white text-black p-4 border rounded-md hover:shadow-lg transition">
            <li>Doubt Clearing: <b>₹100</b> per session</li>
            <li>Project Upgradation: <b>₹500</b> per request</li>
            <li>Repairs: <b>FREE</b></li>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-2 border border-black p-2 rounded-md w-full md:w-1/3">
          <div className="text-white text-center">COMBO PACKAGE</div>

          <div className="flex flex-col sm:flex-row gap-2">
            <div className="bg-white text-black flex-1 p-4 border rounded-md hover:shadow-lg transition">Project Code : ₹1000 + Project PPTs (3 PPTs) : ₹1000 = <b>₹2000</b> (original price)</div>
            <div className="bg-white text-black flex-1 p-4 border rounded-md hover:shadow-lg transition">Combo Price: <b>₹1500</b> (Saving: 25%)</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <div className="bg-white text-black flex-1 p-4 border rounded-md hover:shadow-lg transition">Project Code : ₹1000 + Research Paper : ₹1000 = <b>₹2000</b> (original price)</div>
            <div className="bg-white text-black flex-1 p-4 border rounded-md hover:shadow-lg transition">Combo Price: <b>₹1500</b> (Saving: 25%)</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <div className="bg-white text-black flex-1 p-4 border rounded-md hover:shadow-lg transition">Project Code : ₹1000 + Research Paper : ₹1000 + Project PPTs (3 PPTs) : ₹1000 = <b>₹3000</b> (original price)</div>
            <div className="bg-white text-black flex-1 p-4 border rounded-md hover:shadow-lg transition">Combo Price: <b>₹2200</b> (Saving: 27%)</div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col border border-black p-2 rounded-md w-full md:w-1/3">
          <div className="text-white text-center">CUSTOMIZED PACKAGE</div>
          <div className="bg-white text-black p-4 mt-2 border rounded-md hover:shadow-lg transition">Customizable Project: <b>₹500</b> per module.</div>
          <div className="bg-white text-black p-4 mt-2 border rounded-md hover:shadow-lg transition">Ping on Whatsapp: ⛓️‍💥<b><a href="https://wa.me/+918981797415">Click To Start Conversation</a></b> </div>
          <div className="bg-white text-black p-4 mt-2 border rounded-md hover:shadow-lg transition">
            For projects with total module cost exceeding <b>₹5000</b>
            <li>Free doubt solving</li>
            <li>Free Research Paper</li>
            <li>Free PPTs</li>
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="gap-4 mt-8 p-4 border border-black rounded-lg">
        <div className="bg-white text-black p-4 border rounded-md hover:shadow-lg transition">
          <b>GENERAL TERMS & CONDITIONS</b>
          <li>All prices are fixed.</li>
          <li>Prices once paid are not refundable.</li>
          <li>All queries will be answered between 3PM to 8PM.</li>
          <li>After project completion, 2 Follow Ups will be given each week. If client fails to collect their project with full payment within 2 weeks, the vendor has all the rights to cancel the contract.</li>
        </div>
      </div>
      </div>
   
  );
};

export default Pricing;
