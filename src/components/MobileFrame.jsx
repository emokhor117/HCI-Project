import React from 'react'

export default function MobileFrame({ title, navigate, children }) {
  return (
    <section className="relative h-[680px] w-[350px] overflow-hidden rounded-[10px] bg-white shadow-[0_18px_35px_rgba(49,43,39,0.08)] sm:h-[720px] sm:w-[390px]">
      <header className="relative flex h-14 items-center justify-center px-5">
        <h2 className="text-[13px] font-semibold tracking-tight text-scent-ink">{title}</h2>
        <button
          type="button"
          onClick={() => navigate('home')}
          className="absolute right-4 top-4 rounded-md bg-rose-pill px-3 py-1 text-[10px] font-semibold text-white shadow-sm transition hover:bg-rose-deep"
        >
          Home
        </button>
      </header>
      {children}
    </section>
  )
}
