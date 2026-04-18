import { useTheme } from '../context/ThemeContext'

export default function ThemeSwitch() {
  const { dark, toggle } = useTheme()

  return (
    <div
      className="theme-switch"
      onClick={toggle}
      role="switch"
      aria-checked={dark}
      aria-label="Toggle dark/light mode"
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span style={{ fontSize: '0.85rem' }}>{dark ? '🌙' : '☀️'}</span>
      <div className={`ts-track${dark ? ' on' : ''}`}>
        <div className="ts-thumb" />
      </div>
    </div>
  )
}
