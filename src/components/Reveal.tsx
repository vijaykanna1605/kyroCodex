import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

type Direction = 'left' | 'right' | 'up' | 'down'

type RevealProps = {
  children: ReactNode
  from?: Direction
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'article' | 'li' | 'ul'
  style?: CSSProperties
}

export function Reveal({
  children,
  from = 'up',
  delay = 0,
  className = '',
  as: Tag = 'div',
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={`reveal reveal-${from}${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ ...style, transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
