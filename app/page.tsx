const selectedPublications = [
  { title: "Foundation Model-Guided RGB-to-RAW Generation with Spectral Supervision for RAW-Domain Detection", venue: "IEEE AVSS", year: "Sep. 2026", role: "1st Author" },
  { title: "UICAM: A Codec-Transferable Adapter for Machine-Oriented Image Compression", venue: "IEEE AVSS", year: "Sep. 2026", role: "1st Author" },
  { title: "Test-Time Fine-Tuning of Image Compression Models for Multi-Task Adaptability", venue: "IEEE CVPR", year: "Mar. 2025", role: "2nd Author" },
  { title: "Adaptive Image Downscaling for Rate-Accuracy-Latency Optimization of Task-Target Image Compression", venue: "IEEE AICAS", year: "Feb. 2024", role: "2nd Author" },
  { title: "Rate-Controllable and Target-Dependent JPEG-Based Image Compression Using Feature Modulation", venue: "IEEE ICME Workshop", year: "Apr. 2023", role: "1st Author" },
  { title: "An Overhead-Free Region-Based JPEG Framework for Task-Driven Image Compression", venue: "Pattern Recognition Letters", year: "Nov. 2022", role: "2nd Author" },
];

const conferencePublications = [
  ...selectedPublications.slice(0, 4),
  { title: "Kernel Shape Control for Row-Efficient Convolution on Processing-In-Memory Arrays", venue: "IEEE ICCAD", year: "Jul. 2023", role: "4th Author" },
  selectedPublications[4],
];

const journalPublications = [
  { title: "A Codec-Transferable Adapter for Machine-Oriented Image Compression Across Multiple Vision Tasks", venue: "Preprint · Under review for TCSVT", year: "2025", role: "1st Author" },
  { title: "KERNTROL: Kernel Shape Control Toward Ultimate Memory Utilization for In-Memory Convolutional Weight Mapping", venue: "IEEE TCAS-I", year: "Feb. 2024", role: "4th Author" },
  { title: "An Overhead-Free Region-Based JPEG Framework for Task-Driven Image Compression", venue: "Pattern Recognition Letters", year: "Nov. 2022", role: "2nd Author" },
];

const standards = [
  { title: "[VCM] Neural network based post-filter for VCM", code: "ISO/IEC JTC1 / SC29 / WG4 m71305", place: "Geneva", date: "Jan. 2025" },
  { title: "[VCM] Neural network based pre-filter for VCM", code: "ISO/IEC JTC1 / SC29 / WG4 m71304", place: "Geneva", date: "Jan. 2025" },
  { title: "[VCM] Learned joint filter network for VCM", code: "ISO/IEC JTC1 / SC29 / WG4 m69990", place: "Kemer", date: "Nov. 2024" },
  { title: "[VCM] Learned pre-filter network for VCM", code: "ISO/IEC JTC1 / SC29 / WG4 m69085", place: "Sapporo", date: "Jan. 2024" },
];

const honors = [
  ["2024", "3rd Place", "DAC System Design Contest — GPU Track", "San Francisco, USA"],
  ["2020", "2nd Place", "Artificial Intelligence Grand Challenge, Ministry of Science and ICT", "Korea"],
  ["2019", "Honorable Mention", "Big Data Center Open Innovation Challenge", "Seongnam, Korea"],
  ["2019", "Outstanding Work Award", "Capstone Design Project, SKKU", "Suwon, Korea"],
  ["2018", "Dean’s List Award", "Fall semester, SKKU", "Suwon, Korea"],
  ["2017", "Dean’s List Award", "Fall semester, SKKU", "Suwon, Korea"],
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="cv-section">
      <header className="section-heading">
        <span>{eyebrow}</span>
        <h2>{title}</h2>
      </header>
      {children}
    </section>
  );
}

function Entry({ title, meta, place, date, children }: { title: string; meta: string; place?: string; date?: string; children?: React.ReactNode }) {
  return (
    <article className="entry">
      <div className="entry-main">
        <h3>{title}</h3>
        <p className="entry-meta">{meta}</p>
        {children}
      </div>
      {(place || date) && <div className="entry-aside"><strong>{place}</strong><span>{date}</span></div>}
    </article>
  );
}

function PublicationList({ items }: { items: typeof selectedPublications }) {
  return (
    <div className="publication-list">
      {items.map((paper) => (
        <article className="publication" key={`${paper.title}-${paper.venue}`}>
          <div><h3>{paper.title}</h3><p>{paper.role}</p></div>
          <div className="publication-meta"><strong>{paper.venue}</strong><span>{paper.year}</span></div>
        </article>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <aside className="rail" aria-label="CV navigation">
        <a className="monogram" href="#top" aria-label="Back to top">SJ</a>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#publications">Publications</a>
          <a href="#activities">Activities</a>
          <a href="#mentoring">Mentoring</a>
        </nav>
        <a className="rail-email" href="mailto:jsm21star@gmail.com">Email</a>
      </aside>

      <div className="page" id="top">
        <header className="hero">
          <div className="hero-topline"><span>Curriculum Vitae</span><span>Suwon, Republic of Korea</span></div>
          <div className="hero-title">
            <div>
              <p className="kicker">Ph.D. Candidate · Computer Vision Researcher</p>
              <h1><span>Seongmoon</span> Jeong</h1>
              <p className="affiliation">IRIS Lab · Sungkyunkwan University</p>
            </div>
            <div className="hero-actions">
              <a className="button primary" href="mailto:jsm21star@gmail.com">Get in touch</a>
              <a
                className="button"
                href={`${basePath}/Seongmoon_Jeong_CV.pdf`}
                download="Seongmoon_Jeong_CV.pdf"
              >
                Download CV (PDF)
              </a>
            </div>
          </div>
          <div className="contact-row">
            <a href="mailto:jsm21star@gmail.com">jsm21star@gmail.com</a>
            <a href="tel:+821047328047">+82 10-4732-8047</a>
            <span>AI · Compression · RAW Vision</span>
          </div>
        </header>

        <Section id="about" eyebrow="01 / Profile" title="Machine perception, before and after compression.">
          <div className="profile-grid">
            <p className="lead">I develop learned, task-aware representations that jointly optimize compression efficiency and downstream vision performance.</p>
            <p>I am a Ph.D. candidate in the Department of Artificial Intelligence at Sungkyunkwan University, advised by <strong>Prof. Jong Hwan Ko</strong>. My research centers on image compression within computer vision, spanning low-level optimization and high-level tasks including classification, object detection, and segmentation. More recently, I have been working on high-level vision directly in the RAW domain, prior to the image signal processing pipeline. <strong>Available for full-time roles starting March 2027.</strong></p>
          </div>
          <div className="focus-strip" aria-label="Research focus areas">
            <span>Image Compression</span><span>Machine Perception</span><span>RAW-domain Vision</span><span>Edge Intelligence</span>
          </div>
        </Section>

        <Section id="experience" eyebrow="02 / Trajectory" title="Education & research">
          <div className="timeline">
            <Entry title="Ph.D. in Artificial Intelligence (Expected February 2027)" meta="Sungkyunkwan University (SKKU)" place="Suwon, Korea" date="Mar. 2020 - Present">
              <p className="detail">Outstanding Scholarship, awarded to promising students in the Department of Artificial Intelligence.</p>
            </Entry>
            <Entry title="Graduate Researcher" meta="IRIS Lab, Sungkyunkwan University" place="Suwon, Korea" date="Mar. 2020 — Present">
              <ul><li>General Codec Adapter for Machines</li><li>Learned Image Compression Adapter for Machines</li><li>Efficient JPEG Modification for Machines</li></ul>
            </Entry>
            <Entry title="B.S. in Electronic and Electrical Engineering" meta="Sungkyunkwan University (SKKU)" place="Suwon, Korea" date="Mar. 2013 — Feb. 2020">
              <p className="detail">GPA: 3.84 / 4.5 · Top 6.6%</p>
            </Entry>
          </div>
          <div className="subsection">
            <h3 className="subsection-title">Selected projects</h3>
            <div className="project-grid">
              <article><span>2023 — 2024</span><h3>Video Coding for Machines</h3><p>Lead Student Researcher · IRIS Lab, SKKU</p><small>Media Research Division, ETRI</small></article>
              <article><span>2022</span><h3>Adaptive and Efficient Preprocessing and Coding for Machine Vision Tasks and Input Images</h3><p>Lead Student Researcher · IRIS Lab, SKKU</p><small>Media Research Division, ETRI</small></article>
            </div>
          </div>
        </Section>

        <Section id="publications" eyebrow="03 / Research output" title="Selected publications">
          <PublicationList items={selectedPublications} />
          <details className="all-publications">
            <summary>View full publication list <span>+</span></summary>
            <div className="publication-group"><h3>International Conference</h3><PublicationList items={conferencePublications} /></div>
            <div className="publication-group"><h3>International Journal</h3><PublicationList items={journalPublications} /></div>
          </details>
        </Section>

        <Section id="activities" eyebrow="04 / Service & recognition" title="Standards and honors">
          <div className="two-column">
            <div>
              <h3 className="subsection-title">Standardization activities</h3>
              <div className="compact-list">{standards.map((item) => <article key={item.code}><h3>{item.title}</h3><p>{item.code}</p><span>{item.place} · {item.date}</span></article>)}</div>
            </div>
            <div>
              <h3 className="subsection-title">Honors & awards</h3>
              <div className="honor-list">{honors.map(([year, award, event, place]) => <article key={`${year}-${award}`}><span>{year}</span><div><h3>{award}</h3><p>{event}</p><small>{place}</small></div></article>)}</div>
            </div>
          </div>
        </Section>

        <Section id="mentoring" eyebrow="05 / Community" title="Mentoring, skills & reference">
          <div className="three-column">
            <div>
              <h3 className="subsection-title">Student mentoring</h3>
              <article className="person"><h3>Hangyul Choi</h3><p>M.S. student at SKKU · now at MX Business, Samsung Electronics</p><small>2023 — 2024</small><span>Adaptive Image Downscaling for Rate-Accuracy-Latency Optimization of Task-Target Image Compression</span></article>
              <article className="person"><h3>Chanung Park</h3><p>M.S. student at SKKU</p><small>2024</small></article>
            </div>
            <div>
              <h3 className="subsection-title">Skills</h3>
              <dl className="skills"><dt>Programming</dt><dd>Python, Shell scripting, C/C++</dd><dt>ML frameworks</dt><dd>PyTorch, TensorFlow, JAX, TensorRT</dd><dt>Development</dt><dd>Docker, Conda, uv</dd></dl>
            </div>
            <div>
              <h3 className="subsection-title">Reference</h3>
              <article className="reference"><h3>Jong Hwan Ko</h3><p>Associate Professor<br />Department of ECE, SKKU</p><span>Ph.D. advisor</span><a href="https://iris.skku.edu/">iris.skku.edu</a><a href="mailto:jhko@skku.edu">jhko@skku.edu</a></article>
            </div>
          </div>
        </Section>

        <footer className="site-footer"><strong>Seongmoon Jeong</strong><span>Computer Vision · Image Compression · Machine Perception</span><a href="#top">Back to top ↑</a></footer>
      </div>
    </main>
  );
}
