import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Reveal from '../components/Reveal';
import { Figure, TwoImages, Section } from '../components/Figure';
import { images as img } from '../data/images';

export default function CaseStudyDashboard() {
  return (
    <>
      <Nav lang="en" langHref="/classeh-dashboard/fa" langLabel="Read in Persian: FA" />

      <div className="container">
        <div className="cs-header">
          <Reveal>
            <div className="cs-eyebrow">Product Design Case Study</div>
            <h1 className="cs-title">One Login, Three Different Jobs</h1>
            <p className="cs-subtitle">How one dashboard learned to speak to three different users</p>
            <div className="meta-box">
              <strong>Role:</strong> Product Designer; Research 🕵🏼‍♂️, Ideation ✨, Visual
              Design 🎨 &nbsp;·&nbsp;
              <strong>Timeline:</strong> 4 weeks &nbsp;·&nbsp;
              <strong>Tools:</strong> Figma, iPad Sketching &nbsp;·&nbsp;
              <strong>Product:</strong> Classeh
            </div>
          </Reveal>
          <Figure src={img.dashHero} />
        </div>

        <Section eyebrow="Context">
          <p>
            Classeh is a school management platform used by different types of users,
            including students, parents, and teachers. In this case study, I walk through
            how we improved their dashboard experience.
          </p>
          <Figure src={img.dashBefore} label="Before" caption="All roles saw the same dashboard" />
          <TwoImages left={img.dashAfterStudent} right={img.dashAfterTeacher} />
          <Figure src={img.dashAfterParent} label="After" caption="Student, Teacher, and Parent views" />
        </Section>

        <Section eyebrow="Problem Statement">
          <p>
            Teachers, students, and parents use Classeh for completely different reasons
            — teachers to assign and grade work, students to complete it, and parents to
            stay informed about their child's progress.
          </p>
          <p>
            Yet all three opened the exact same dashboard: a flat grid of identical
            module tiles, with nothing prioritized and nothing personalized. Finding the
            one thing they actually came for meant scanning through everything that
            didn't matter to them.
          </p>
          <Figure
            src={img.dashOldGrid}
            caption="The old dashboard — the same cluttered grid for every role, with icons that were hard to tell apart at a glance."
          />
        </Section>

        <Section eyebrow="Discovery · Research" heading="Working From Assumptions First">
          <p>Without direct access to users, I started from assumptions based on my own experience with the product:</p>
          <ul>
            <li>Students come to do something (like homework, tests, play…)</li>
            <li>Teachers come to assign and follow up</li>
            <li>Parents come to stay informed</li>
          </ul>
          <p>
            I checked these assumptions against Microsoft Clarity's most-visited pages.
            The ranking — dashboard, messages, then homework-related pages — later shaped
            the structure of the bottom navigation itself, giving each of those a
            dedicated, easy-to-reach spot.
          </p>
          <Figure
            src={img.dashClarity}
            caption="Microsoft Clarity's most-visited pages — later shaped which items got a more accessible spot in the navigation."
          />
          <p>
            I interviewed the head of the support team as a user proxy — since I didn't
            have direct access to teachers, students, or parents, she was the best person
            available, hearing directly from users about their frustrations every day.
          </p>
          <TwoImages left={img.dashSupportNotes1} right={img.dashSupportNotes2} />
          <p>Both sources — Microsoft Clarity and the user proxy — pointed the same way.</p>
        </Section>

        <Section eyebrow="Ideation · Wireframe" heading="Sketching Three Dashboards">
          <p>The sketches below were used to walk the Product Owner through how each dashboard would work.</p>
          <TwoImages left={img.dashWireStudent} right={img.dashWireTeacher} />
          <Figure src={img.dashWireParent} caption="Student, teacher, and parent wireframes — same layout structure, different priority modules for each role." />
          <ol className="numbered-list">
            <li>Tasks &amp; Events that are close to their deadlines</li>
            <li>Educational game — the most important feature of the product</li>
            <li>Calendar to manage schedules</li>
            <li>Items requiring attention which must be corrected</li>
            <li>Toolbox — shortcuts for the actions a user wants to take</li>
            <li>Bulletin to keep parents informed</li>
          </ol>
          <p>
            With 17+ existing modules needing a home, the next question was how to group
            them. Working through it with the support team lead — using what her team
            heard from users — I grouped the tiles by what people were actually trying to
            accomplish, not by how the system happened to organize them internally.
          </p>
          <TwoImages left={img.dashGrouping1} right={img.dashGrouping2} />
        </Section>

        <Section eyebrow="Design · Rapid Prototype" heading="An Idea That Got Cut in One Line">
          <p>
            My first bet was a sidebar — a rough version, shared with the team right away
            instead of polishing it alone.
          </p>
          <blockquote>"I know this sidebar model is outdated and won't work for us." — CTO</blockquote>
          <p>No detailed reasoning followed. The shortcuts inside it, though, were approved. So I kept what worked and changed where it lived.</p>
          <TwoImages left={img.dashSidebarProto1} right={img.dashSidebarProto2} />
          <p className="figure-caption">The rejected sidebar prototype — the shortcuts idea survived, but not this layout.</p>
        </Section>

        <Section eyebrow="Iteration" heading="Reworking the Tiles">
          <p>
            I first reworked the tile icons — using distinct colors and simple, memorable
            shapes so users could recognize a module at a glance, without needing to read
            the label first.
          </p>
          <Figure
            src={img.dashNewIcons}
            caption="Reworked icons — playful, colorful shapes for the student side, a more restrained style for teachers and parents."
          />
          <TwoImages left={img.dashOldIcons1EN} right={img.dashOldIcons2} />
          <p className="figure-caption">The old icons — similar colors and busy shapes made it hard to tell modules apart without reading the label.</p>
          <p>
            Then brought the sidebar's categorization logic directly into the dashboard —
            now renamed the Hub — grouping modules by purpose instead of scattering them
            as identical tiles, with each role's top priority surfaced first.
          </p>
          <TwoImages left={img.dashHub1} right={img.dashHub2} />
          <p className="figure-caption">The Hub — modules grouped by purpose, using the same categorization logic from the rejected sidebar.</p>
        </Section>

        <Section eyebrow="Final Design" heading="Same Hub, Adapted to Each Role">
          <p>Here's how the same Hub adapts to each role — the first screen a user sees after logging into the system.</p>
          <Figure src={img.dashFinalTeacher} caption="As a teacher, I want to assign something to my students then check if they're doing it right." />
          <Figure src={img.dashFinalStudent} caption="As a student, I want to do a task assigned to me, such as homework." />
          <Figure src={img.dashFinalParent} caption="As a parent, I like to find out about my child's academic status and talk to their teacher." />
        </Section>

        <Section eyebrow="Handoff">
          <p>
            I handed off fully organized and labeled screens in Figma, then worked live
            with our frontend developer for the final adjustments — checking components
            and styles against the code in real time to make sure the shipped product
            matched the design.
          </p>
        </Section>

        <Section eyebrow="Reflection · Impact" heading="What Changed">
          <p>The redesigned Hub led to close to a 10% improvement in dashboard performance, measured through Microsoft Clarity.</p>
          <p>Just as tellingly, the same support channel that used to collect complaints started collecting thank-you calls instead.</p>
          <p>Three roles, one platform — each now opening on exactly what they came to do. ✨</p>
          <TwoImages left={img.dashImpact1} right={img.dashImpact2} />
        </Section>

        <Section eyebrow="Takeaway" heading="When a Senior Call Comes Without a Clear Reason, Ask">
          <p>
            The CTO rejected the sidebar with a one-line judgment call, and I never
            pushed to understand the reasoning behind it.
          </p>
          <p>
            Since then, I've learned that chasing the why — even from someone senior —
            leads to faster, more confident decisions down the line.
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
