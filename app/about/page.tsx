export default function AboutPage() {
  return (
    <section id="about" style={{ paddingBlock: "8rem" }}>
      <div className="container">
        <span className="section-pretitle">OUR MISSION</span>
        <h2>Intelligent Candidate Evaluation</h2>

        <div className="about-split-content">
          <div className="about-text-col">
            <p>
              At <strong>InterviewAI</strong>, we believe that asking the right questions is the foundation of building elite, high-performing teams. Standard templates fail to capture the nuances of modern technical and business responsibilities.
            </p>
            <p>
              Our tool utilizes state-of-the-art Large Language Models (LLMs) to instantly synthesize rich, situational scenarios customized specifically to your desired experience level and core testing focus.
            </p>
            <div className="about-stats-grid">
              <div className="stat-item">
                <div className="stat-number">10k+</div>
                <div className="stat-label">Questions Synthesized</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Tailored Prompts</div>
              </div>
            </div>
          </div>

          <div className="about-visual-col">
            <div className="visual-graphic-box">
              <div className="graphic-sphere glow-sphere"></div>
              <div className="graphic-glass-card">
                <div className="glass-card-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="glass-card-body">
                  <div className="typing-sim">
                    <span className="sim-label">Prompt:</span>
                    <span className="sim-text">Generate Senior Lead Developer behavioral questions...</span>
                  </div>
                  <div className="pulse-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
