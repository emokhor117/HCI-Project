import React from 'react'

const styles = {
  coral: {
    wrap: 'bg-sky-soft',
    body: 'bg-coral',
    liquid: 'bg-[#f7b07e]',
  },
  cream: {
    wrap: 'bg-[#f8efe7]',
    body: 'bg-[#f3decf]',
    liquid: 'bg-[#fff9f0]',
  },
  blue: {
    wrap: 'bg-[#e7f2fb]',
    body: 'bg-blue-bottle',
    liquid: 'bg-[#6fb7e5]',
  },
}

export default function BottleArt({ tone = 'coral', compact = false }) {
  const theme = styles[tone]

  return (
    <div className={`relative grid place-items-center overflow-hidden ${theme.wrap} ${compact ? 'h-16 w-16 rounded-md' : 'h-[184px] w-[160px] rounded-sm'}`}>
      {!compact && (
        <>
          <div className="absolute left-4 top-4 h-5 w-5 rounded-full bg-white/75" />
          <div className="absolute right-5 top-5 h-4 w-4 rounded-full bg-white/65" />
        </>
      )}
      <div className={`relative ${compact ? 'h-11 w-8' : 'h-[118px] w-[74px]'} rounded-b-sm rounded-t-[3px] ${theme.body} shadow-[0_10px_18px_rgba(32,22,18,0.16)]`}>
        <div className={`absolute left-1/2 ${compact ? '-top-4 h-5 w-4' : '-top-7 h-8 w-6'} -translate-x-1/2 rounded-t-[3px] bg-[#e9d7d2]`} />
        <div className={`absolute left-1/2 ${compact ? '-top-5 h-2.5 w-6' : '-top-9 h-4 w-10'} -translate-x-1/2 rounded-sm bg-scent-ink/75`} />
        <div className={`absolute left-1/2 -translate-x-1/2 rounded-[2px] bg-white shadow-sm ${compact ? 'bottom-3 h-4 w-5' : 'bottom-9 h-9 w-11'}`} />
        {!compact && (
          <div className="absolute bottom-[54px] left-1/2 h-1.5 w-6 -translate-x-1/2 rounded-full bg-scent-ink/70" />
        )}
        <div className={`absolute bottom-0 left-0 right-0 ${compact ? 'h-3' : 'h-8'} ${theme.liquid} opacity-70`} />
      </div>
    </div>
  )
}
