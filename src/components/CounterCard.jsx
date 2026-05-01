import { useState, useEffect } from 'react'
import PageIcon from './PageIcon'

export default function CounterCard({ value, suffix, label, icon }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    let frame
    let start
    const duration = 1400

    const tick = (time) => {
      if (!start) start = time
      const progress = Math.min((time - start) / duration, 1)
      setDisplay(Math.floor(value * progress))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [value])

  return (
    <div className="stats-panel__item">
      <div className="stats-panel__icon">
        <PageIcon name={icon} />
      </div>
      <strong>
        {display}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  )
}
