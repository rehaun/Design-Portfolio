import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Reveal from '../components/Reveal';
import { Figure, Section } from '../components/Figure';
import { images as img } from '../data/images';

export default function CaseStudyUx() {
  return (
    <>
      <Nav lang="en" langHref="/ux-research/fa" langLabel="Read in Persian: FA" />

      <div className="container">
        <div className="cs-header">
          <Reveal>
            <div className="cs-eyebrow">UX Research Case Study</div>
            <h1 className="cs-title">Confident, Fast, and Sometimes Wrong</h1>
            <p className="cs-subtitle">
              What AI actually changes in a student's life, and what still gets in the way.
            </p>
            <div className="meta-box">
              <strong>Project type:</strong> UX research &nbsp;·&nbsp;
              <strong>Method:</strong> 6 semi-structured interviews, analyzed via affinity
              diagramming &nbsp;·&nbsp;
              <strong>Audience:</strong> Postgraduate computer science students (master's
              and PhD, studying abroad) &nbsp;·&nbsp;
              <strong>Instructor:</strong> Arghavan Saeidan
            </div>
          </Reveal>
          <Figure src={img.uxHero} />
        </div>

        <div className="section">
          <Reveal>
            <p>
              It's 11pm. A grad student is staring at a bug that won't die. The honest
              choice is three days of documentation, or one prompt into a chat window,
              and an answer in minutes.
            </p>
          </Reveal>
          <Figure src={img.uxChat} />
          <Reveal>
            <p>They pick the chat window. This time, it works.</p>
            <p>
              Next time, the same confident tone hands them a completely wrong answer,
              and they don't catch it until it's too late.
            </p>
          </Reveal>
          <Figure src={img.uxConfident} />
          <Reveal>
            <p>
              That gap — between getting help and getting fooled — is exactly where this
              research lives. Not whether grad students use AI. They all do. But what's
              actually happening in that invisible space in between.
            </p>
          </Reveal>
        </div>

        <Section eyebrow="Context" heading="Why Grad Students, of All People?">
          <p>
            This started as a class project on how AI is reshaping different fields —
            each of us was assigned a segment to dig into. Mine was postgraduate computer
            science students: master's and PhD candidates studying abroad.
          </p>
          <p>
            It turned out to be a good draw. This group is close to a best-case scenario
            for AI adoption — technically fluent, research-heavy workloads, constant
            daily exposure to AI for both academic and applied work. If anyone had a
            clear, lived sense of where AI genuinely helps and where it quietly fails
            them, it would be this group.
          </p>
          <Figure src={img.uxContext} />
        </Section>

        <Section eyebrow="Method" heading="Chasing Experience, Not Numbers">
          <p>
            What I needed wasn't a number. It was experience. Not just how often students
            use AI, but how it actually feels to use it: where it helps, where it quietly
            fails them, what they do when it lets them down. That kind of data doesn't
            live in a survey. It only comes out when someone talks, at length, in their
            own words. So the only real option was deep, one-on-one interviews.
          </p>
          <p>
            It's worth mentioning the framework for choosing a research method that my UX
            Research instructor (Arghavan Saeedan) developed. In this approach, we
            started with the research questions, then identified the type of data that
            would best answer them, then chose the research method, and only after
            settling on these did we draft the actual user questions.
          </p>
          <Figure src={img.uxMethodEN} />
          <p>
            I started with a set of research questions I needed to answer, then worked
            backward from there: what data would actually answer them, what method would
            get me that data, and finally, what I could actually ask a person to get at
            their experience instead of a yes or no. Every question went through several
            rounds of review with my instructor before I asked it to a single student.
          </p>
          <Figure src={img.uxQuestionsA_EN} caption="Turn research questions into interview question list" />
          <p>
            Once the questions held up, I ran the interviews with six students I already
            knew, which came with its own challenge: staying neutral with people you're
            close to takes more discipline, not less.
          </p>
          <p>
            I went through the transcripts twice. Once with an Affinity Diagram, letting
            patterns surface from the raw data on their own. Once going back through,
            question by question, to make sure every original research question actually
            had an answer in what people told me. By the sixth interview, the patterns
            had stopped changing. That was the clearest sign it was time to stop and
            start synthesizing.
          </p>
          <Figure
            src={img.uxAffinity}
            caption="affinity diagram — you can open this photo in a new tab to fully see the details"
          />
        </Section>

        <Section eyebrow="Findings" heading="Six Things I Didn't Expect to Hear So Clearly">
          <p>
            Six themes came out of the affinity mapping, clear enough that I didn't have
            to squint to see them. Here's what grad students actually told me, in their
            own words.
          </p>

          <h3>🎯 1. Specific Tasks, Not General Chat</h3>
          <p>
            Every student I talked to used AI constantly, but not as a general chatbot.
            Their use cases were specific: paraphrasing dense text, debugging code,
            summarizing academic papers with dedicated tools. They'd already outgrown the
            "ask it anything" mindset.
          </p>
          <blockquote>
            "I often rely on AI to summarize articles or provide insights into complex
            topics, which saves me a lot of time."
          </blockquote>

          <h3>🪄 2. The Time Saved Is Not Small. It's Dramatic</h3>
          <p>
            This wasn't a marginal efficiency gain. Students described AI turning
            multi-day problems into a matter of hours.
          </p>
          <blockquote>
            "Instead of spending several days reading through documentation, I can
            resolve problems in just a few hours with AI."
          </blockquote>
          <p>
            This is the strongest, clearest value in the whole study, and also the
            highest bar anything else has to clear.
          </p>

          <h3>🚧 3. Two Very Different Walls: Money and Permission</h3>
          <p>
            The barriers weren't really technical. They were structural. Cost was one.
            Premium tools are expensive enough that students described pooling resources
            just to get access.
          </p>
          <blockquote>
            "It's quite expensive, but we're considering sharing an account to make it
            more manageable."
          </blockquote>
          <p>The other wall was institutional permission.</p>
          <blockquote>
            "My manager doesn't allow us to use AI tools for our projects, which makes it
            difficult for me to get help."
          </blockquote>

          <h3>🧠 4. Underneath the Enthusiasm, a Quiet Worry About Learning</h3>
          <blockquote>
            "I feel like I'm relying on AI for quick fixes rather than truly understanding
            the material."
          </blockquote>

          <h3>⚠️ 5. Sounding Sure Isn't Being Right</h3>
          <blockquote>
            "Sometimes, AI gives me confident answers that turn out to be completely
            wrong."
          </blockquote>

          <h3>🤝 6. Worried About the Job Market, But Not Panicking</h3>
          <blockquote>
            "While I think the way we approach our work may change, I'm sure there will
            always be a place for humans in the workforce."
          </blockquote>
        </Section>

        <Section eyebrow="Through Line" heading="What Do They Actually Want From AI?">
          <p>
            Put these six things together and one pattern sits underneath all of them.
            Students don't want AI to think for them. They want it to take the friction
            out of the parts of the work that were never really the point: formatting,
            searching, first drafts. And they want it to stay out of the way of the parts
            where the thinking itself is the value.
          </p>
        </Section>

        <Section eyebrow="Opportunities" heading="Where the Real Opportunity Is">
          <p>
            Take all six findings together, and the opportunity splits into three
            buckets: making access easier, making the tool a better partner in real work,
            and making sure it actually helps people learn instead of quietly replacing
            that effort.
          </p>
          <p><strong>🧱 Making access easier</strong></p>
          <ul>
            <li>Cheaper or tiered access, instead of pushing students toward sharing accounts informally.</li>
          </ul>
          <p><strong>🤝 Making the tool a better partner</strong></p>
          <ul>
            <li>AI that adapts to a specific person's history and feedback, instead of resetting every conversation.</li>
            <li>Built-in confidence and verification signals, flagging where an answer is uncertain.</li>
          </ul>
          <p><strong>✍️ Making it a partner in learning, not a shortcut around it</strong></p>
          <ul>
            <li>Step-by-step problem solving, especially for coding and research.</li>
            <li>An "explain it back" check before moving to the next question.</li>
            <li>Progress tracking over time.</li>
          </ul>
          <Figure src={img.uxOpportunities} />
        </Section>

        <Section eyebrow="Takeaway" heading="What This Project Taught Me">
          <p><strong>Staying neutral is a skill, not a default.</strong> Interviewing people you already know takes more discipline than interviewing strangers.</p>
          <p><strong>A research question is only as good as your plan for answering it.</strong></p>
          <p><strong>Saturation is something you feel.</strong></p>
          <p>
            <strong>The finding I trusted least turned out to be true for me too.</strong>{' '}
            I did the theme extraction the traditional way: days of full-time work,
            sorting quotes by hand. Later, for an unrelated task, I gave the same raw data
            to ChatGPT, just asking it to organize and clean it up. It grouped the data
            into almost the exact same six patterns anyway, in minutes.
          </p>
        </Section>

        <Section eyebrow="An Update, Months Later" heading="The Worry That Got an Answer">
          <p>
            A few months after this research wrapped, one worry actually got an answer.
            OpenAI released Study Mode, a version of ChatGPT that asks guiding questions
            instead of handing over the answer. Not long after, Google released
            NotebookLM, built around the same idea: understanding the material, not just
            getting through it faster.
          </p>
          <Figure src={img.uxStudyMode} />
          <Figure src={img.uxNotebookLM} />
          <p>
            Neither was built because of this study, but they're aimed at exactly what
            participants were worried about. The other findings haven't aged the same
            way — the cost barrier is only partly lower, and the confident, sometimes
            wrong answers participants described back then? Still confident. Still
            sometimes wrong.
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
