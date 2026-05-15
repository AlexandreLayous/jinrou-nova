function ChevronRightIcon({ className = '', size = 24, strokeWidth = 2.5, ...props }) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      focusable="false"
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

export default ChevronRightIcon
