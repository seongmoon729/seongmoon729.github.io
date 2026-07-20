const selected = [
  ["Foundation Model-Guided RGB-to-RAW Generation with Spectral Supervision for RAW-Domain Detection", "IEEE AVSS", "Sep. 2026", "1st Author"],
  ["UICAM: A Codec-Transferable Adapter for Machine-Oriented Image Compression", "IEEE AVSS", "Sep. 2026", "1st Author"],
  ["Test-Time Fine-Tuning of Image Compression Models for Multi-Task Adaptability", "IEEE CVPR", "Mar. 2025", "2nd Author"],
  ["Adaptive Image Downscaling for Rate-Accuracy-Latency Optimization of Task-Target Image Compression", "IEEE AICAS", "Feb. 2024", "2nd Author"],
  ["Rate-Controllable and Target-Dependent JPEG-Based Image Compression Using Feature Modulation", "IEEE ICME Workshop", "Apr. 2023", "1st Author"],
  ["An Overhead-Free Region-Based JPEG Framework for Task-Driven Image Compression", "Pattern Recognition Letters", "Nov. 2022", "2nd Author"],
];

const conference = [
  selected[0], selected[1], selected[2], selected[3],
  ["Kernel Shape Control for Row-Efficient Convolution on Processing-In-Memory Arrays", "IEEE ICCAD", "Jul. 2023", "4th Author"],
  selected[4],
];

const journals = [
  ["A Codec-Transferable Adapter for Machine-Oriented Image Compression Across Multiple Vision Tasks", "Preprint · Under review for TCSVT", "2025", "1st Author"],
  ["KERNTROL: Kernel Shape Control Toward Ultimate Memory Utilization for In-Memory Convolutional Weight Mapping", "IEEE TCAS-I", "Feb. 2024", "4th Author"],
  ["An Overhead-Free Region-Based JPEG Framework for Task-Driven Image Compression", "Pattern Recognition Letters", "Nov. 2022", "2nd Author"],
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function CvSection({ title, children, compact = false }: { title: string; children: React.ReactNode; compact?: boolean }) {
  return <section className={`cv-section${compact ? " compact" : ""}`}><div className="section-title"><h2>{title}</h2><span /></div>{children}</section>;
}

function Entry({ title, organization, location, date, children }: { title: string; organization: string; location?: string; date?: string; children?: React.ReactNode }) {
  return <article className="entry"><div className="entry-copy"><h3>{title}</h3><p>{organization}</p>{children}</div><div className="entry-facts"><strong>{location}</strong><span>{date}</span></div></article>;
}

function Pub({ paper }: { paper: string[] }) {
  return <article className="pub"><div><h3>{paper[0]}</h3><p>{paper[3]}</p></div><div><strong>{paper[1]}</strong><span>{paper[2]}</span></div></article>;
}

function Footer({ page }: { page: number }) {
  return <footer className="page-footer"><span>July 20, 2026</span><span>Seongmoon Jeong · Curriculum Vitae</span><span>{page}</span></footer>;
}

export default function Home() {
  return <main className="document-shell">
    <nav className="document-toolbar" aria-label="Document actions">
      <div><strong>Seongmoon Jeong</strong><span>HTML Curriculum Vitae</span></div>
      <div className="toolbar-links"><a href="#page-1">01</a><a href="#page-2">02</a><a href="#page-3">03</a><a className="download" href={`${basePath}/cv.pdf`} download>Download TeX PDF</a></div>
    </nav>

    <div className="paper-stack">
      <article className="paper" id="page-1">
        <header className="cv-header">
          <p className="name"><span>Seongmoon</span> Jeong</p>
          <p className="position">Ph.D. Candidate</p>
          <p className="address">IRIS Lab · Sungkyunkwan University · Suwon, Republic of Korea</p>
          <div className="contact"><a href="tel:+821047328047"><i>M</i> +82 10-4732-8047</a><b>·</b><a href="mailto:jsm21star@gmail.com"><i>@</i> jsm21star@gmail.com</a></div>
        </header>

        <p className="summary">I am a Ph.D. candidate in the Department of Artificial Intelligence at Sungkyunkwan University, advised by <strong>Prof. Jong Hwan Ko</strong>. My research centers on <strong>image compression</strong> within computer vision, spanning both low-level optimization and its impact on high-level tasks such as classification, object detection, and segmentation. While conventional compression is designed for human perception, I investigate how visual information can be encoded to better serve <strong>machine perception</strong>. In particular, I develop <strong>learned, task-aware representations</strong> that jointly optimize compression efficiency and downstream vision performance. More recently, I have been working on high-level vision directly in the <strong>RAW domain</strong>, prior to the image signal processing pipeline. My long-term goal is to enable communication-efficient intelligent systems for autonomous systems and edge-based machine vision.</p>

        <CvSection title="Education">
          <Entry title="Ph.D. in Artificial Intelligence" organization="Sungkyunkwan University (SKKU)" location="Suwon, Korea" date="Mar. 2020 — Present"><p className="note">Outstanding Scholarship, awarded to promising students in the Department of Artificial Intelligence.</p></Entry>
          <Entry title="B.S. in Electronic and Electrical Engineering" organization="Sungkyunkwan University (SKKU)" location="Suwon, Korea" date="Mar. 2013 — Feb. 2020"><p className="note">GPA: 3.84 / 4.5 · Top 6.6%</p></Entry>
        </CvSection>

        <CvSection title="Research Experience">
          <Entry title="Graduate Researcher" organization="IRIS Lab, Sungkyunkwan University (SKKU)" location="Suwon, Korea" date="Mar. 2020 — Present"><ul><li>General Codec Adapter for Machines</li><li>Learned Image Compression Adapter for Machines</li><li>Efficient JPEG Modification for Machines</li></ul></Entry>
        </CvSection>

        <CvSection title="Project Experience">
          <Entry title="Video Coding for Machines" organization="Lead Student Researcher · IRIS Lab, SKKU" location="Media Research Division, ETRI" date="2023 — 2024" />
          <Entry title="Adaptive and Efficient Preprocessing and Coding for Machine Vision Tasks and Input Images" organization="Lead Student Researcher · IRIS Lab, SKKU" location="Media Research Division, ETRI" date="2022" />
        </CvSection>

        <CvSection title="Selected Publications" compact>{selected.slice(0, 4).map((paper) => <Pub key={paper[0]} paper={paper} />)}</CvSection>
        <Footer page={1} />
      </article>

      <article className="paper" id="page-2">
        <CvSection title="Selected Publications" compact>{selected.slice(4).map((paper) => <Pub key={paper[0]} paper={paper} />)}</CvSection>

        <CvSection title="Standardization Activities" compact>
          <Entry title="[VCM] Neural network based post-filter for VCM" organization="ISO/IEC JTC1 / SC29 / WG4 m71305" location="Geneva" date="Jan. 2025" />
          <Entry title="[VCM] Neural network based pre-filter for VCM" organization="ISO/IEC JTC1 / SC29 / WG4 m71304" location="Geneva" date="Jan. 2025" />
          <Entry title="[VCM] Learned joint filter network for VCM" organization="ISO/IEC JTC1 / SC29 / WG4 m69990" location="Kemer" date="Nov. 2024" />
          <Entry title="[VCM] Learned pre-filter network for VCM" organization="ISO/IEC JTC1 / SC29 / WG4 m69085" location="Sapporo" date="Jan. 2024" />
        </CvSection>

        <CvSection title="Honors & Awards" compact>
          <div className="honors">
            <p><time>2024</time><strong>3rd Place</strong><span>DAC System Design Contest — GPU Track</span><em>San Francisco, USA</em></p>
            <p><time>2020</time><strong>2nd Place</strong><span>Artificial Intelligence Grand Challenge, Ministry of Science and ICT</span><em>Korea</em></p>
            <p><time>2019</time><strong>Honorable Mention</strong><span>Big Data Center Open Innovation Challenge</span><em>Seongnam, Korea</em></p>
            <p><time>2019</time><strong>Outstanding Work Award</strong><span>Capstone Design Project, SKKU</span><em>Suwon, Korea</em></p>
            <p><time>2018</time><strong>Dean’s List Award</strong><span>Fall semester, SKKU</span><em>Suwon, Korea</em></p>
            <p><time>2017</time><strong>Dean’s List Award</strong><span>Fall semester, SKKU</span><em>Suwon, Korea</em></p>
          </div>
        </CvSection>

        <CvSection title="Full Publications" compact>
          <h3 className="category">International Conference</h3>
          {conference.slice(0, 5).map((paper) => <Pub key={paper[0]} paper={paper} />)}
        </CvSection>
        <Footer page={2} />
      </article>

      <article className="paper" id="page-3">
        <h3 className="category continued">International Conference · continued</h3>
        <Pub paper={conference[5]} />

        <h3 className="category journal">International Journal</h3>
        {journals.map((paper) => <Pub key={paper[0]} paper={paper} />)}

        <CvSection title="Student Mentoring" compact>
          <Entry title="Hangyul Choi" organization="M.S. student at Sungkyunkwan University · now at MX Business, Samsung Electronics" date="2023 — 2024"><p className="note">Adaptive Image Downscaling for Rate-Accuracy-Latency Optimization of Task-Target Image Compression</p></Entry>
          <Entry title="Chanung Park" organization="M.S. student at Sungkyunkwan University" date="2024" />
        </CvSection>

        <CvSection title="Skills" compact>
          <dl className="skills"><div><dt>Programming Languages</dt><dd>Python, Shell scripting, C/C++</dd></div><div><dt>ML Frameworks</dt><dd>PyTorch, TensorFlow, JAX, TensorRT</dd></div><div><dt>Development Frameworks</dt><dd>Docker, Conda, uv</dd></div></dl>
        </CvSection>

        <CvSection title="Reference" compact>
          <Entry title="Jong Hwan Ko" organization="Associate Professor · Department of ECE, SKKU" location="Ph.D. advisor" date="Suwon, Korea"><div className="reference-links"><a href="https://iris.skku.edu/">iris.skku.edu</a><a href="mailto:jhko@skku.edu">jhko@skku.edu</a></div></Entry>
        </CvSection>
        <Footer page={3} />
      </article>
    </div>
  </main>;
}
