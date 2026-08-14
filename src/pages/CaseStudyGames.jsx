import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { Figure, TwoImages, ThreeImages, BeforeAfter, Collage, Section } from '../components/Figure';
import { images as img } from '../data/images';

export default function CaseStudyGames() {
  return (
    <>
      <div className="container">
        <div className="cs-header">
          <Reveal>
            <div className="cs-eyebrow">Product Design Case Study</div>
            <Link to="/classeh-games/fa" className="cs-lang-link">Read in Persian: 🇮🇷FA</Link>
            <h1 className="cs-title">Why Didn't Our Educational Game Feel Like a Game?</h1>
            <p className="cs-subtitle">The story of a game that had everything, except a way in.</p>
            <div className="meta-box">
              <strong>Role:</strong> Product Designer &nbsp;·&nbsp;
              <strong>Timeline:</strong> 4 weeks &nbsp;·&nbsp;
              <strong>Tools:</strong> Figma, Illustrator, Pen &amp; Paper &nbsp;·&nbsp;
              <strong>Product:</strong> Classeh
            </div>
          </Reveal>
          <Figure src={img.gamesHero} alt="Classeh games hero" />
        </div>

        <Section eyebrow="Context" heading="Live, and ready to grow">
          <p>
            By the time I joined, Classeh's educational game was already live — sold to
            schools, stocked with content, doing its job. It wasn't broken. It was early:
            functional, but with clear room to grow.
          </p>
          <p>
            The brief was simple to say and open to everything: make it better. No one had
            a diagnosis yet — that part was on me to find.
          </p>
        </Section>

        <Collage
          aspect={941 / 297}
          items={[
            { src: img.gamesFlowBefore, left: 0, top: 0, width: 18.17, height: 100 },
            { src: img.gamesFlowDivider, left: 18.38, top: 39.39, width: 81.83, height: 40.4 },
          ]}
        />

        <p style={{ textAlign: 'center', fontWeight: 700, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', margin: '30px 0' }}>Before</p>

        <Collage
          aspect={961 / 196}
          items={[
            { src: img.gamesBefore, left: 0, top: 1.53, width: 28.3, height: 98.47 },
            { src: img.gamesAfter, left: 19.87, top: 0, width: 80.13, height: 77.04 },
          ]}
        />

        <p style={{ textAlign: 'center', fontWeight: 700, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', margin: '30px 0' }}>After</p>

        <Section heading="A Game? Or a Table of Contents?">
          <p>
            Getting to a single game meant three separate decisions, made correctly, in
            order: subject, then chapter, then finally a list of games to choose from.
            That's not a game flow. That's a table of contents.
          </p>
          <p>
            The navigation had been built around how a curriculum is structured — not
            around how a kid decides what to play next. And every one of those three
            decisions was a place a kid could give up before reaching anything fun.
          </p>
          <ThreeImages a={img.gamesFlow1} b={img.gamesFlow2} c={img.gamesFlow3} />
          <p className="figure-caption">
            The previous flow: subject, then chapter, then a list of games — and only then, a game.
          </p>
        </Section>

        <Section eyebrow="Discovery" heading="Chasing Clues">
          <p>
            Research wasn't yet a standard part of the process there, so I pulled together
            whatever signal I could get on my own. I ran a lightweight heuristic
            evaluation against the existing flow, then handed the game to a few teenagers
            I knew — also part of our target audience — and watched how they actually
            moved through it, rather than how the flow assumed they would.
          </p>
          <p>
            Clarity's session recordings backed up what I was seeing live: kids lingering
            on the same screen far longer than a two-second menu should take, scrolling
            lessons back and forth as if they were re-checking something rather than
            choosing it. That's not what confident navigation looks like.
          </p>
          <TwoImages left={img.gamesDiscovery1} right={img.gamesDiscovery2} />
          <Figure src={img.gamesDiscovery3} />
          <p>Two things kept surfacing:</p>
          <ul>
            <li>
              <strong>No intuitive flow:</strong> the path to play was a sequence of
              independent decisions, made correctly, in order, with no sense of progress
              in between.
            </li>
            <li>
              <strong>Inconsistent visual language:</strong> pieces of the product didn't
              feel like they belonged together, which worked against the sense of
              immersion we wanted.
            </li>
          </ul>
          <Figure src={img.gamesVisualLang} />
        </Section>

        <Section eyebrow="Competitive Analysis" heading="The App Should've Thought Ahead">
          <p>
            I looked at three educational apps to see how they handle the same tension:
            content that needs structure, but still has to feel like play. The pattern
            across the two most game-like products was clear: the app should already know
            what a user is doing next. Every time we made kids decide their own path
            through three menus, we turned play into a chore.
          </p>

          <div className="competitor"><img src={img.gamesDuolingo} alt="" />Duolingo</div>
          <p>
            Levels are gated — no skipping ahead without clearing what came before. Open
            the app, and it already knows your next step. No need to remember where you
            were, it just picks up for you.
          </p>
          <Figure src={img.gamesBussuScreen} />

          <div className="competitor"><img src={img.gamesBussuLogo} alt="" />Bussu</div>
          <p>Units instead of levels, same idea: pick up right where you left off.</p>
          <Figure src={img.gamesKhanScreen} />

          <div className="competitor"><img src={img.gamesKhanLogo} alt="" />Khan Academy Kids</div>
          <p>
            Every game sits visible at once — no category steps stand between the user
            and what they want to play. Categories are still there, just as a shortcut up
            top, not a gate.
          </p>
          <Figure src={img.gamesCompetitive} />
        </Section>

        <Section eyebrow="Ideation · HMW" heading="Finding the Right Question">
          <p>
            Discovery had pointed to a clear cause. The next step was turning that into a
            question I could actually design against:
          </p>
          <blockquote>
            How might we make the navigation experience simpler and more familiar,
            aligning with users' mental model?
          </blockquote>
        </Section>

        <Section eyebrow="User Flow" heading="Cutting the Decision, Not Simplifying It">
          <p>
            Mapping the existing flow end-to-end surfaced something I hadn't expected:
            this three-step decision sequence wasn't a one-time hurdle. It repeated
            multiple times in a single play session — and each repetition risked landing
            on a dead end.
          </p>
          <p>
            The fix wasn't to make each decision easier. It was to remove the repeated
            decision-making altogether. I restructured the flow into a single, continuous
            path. Instead of subject → chapter → game list as three separate choices,
            progress became one line the user simply moves along.
          </p>
          <p>
            To make the difference visible, I marked the actual game — the point of play
            — with a star (⭐) in both diagrams. In the old flow, that star sits at the
            end of a long, branching path. In the new one, it's just a step away.
          </p>
          <BeforeAfter
            before={img.gamesFlowDivider}
            after={img.gamesAfter}
            beforeCaption="The star marks the game itself — reached only after a three-step branching path."
            afterCaption="Same star, same game — now just one step away."
          />
          <p>Key improvements over the previous flow:</p>
          <ul>
            <li>
              <strong>Clear overview:</strong> users can now see everything relevant to
              their current progress in a single glance.
            </li>
            <li>
              <strong>Seamless progression:</strong> finishing a step reveals the next one
              automatically — no manual navigating required.
            </li>
          </ul>
        </Section>

        <Section eyebrow="Sketch" heading="Starting With Pen and Paper">
          <p>
            Early hand-drawn sketches of the screens the new flow would require, before
            any high-fidelity design.
          </p>
          <Figure src={img.gamesSketch} />
        </Section>

        <Section eyebrow="Information Architecture" heading="Stepping on Backend's Turf">
          <p>
            The new flow needed a content structure to match. Different books had
            different numbers of lessons, and different content within them — so a fixed
            rule, like "two lessons per level," wouldn't hold. Lessons would drift out of
            sync with the school's actual schedule, reaching kids earlier or later than
            they were meant to.
          </p>
          <p>
            My first instinct was to distribute content around the school's actual
            curriculum schedule, rather than how lessons happened to be grouped. But
            making that work meant restructuring the underlying database — and before
            refining the idea any further, I needed to know that was even possible.
          </p>
          <p>
            I brought it to our CTO expecting pushback, or at best a scaled-down
            compromise. Instead, he told me to go ahead.
          </p>
          <p>
            That green light was what turned this from a UI exercise into a real
            structural project — and it's what let me take the idea from a rough
            direction to something concrete: schools followed a standardized lesson plan
            set by the Ministry of Education, dividing the year into fixed blocks. I
            mapped the roadmap to that same rhythm, splitting the year into segments of
            two and a half weeks each — matching a structure teachers were already
            following, rather than inventing a new one.
          </p>
        </Section>

        <Section eyebrow="Design · Visual Identity" heading="Beezie Takes the Stage">
          <p>
            Beezie wasn't something I inherited — it's something I proposed adding to the
            game myself, and the work of bringing it to life was assigned to me. I
            brought on a freelance illustrator to design the character, and stayed closely
            involved throughout that process. She delivered the base character.
          </p>
          <Figure src={img.gamesBeezie} caption="Beezie, Classeh's mascot." />
          <p>
            Once the new roadmap structure was in place, the work went beyond the mascot
            itself. I designed the visual elements for each of the eight segments, and
            illustrated Beezie in both active and locked states — so kids could always
            tell, at a glance, where they stood in the journey and what was still ahead.
          </p>
          <Figure
            src={img.gamesBeezieSegments}
            caption="Beezie across the eight segments — active and locked states, so progress is always clear at a glance."
          />
        </Section>

        <Section eyebrow="Final Design" heading="Fewer Steps, More Play">
          <p>
            Before, users could only see games from one subject and had to work through
            all four categories to play. Now, everything from their current learning
            period is visible in one view — reusing the same screen structures that
            already existed, just reordered to fit the new flow.
          </p>
          <BeforeAfter
            before={img.gamesFinalBefore1}
            after={img.gamesFinalAfter1}
            beforeCaption="Before: users had to go through all four categories to play."
            afterCaption="After: now, they only need to be in one category (levels) at a time."
          />
          <BeforeAfter
            before={img.gamesFinalBefore2}
            after={img.gamesFinalAfter2}
            beforeCaption="Before: users could only see games from one subject."
            afterCaption="After: now they can view all games from a specific learning period."
          />
        </Section>

        <Section eyebrow="Reflection · Impact" heading="A Happy Sales Team">
          <p>
            We didn't run a formal post-launch study, so what I have isn't a number — it's
            a consistent signal from the team closest to the customers. Sales reported a
            noticeable lift in satisfaction from schools and parents, and connected it to
            the redesign. I can't put a metric next to that, but the signal was clear and
            repeated.
          </p>
          <Figure src={img.gamesImpact} />
        </Section>

        <Section eyebrow="Takeaway" heading="Great Ideas Need the Whole Team">
          <p>
            The database restructuring wasn't rejected — the CTO backed it. But I didn't
            bring our backend developer into the process early enough. I designed the new
            flow and got it approved before looping him in, and by the time I needed to
            explain the new structure, it took real effort to get the idea across — he was
            confused by a structure he hadn't helped shape.
          </p>
          <p>
            If I ran this again, the backend developer would be in the room during
            ideation, not brought in after the flow was already decided. Not because the
            idea was wrong, but because a structural change like this needed someone who'd
            live with its technical consequences involved in choosing the structure — not
            just implementing it after the fact.
          </p>
        </Section>

        <hr className="divider" />
        <div className="footer">
          <Link to="/">← Back to home</Link>
        </div>
      </div>
    </>
  );
}
