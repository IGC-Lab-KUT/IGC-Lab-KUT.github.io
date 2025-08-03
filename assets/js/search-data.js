// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "GIC-Lab’s research contributions span a range of areas including wireless communication, IoT, edge computing, AI-driven network design, Secure Physical Layer Communications, Low-Altitude Economy Networking and cyber-security. Our recent works include energy-efficient communication protocols, intelligent spectrum sharing, and secure IoT architectures. The lab actively publishes in reputed venues and journals in the domains of communication systems and intelligent networks.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "This page highlights selected research and development projects led by GIC-Lab. Our work spans wireless systems, intelligent networks, IoT, cyber-security, and energy-efficient communication. We regularly update this space to reflect our ongoing innovations, collaborations, and applied research outcomes.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-people",
          title: "people",
          description: "Led by Dr. Shikhar Verma, GIC-Lab is powered by a group of curious minds who enjoy solving problems together. From faculty mentors to student researchers, everyone brings something unique to the table. Meet the people behind our work — those who make ideas happen through collaboration, creativity, and dedication.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "post-a-lora-enabled-imu-study",
        
          title: "A LoRa‑Enabled IMU Study",
        
        description: "Analyzing hand movement patterns during well and sick periods.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/lora-imu/";
          
        },
      },{id: "post-mind-is-the-39-real-39-39-infinity-39",
        
          title: "Mind is the &#39;real&#39; &#39;infinity&#39;",
        
        description: "Thoughts on how the human brain works",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/brain/";
          
        },
      },{id: "news-we-re-happy-to-share-that-our-lab-website-is-now-live",
          title: 'We’re happy to share that our Lab website is now live!',
          description: "",
          section: "News",},{id: "news-we-are-happy-to-share-that-we-presented-our-research-to-high-school-students-of-japan-during-open-campus-event-2-08-2025-and-3-08-2025",
          title: 'We are happy to share that we presented our research to high school...',
          description: "",
          section: "News",},{id: "projects-github-auditor",
          title: 'GitHub Auditor',
          description: "A comprehensive GitHub repository analytics dashboard that automatically monitors and visualizes your GitHub repositories.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/GitHub_Auditor/";
            },},{id: "projects-chatgpt-conversation-heatmap",
          title: 'ChatGPT Conversation Heatmap',
          description: "This project visualizes ChatGPT conversation activity in a GitHub-style heatmap.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chatgpt_heatmap/";
            },},{id: "projects-comprehensive-rust-bn-translated",
          title: 'Comprehensive Rust - bn translated',
          description: "This is the Rust course used by the Android team at Google. I have translated part of it into Bengali.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/comprehensive_rust_bn/";
            },},{id: "projects-comprehensive-rust-bn",
          title: 'Comprehensive Rust-bn',
          description: "Desktop application for Comprehensive Rust-bn built using electron js.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/comprehensive_rust_desktop/";
            },},{id: "projects-floating-mascot",
          title: 'Floating Mascot',
          description: "A floating mascot app made with PyQt6. You can load animated GIFs or images.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/floating_mascot/";
            },},{id: "projects-gptdesk",
          title: 'gptDesk',
          description: "This desktop application leverages the power of ChatGPT",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gpt_desk/";
            },},{id: "projects-depth-resnet-polyp-image-classification-tool",
          title: 'Depth-ResNet – Polyp Image Classification Tool',
          description: "DepthResNet – Polyp Image Classification Tool using Depth-ResNet (Cross-Platform)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/polyps_classification/";
            },},{id: "projects-quantum-cryptography",
          title: 'Quantum Cryptography',
          description: "This research explores improving Quantum Cryptography through single particle state rotation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/quantum_cryp/";
            },},{id: "projects-lumbosacral-spine-mri-segmentation",
          title: 'Lumbosacral Spine MRI Segmentation',
          description: "Lumbosacral spine MRI segmentation and fracture assessment.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/spine_mri/";
            },},{id: "projects-mri-seg-tool-cross-platform",
          title: 'MRI-SEG Tool (Cross-Platform)',
          description: "MRI-SEG, Spine MRI Segmentation and Classification Tool (Cross-Platform)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/spine_mri_package/";
            },},{id: "projects-mri-seg-lite-lightweight-spine-mri-segmentation",
          title: 'MRI-SEG Lite - Lightweight Spine MRI Segmentation',
          description: "MRI SEG Lite – Lightweight Spine MRI Segmentation for Edge Devices (R-Pi &amp; all.)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/spine_mri_rc/";
            },},{id: "projects-sqlmap-gui",
          title: 'sqlmap-gui',
          description: "GUI for SQLMAP, a powerful tool for automated SQL injection",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sqlmap_gui/";
            },},{id: "projects-ub-gui",
          title: 'UB GUI',
          description: "UB GUI is a desktop application to give windows a look of Ubuntu.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ub_gui/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%68%69%6B%68%61%72@%6B%6F%63%68%69-%74%65%63%68.%61%63.%6A%70", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/IGC-Lab-KUT", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/dr-shikhar-verma-3a13b486", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
