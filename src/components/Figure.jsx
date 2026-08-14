import Reveal from './Reveal';

export function Figure({ src, alt = '', label, caption }) {
  return (
    <Reveal className="figure">
      {label && <span className="figure-label">{label}</span>}
      <img src={src} alt={alt} loading="lazy" />
      {caption && <div className="figure-caption">{caption}</div>}
    </Reveal>
  );
}

// A freeform collage of overlapping/adjacent images, positioned by exact
// percentages measured from the real site (not a simple flex row).
// `aspect` = container width/height ratio (e.g. 941/297).
// `items` = [{ src, alt, left, top, width, height }] all in % of the container.
export function Collage({ aspect, items }) {
  return (
    <Reveal className="figure">
      <div className="collage" style={{ aspectRatio: aspect }}>
        {items.map((it, i) => (
          <img
            key={i}
            src={it.src}
            alt={it.alt || ''}
            loading="lazy"
            style={{
              position: 'absolute',
              left: `${it.left}%`,
              top: `${it.top}%`,
              width: `${it.width}%`,
              height: `${it.height}%`,
            }}
          />
        ))}
      </div>
    </Reveal>
  );
}

export function TwoImages({ left, right, leftAlt = '', rightAlt = '' }) {
  return (
    <Reveal className="two-col">
      <img src={left} alt={leftAlt} loading="lazy" />
      <img src={right} alt={rightAlt} loading="lazy" />
    </Reveal>
  );
}

export function ThreeImages({ a, b, c, altA = '', altB = '', altC = '' }) {
  return (
    <Reveal className="three-col">
      <img src={a} alt={altA} loading="lazy" />
      <img src={b} alt={altB} loading="lazy" />
      <img src={c} alt={altC} loading="lazy" />
    </Reveal>
  );
}

export function BeforeAfter({ before, after, beforeCaption, afterCaption, beforeAlt = '', afterAlt = '' }) {
  return (
    <Reveal className="arrow-flow">
      <div>
        <img src={before} alt={beforeAlt} loading="lazy" />
        {beforeCaption && <div className="figure-caption">{beforeCaption}</div>}
      </div>
      <div className="arrow">→</div>
      <div>
        <img src={after} alt={afterAlt} loading="lazy" />
        {afterCaption && <div className="figure-caption">{afterCaption}</div>}
      </div>
    </Reveal>
  );
}

export function Section({ eyebrow, heading, children }) {
  return (
    <Reveal as="section" className="section">
      {eyebrow && <div className="section-eyebrow">{eyebrow}</div>}
      {heading && <h2 className="section-heading">{heading}</h2>}
      {children}
    </Reveal>
  );
}
