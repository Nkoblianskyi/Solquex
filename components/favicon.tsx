export function Favicon({ color = "#3B82F6" }: { color?: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="32" height="32" rx="4" fill="white" />

      {/* Mountain */}
      <path d="M4 24L10 14L16 20L22 14L28 24H4Z" fill={color} opacity="0.2" />

      {/* Sun */}
      <circle cx="24" cy="8" r="4" fill="#FBBF24" />

      {/* Sheep silhouette */}
      <path
        d="M12 22C12 22 10.5 19 10.5 17.5C10.5 16 12 14.5 13.5 14.5C15 14.5 16.5 16 16.5 17.5C16.5 19 15 22 15 22H12Z"
        fill={color}
      />
    </svg>
  )
}
