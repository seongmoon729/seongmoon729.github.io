import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  return (
    <main className="page">
      <header className="intro row">
        <figure className="portrait">
          <Image src={`${basePath}/portrait.jpg`} width={600} height={750} alt="Portrait of Seongmoon Jeong" />
        </figure>
        <div className="intro-text">
          <h1>Seongmoon Jeong</h1>
          <p className="bio">I am a Ph.D. candidate in the <a href="https://iris.skku.edu/">IRIS Lab</a> at Sungkyunkwan University, advised by Prof.&nbsp;Jong&nbsp;Hwan&nbsp;Ko. My research has focused on image compression for machine vision and on RAW-domain object detection. Recently, I have become interested in agentic AI and agent harnesses, particularly in designing the tools and execution flow around existing models so they can perform specific tasks well.</p>
          <p className="contact"><a href="mailto:jsm21star@gmail.com">Email</a><span className="sep" aria-hidden="true">/</span><a href={`${basePath}/Seongmoon_Jeong_CV.pdf`}>CV</a></p>
        </div>
      </header>

      <section id="publications" aria-labelledby="publications-title">
        <h2 id="publications-title">Publications</h2>
        <ol>
          <li className="pub row" id="rgb-to-raw">
            <span className="when">2026</span>
            <div>
              <h3>Foundation Model-Guided RGB-to-RAW Generation with Spectral Supervision for RAW-Domain Detection</h3>
              <p className="authors"><span className="me">Seongmoon Jeong</span>, <span>Yulhwa Kim</span>, <span>Jong Hwan Ko</span></p>
              <p className="venue"><cite>IEEE AVSS</cite><span className="links"><a href="https://iris.skku.edu/publication/c104_avss_2026/">Abstract</a></span></p>
            </div>
          </li>
          <li className="pub row" id="uicam">
            <span className="when">2026</span>
            <div>
              <h3>UICAM: A Codec-Transferable Adapter for Machine-Oriented Image Compression</h3>
              <p className="authors"><span className="me">Seongmoon Jeong</span>, <span>Sangwoon Kwak</span>, <span>Soon-heung Jung</span>, <span>Hyon-Gon Choo</span>, <span>Jong Hwan Ko</span></p>
              <p className="venue"><cite>IEEE AVSS</cite><span className="links"><a href="https://iris.skku.edu/publication/c103_avss_2026/">Abstract</a></span></p>
            </div>
          </li>
          <li className="pub row" id="iser">
            <span className="when">2026</span>
            <div>
              <h3>ISER: Instance-Specific Early Stopping with Dynamic Low-Rank Adaptation for Learned Image Compression</h3>
              <p className="authors"><span>Un Ki Park</span>, <span className="me">Seongmoon Jeong</span>, <span>Sangmin Kim</span>, <span>Jeungsub Lee</span>, <span>Gyeongmoon Park</span>, <span>Jong Hwan Ko</span></p>
              <p className="venue"><cite>Electronics</cite><span className="links"><a href="https://doi.org/10.3390/electronics15173807">Paper</a><a href="https://github.com/unkipark/ISER">Code</a></span></p>
            </div>
          </li>
          <li className="pub row" id="ttft-ic">
            <span className="when">2025</span>
            <div>
              <h3>Test-Time Fine-Tuning of Image Compression Models for Multi-Task Adaptability</h3>
              <p className="authors"><span>Un Ki Park</span>, <span className="me">Seongmoon Jeong</span>, <span>Youngchan Jang</span>, <span>Gyeongmoon Park</span>, <span>Jong Hwan Ko</span></p>
              <p className="venue"><cite>IEEE/CVF CVPR</cite><span className="links"><a href="https://openaccess.thecvf.com/content/CVPR2025/papers/Park_Test-Time_Fine-Tuning_of_Image_Compression_Models_for_Multi-Task_Adaptability_CVPR_2025_paper.pdf">Paper</a><a href="https://github.com/unkipark/CVPR2025_LoRA_comp">Code</a></span></p>
            </div>
          </li>
          <li className="pub row" id="kerntrol">
            <span className="when">2024</span>
            <div>
              <h3>KERNTROL: Kernel Shape Control Toward Ultimate Memory Utilization for In-Memory Convolutional Weight Mapping</h3>
              <p className="authors"><span>Johnny Rhe</span>, <span>Kang Eun Jeon</span>, <span>Joo Chan Lee</span>, <span className="me">Seongmoon Jeong</span>, <span>Jong Hwan Ko</span></p>
              <p className="venue"><cite>IEEE TCAS-I</cite><span className="links"><a href="https://doi.org/10.1109/TCSI.2024.3365175">Paper</a><a href="https://github.com/djwhsdj/KERNTROL">Code</a></span></p>
            </div>
          </li>
          <li className="pub row" id="adaptive-downscaling">
            <span className="when">2024</span>
            <div>
              <h3>Adaptive Image Downscaling for Rate-Accuracy-Latency Optimization of Task-Target Image Compression</h3>
              <p className="authors"><span>Hangyul Choi</span>, <span className="me">Seongmoon Jeong</span>, <span>Sangwoon Kwak</span>, <span>Soon-heung Jung</span>, <span>Jong Hwan Ko</span></p>
              <p className="venue"><cite>IEEE AICAS</cite><span className="links"><a href="https://doi.org/10.1109/AICAS59952.2024.10595930">Paper</a></span></p>
            </div>
          </li>
          <li className="pub row" id="kernel-shape-control">
            <span className="when">2023</span>
            <div>
              <h3>Kernel Shape Control for Row-Efficient Convolution on Processing-In-Memory Arrays</h3>
              <p className="authors"><span>Johnny Rhe</span>, <span>Kang Eun Jeon</span>, <span>Joo Chan Lee</span>, <span className="me">Seongmoon Jeong</span>, <span>Jong Hwan Ko</span></p>
              <p className="venue"><cite>IEEE/ACM ICCAD</cite><span className="links"><a href="https://doi.org/10.1109/ICCAD57390.2023.10323749">Paper</a><a href="https://github.com/djwhsdj/KERNTROL">Code</a></span></p>
            </div>
          </li>
          <li className="pub row" id="rctd-jpeg">
            <span className="when">2023</span>
            <div>
              <h3>Rate-Controllable and Target-Dependent JPEG-Based Image Compression Using Feature Modulation</h3>
              <p className="authors"><span className="me">Seongmoon Jeong</span>, <span>Kang Eun Jeon</span>, <span>Jong Hwan Ko</span></p>
              <p className="venue"><cite>IEEE ICME Workshops</cite><span className="links"><a href="https://doi.org/10.1109/ICMEW59549.2023.00035">Paper</a></span></p>
            </div>
          </li>
          <li className="pub row" id="region-jpeg">
            <span className="when">2023</span>
            <div>
              <h3>An Overhead-Free Region-Based JPEG Framework for Task-Driven Image Compression</h3>
              <p className="authors"><span>Seonghye Jeong</span>, <span className="me">Seongmoon Jeong</span>, <span>Simon S. Woo</span>, <span>Jong Hwan Ko</span></p>
              <p className="venue"><cite>Pattern Recognition Letters</cite><span className="links"><a href="https://doi.org/10.1016/j.patrec.2022.11.020">Paper</a><a href="https://github.com/jshye/qf-map-generator">Code</a></span></p>
            </div>
          </li>
        </ol>
      </section>

      <section id="experience" aria-labelledby="experience-title">
        <h2 id="experience-title">Experience</h2>
        <ol>
          <li className="job row">
            <span className="when">2025 – Present</span>
            <div>
              <h3>Participating Researcher<span className="org">, IRIS Lab, Sungkyunkwan University</span></h3>
              <p className="context"><em>Multipurpose Visual Information Compression for Human and Machine Vision</em> — Basic Research Laboratory (BRL) project funded by the Ministry of Science and ICT (MSIT), Korea</p>
              <p className="desc">Contributing to unified visual compression methods that support both human viewing and machine perception.</p>
            </div>
          </li>
          <li className="job row">
            <span className="when">2023 – Present</span>
            <div>
              <h3>Research Mentor<span className="org">, IRIS Lab, Sungkyunkwan University</span></h3>
              <p className="desc">Mentored M.S. student Hangyul Choi (2023 – 2024, now at MX Business, Samsung Electronics) on adaptive image downscaling, published at <a href="#adaptive-downscaling">IEEE AICAS 2024</a>. Since 2024, mentoring and collaborating with graduate student Chanung Park on video coding for machines and multipurpose visual information compression through the BRL project.</p>
            </div>
          </li>
          <li className="job row">
            <span className="when">2023 – 2024</span>
            <div>
              <h3>Lead Student Researcher<span className="org">, IRIS Lab, Sungkyunkwan University</span></h3>
              <p className="context"><em>Video Coding for Machines</em> — collaborative project with the Media Research Division, Electronics and Telecommunications Research Institute (ETRI)</p>
              <p className="desc">Led research on codec-transferable adaptation for machine-oriented image compression, resulting in <a href="#uicam">UICAM (IEEE AVSS 2026)</a>.</p>
              <p className="sub"><strong>MPEG VCM.</strong> Contributed to four proposals to ISO/IEC JTC 1/SC 29/WG 4 on learned pre-, post-, and joint filters for VCM: m69085 (Sapporo, Jan. 2024), m69990 (Kemer, Nov. 2024), and m71304 and m71305 (Geneva, Jan. 2025).</p>
            </div>
          </li>
          <li className="job row">
            <span className="when">2022</span>
            <div>
              <h3>Lead Student Researcher<span className="org">, IRIS Lab, Sungkyunkwan University</span></h3>
              <p className="context"><em>Adaptive and Efficient Preprocessing and Coding for Machine Vision Tasks and Input Images</em> — collaborative project with the Media Research Division, ETRI</p>
              <p className="desc">Led research on adaptive image downscaling for rate–accuracy–latency optimization, published at <a href="#adaptive-downscaling">IEEE AICAS 2024</a>.</p>
            </div>
          </li>
          <li className="job row">
            <span className="when">2020 – Present</span>
            <div>
              <h3>Graduate Researcher<span className="org">, IRIS Lab, Sungkyunkwan University</span></h3>
              <p className="desc">Conducting research on machine-oriented image compression, task-aware preprocessing and JPEG coding, and RAW-domain machine vision. Also optimized data-loading pipelines (TensorFlow Datasets, Grain) and standardized reproducible environments (Docker, Conda/Mamba, uv, Pixi).</p>
              <p className="sub"><strong>TTFT-IC distributed experiments.</strong> For <a href="#ttft-ic">CVPR 2025</a>, built a Python pipeline that ran one process per GPU across four servers with 16 RTX 2080 Ti GPUs, sharded training and evaluation data, and aggregated outputs on a head node, cutting one experiment cycle from about four days to 12 hours.</p>
            </div>
          </li>
        </ol>
      </section>

      <section id="honors" aria-labelledby="honors-title">
        <h2 id="honors-title">Honors &amp; Awards</h2>
        <ol>
          <li className="honor row">
            <span className="when">2024</span>
            <p className="award"><strong>3rd Place</strong><span className="event">, DAC System Design Contest</span> — Design Automation Conference (DAC), San Francisco<span className="detail">GPU Track · Apr. 15 – Jun. 19 · Team lead who developed models and automated evaluation on Jetson Nano.</span></p>
          </li>
          <li className="honor row">
            <span className="when">Ph.D.</span>
            <p className="award"><strong>Outstanding Scholarship</strong> — Department of Artificial Intelligence, Sungkyunkwan University<span className="detail">Awarded to promising students in the department.</span></p>
          </li>
          <li className="honor row">
            <span className="when">2020</span>
            <p className="award"><strong>2nd Place</strong><span className="event">, Artificial Intelligence Grand Challenge</span> — Ministry of Science and ICT (MSIT), Korea<span className="detail">Object Classification Track · Jul. 13 – 31 · Developed and validated models.</span></p>
          </li>
          <li className="honor row">
            <span className="when">2020</span>
            <p className="award"><strong>GPA 3.84/4.5 (top 6.6%)</strong> — Sungkyunkwan University<span className="detail">B.S. in Electronic and Electrical Engineering.</span></p>
          </li>
          <li className="honor row">
            <span className="when">2019</span>
            <p className="award"><strong>Honorable Mention</strong><span className="event">, Big Data Center Open Innovation Challenge</span> — Seongnam, Korea<span className="detail">Dec. 3 – 4 · Validated models.</span></p>
          </li>
          <li className="honor row">
            <span className="when">2019</span>
            <p className="award"><strong>Outstanding Work Award</strong><span className="event">, Capstone Design Project</span> — Sungkyunkwan University<span className="detail">Mar. 4 – Jun. 9 · Led the project and developed the app.</span></p>
          </li>
          <li className="honor row">
            <span className="when">2018</span>
            <p className="award"><strong>Dean’s List Award</strong><span className="event">, Fall semester</span> — Sungkyunkwan University</p>
          </li>
          <li className="honor row">
            <span className="when">2017</span>
            <p className="award"><strong>Dean’s List Award</strong><span className="event">, Fall semester</span> — Sungkyunkwan University</p>
          </li>
        </ol>
      </section>
    </main>
  );
}
