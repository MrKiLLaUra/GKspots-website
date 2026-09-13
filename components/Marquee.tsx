export default function Marquee({ items }: { items: string[] }) {
  const track = (hidden: boolean) => (
    <>
      {items.map((item, i) => (
        <span key={i} className="ticker-item" aria-hidden={hidden || undefined}>
          {item}
          <span className="ticker-sep"> ✦ </span>
        </span>
      ))}
    </>
  )

  return (
    <div className="ticker">
      <div className="ticker-track">
        {track(false)}
        {track(true)}
      </div>
    </div>
  )
}
