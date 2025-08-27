import { chooseElements } from '@/utils/chooseCards';
import React from 'react';

const data = chooseElements

export default function WhyChooseUs() {
  return (
    <div className="text-dark">

      <div className="text-left mb-8">
        <h2 className='text-5xl font-semibold pb-5'>Por Que Escolher a Adec?</h2>

      </div>

      <div className="bg-dark rounded-xl p-8 md:p-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chooseElements.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.id} className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-left">

                <div className={`w-12 h-12 rounded-full flex items-center justify-center p-3 mb-4 ${item.iconStyle}`}>
                  <Icon className="w-full h-full" />
                </div>

                <h3 className="text-[#f2f2f2] text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-[#f2f2f2] text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}