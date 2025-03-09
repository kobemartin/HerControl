import React from 'react';
import { X, Users, MessageCircle, Search } from 'lucide-react';
import { FeatureCardProps } from '../../types';

const CommunityHub: React.FC<FeatureCardProps> = ({ isOpen, onClose }) => {
  return isOpen ? (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 max-w-4xl w-full mx-4 relative max-h-[80vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-serif mb-6">Community Hub</h2>
        
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search discussions..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#f8c4c4]/10 border-0 focus:ring-2 focus:ring-[#e88a8a]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#f8c4c4]/10 p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-[#e88a8a]" />
              <h3 className="font-semibold">Active Groups</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span>First Period Support</span>
                <span className="bg-[#e88a8a]/20 text-[#e88a8a] px-2 py-1 rounded-full text-sm">
                  156 members
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span>PCOS Warriors</span>
                <span className="bg-[#e88a8a]/20 text-[#e88a8a] px-2 py-1 rounded-full text-sm">
                  432 members
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span>Natural Cycle Tracking</span>
                <span className="bg-[#e88a8a]/20 text-[#e88a8a] px-2 py-1 rounded-full text-sm">
                  289 members
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-[#f8c4c4]/10 p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="w-6 h-6 text-[#e88a8a]" />
              <h3 className="font-semibold">Recent Discussions</h3>
            </div>
            <ul className="space-y-4">
              <li>
                <p className="font-medium">Tips for managing cramps naturally?</p>
                <p className="text-sm text-gray-600">23 replies • 2h ago</p>
              </li>
              <li>
                <p className="font-medium">Cycle tracking app recommendations</p>
                <p className="text-sm text-gray-600">45 replies • 5h ago</p>
              </li>
              <li>
                <p className="font-medium">Success with seed cycling!</p>
                <p className="text-sm text-gray-600">12 replies • 1d ago</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#f3a6a6] to-[#e88a8a] p-6 rounded-2xl text-white">
          <h3 className="font-semibold mb-4">Community Guidelines</h3>
          <ul className="space-y-2 text-sm">
            <li>• Be respectful and supportive of all members</li>
            <li>• Maintain anonymity and privacy</li>
            <li>• Share experiences, not medical advice</li>
            <li>• Report any concerning content</li>
          </ul>
        </div>
      </div>
    </div>
  ) : null;
};

export default CommunityHub;