import React from 'react'

type CardApproachProps = {
  title: string
  description: string
  icon: string
}

export default function CardApproach({
  approach,
}: {
  approach: CardApproachProps
}) {
  return (
    <div className="h-72 rounded-lg bg-brand-blue-800 p-8 text-white">
      <img src={approach.icon} alt="" className="h-8 object-contain" />
      <h3 className="poppins-semibold mb-1 mt-2 text-lg">{approach.title}</h3>
      <p className="text-sm">{approach.description}</p>
    </div>
  )
}
