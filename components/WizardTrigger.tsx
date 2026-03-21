'use client'

import { ArrowRight } from 'lucide-react'

function dispatchWizard() {
  document.dispatchEvent(new CustomEvent('open-bewertung-wizard'))
}

export function WizardButton({ label, className }: { label: string; className?: string }) {
  return (
    <button
      onClick={dispatchWizard}
      className={className ?? 'btn-gold group'}
      aria-label="Kostenlose Immobilienbewertung starten"
    >
      {label}
      <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
    </button>
  )
}
