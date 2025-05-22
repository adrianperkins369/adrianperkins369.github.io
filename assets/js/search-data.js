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
  },{id: "nav-docs",
          title: "docs",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/docs/index.html";
          },
        },{id: "nav-technical-skills-amp-certifications",
          title: "Technical Skills &amp; Certifications",
          description: "Technical Skills &amp; Certifications",
          section: "Navigation",
          handler: () => {
            window.location.href = "/skills/";
          },
        },{id: "post-case-study-ransomware-incident-response-at-fortivault-inc",
        
          title: "Case Study - Ransomware Incident Response at FortiVault, Inc.",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/docs/2025/casestudyransomware/";
          
        },
      },{id: "post-information-security-policy-fortivault",
        
          title: "Information Security Policy - FortiVault",
        
        description: "Information Security Policy for FortiVault, Inc.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/docs/2025/infosecpolicy/";
          
        },
      },{id: "post-teamlink-v2-4-0-release-notes",
        
          title: "TeamLink v2.4.0 Release Notes",
        
        description: "Release notes for TeamLink v2.4.0",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/docs/2025/TeamLink/";
          
        },
      },{id: "post-acceptable-use-policy-sentinel-security-solutions",
        
          title: "Acceptable Use Policy - Sentinel Security Solutions",
        
        description: "Acceptable Use Policy for Sentinel Security Solutions",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/docs/2025/sentinelsecuritysolutions/";
          
        },
      },{id: "post-case-study-building-a-scalable-content-strategy-for-milia",
        
          title: "Case Study - Building a Scalable Content Strategy for Milia",
        
        description: "Corporate Solutions for Milia",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/docs/2025/milia-case-study/";
          
        },
      },{id: "post-breaking-barriers-with-splunk-enterprise-security",
        
          title: 'Breaking Barriers with Splunk Enterprise Security <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@adrianperkins/breaking-barriers-with-splunk-enterprise-security-54a1092f3618?source=rss-f96240e6a150------2", "_blank");
          
        },
      },{id: "post-introducing-salesforce-flow",
        
          title: "Introducing Salesforce Flow",
        
        description: "Informational slides introducing Salesforce Flow",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/docs/2023/salesforceflow/";
          
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%64%72%69%61%6E%70%65%72%6B%69%6E%73%33%36%39@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/adrian-perkins", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@adrianperkins", "_blank");
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
