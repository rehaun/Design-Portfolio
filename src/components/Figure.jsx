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

export function TwoImages({ left, right, leftAlt = '', rightAlt = '' }) {
  return (
    <Reveal className="two-col">
      <img src={left} alt={leftAlt} loading="lazy" />
      <img src={right} alt={rightAlt} loading="lazy" />
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
