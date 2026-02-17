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
  /** Optional text to display along the wave */
  text?: string
  /** Text color (default: gray-700) */
  textColor?: string
}


export default function WaveDivider({
  fillColor = '#FFC325',
  fillColorAlt = '#FFD966',
  bgColor = 'white',
  className = '',
  showDashedLine = true,
  size = 'md',
  text,
  textColor = '#E0D090'
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
        {/* Optional text that follows the wave curve - positioned inside the darker wave band */}
        {text && (
          <>
            <defs>
              <path
                id="waveDividerTextPath"
                d="M50,105 C200,170 500,255 800,280 C1100,300 1300,265 1390,200"
              />
            </defs>
            <text
              fill={textColor}
              fontSize="36"
              fontWeight="500"
              fontFamily="var(--font-nunito-sans), system-ui, sans-serif"
              letterSpacing="0.08em"
              textRendering="optimizeLegibility"
              opacity="0.7"
            >
              <textPath href="#waveDividerTextPath" startOffset="50%" textAnchor="middle" textLength="1000" lengthAdjust="spacing">
                {text}
              </textPath>
            </text>
          </>
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
  size = 'md',
  text,
  textColor = '#E0D090'
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
        {/* Optional text that follows the wave curve - positioned inside the darker wave band */}
        {text && (
          <>
            <defs>
              <path
                id="waveTopTextPath"
                d="M50,350 C150,315 300,267 500,207 C700,147 900,97 1100,77 C1250,72 1350,87 1400,127"
              />
            </defs>
            <text
              fill={textColor}
              fontSize="36"
              fontWeight="500"
              fontFamily="var(--font-nunito-sans), system-ui, sans-serif"
              letterSpacing="0.08em"
              textRendering="optimizeLegibility"
              opacity="0.7"
            >
              <textPath href="#waveTopTextPath" startOffset="50%" textAnchor="middle" textLength="1000" lengthAdjust="spacing">
                {text}
              </textPath>
            </text>
          </>
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
