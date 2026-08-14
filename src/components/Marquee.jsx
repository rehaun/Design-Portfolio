export default function Marquee({ text = 'WARNING • DO NOT CROSS' }) {
  const repeated = Array(8).fill(text).join(' • ');
  return (
    <div className="marquee">
      <span className="marquee-track">{repeated}</span>
    </div>
  );
}
