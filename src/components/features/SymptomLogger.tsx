import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { FeatureCardProps, Symptom } from '../../types';

const SymptomLogger: React.FC<FeatureCardProps> = ({ isOpen, onClose }) => {
  const [symptoms, setSymptoms] = useState<Symptom[]>([]);
  const [newSymptom, setNewSymptom] = useState({
    type: 'mood',
    severity: 3,
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const symptom: Symptom = {
      id: Date.now().toString(),
      date: new Date(),
      type: newSymptom.type as Symptom['type'],
      severity: newSymptom.severity as Symptom['severity'],
      notes: newSymptom.notes
    };
    setSymptoms([symptom, ...symptoms]);
    setNewSymptom({ type: 'mood', severity: 3, notes: '' });
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-serif mb-6">Symptom Logger</h2>

        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Type</label>
              <select
                value={newSymptom.type}
                onChange={(e) => setNewSymptom({ ...newSymptom, type: e.target.value as Symptom['type'] })}
                className="w-full p-3 rounded-xl bg-[#f8c4c4]/10 border-0 focus:ring-2 focus:ring-[#e88a8a]"
              >
                <option value="mood">Mood</option>
                <option value="pain">Pain</option>
                <option value="energy">Energy</option>
                <option value="sleep">Sleep</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Severity (1-5)</label>
              <input
                type="range"
                min="1"
                max="5"
                value={newSymptom.severity}
                onChange={(e) => setNewSymptom({ ...newSymptom, severity: Number(e.target.value) as Symptom['severity'] })}
                className="w-full"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Notes</label>
            <textarea
              value={newSymptom.notes}
              onChange={(e) => setNewSymptom({ ...newSymptom, notes: e.target.value })}
              className="w-full p-3 rounded-xl bg-[#f8c4c4]/10 border-0 focus:ring-2 focus:ring-[#e88a8a]"
              rows={3}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#f3a6a6] to-[#e88a8a] text-white p-3 rounded-xl flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Symptom
          </button>
        </form>

        <div className="space-y-4">
          <h3 className="font-semibold">Recent Symptoms</h3>
          {symptoms.length === 0 ? (
            <p className="text-gray-500">No symptoms logged yet</p>
          ) : (
            symptoms.map(symptom => (
              <div key={symptom.id} className="bg-[#f8c4c4]/10 p-4 rounded-xl">
                <div className="flex justify-between mb-2">
                  <span className="capitalize font-medium">{symptom.type}</span>
                  <span className="text-sm text-gray-500">
                    {symptom.date.toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm">Severity:</span>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < symptom.severity ? 'bg-[#e88a8a]' : 'bg-[#f8c4c4]/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                {symptom.notes && <p className="text-sm text-gray-700">{symptom.notes}</p>}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default SymptomLogger;