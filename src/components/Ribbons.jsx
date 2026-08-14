function RibbonText({ text = 'WARNING • DO NOT CROSS' }) {
  return <span>{Array(20).fill(text).join(' • ')}</span>;
}

export default function Ribbons() {
  return (
    <div className="ribbon-wrap">
      <div className="ribbon tl"><RibbonText /></div>
      <div className="ribbon tr"><RibbonText /></div>
      <div className="ribbon horizontal"><RibbonText /></div>
    </div>
  );
}
