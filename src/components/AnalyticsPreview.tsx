import React, { useState } from 'react';
import { BarChart3, Table, TrendingUp, Users, Target, MousePointerClick } from 'lucide-react';

export const AnalyticsPreview: React.FC = () => {
  const [viewMode, setViewMode] = useState<'chart' | 'table'>('chart');
  const [selectedDimension, setSelectedDimension] = useState<'campaign' | 'source' | 'device'>('campaign');

  const funnelData = [
    { stage: '1. Total Ad Visitors', count: 24500, percent: 100, drop: '0%' },
    { stage: '2. Funnel Starts', count: 18130, percent: 74, drop: '26%' },
    { stage: '3. Full Completions', count: 13720, percent: 56, drop: '18%' },
    { stage: '4. Contact Captures', count: 10290, percent: 42, drop: '14%' },
    { stage: '5. Qualified (Hot/Warm)', count: 7840, percent: 32, drop: '10%' },
  ];

  return (
    <section className="py-16 md:py-24 border-b border-[#E4E7F0] bg-[#F6F7FB]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Version 2 */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="v2-eyebrow mb-2">Conversion attribution</span>
          <h2 className="v2-heading-lg mb-3">
            See More Than Form Submissions
          </h2>
          <p className="v2-body-lead mx-auto">
            Track starts, completions, qualified leads and cost per lead, and see where people drop off.
          </p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="v2-sample-badge">
              Sample data
            </span>
            <button
              onClick={() => setViewMode(viewMode === 'chart' ? 'table' : 'chart')}
              className="text-xs text-[#5B3DF5] hover:text-[#4527D6] font-bold flex items-center gap-1.5 focus:outline-none"
            >
              <Table className="w-3.5 h-3.5" />
              <span>{viewMode === 'chart' ? 'View as accessible table' : 'View as chart bars'}</span>
            </button>
          </div>
        </div>

        {/* Analytics Card */}
        <div className="bg-white rounded-2xl border border-[#E4E7F0] p-6 sm:p-8 max-w-3xl mx-auto shadow-xl">
          
          <div className="flex items-center justify-between pb-4 border-b border-[#E4E7F0] mb-6">
            <div>
              <strong className="text-xs font-bold text-[#0B1B3A] uppercase tracking-wider block font-heading">
                Funnel Progression Benchmark
              </strong>
              <p className="text-[11px] text-[#45516B]">Interactive qualification funnel performance</p>
            </div>

            <div className="flex items-center gap-1 text-xs">
              {(['campaign', 'source', 'device'] as const).map((dim) => (
                <button
                  key={dim}
                  onClick={() => setSelectedDimension(dim)}
                  className={`px-3 py-1 rounded-lg capitalize font-bold transition-all ${
                    selectedDimension === dim
                      ? 'bg-[#0B1B3A] text-white shadow-xs'
                      : 'text-[#45516B] hover:bg-[#F6F7FB]'
                  }`}
                >
                  {dim}
                </button>
              ))}
            </div>
          </div>

          {/* Chart View */}
          {viewMode === 'chart' ? (
            <div className="space-y-4">
              {funnelData.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-[#0B1B3A]">{item.stage}</span>
                    <span className="font-tabular text-[#45516B]">
                      <strong className="text-[#0B1B3A]">{item.count.toLocaleString()}</strong> ({item.percent}%)
                    </span>
                  </div>
                  <div className="w-full bg-[#F6F7FB] h-3.5 rounded-full overflow-hidden border border-[#E4E7F0]">
                    <div
                      className="h-full bg-[#5B3DF5] rounded-full transition-all duration-300"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Table View */
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="border-b border-[#E4E7F0] text-[#45516B]">
                    <th className="py-2.5 font-bold">Funnel Stage</th>
                    <th className="py-2.5 font-bold font-tabular">Volume</th>
                    <th className="py-2.5 font-bold font-tabular">Conversion Rate</th>
                    <th className="py-2.5 font-bold font-tabular">Drop-off</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E4E7F0]">
                  {funnelData.map((row, i) => (
                    <tr key={i} className="hover:bg-[#F6F7FB]">
                      <td className="py-2.5 font-medium text-[#0B1B3A]">{row.stage}</td>
                      <td className="py-2.5 font-tabular">{row.count.toLocaleString()}</td>
                      <td className="py-2.5 font-tabular text-[#12A150] font-semibold">{row.percent}%</td>
                      <td className="py-2.5 font-tabular text-[#E5484D]">{row.drop}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-[#E4E7F0] text-xs text-[#45516B] flex items-center justify-between">
            <span>Weekly reporting and drop-off analysis delivered to your inbox</span>
            <span className="text-[#5B3DF5] font-semibold">Continuous CRO included</span>
          </div>

        </div>

      </div>
    </section>
  );
};
