import React from 'react';
import { X, Calendar } from 'lucide-react';
import { FeatureCardProps } from '../../types';

const FertilityInsights: React.FC<FeatureCardProps> = ({ isOpen, onClose }) => {
  // This would be calculated based on cycle start date
  const fertileWindow = {
    start: new Date(2024, 2, 10),
    end: new Date(2024, 2, 15)
  };

  const ovulationDate = new Date(2024, 2, 13);

  return isOpen ? (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-serif mb-6">Fertility Insights</h2>

        <div className="space-y-6">
          <div className="bg-[#f8c4c4]/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-[#e88a8a]" />
              <h3 className="font-semibold">Fertile Window</h3>
            </div>
            <p className="mb-4">
              Your fertile window is from{' '}
              <span className="font-semibold">
                {fertileWindow.start.toLocaleDateString()}
              </span>{' '}
              to{' '}
              <span className="font-semibold">
                {fertileWindow.end.toLocaleDateString()}
              </span>
            </p>
            <p className="text-sm text-gray-600">
              Estimated ovulation date:{' '}
              <span className="font-semibold">
                {ovulationDate.toLocaleDateString()}
              </span>
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Ovulation Signs to Watch For</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Changes in cervical mucus
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Slight increase in basal body temperature
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Mild pelvic or lower abdominal pain
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Increased sex drive
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-[#f3a6a6] to-[#e88a8a] text-white p-6 rounded-2xl">
            <h3 className="font-semibold mb-3">Tips for Tracking Fertility</h3>
            <ul className="space-y-2 text-sm">
              <li>• Track your basal body temperature daily</li>
              <li>• Monitor changes in cervical mucus</li>
              <li>• Use ovulation prediction kits</li>
              <li>• Note any physical symptoms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default FertilityInsights;