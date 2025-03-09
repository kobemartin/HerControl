import React from 'react';
import { X, Book, Heart, Calendar } from 'lucide-react';
import { FeatureCardProps } from '../../types';

const FirstTimersGuide: React.FC<FeatureCardProps> = ({ isOpen, onClose }) => {
  return isOpen ? (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 max-w-4xl w-full mx-4 relative max-h-[80vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-serif mb-6">First Timer's Guide</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#f8c4c4]/10 p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-[#e88a8a]" />
              <h3 className="font-semibold">Understanding Your Cycle</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Average cycle length is 28 days
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                First day of period is Day 1
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Periods typically last 3-7 days
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Cycle length can vary month to month
              </li>
            </ul>
          </div>

          <div className="bg-[#f8c4c4]/10 p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Book className="w-6 h-6 text-[#e88a8a]" />
              <h3 className="font-semibold">Essential Supplies</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Pads (various sizes)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Tampons (if comfortable)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Pain relief medication
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Emergency kit for school/travel
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#f8c4c4]/10 p-6 rounded-2xl mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-6 h-6 text-[#e88a8a]" />
            <h3 className="font-semibold">Self-Care Tips</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Stay hydrated
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Exercise gently
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Use heating pad for cramps
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Get enough rest
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Eat nutritious foods
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Track your symptoms
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#f3a6a6] to-[#e88a8a] p-6 rounded-2xl text-white">
          <h3 className="font-semibold mb-4">When to Seek Help</h3>
          <ul className="space-y-2 text-sm">
            <li>• Severe pain that interferes with daily activities</li>
            <li>• Very heavy bleeding or irregular cycles</li>
            <li>• Cycles shorter than 21 or longer than 35 days</li>
            <li>• Any concerns or questions - it's always okay to ask!</li>
          </ul>
        </div>
      </div>
    </div>
  ) : null;
};

export default FirstTimersGuide;