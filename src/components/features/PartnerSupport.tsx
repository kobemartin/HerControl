import React from 'react';
import { X, Heart, Calendar, MessageCircle, ShoppingBag } from 'lucide-react';
import { FeatureCardProps } from '../../types';

const PartnerSupport: React.FC<FeatureCardProps> = ({ isOpen, onClose }) => {
  return isOpen ? (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 max-w-4xl w-full mx-4 relative max-h-[80vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-serif mb-6">Partner Support Guide</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#f8c4c4]/10 p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-[#e88a8a]" />
              <h3 className="font-semibold">Understanding Her Cycle</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Menstrual Phase: Extra support and comfort needed
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Follicular Phase: Energy levels increasing
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Ovulatory Phase: Peak energy and mood
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Luteal Phase: Possible mood changes
              </li>
            </ul>
          </div>

          <div className="bg-[#f8c4c4]/10 p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-[#e88a8a]" />
              <h3 className="font-semibold">How to Support</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Listen without trying to fix everything
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Offer physical comfort when wanted
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Be patient with mood changes
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Help with daily tasks when needed
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#f8c4c4]/10 p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="w-6 h-6 text-[#e88a8a]" />
              <h3 className="font-semibold">Communication Tips</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Ask how she's feeling
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Validate her experiences
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Learn her comfort preferences
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Be open to discussions
              </li>
            </ul>
          </div>

          <div className="bg-[#f8c4c4]/10 p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <ShoppingBag className="w-6 h-6 text-[#e88a8a]" />
              <h3 className="font-semibold">Helpful Items to Keep</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Heating pad or hot water bottle
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Her preferred pain relief
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Emergency period supplies
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                Comfort snacks and drinks
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#f3a6a6] to-[#e88a8a] p-6 rounded-2xl text-white">
          <h3 className="font-semibold mb-4">Red Flags to Watch For</h3>
          <ul className="space-y-2 text-sm">
            <li>• Severe pain that interferes with daily life</li>
            <li>• Unusual changes in cycle or symptoms</li>
            <li>• Signs of depression or anxiety</li>
            <li>• Encourage medical attention when needed</li>
          </ul>
        </div>
      </div>
    </div>
  ) : null;
};

export default PartnerSupport;