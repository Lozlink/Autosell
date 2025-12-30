interface WaveDividerProps {
  /** Primary wave color */
  fillColor?: string
  /** Secondary/background wave color (slightly different shade) */
  fillColorAlt?: string
  /** Background color behind the waves */
  bgColor?: string
  className?: string
  /** Show dashed line accent */
  showDashedLine?: boolean
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
}

/**
 * CarBuyers-style layered wave divider
 * Features two overlapping wave shapes with dashed line accent
 * Gentle, natural flowing curves (downward flow)
 */
export default function WaveDivider({
  fillColor = '#FFC325',
  fillColorAlt = '#FFD966',
  bgColor = 'white',
  className = '',
  showDashedLine = true,
  size = 'md'
}: WaveDividerProps) {
  const sizeClasses = {
    sm: 'h-[80px] md:h-[120px] lg:h-[150px]',
    md: 'h-[200px] md:h-[300px] lg:h-[350px]',
    lg: 'h-[250px] md:h-[350px] lg:h-[400px]'
  }

  return (
    <div
      className={`w-full overflow-hidden relative ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <svg
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        className={`w-full ${sizeClasses[size]} block`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Back wave layer - gentle curve flowing naturally */}
        <path
          fill={fillColor}
          d="M0,120 C200,180 500,280 800,300 C1100,320 1300,280 1440,220 L1440,0 L0,0 Z"
        />
        {/* Front wave layer - subtle offset for depth */}
        <path
          fill={fillColorAlt}
          d="M0,80 C250,140 550,220 850,240 C1150,260 1320,220 1440,160 L1440,0 L0,0 Z"
        />
        {/* Dashed line accent following the front wave contour */}
        {showDashedLine && (
          <path
            d="M0,65 C250,125 550,205 850,225 C1150,245 1320,205 1440,145"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeDasharray="12,8"
            opacity="0.7"
          />
        )}
      </svg>
    </div>
  )
}

/**
 * Inverted version - waves curve upward from bottom
 * Dramatic flowing curves mirroring the WaveDivider style
 */
export function WaveTop({
  fillColor = '#FFC325',
  fillColorAlt = '#FFD966',
  bgColor = 'white',
  className = '',
  showDashedLine = true,
  size = 'md'
}: WaveDividerProps) {
  const sizeClasses = {
    sm: 'h-[80px] md:h-[120px] lg:h-[150px]',
    md: 'h-[200px] md:h-[300px] lg:h-[350px]',
    lg: 'h-[250px] md:h-[350px] lg:h-[400px]'
  }

  return (
    <div
      className={`w-full overflow-hidden relative ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <svg
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        className={`w-full ${sizeClasses[size]} block`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Back wave layer - dramatic curve flowing upward from bottom-left to top-right */}
        <path
          fill={fillColor}
          d="M0,400 L0,350 C60,310 120,280 200,260 C440,200 660,100 920,60 C1100,35 1280,20 1440,120 L1440,400 Z"
        />
        {/* Front wave layer - offset curve for depth effect */}
        <path
          fill={fillColorAlt}
          d="M0,400 L0,380 C120,340 240,300 400,260 C640,200 860,120 1080,100 C1240,85 1360,100 1440,180 L1440,400 Z"
        />
        {/* Dashed line accent following the front wave contour */}
        {showDashedLine && (
          <path
            d="M0,395 C120,355 240,315 400,275 C640,215 860,135 1080,115 C1240,100 1360,115 1440,195"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeDasharray="12,8"
            opacity="0.7"
          />
        )}
      </svg>
    </div>
  )
}

// Keep old exports for backwards compatibility
export function WaveSingle(props: WaveDividerProps) {
  return <WaveDivider {...props} />
}

export function WaveDouble(props: WaveDividerProps) {
  return <WaveDivider {...props} />
}
