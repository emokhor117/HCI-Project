import React from 'react'

export default function AuthVisual({ variant = 'rose' }) {
  const bottle =
    variant === 'blue'
      ? 'from-sky-soft via-[#d6ecf6] to-[#f8fbff]'
      : 'from-[#f5e4e7] via-[#fbf6f6] to-white'

  return (
    <div className="mx-auto flex h-[255px] w-[164px] items-end justify-center rounded-[2px] bg-[#fbf7f6] px-7 pb-12 shadow-[0_8px_30px_rgba(178,147,143,0.10)]">
      <div className={`relative h-36 w-[74px] rounded-b-[18px] rounded-t-md bg-gradient-to-b ${bottle} shadow-[inset_0_0_0_1px_rgba(198,151,157,0.12)]`}>
        <div className="absolute -top-8 left-1/2 h-9 w-8 -translate-x-1/2 rounded-t-sm bg-[#efe5e4]" />
        <div className="absolute -top-11 left-1/2 h-4 w-12 -translate-x-1/2 rounded-sm bg-[#d99ba6]" />
        <div className="absolute bottom-10 left-1/2 h-9 w-11 -translate-x-1/2 rounded-sm bg-white/85 shadow-[0_0_0_1px_rgba(220,180,185,0.35)]" />
        <div className="absolute bottom-[54px] left-1/2 h-1.5 w-6 -translate-x-1/2 rounded-full bg-scent-ink/65" />
      </div>
    </div>
  )
}
