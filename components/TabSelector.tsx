'use client'

interface Tab {
  id: string
  label: string
  count?: number
}

interface TabSelectorProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (tabId: string) => void
}

export function TabSelector({ tabs, activeTab, onTabChange }: TabSelectorProps) {
  return (
    <div className="w-full pb-3">
      <div className="flex items-start gap-4 md:gap-8 px-4 border-b border-[#DEE0E3] overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`pt-4 pb-[13px] border-b-3 flex flex-col justify-center items-center transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? 'border-[#E5E8EB]'
                : 'border-transparent'
            }`}
          >
            <div className="flex flex-col items-start">
              <span
                className={`text-sm font-bold leading-[21px] ${
                  activeTab === tab.id
                    ? 'text-[#121417]'
                    : 'text-[#6B7582]'
                }`}
              >
                {tab.label}
                {tab.count !== undefined && (
                  <span className="ml-1 text-xs">({tab.count})</span>
                )}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
} 