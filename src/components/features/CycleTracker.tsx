import React from 'react';
import { X } from 'lucide-react';
import { FeatureCardProps, CyclePhase } from '../../types';

const CycleTracker: React.FC<FeatureCardProps> = ({ isOpen, onClose }) => {
  const phases: CyclePhase[] = ['menstrual', 'follicular', 'ovulatory', 'luteal'];
  const currentPhase = 'follicular'; // This would be calculated based on cycle start date
  const currentDay = 8; // This would be calculated based on cycle start date

  return isOpen ? (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-serif mb-6">Cycle Phase Tracker</h2>
        
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="text-lg">
              Current Phase: <span className="font-semibold capitalize">{currentPhase}</span>
            </div>
            <div className="text-lg">
              Day: <span className="font-semibold">{currentDay}</span>
            </div>
          </div>

          <div className="relative pt-4">
            <div className="h-2 bg-[#f8c4c4]/20 rounded-full">
              <div 
                className="absolute h-2 bg-gradient-to-r from-[#f3a6a6] to-[#e88a8a] rounded-full"
                style={{ width: `${(currentDay / 28) * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-4">
              {phases.map((phase, index) => (
                <div 
                  key={phase}
                  className={`text-sm capitalize ${
                    phase === currentPhase ? 'text-[#e88a8a] font-semibold' : 'text-gray-600'
                  }`}
                >
                  {phase}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#f8c4c4]/10 rounded-2xl p-6 mt-6">
            <h3 className="font-semibold mb-2">Phase Characteristics</h3>
            <ul className="space-y-2">
              <li>• Increased energy levels</li>
              <li>• Rising estrogen</li>
              <li>• Good time for new projects</li>
              <li>• Enhanced learning ability</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default CycleTracker;