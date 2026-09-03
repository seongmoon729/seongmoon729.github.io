type Author = { name: string; href: string; self?: boolean };
type Publication = { code: string; title: string; venue: string; year: string; authors: Author[] };

const author = (name: string, slug: string, self = false): Author => ({
  name,
  href: `https://iris.skku.edu/authors/${slug}/`,
  self,
});

const seongmoon = author("Seongmoon Jeong", "mp02_seongmoon_jeong", true);
const jongHwan = author("Jong Hwan Ko", "admin");
const kangEun = author("Kang Eun Jeon", "pd01_kangeun_jeon");
const jooChan = author("Joo Chan Lee", "mp03_joochan_lee");

const publications: Record<string, Publication> = {
  C6: { code: "C6", title: "Foundation Model-Guided RGB-to-RAW Generation with Spectral Supervision for RAW-Domain Detection", venue: "IEEE AVSS", year: "Sep. 2026", authors: [seongmoon, author("Yulhwa Kim", "yulhwa-kim"), jongHwan] },
  C5: { code: "C5", title: "UICAM: A Codec-Transferable Adapter for Machine-Oriented Image Compression", venue: "IEEE AVSS", year: "Sep. 2026", authors: [seongmoon, author("Sangwoon Kwak", "sangwoon-kwak"), author("Soon-heung Jung", "soon-heung-jung"), author("Hyon-Gon Choo", "hyon-gon-choo"), jongHwan] },
  C4: { code: "C4", title: "Test-Time Fine-Tuning of Image Compression Models for Multi-Task Adaptability", venue: "IEEE/CVF CVPR", year: "Jun. 2025", authors: [author("Un Ki Park", "p05_unki_park"), seongmoon, author("Youngchan Jang", "youngchan-jang"), author("Gyeongmoon Park", "gyeongmoon-park"), jongHwan] },
  C3: { code: "C3", title: "Adaptive Image Downscaling for Rate-Accuracy-Latency Optimization of Task-Target Image Compression", venue: "IEEE AICAS", year: "Apr. 2024", authors: [author("Hangyul Choi", "m16_hangyeol_choi"), seongmoon, author("Sangwoon Kwak", "sangwoon-kwak"), author("Soon-heung Jung", "soon-heung-jung"), jongHwan] },
  C2: { code: "C2", title: "Kernel Shape Control for Row-Efficient Convolution on Processing-In-Memory Arrays", venue: "IEEE/ACM ICCAD", year: "Oct. 2023", authors: [author("Johnny Rhe", "mp01_johnny_rhe"), kangEun, jooChan, seongmoon, jongHwan] },
  C1: { code: "C1", title: "Rate-Controllable and Target-Dependent JPEG-Based Image Compression Using Feature Modulation", venue: "IEEE ICME Workshops", year: "Jul. 2023", authors: [seongmoon, kangEun, jongHwan] },
  J2: { code: "J2", title: "KERNTROL: Kernel Shape Control Toward Ultimate Memory Utilization for In-Memory Convolutional Weight Mapping", venue: "IEEE TCAS-I", year: "Dec. 2024", authors: [author("Johnny Rhe", "mp01_johnny_rhe"), kangEun, jooChan, seongmoon, jongHwan] },
  J1: { code: "J1", title: "An Overhead-Free Region-Based JPEG Framework for Task-Driven Image Compression", venue: "Pattern Recognition Letters", year: "Jan. 2023", authors: [author("Seonghye Jeong", "m10_seonghye_jeong"), seongmoon, author("Simon S. Woo", "simon-s.-woo"), jongHwan] },
};

const publicationList = (codes: string[]) => codes.map((code) => publications[code]);
const selectedPublications = publicationList(["C6", "C5", "C4", "C3"]);
const conferencePublications = publicationList(["C6", "C5", "C4", "C3", "C2", "C1"]);
const journalPublications = publicationList(["J2", "J1"]);

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

function PublicationReferences({ codes }: { codes: string[] }) {
  return (
    <span className="publication-references">
      [{codes.map((code, index) => <span key={code}>{index > 0 && ", "}<a href={`#publication-${code}`}>{code}</a></span>)}]
    </span>
  );
}

function PublicationList({ items, idPrefix }: { items: Publication[]; idPrefix: string }) {
  return (
    <div className="publication-list">
      {items.map((paper) => (
        <article className="publication" id={`${idPrefix}-${paper.code}`} key={`${idPrefix}-${paper.code}`}>
          <div>
            <h3><a className="publication-code" href={`#${idPrefix}-${paper.code}`}>{paper.code}</a><span>{paper.title}</span></h3>
            <p className="publication-authors">
              {paper.authors.map((item) => (
                <span className="publication-author" key={`${paper.code}-${item.name}`}>
                  {item.self
                    ? <strong><a href={item.href}>{item.name}</a></strong>
                    : <a href={item.href}>{item.name}</a>}
                </span>
              ))}
            </p>
          </div>
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
            <p>I am a Ph.D. candidate in the Department of Artificial Intelligence at Sungkyunkwan University, advised by <strong>Prof. Jong Hwan Ko</strong>. My research centers on image compression within computer vision, spanning low-level optimization and high-level tasks including classification, object detection, and segmentation. More recently, I have been working on high-level vision directly in the RAW domain, prior to the image signal processing pipeline. I have authored or co-authored eight peer-reviewed publications, including papers at CVPR, AVSS, ICCAD, and in IEEE TCAS-I, and contributed four ISO/IEC MPEG VCM proposals. <strong>Available for full-time roles starting March 2027.</strong></p>
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
              <ul className="research-themes">
                <li><strong>Machine-Oriented Image Compression:</strong> Codec-transferable and test-time adaptation across downstream vision tasks <PublicationReferences codes={["C4", "C5"]} /></li>
                <li><strong>Task-Aware Preprocessing and JPEG Coding:</strong> Adaptive downscaling, feature modulation, and region-based JPEG optimization <PublicationReferences codes={["C1", "C3", "J1"]} /></li>
                <li><strong>RAW-Domain Machine Vision:</strong> Foundation-model-guided RGB-to-RAW generation for object detection <PublicationReferences codes={["C6"]} /></li>
              </ul>
            </Entry>
            <Entry title="B.S. in Electronic and Electrical Engineering" meta="Sungkyunkwan University (SKKU)" place="Suwon, Korea" date="Mar. 2013 — Feb. 2020">
              <p className="detail">GPA: 3.84 / 4.5 · Top 6.6%</p>
            </Entry>
          </div>
          <div className="subsection">
            <h3 className="subsection-title">Selected projects</h3>
            <div className="project-grid">
              <article><span>2023 — 2024</span><h3>Video Coding for Machines</h3><p>Lead Student Researcher · IRIS Lab, SKKU</p><small>Media Research Division, ETRI · Led research on codec-transferable adaptation for machine-oriented image compression <PublicationReferences codes={["C5"]} /></small></article>
              <article><span>2022</span><h3>Adaptive and Efficient Preprocessing and Coding for Machine Vision Tasks and Input Images</h3><p>Lead Student Researcher · IRIS Lab, SKKU</p><small>Media Research Division, ETRI · Led research on adaptive image downscaling for rate-accuracy-latency optimization <PublicationReferences codes={["C3"]} /></small></article>
              <article><span>2025 — Present</span><h3>Multipurpose Visual Information Compression for Human and Machine Vision</h3><p>Participating Researcher · Basic Research Laboratory, IRIS Lab, SKKU</p><small>Ministry of Science and ICT (MSIT), Korea · Contributing to unified visual compression methods supporting both human viewing and machine perception</small></article>
            </div>
          </div>
          <div className="subsection research-engineering">
            <h3 className="subsection-title">Research engineering</h3>
            <div className="engineering-list">
              <article><h3>Multi-node experiment orchestration</h3><p>Built a Python-based multi-node experiment orchestration pipeline across four servers with 16 RTX 2080 Ti GPUs, spawning one process per GPU, sharding training and evaluation datasets across workers, and aggregating outputs on a head node for downstream evaluation. <PublicationReferences codes={["C4"]} /></p></article>
              <article><h3>Input pipeline optimization</h3><p>Profiled data-loading and augmentation bottlenecks and optimized pipelines using TensorFlow Datasets and Grain, reducing input stalls during neural network experiments.</p></article>
              <article><h3>Reproducible experimentation</h3><p>Standardized environments and automated workflows using Docker, Conda/Mamba, uv, and Pixi, improving consistency across research machines.</p></article>
            </div>
          </div>
        </Section>

        <Section id="publications" eyebrow="03 / Research output" title="Selected publications">
          <PublicationList items={selectedPublications} idPrefix="publication" />
          <details className="all-publications">
            <summary>View full publication list <span>+</span></summary>
            <div className="publication-group"><h3>International Conference</h3><PublicationList items={conferencePublications} idPrefix="full-publication" /></div>
            <div className="publication-group"><h3>International Journal</h3><PublicationList items={journalPublications} idPrefix="full-publication" /></div>
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
              <article className="person"><h3>Hangyul Choi</h3><p>M.S. student at SKKU · now at MX Business, Samsung Electronics</p><small>2023 — 2024</small><span>Adaptive Image Downscaling for Rate-Accuracy-Latency Optimization of Task-Target Image Compression <PublicationReferences codes={["C3"]} /></span></article>
              <article className="person"><h3>Chanung Park</h3><p>Graduate student at SKKU</p><small>2024 — Present</small><span>Mentored and collaborated on research in Video Coding for Machines (VCM) and multipurpose visual information compression through the BRL project.</span></article>
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
