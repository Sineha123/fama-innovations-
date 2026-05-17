import { useEffect } from 'react'
import './ProjectModal.css'

export default function ProjectModal({ open, onClose, project }) {
  useEffect(() => {
    if (!open) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open || !project) return null

  return (
    <div
      className="project-modal__backdrop"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose?.()
      }}
    >
      <div className="project-modal" role="dialog" aria-modal="true" aria-label="Project details">
        <div className="project-modal__header">
          <div className="project-modal__title-wrap">
            <p className="project-modal__kicker">{project.type}</p>
            <h2 className="project-modal__title">{project.title}</h2>
            <div className="project-modal__meta">
              {project.sector ? <span>{project.sector}</span> : null}
              {project.status ? <strong>{project.status}</strong> : null}
            </div>
          </div>
          <button className="project-modal__close" onClick={onClose} aria-label="Close">
            <span />
            <span />
          </button>
        </div>

        <div className="project-modal__grid">
          <div className="project-modal__image">
            <img src={project.image} alt={project.title} />
          </div>

          <div className="project-modal__body">
            <p className="project-modal__summary">{project.summary}</p>

            {project.details ? (
              <div className="project-modal__section">
                <h3>Project Details</h3>
                <p>{project.details}</p>
              </div>
            ) : null}

            {project.capabilities?.length ? (
              <div className="project-modal__section">
                <h3>Live Capabilities</h3>
                <ul className="project-modal__list">
                  {project.capabilities.map((capability) => (
                    <li key={capability}>{capability}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {project.techStacks?.length ? (
              <div className="project-modal__section">
                <h3>Tech Stacks</h3>
                <div className="project-modal__chips">
                  {project.techStacks.map((t) => (
                    <span key={t} className="project-modal__chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {project.outcomes?.length ? (
              <div className="project-modal__section">
                <h3>Key Outcomes</h3>
                <ul className="project-modal__list">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {project.moreInfo ? (
              <div className="project-modal__section">
                <h3>More Detail</h3>
                <p>{project.moreInfo}</p>
              </div>
            ) : null}

            {project.link ? (
              <div className="project-modal__section project-modal__section--link">
                <a className="button button--primary" href={project.link} target="_blank" rel="noreferrer">
                  View Reference
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

