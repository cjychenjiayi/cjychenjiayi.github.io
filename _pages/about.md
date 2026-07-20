---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<span class='anchor' id='about-me'></span>

I am **Jiayi Chen**, a PhD researcher in Computer and Information Engineering at the **Chinese University of Hong Kong, Shenzhen**, advised by Prof. <a href='https://sites.google.com/view/guangxuzhu' target='_blank' rel='noopener'>Guangxu Zhu</a> and Prof. <a href='https://people.ucas.edu.cn/~shuaiwang' target='_blank' rel='noopener'>Shuai Wang</a>. My work studies how foundation models and embodied systems can turn uncertain observations and open-ended language into decisions that are grounded, verifiable, and executable.

## 🧭 Research interests

- **Fast–slow thinking for embodied systems:** connecting deliberate large-model reasoning with reliable, real-time planning and control.
- **Vision-and-language navigation:** grounding visual observations and language instructions into reachable goals, map evidence, and executable actions.
- **Foundation models × wireless sensing:** learning transferable representations for heterogeneous CSI, and exploring the interface between wireless signals, perception, and AI.

Since May 2026, I have been working with <a href='https://www.agibot.com/' target='_blank' rel='noopener'>AgiBot</a>–<a href='https://www.agibot.com.cn/index.html' target='_blank' rel='noopener'>AGIQUAD</a> on a vision-based VLN algorithm. I lead the development of the perception-and-language grounding pipeline, which is being prepared for deployment on the AGIQUAD D2 Max and an ICRA submission.

# 🔥 News

- *2026.05*: Joined <a href='https://www.agibot.com/' target='_blank' rel='noopener'>AgiBot</a>–<a href='https://www.agibot.com.cn/index.html' target='_blank' rel='noopener'>AGIQUAD</a> as an embodied intelligence research intern.
- *2026*: Our AFSP work was accepted by **ICRA 2026**; the related large-model reasoning patent has been granted.
- *2026*: **The Universal Language of CSI** was accepted by IEEE Communications Magazine.
- *2025*: **Opportunistic Collaborative Planning** was published at IROS 2025.

# 🔬 Research

## Embodied intelligence · fast–slow thinking

<div class='research-card'>
  <div class='research-card-media'>
    <img class='research-main-image' src='images/research/icra-afsp-main-02.png' alt='Agentic Fast-Slow Planning architecture'>
    <video class='research-video' controls preload='metadata' poster='images/video/icra-afsp-poster.jpg'>
      <source src='files/videos/icra-afsp.mp4' type='video/mp4'>
    </video>
  </div>
  <div class='research-card-body'>
    <div class='research-badge'>ICRA 2026 · accepted</div>
    <h3>Bridging Large-Model Reasoning and Real-Time Control via Agentic Fast–Slow Planning</h3>
    <p>Agentic Fast–Slow Planning (AFSP) connects deliberative reasoning with real-time control, using perception-to-decision and decision-to-trajectory modules for robust autonomous driving.</p>
    <p class='research-meta'><strong>Jiayi Chen</strong>, <a href='https://people.ucas.edu.cn/~shuaiwang' target='_blank' rel='noopener'>Shuai Wang</a>, <a href='https://sites.google.com/view/guangxuzhu' target='_blank' rel='noopener'>Guangxu Zhu</a>, and Chengzhong Xu</p>
    <p class='research-links'><a href='https://arxiv.org/abs/2604.01681' target='_blank' rel='noopener'>arXiv</a><a href='https://github.com/cjychenjiayi/icra2026_AFSP' target='_blank' rel='noopener'>GitHub</a></p>
  </div>
</div>

<div class='research-card'>
  <div class='research-card-media'>
    <img class='research-main-image' src='images/research/iros-ocp-main-05.png' alt='Opportunistic Collaborative Planning architecture'>
    <video class='research-video' controls preload='metadata' poster='images/video/iros-ocp-poster.jpg'>
      <source src='files/videos/iros-ocp.mp4' type='video/mp4'>
    </video>
  </div>
  <div class='research-card-body'>
    <div class='research-badge'>IROS 2025 · pp. 951–958</div>
    <h3>Opportunistic Collaborative Planning with Large Vision Model Guided Control and Joint Query-Service Optimization</h3>
    <p>Combines a local model with a cloud vision-language model, choosing when to query and how to close the loop from rare-object perception to vehicle control.</p>
    <p class='research-meta'>IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2025</p>
    <p class='research-links'><a href='https://ieeexplore.ieee.org/document/11245999/' target='_blank' rel='noopener'>IEEE Xplore</a></p>
  </div>
</div>

<div class='research-card'>
  <div class='research-card-media single'>
    <img class='research-main-image paper-main-image' src='images/research/tmc-paper-main.png' alt='Formal paper overview of simulation-in-the-loop uncertainty-aware planning'>
  </div>
  <div class='research-card-body'>
    <div class='research-badge'>IEEE TMC · submitted</div>
    <h3>Not All Uncertainty Matters: Simulation-in-the-Loop Fast–Slow Reasoning for Decision-Critical Autonomous Driving System</h3>
    <p>A simulation-in-the-loop fast–slow reasoning pipeline that spends computation on uncertainty that can change a driving decision, rather than treating every prediction equally.</p>
    <p class='research-meta'><strong>Jiayi Chen</strong>, <a href='https://people.ucas.edu.cn/~shuaiwang' target='_blank' rel='noopener'>Shuai Wang</a>, <a href='https://sites.google.com/view/guangxuzhu' target='_blank' rel='noopener'>Guangxu Zhu</a>, Derrick Wing Kwan Ng, Chengzhong Xu, and Kaibin Huang</p>
    <p class='research-links'><a href='https://github.com/cjychenjiayi/3D_Bbox_uncertainty' target='_blank' rel='noopener'>GitHub</a></p>
  </div>
</div>

## Foundation models · AI for wireless sensing

<div class='research-card'>
  <div class='research-card-media single'>
    <img class='research-main-image paper-main-image' src='images/research/commag-paper-main.png' alt='Formal paper overview of the unified CSI foundation framework'>
  </div>
  <div class='research-card-body'>
    <div class='research-badge'>IEEE Communications Magazine · accepted</div>
    <h3>The Universal Language of CSI: Unifying Wireless Sensing Across Devices and Environments</h3>
    <p>Explores foundation-model interfaces for channel state information (CSI), with a unified representation that transfers wireless sensing across devices, environments, and downstream tasks.</p>
    <p class='research-meta'>A wireless-sensing line spanning WiLLM, CSI foundation models, and device/environment adaptation</p>
    <p class='research-links'><a href='https://arxiv.org/abs/2607.09727' target='_blank' rel='noopener'>arXiv</a></p>
  </div>
</div>

<div class='research-card project-card'>
  <div class='research-card-body'>
    <div class='research-badge'>Project Manager · 6G network digital twin</div>
    <h3>6G Network Digital Twin</h3>
    <p>Coordinated a virtual–real interactive 6G network project, aligning scene modeling, propagation simulation, sensing, and optimization across the research team.</p>
    <p class='research-meta'>Project coordination · Sionna RT · virtual–real network modeling</p>
  </div>
</div>

# 🧾 Patent

- **Method and Related Device for Autonomous-Driving Path Planning Integrating Large-Model Reasoning**, Chinese invention patent, ZL 2026 1 0345449.4; related to the AFSP/ICRA work.

# 🎖 Honors and Awards

- *2024*: Outstanding Undergraduate Thesis, Queen Mary-BUPT Joint Programme.
- *2022*: China International “Internet+” Competition, BUPT Industrial Track Second Prize.
- *2021*: First Prize, National College Mathematics Competition.

# 📖 Education

- *2024.09 – present*, PhD in Computer and Information Engineering, The Chinese University of Hong Kong, Shenzhen.
- *2020.09 – 2024.06*, B.Eng. in Internet of Things Engineering, Beijing University of Posts and Telecommunications.

# 💼 Internship experience

<div class='experience-item'>
  <div class='experience-heading'><strong><a href='https://www.agibot.com/' target='_blank' rel='noopener'>AgiBot</a>–<a href='https://www.agibot.com.cn/index.html' target='_blank' rel='noopener'>AGIQUAD</a></strong><span>2026.05 – present</span></div>
  <p><strong>Embodied Intelligence Research Intern</strong> · supervised by Qiwei Xu</p>
  <p>Leading a vision-based VLN algorithm for grounded goal generation and deployment-oriented validation on the AGIQUAD D2 Max.</p>
</div>

<div class='experience-item'>
  <div class='experience-heading'><strong>Shanghai AI Laboratory</strong><span>2023.01 – 2024.12</span></div>
  <p><strong>Remote Research Intern</strong> · supervised by Xinyu Cai</p>
  <p>Built LLM-based traffic-scene generation and VLM-OCR data pipelines for autonomous-driving simulation.</p>
</div>

<div class='experience-item'>
  <div class='experience-heading'><strong>Apple Inc.</strong><span>2022.07 – 2023.03</span></div>
  <p><strong>Data Analyst Intern</strong> · Channel Planning and Forecast</p>
  <p>Developed Python/C++ allocation and reporting automation for China retail channel planning.</p>
</div>

# 📄 CV

- [English CV](files/cv/jiayi-chen-cv.pdf)
- [中文简历](files/cv/chenjiayi-cv-zh.pdf)
