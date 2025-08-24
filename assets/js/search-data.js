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
  },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-masque-exploring-lateral-skin-stretch-feedback-on-the-face-with-head-mounted-displays",
          title: 'Masque - Exploring Lateral Skin Stretch Feedback on the Face with Head-Mounted Displays...',
          description: "An HMD prototype with six skin stretch modules providing 2D haptic feedback on the face. Conducted studies on shear tactor design, comfort, and perceivable stretch distances and angles. Results show Masque enhances VR experiences and is well-received by users as a novel HMD feedback modality.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_Masque.html";
            },},{id: "projects-gaiters-exploring-skin-stretch-feedback-on-legs-for-enhancing-virtual-reality-experiences",
          title: 'Gaiters - Exploring Skin Stretch Feedback on Legs for Enhancing Virtual Reality Experiences...',
          description: "Leg-worn devices that generate 2D skin stretch feedback to simulate virtual textures and directional cues. Conducted studies on perceivable stretch and evaluated user experiences. Results show rich and enjoyable haptic feedback on the lower limbs in VR.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_Gaiters.html";
            },},{id: "projects-pupop-pop-up-prop-on-palm-for-virtual-reality",
          title: 'PuPoP - Pop-up Prop on Palm for Virtual Reality',
          description: "A lightweight pneumatic palm interface that pops airbags with predefined shapes to simulate grasping virtual objects. Conducted user studies on shape perception and VR interaction. Results show that dynamic PuPoP enhances realism and enjoyment in VR object manipulation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_PuPoP.html";
            },},{id: "projects-aarnio-passive-kinesthetic-force-output-for-foreground-interactions-on-an-interactive-chair",
          title: 'Aarnio - Passive Kinesthetic Force Output for Foreground Interactions on an Interactive Chair...',
          description: "A standard office chair prototype providing foreground haptic force output, modulating resistive forces when rotating, tilting, or rolling the chair. Conducted studies to determine recognizability of five force profiles. Results demonstrate novel interaction techniques for immersive VR and ubiquitous computing environments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_Aarnio.html";
            },},{id: "projects-elastilinks-force-feedback-between-vr-controllers-with-dynamic-points-of-application-of-force",
          title: 'ElastiLinks - Force Feedback between VR Controllers with Dynamic Points of Application of...',
          description: "Handheld VR controllers that provide force feedback with dynamic points of application (PAFs) using rotatable tracks. Conducted perception studies on resistive and impact forces, as well as PAF offsets and rotations. Results show that dynamic PAFs enhance realism and user experience in VR.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_ElastiLinks.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
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
