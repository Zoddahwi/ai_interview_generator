export default function FeaturesPage() {
  return (
    <section id="features" style={{ paddingBlock: "8rem" }}>
      <div className="container">
        <span className="section-pretitle">APP FEATURES</span>
        <h2>Tailored for Interview Success</h2>
        <p className="section-description">
          InterviewAI offers an intelligent suite of tools designed to prepare both interviewers
          and candidates with high-quality, relevant question templates.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            </div>
            <h3>Fine-Tuned Difficulty</h3>
            <p>
              From Entry-Level internships to Executive Lead roles, target exactly the level of experience your organization needs.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
            </div>
            <h3>Behavioral & Technical Focus</h3>
            <p>
              Choose to test deep system architecture, situational problem solving, culture fit, or a balanced mix of everything.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
            <h3>Interviewer Rubrics</h3>
            <p>
              Receive an AI-synthesized rubric for each question that explains what key indicators to watch for in ideal responses.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M12 12v9m-4-4l4 4 4-4"/></svg>
            </div>
            <h3>Seamless Exports</h3>
            <p>
              Instantly copy questions to your clipboard or download the full question set with grading rubrics as beautifully formatted Markdown files.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
