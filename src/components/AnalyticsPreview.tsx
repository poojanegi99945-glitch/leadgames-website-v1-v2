import React, { useMemo, useState } from 'react';
import {
  ArrowDownRight,
  BarChart3,
  MousePointerClick,
  Table,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';

type Dimension = 'campaign' | 'source' | 'device';
type ViewMode = 'chart' | 'table';

const funnelData = [
  { stage: 'Ad visitors', count: 24500, percent: 100, drop: 0 },
  { stage: 'Funnel starts', count: 18130, percent: 74, drop: 26 },
  { stage: 'Completed flow', count: 13720, percent: 56, drop: 18 },
  { stage: 'Contact captured', count: 10290, percent: 42, drop: 14 },
  { stage: 'Qualified leads', count: 7840, percent: 32, drop: 10 },
];

const summaryMetrics = [
  {
    label: 'Qualified leads',
    value: '7,840',
    detail: 'Hot or warm intent',
    icon: Target,
  },
  {
    label: 'Start rate',
    value: '74%',
    detail: '+11% vs static form',
    icon: MousePointerClick,
  },
  {
    label: 'Cost per lead',
    value: '$18.40',
    detail: 'Blended paid traffic',
    icon: TrendingUp,
  },
];

export const AnalyticsPreview: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('chart');
  const [selectedDimension, setSelectedDimension] = useState<Dimension>('campaign');

  const largestDrop = useMemo(
    () => funnelData.reduce((max, item) => (item.drop > max.drop ? item : max), funnelData[0]),
    []
  );

  return (
    <section className="py-16 md:py-24 border-b border-[#E4E7F0] bg-[#F6F7FB]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.76fr_1.24fr] gap-8 lg:gap-10 items-start">
          <div className="lg:sticky lg:top-24">
            <span className="v2-eyebrow mb-3">Conversion attribution</span>
            <h2 className="v2-heading-lg mb-4">See More Than Form Submissions</h2>
            <p className="v2-body-lead">
              A cleaner campaign view that shows where traffic converts, where it leaks, and which
              leads deserve follow-up first.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-[#E4E7F0] bg-white p-4 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F1EEFF] text-[#5B3DF5]">
                  <Users className="h-4 w-4" />
                </div>
                <strong className="mt-4 block font-heading text-2xl text-[#0B1B3A]">24.5k</strong>
                <span className="text-xs font-semibold text-[#45516B]">Visitors tracked</span>
              </div>
              <div className="rounded-xl border border-[#E4E7F0] bg-[#0B1B3A] p-4 text-white shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-[#FF7A1A]">
                  <BarChart3 className="h-4 w-4" />
                </div>
                <strong className="mt-4 block font-heading text-2xl">32%</strong>
                <span className="text-xs font-semibold text-white/70">Qualified rate</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#D9DEEA] bg-white shadow-[0_24px_70px_rgba(11,27,58,0.11)] overflow-hidden">
            <div className="flex flex-col gap-5 border-b border-[#E4E7F0] bg-white px-5 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#5B3DF5]">
                  Sample dashboard
                </span>
                <h3 className="mt-1 font-heading text-xl font-extrabold text-[#0B1B3A]">
                  Campaign funnel health
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {(['campaign', 'source', 'device'] as const).map((dim) => (
                  <button
                    type="button"
                    key={dim}
                    onClick={() => setSelectedDimension(dim)}
                    className={`h-9 rounded-lg px-3 text-xs font-extrabold capitalize transition-colors ${
                      selectedDimension === dim
                        ? 'bg-[#0B1B3A] text-white'
                        : 'bg-[#F6F7FB] text-[#45516B] hover:bg-[#ECEFF7]'
                    }`}
                  >
                    {dim}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setViewMode(viewMode === 'chart' ? 'table' : 'chart')}
                  className="flex h-9 items-center gap-2 rounded-lg border border-[#E4E7F0] px-3 text-xs font-extrabold text-[#0B1B3A] transition-colors hover:bg-[#F6F7FB]"
                  aria-label={viewMode === 'chart' ? 'View analytics as table' : 'View analytics as chart'}
                >
                  {viewMode === 'chart' ? <Table className="h-3.5 w-3.5" /> : <BarChart3 className="h-3.5 w-3.5" />}
                  {viewMode === 'chart' ? 'Table' : 'Chart'}
                </button>
              </div>
            </div>

            <div className="grid gap-0 lg:grid-cols-[1fr_270px]">
              <div className="p-5 sm:p-6">
                <div className="grid gap-3 sm:grid-cols-3">
                  {summaryMetrics.map((metric) => {
                    const Icon = metric.icon;
                    return (
                      <div key={metric.label} className="rounded-xl border border-[#E4E7F0] bg-[#FAFBFE] p-4">
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <span className="text-xs font-bold text-[#45516B]">{metric.label}</span>
                          <Icon className="h-4 w-4 text-[#5B3DF5]" />
                        </div>
                        <strong className="block font-heading text-2xl font-extrabold text-[#0B1B3A]">
                          {metric.value}
                        </strong>
                        <span className="mt-1 block text-[11px] font-semibold text-[#66728A]">
                          {metric.detail}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {viewMode === 'chart' ? (
                  <div className="mt-6 space-y-4">
                    {funnelData.map((item, index) => (
                      <div key={item.stage} className="grid gap-2 sm:grid-cols-[138px_1fr_72px] sm:items-center">
                        <div>
                          <span className="block text-sm font-extrabold text-[#0B1B3A]">{item.stage}</span>
                          <span className="text-[11px] font-semibold text-[#66728A]">
                            {item.count.toLocaleString()} people
                          </span>
                        </div>
                        <div className="h-9 rounded-lg bg-[#EEF1F7] p-1">
                          <div
                            className={`flex h-full items-center justify-end rounded-md px-2 text-[11px] font-extrabold text-white transition-all duration-500 ${
                              index === funnelData.length - 1
                                ? 'bg-[#12A150]'
                                : 'bg-gradient-to-r from-[#5B3DF5] to-[#2F7DF6]'
                            }`}
                            style={{ width: `${item.percent}%`, minWidth: '44px' }}
                          >
                            {item.percent}%
                          </div>
                        </div>
                        <span className="text-xs font-bold text-[#66728A] sm:text-right">
                          {item.drop ? `${item.drop}% drop` : 'Baseline'}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-6 overflow-x-auto rounded-xl border border-[#E4E7F0]">
                    <table className="w-full min-w-[560px] text-left text-xs">
                      <thead className="bg-[#F6F7FB] text-[#45516B]">
                        <tr>
                          <th className="px-4 py-3 font-extrabold">Stage</th>
                          <th className="px-4 py-3 font-extrabold">Volume</th>
                          <th className="px-4 py-3 font-extrabold">Rate</th>
                          <th className="px-4 py-3 font-extrabold">Drop-off</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E4E7F0] text-[#0B1B3A]">
                        {funnelData.map((row) => (
                          <tr key={row.stage}>
                            <td className="px-4 py-3 font-bold">{row.stage}</td>
                            <td className="px-4 py-3 font-tabular">{row.count.toLocaleString()}</td>
                            <td className="px-4 py-3 font-tabular font-extrabold text-[#12A150]">
                              {row.percent}%
                            </td>
                            <td className="px-4 py-3 font-tabular text-[#E5484D]">
                              {row.drop ? `${row.drop}%` : '-'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              <aside className="border-t border-[#E4E7F0] bg-[#F8FAFF] p-5 sm:p-6 lg:border-l lg:border-t-0">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF2E8] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#B84F00]">
                  <ArrowDownRight className="h-3.5 w-3.5" />
                  Biggest leak
                </span>
                <strong className="mt-4 block font-heading text-3xl font-extrabold text-[#0B1B3A]">
                  {largestDrop.drop}%
                </strong>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-[#45516B]">
                  Most loss happens before people start the funnel. Shift budget toward the
                  highest-intent {selectedDimension} segments and test a sharper first question.
                </p>

                <div className="mt-6 rounded-xl border border-[#E4E7F0] bg-white p-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#66728A]">
                    Next action
                  </span>
                  <p className="mt-2 text-sm font-bold leading-relaxed text-[#0B1B3A]">
                    Review weekly drop-offs, lead quality, and cost-per-lead from one report.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
