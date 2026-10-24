---
permalink: /
title: ""
excerpt: "Embodied AI, embodied agents, learning to optimize, AI for science, and physical world understanding."
author_profile: true
last_modified_at: 2026-10-24
redirect_from:
  - /about/
  - /about.html
---

<span class='anchor' id='about-me'></span>

I am **Jiayi Chen**, a PhD researcher in Computer and Information Engineering at the **Chinese University of Hong Kong, Shenzhen**, with expected graduation in **2029**. I am advised by Prof. <a href='https://sites.google.com/view/guangxuzhu' target='_blank' rel='noopener'>Guangxu Zhu</a> and Prof. <a href='https://people.ucas.edu.cn/~shuaiwang' target='_blank' rel='noopener'>Shuai Wang</a>. My research connects reasoning, perception, planning, and optimization for intelligent systems that interact with the physical world.

## Research interests

**Embodied AI · Embodied Agents · Learning to Optimize · AI for Science · Physical World Understanding**

My research explores how intelligent agents can turn an understanding of the physical world into effective decisions and actions. I study the interfaces between perception, reasoning, and optimization: **how language can guide planning, when additional reasoning is worth its computational cost, and how feedback can help a system choose and configure its algorithms**. These questions connect my work in embodied AI and learning to optimize.

Since May 2026, I have been a research intern in embodied reasoning and navigation at [AgiBot](https://www.agibot.com/)–[AGIQUAD](https://www.agibot.com.cn/index.html). I work on **exact-instance grounding** and have built a **voice-driven vision-and-language navigation (VLN) demo** on the D2 Max quadruped for integration into **future industrial inspection products**.

# 🔥 News

- *2026.10*: The **WhichBench and WhichGround** paper on exact-instance grounding was submitted to *IEEE Robotics and Automation Letters (RA-L)*. <a href='files/videos/whichground-demo.mp4?v=04e292299eda' target='_blank' rel='noopener'>Video</a>.
- *2026.10*: **SIGMA**, on decision-critical fast–slow reasoning, was released on arXiv and is under major revision at *IEEE Transactions on Mobile Computing*. <a href='https://arxiv.org/abs/2610.09520' target='_blank' rel='noopener'>Preprint</a>.
- *2026.09*: Two first-author papers on **LLM-guided algorithm configuration** and **size-agnostic solver selection** were submitted to *ICLR 2027*.
- *2026.06*: **The Universal Language of CSI** (WiLLM), a unified model for Wi-Fi sensing, was accepted to *IEEE Communications Magazine*. <a href='https://doi.org/10.1109/MCOM.001.2600216' target='_blank' rel='noopener'>DOI</a>.
- *2026.05*: I joined **AgiBot–AGIQUAD** as an embodied AI research intern, focusing on language-guided robot navigation.
- *2026.01*: **Agentic Fast–Slow Planning** was accepted to *ICRA 2026*, connecting language instructions with real-time control. <a href='https://doi.org/10.1109/ICRA57385.2026.11695925' target='_blank' rel='noopener'>DOI</a>.
- *2025.06*: **Opportunistic Collaborative Planning**, an edge–cloud control framework, was accepted to *IROS 2025*. <a href='https://doi.org/10.1109/IROS60139.2025.11245999' target='_blank' rel='noopener'>DOI</a>.

# 🔬 Research experience

My work connects **embodied intelligence, learning to optimize, and physical world modeling**. I develop methods and systems that translate language into plans and actions, learn to configure and select optimization algorithms, and use sensing and simulation to understand physical environments. Across these projects, I explore **how representations, reasoning, and feedback can turn information and computation into effective decisions and actions**.

## Embodied Intelligence and Embodied Agents

<div class='research-card inspection-card'>
  <div class='research-card-header'>
    <div class='research-badge'>WhichBench / WhichGround · AgiBot–AGIQUAD research internship</div>
    <h3>WhichBench and WhichGround: Benchmarking and Solving ‘Which One?’ Problem in Exact-Instance Grounding for Embodied Agents</h3>
    <p class='research-meta research-meta-row'><span class='research-venue'><em>IEEE RA-L, Submitted</em></span><span class='research-date'>May 2026–Oct. 2026</span></p>
  </div>
  <div class='research-card-media single'>
    <video class='research-demo' crossorigin='anonymous' controls playsinline preload='none' data-poster='images/video/whichground-opening.webp' aria-label='WhichBench and WhichGround: benchmark, grounding, and D2 Max demonstration'>
      <source src='files/videos/whichground-demo.mp4?v=04e292299eda' type='video/mp4'>
      <a href='files/videos/whichground-demo.mp4?v=04e292299eda'>Watch the demonstration</a>.
    </video>
  </div>
  <div class='research-card-body'>
    <p><strong>WhichBench</strong> diagnoses <strong>VLN capability gaps</strong>, distinguishing retrieval from disambiguation failures to support a <strong>targeted data feedback loop</strong>: failure analysis, data collection, and re-evaluation.</p>
    <p><strong>WhichGround</strong> is a <strong>prototype embodied inspection agent</strong> that orchestrates semantic-map/VLN systems as <strong>callable navigation skills</strong> and cross-validates instance evidence.</p>
    <p>Integrated WhichGround into the <strong>D2 Max navigation stack</strong> and demonstrated <strong>spoken-query navigation across floors</strong>, as a step toward <strong>future intelligent factory inspection agents</strong>.</p>
    <p class='research-links'><a href='files/videos/whichground-demo.mp4?v=04e292299eda' target='_blank' rel='noopener'>D2 Max demo video</a></p>
  </div>
</div>

<div class='research-card'>
  <div class='research-card-header'>
    <h3>Bridging Large-Model Reasoning and Real-Time Control via Agentic Fast–Slow Planning</h3>
    <p class='research-meta research-meta-row'><span class='research-venue'><em>ICRA 2026</em> · <a href='https://doi.org/10.1109/ICRA57385.2026.11695925' target='_blank' rel='noopener'>DOI</a></span><span class='research-date'>Mar. 2025–Sept. 2025</span></p>
  </div>
  <div class='research-card-media single'>
    <video class='research-demo' crossorigin='anonymous' controls playsinline preload='none' data-poster='images/video/icra-afsp-poster.jpg' aria-label='Natural language to low-level motion planning demonstration'>
      <source src='files/videos/icra-afsp-full.mp4?v=47a9a2132eee' type='video/mp4'>
      <a href='files/videos/icra-afsp-full.mp4?v=47a9a2132eee'>Watch the full demonstration</a>.
    </video>
  </div>
  <div class='research-card-body'>
    <p>Developed <strong>AFSP</strong> to translate <strong>LLM instructions into dynamically feasible trajectories</strong>, preserving semantic intent and improving robustness in real-time robot control.</p>
    <p class='research-links'><a href='files/videos/icra-afsp-full.mp4?v=47a9a2132eee' target='_blank' rel='noopener'>AFSP full video</a></p>
  </div>
</div>

<div class='research-card'>
  <div class='research-card-header'>
    <h3>Opportunistic Collaborative Planning with Large Vision Model Guided Control and Joint Query-Service Optimization</h3>
    <p class='research-meta research-meta-row'><span class='research-venue'><em>IROS 2025</em></span><span class='research-date'>Dec. 2023–Jun. 2026</span></p>
    <h3>Not All Uncertainty Matters: Simulation-in-the-Loop Fast–Slow Reasoning for Decision-Critical Autonomous Driving System</h3>
    <p class='research-meta research-meta-row'><span class='research-venue'><em>IEEE Transactions on Mobile Computing, Major Revision</em></span></p>
  </div>
  <div class='research-card-media single'>
    <video class='research-demo' crossorigin='anonymous' controls playsinline preload='none' data-poster='images/video/iros-ocp-poster.jpg' aria-label='IROS 2025 opportunistic collaborative planning demonstration'>
      <source src='files/videos/iros-ocp-full.mp4?v=b80210d354c3' type='video/mp4'>
      <a href='files/videos/iros-ocp-full.mp4?v=b80210d354c3'>Watch the full IROS demonstration</a>.
    </video>
  </div>
  <div class='research-card-body'>
    <p>Developed <strong>OCP</strong> and <strong>SIGMA</strong> for <strong>edge–cloud fast–slow reasoning</strong>, using simulation-based rollouts to estimate the value of additional cloud reasoning and allocate queries to <strong>decision-critical situations</strong>.</p>
    <p class='research-links'><a href='files/videos/iros-ocp-full.mp4?v=b80210d354c3' target='_blank' rel='noopener'>OCP full video</a><a href='https://arxiv.org/abs/2610.09520' target='_blank' rel='noopener'>SIGMA preprint</a></p>
  </div>
</div>

## AI for Science and Optimization

<div class='research-card'>
  <div class='research-card-header'>
    <h3>RULER: Reasoning from Trials to Transferable Rules for Finite-Budget Online Algorithm Configuration</h3>
    <p class='research-meta research-meta-row'><span class='research-venue'><em>ICLR 2027, Under Review</em></span><span class='research-date'>2026–present</span></p>
  </div>
  <div class='research-card-media single'>
    <a href='images/research/ruler-paper-main.png' target='_blank' rel='noopener' aria-label='View full-size RULER figure'>
      <img class='research-main-image paper-main-image' src='images/research/ruler-paper-main.webp' alt='RULER overview: local solver trials, rule induction and memory, hypothesis-guided planning, and evaluation feedback' loading='lazy' decoding='async'>
    </a>
  </div>
  <div class='research-card-body'>
    <p>Developed <strong>RULER</strong>, which uses LLMs to summarize solver trials into reusable <strong>parameter-edit rules</strong> and guide subsequent optimization through <strong>hypothesis-driven experiments</strong>.</p>
    <p class='research-links'><a href='images/research/ruler-paper-main.png' target='_blank' rel='noopener'>View figure</a></p>
  </div>
</div>

<div class='research-card'>
  <div class='research-card-header'>
    <h3>Learning to Optimize Across Problem Scales: Size-Agnostic Solver Selection for Accelerated Constrained Optimization</h3>
    <p class='research-meta research-meta-row'><span class='research-venue'><em>ICLR 2027, Under Review</em></span><span class='research-date'>2026–present</span></p>
  </div>
  <div class='research-card-media single'>
    <a href='images/research/solver-selection-paper-main.png' target='_blank' rel='noopener' aria-label='View full-size Size-agnostic solver selection figure'>
      <img class='research-main-image paper-main-image' src='images/research/solver-selection-paper-main.webp' alt='Solver preference landscape: the preferred solver changes with conditioning along an optimization trajectory' loading='lazy' decoding='async'>
    </a>
  </div>
  <div class='research-card-body'>
    <p>Developed a <strong>size-agnostic solver-selection policy</strong> that switches between complementary solvers as their relative advantages change throughout optimization, with <strong>theoretical analysis</strong> establishing sufficient conditions for a runtime advantage over fixed-solver strategies.</p>
    <p class='research-links'><a href='images/research/solver-selection-paper-main.png' target='_blank' rel='noopener'>View figure</a></p>
  </div>
</div>

## Physical World Intelligence

<div class='research-card'>
  <div class='research-card-header'>
    <h3>The Universal Language of CSI: Unifying Wireless Sensing Across Devices and Environments</h3>
    <p class='research-meta research-meta-row'><span class='research-venue'><em>IEEE Communications Magazine, Accepted</em></span><span class='research-date'>Sept. 2024–Mar. 2026</span></p>
  </div>
  <div class='research-card-media single'>
    <img class='research-main-image paper-main-image' src='images/research/commag-paper-main.webp' alt='WiLLM wireless foundation model' loading='lazy' decoding='async'>
  </div>
  <div class='research-card-body'>
    <p>Developed WiLLM, a <strong>unified foundation model</strong> trained on <strong>259K+ Wi-Fi sensing samples</strong> from 12 datasets, enabling transferable representations across diverse devices, environments, and sensing tasks.</p>
  </div>
</div>

# 💼 Internship experience

<div class='experience-item'>
  <div class='experience-heading'><strong><a href='https://www.agibot.com/' target='_blank' rel='noopener'>AgiBot</a>–<a href='https://www.agibot.com.cn/index.html' target='_blank' rel='noopener'>AGIQUAD</a></strong><span>2026.05 – 2026.10</span></div>
  <p><strong>Embodied AI Research Intern</strong> · supervised by Qiwei Xu</p>
  <p>Developed <strong>WhichBench</strong> to diagnose <strong>VLN capability gaps</strong> in spoken-language navigation and support a <strong>targeted data feedback loop</strong> through failure analysis, data collection, and re-evaluation.</p>
  <p>Developed <strong>WhichGround</strong>, a <strong>prototype embodied inspection agent</strong> that coordinates semantic-map/VLN systems as <strong>callable navigation skills</strong> and cross-validates evidence, targeting <strong>future intelligent factory inspection agents</strong>.</p>
  <p>Integrated the pipeline into the <strong>D2 Max product platform</strong> for <strong>patrol and inspection scenarios</strong>, demonstrating spoken-query and cross-floor navigation on a real quadruped.</p>
  <p class='research-links'><a href='files/videos/whichground-demo.mp4?v=04e292299eda' target='_blank' rel='noopener'>D2 Max navigation demo</a></p>
</div>

<div class='experience-item'>
  <div class='experience-heading'><strong>Shanghai AI Laboratory</strong><span>2023.01 – 2024.12</span></div>
  <p><strong>Remote Research Intern</strong> · supervised by Xinyu Cai</p>
  <p>Developed an <strong>LLM-based agent pipeline</strong> to generate OpenSCENARIO traffic scenarios from natural-language requirements; integrated CARLA with Apollo and prepared Waymo/V2X-ViT data.</p>
  <p>Prepared <strong>OCR training data for InternVL</strong> by synthesizing challenging examples and filtering for quality; supported fine-tuning with part of the model frozen.</p>
  <div class='internship-media-grid'>
    <figure>
      <video class='internship-animation' crossorigin='anonymous' loop muted playsinline preload='none' data-poster='images/internships/shanghai-carla-baseline-poster.jpg' width='960' height='566' aria-label='Baseline traffic scenario in CARLA'>
        <source data-src='files/videos/shanghai-carla-baseline.mp4?v=49b0f3abd23a' type='video/mp4'>
      </video>
      <figcaption><strong>Baseline scenario.</strong></figcaption>
    </figure>
    <figure>
      <video class='internship-animation' crossorigin='anonymous' loop muted playsinline preload='none' data-poster='images/internships/shanghai-carla-agent-poster.jpg' width='960' height='562' aria-label='Agent-generated complex traffic scenario in CARLA'>
        <source data-src='files/videos/shanghai-carla-agent.mp4?v=9a541e7a7644' type='video/mp4'>
      </video>
      <figcaption><strong>Agent-generated complex scenario.</strong></figcaption>
    </figure>
  </div>
</div>

<div class='experience-item'>
  <div class='experience-heading'><strong>Apple Inc.</strong><span>2022.07 – 2023.03</span></div>
  <p><strong>Data Analyst Intern</strong> · Channel Planning and Forecast</p>
  <p>Built a modular Python/C++ allocation engine for weekly iPad distribution across authorized retail stores in China, <strong>deployed in the iPad team's production planning workflow</strong>.</p>
  <p>Developed a two-stage forecasting pipeline using <strong>geospatial clustering</strong> followed by <strong>random forest prediction</strong> to support channel planning.</p>
  <p>Automated <strong>allocation checks, AOS lookups, and pricing</strong> and generated <strong>launch reports</strong> for channel planning.</p>
</div>

# 📚 Publications

## Selected publications

### Embodied Intelligence and Embodied Agents

<ol class='publication-list'>
  <li><strong>Jiayi Chen</strong> et al. “WhichBench and WhichGround: Benchmarking and Solving ‘Which One?’ Problem in Exact-Instance Grounding for Embodied Agents.” Submitted to <em>IEEE Robotics and Automation Letters (RA-L)</em>.
    <span class='publication-links'><a href='files/videos/whichground-demo.mp4?v=04e292299eda' target='_blank' rel='noopener'>Video</a></span>
  </li>
  <li><strong>Jiayi Chen</strong>, Shuai Wang, Guangxu Zhu, and Chengzhong Xu. “Bridging Large-Model Reasoning and Real-Time Control via Agentic Fast–Slow Planning.” <em>ICRA 2026</em>, pp. 13398–13405.
    <span class='publication-links'><a href='https://doi.org/10.1109/ICRA57385.2026.11695925' target='_blank' rel='noopener'>DOI</a><a href='files/papers/icra-afsp.pdf' target='_blank' rel='noopener'>Paper</a><a href='https://arxiv.org/abs/2604.01681' target='_blank' rel='noopener'>arXiv</a><a href='https://github.com/cjychenjiayi/icra2026_AFSP' target='_blank' rel='noopener'>Code</a><a href='files/videos/icra-afsp-full.mp4?v=47a9a2132eee' target='_blank' rel='noopener'>Video</a></span>
  </li>
  <li><strong>Jiayi Chen</strong>, Shuai Wang, Guoliang Li, Wei Xu, Guangxu Zhu, Derrick Wing Kwan Ng, and Chengzhong Xu. “Opportunistic Collaborative Planning with Large Vision Model Guided Control and Joint Query-Service Optimization.” <em>IROS 2025</em>, pp. 951–958.
    <span class='publication-links'><a href='files/papers/iros-ocp.pdf' target='_blank' rel='noopener'>Paper</a><a href='https://ieeexplore.ieee.org/document/11245999/' target='_blank' rel='noopener'>IEEE</a><a href='files/videos/iros-ocp-full.mp4?v=b80210d354c3' target='_blank' rel='noopener'>Video</a></span>
  </li>
  <li><strong>Jiayi Chen</strong>, Shuai Wang, Guangxu Zhu, Derrick Wing Kwan Ng, Chengzhong Xu, and Kaibin Huang. “Not All Uncertainty Matters: Simulation-in-the-Loop Fast–Slow Reasoning for Decision-Critical Autonomous Driving System.” <em>IEEE Transactions on Mobile Computing</em>, major revision.
    <span class='publication-links'><a href='https://arxiv.org/abs/2610.09520' target='_blank' rel='noopener'>arXiv</a><a href='files/papers/tmc-fast-slow.pdf?v=d6c8469373a4' target='_blank' rel='noopener'>Paper</a><a href='https://github.com/cjychenjiayi/3D_Bbox_uncertainty' target='_blank' rel='noopener'>Code</a></span>
  </li>
</ol>

### AI for Science and Optimization

<ol class='publication-list' start='5'>
  <li><strong>Jiayi Chen</strong>, Zhuo Li, and Guangxu Zhu. “RULER: Reasoning from Trials to Transferable Rules for Finite-Budget Online Algorithm Configuration.” <em>ICLR 2027</em>, under review.</li>
  <li><strong>Jiayi Chen</strong>, Bin Wang, Jun Fang, Guangxu Zhu, and Qingjiang Shi. “Learning to Optimize Across Problem Scales: Size-Agnostic Solver Selection for Accelerated Constrained Optimization.” <em>ICLR 2027</em>, under review.</li>
</ol>

### Physical World Intelligence

<ol class='publication-list' start='7'>
  <li><strong>Jiayi Chen</strong>, Weiting Ou, and Guangxu Zhu. “The Universal Language of CSI: Unifying Wireless Sensing Across Devices and Environments.” <em>IEEE Communications Magazine</em>, 2026.
    <span class='publication-links'><a href='https://doi.org/10.1109/MCOM.001.2600216' target='_blank' rel='noopener'>DOI</a><a href='files/papers/commag-csi.pdf' target='_blank' rel='noopener'>Paper</a><a href='https://arxiv.org/abs/2607.09727' target='_blank' rel='noopener'>arXiv</a><a href='https://github.com/cjychenjiayi/WiLLM' target='_blank' rel='noopener'>Code</a></span>
  </li>
</ol>

# 🧩 Projects

<div class='research-card project-card'>
  <div class='research-card-body'>
    <div class='research-badge'>Project participant · 6G network digital twin</div>
    <h3>6G Wireless Digital Twin and Simulation</h3>
    <p>Built a <strong>Sionna RT</strong> digital twin combining <strong>visual semantics, geometry, and measured data</strong> with <strong>electromagnetic physics</strong> to prioritize high-fidelity simulation under limited computing resources.</p>
    <p class='research-meta research-meta-row'><span class='research-venue'>Project participant · Guangdong Major Project on Environment-Enhanced 6G Networks · CUHK-Shenzhen</span><span class='research-date'>Sept. 2024–present</span></p>
  </div>
</div>

<div class='research-card project-card'>
  <div class='research-card-body'>
    <div class='research-badge'>Project lead · multi-sensor UAV system</div>
    <h3>Multi-Sensor UAV Docking and Adaptive Cruise Control</h3>
    <p>Designed a <strong>distance-adaptive docking strategy</strong> using <strong>GPS for long-range approach</strong>, <strong>vision for mid-range alignment</strong>, and a <strong>magnetic frame for close-range capture</strong>.</p>
    <p>Led integration and validation; won a university third prize and a Beijing “Internet+” third prize.</p>
    <p class='research-meta'>Distance-adaptive docking · GPS · visual alignment · magnetic capture</p>
  </div>
</div>

# 💡 Patents

**First inventor** on the following granted Chinese invention patents.

<ol class='patent-list'>
  <li><strong>Jiayi Chen</strong>, Weiting Ou, and Guangxu Zhu. “CSI-Based Target Detection Method, Apparatus, Device, and Medium.” Chinese invention patent <span class='patent-number'>ZL 202610612628.X</span>; <strong>granted</strong> July 24, 2026.</li>
  <li><strong>Jiayi Chen</strong>, Guangxu Zhu, and Shuai Wang. “Method and Related Device for Autonomous-Driving Path Planning Integrating Large-Model Reasoning.” Chinese invention patent <span class='patent-number'>ZL 202610345449.4</span>; <strong>granted</strong> June 9, 2026.</li>
</ol>

# 📖 Education

- *2024.09 – 2029 (expected)*, PhD in Computer and Information Engineering, The Chinese University of Hong Kong, Shenzhen.
- *2020.09 – 2024.06*, B.Eng. in Internet of Things Engineering, Beijing University of Posts and Telecommunications.

# 🎖 Honors and Awards

- *2024*: Outstanding Undergraduate Thesis, QMUL–BUPT Joint Programme.
- *2022*: Second Prize, BUPT Industrial Track, 8th China International “Internet+” Competition.
- University-Level Third Prize; Beijing Regional “Internet+” Third Prize (UAV docking project).
- *2021*: First Prize, National Mathematics Competition for College Students.

# 🤝 Academic service

- **Conference reviewer:** NeurIPS, ICML, ICLR, ICRA, IROS, AAAI, ACL/ARR, EMNLP, GLOBECOM, PIMRC.
- **Journal reviewer:** IEEE Transactions on Mobile Computing; IEEE Wireless Communications Letters.

# 📄 CV

- [English CV](files/cv/jiayi-chen-cv.pdf?v=c435e850357d)
- [中文简历](files/cv/chenjiayi-cv-zh.pdf?v=264828c7846c)
