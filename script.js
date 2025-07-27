document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger-menu');
  const sideNav = document.getElementById('side-nav');
  const overlay = document.getElementById('side-nav-overlay');
  if (!hamburger || !sideNav || !overlay) return;

  function isMobile() {
    return window.innerWidth <= 900;
  }
  function openSideNav() {
    if (!isMobile()) return;
    sideNav.classList.add('open');
    overlay.classList.add('active');
    hamburger.classList.add('toggle');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeSideNav() {
    sideNav.classList.remove('open');
    overlay.classList.remove('active');
    hamburger.classList.remove('toggle');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function toggleSideNav() {
    if (sideNav.classList.contains('open')) {
      closeSideNav();
    } else {
      openSideNav();
    }
  }

  hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleSideNav();
  });

  
  overlay.addEventListener('click', closeSideNav);
  // Close on nav link click (mobile)


//   sideNav.querySelectorAll('a').forEach(function(link) {
//     link.addEventListener('click', function(e) {
//       const href = this.getAttribute('href');
//       if (href && href.startsWith('#')) {
//         e.preventDefault();
//         // Special scroll logic for #portfolio (with offset)
//         if (href === "#portfolio" && portfolioSection) {
//           const header = document.querySelector('header');
//           const headerHeight = header ? header.offsetHeight : 0;
//           const extraOffset = 150;
//           const rect = portfolioSection.getBoundingClientRect();
//           const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//           const targetY = rect.top + scrollTop - headerHeight + extraOffset;
//           window.scrollTo({ top: targetY, behavior: "smooth" });
//         } else {
//           // Default smooth scroll for other sections
//           const target = document.querySelector(href);
//           if (target) {
//             target.scrollIntoView({ behavior: 'smooth' });
//           }
//         }
//       }
//       closeSideNav();
//     });
//   });



  // Close on resize to desktop
  window.addEventListener('resize', function() {
    if (!isMobile()) {
      closeSideNav();
    }
  });

  // Optional: close on ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeSideNav();
  });
});


// Hamburger menu toggle for mobile navigation
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.getElementById('main-nav');
    if (hamburger && nav) {
        // Show hamburger only on mobile (CSS handles display, but JS ensures ARIA)
        function updateHamburgerVisibility() {
            if (window.innerWidth <= 768) {
                hamburger.style.display = 'flex';
                hamburger.setAttribute('aria-expanded', nav.classList.contains('show'));
            } else {
                hamburger.style.display = 'none';
                nav.classList.remove('show');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        }
        updateHamburgerVisibility();
        window.addEventListener('resize', updateHamburgerVisibility);

        hamburger.addEventListener('click', function() {
            nav.classList.toggle('show');
            const expanded = nav.classList.contains('show');
            hamburger.setAttribute('aria-expanded', expanded);
        });

        // Close nav when a link is clicked (mobile only)
        // nav.querySelectorAll('a').forEach(function(link) {
        //     link.addEventListener('click', function() {
        //         if (window.innerWidth <= 768) {
        //             nav.classList.remove('show');
        //             hamburger.setAttribute('aria-expanded', 'false');
        //         }
        //     });
        // });
    }
});



// Smooth scroll to top when clicking header nav link HOME
document.querySelectorAll('nav a[href="#home"]').forEach(function(homeNavLink) {
    homeNavLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


// Smooth scroll to portfolio section with offset when clicking header nav link
document.querySelectorAll('nav a[href="#portfolio"]').forEach(function(portfolioNavLink) {
    portfolioNavLink.addEventListener('click', function(e) {
        e.preventDefault();
        if (portfolioSection) {
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 0;
            const extraOffset = 150;
            const rect = portfolioSection.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const targetY = rect.top + scrollTop - headerHeight + extraOffset;
            window.scrollTo({ top: targetY, behavior: "smooth" });
        }
    });
});


// Activate tech stack tab/section when clicking any .tech_arrow
function handleTechArrowClick(e) {
    e.preventDefault();
    if (portfolioSection) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const extraOffset = 150;
        const rect = portfolioSection.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetY = rect.top + scrollTop - headerHeight + extraOffset;
        window.scrollTo({ top: targetY, behavior: "smooth" });
    }
    if (typeof set_color === 'function') set_color();
    if (tech) tech.classList.add('active-btn');
    if (project) project.classList.remove('active-btn');
    if (certificate) certificate.classList.remove('active-btn');
    if (portfolio_skills) {
        portfolio_skills.style.display = "grid";
        portfolio_skills.classList.add('active');
        portfolio_skills.classList.remove('hidden');
    }
    if (portfolio_project) {
        portfolio_project.style.display = "none";
        portfolio_project.classList.remove('active');
        portfolio_project.classList.add('hidden');
    }
    if (portfolio_certificate) {
        portfolio_certificate.style.display = "none";
        portfolio_certificate.classList.remove('active');
        portfolio_certificate.classList.add('hidden');
    }
}

// For all .tech_arrow
document.querySelectorAll('.tech_arrow').forEach(function(techArrow) {
    techArrow.addEventListener('click', handleTechArrowClick);
});


// Activate certificate tab/section when clicking any .certi_arrow
function handleCertiArrowClick(e) {
    e.preventDefault();
    if (portfolioSection) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const extraOffset = 150;
        const rect = portfolioSection.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetY = rect.top + scrollTop - headerHeight + extraOffset;
        window.scrollTo({ top: targetY, behavior: "smooth" });
    }
    if (typeof set_color === 'function') set_color();
    if (certificate) certificate.classList.add('active-btn');
    if (project) project.classList.remove('active-btn');
    if (tech) tech.classList.remove('active-btn');
    if (portfolio_certificate) {
        portfolio_certificate.style.display = "grid";
        portfolio_certificate.classList.add('active');
        portfolio_certificate.classList.remove('hidden');
    }
    if (portfolio_project) {
        portfolio_project.style.display = "none";
        portfolio_project.classList.remove('active');
        portfolio_project.classList.add('hidden');
    }
    if (portfolio_skills) {
        portfolio_skills.style.display = "none";
        portfolio_skills.classList.remove('active');
        portfolio_skills.classList.add('hidden');
    }
}

// For all .certi_arrow
document.querySelectorAll('.certi_arrow').forEach(function(certiArrow) {
    certiArrow.addEventListener('click', handleCertiArrowClick);
});


// Activate project tab/section when clicking any .project_arrow or #about-achievement-arrow
function handleProjectArrowClick(e) {
    e.preventDefault();
    if (portfolioSection) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const extraOffset = 150;
        const rect = portfolioSection.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetY = rect.top + scrollTop - headerHeight + extraOffset;
        window.scrollTo({ top: targetY, behavior: "smooth" });
    }
    if (typeof set_color === 'function') set_color();
    if (project) project.classList.add('active-btn');
    if (certificate) certificate.classList.remove('active-btn');
    if (tech) tech.classList.remove('active-btn');
    if (portfolio_project) {
        portfolio_project.style.display = "grid";
        portfolio_project.classList.add('active');
        portfolio_project.classList.remove('hidden');
    }
    if (portfolio_certificate) {
        portfolio_certificate.style.display = "none";
        portfolio_certificate.classList.remove('active');
        portfolio_certificate.classList.add('hidden');
    }
    if (portfolio_skills) {
        portfolio_skills.style.display = "none";
        portfolio_skills.classList.remove('active');
        portfolio_skills.classList.add('hidden');
    }
}

// For #about-achievement-arrow (in case it's not included in .project_arrow)
const aboutAchievementArrow = document.getElementById('about-achievement-arrow');
if (aboutAchievementArrow) {
    aboutAchievementArrow.addEventListener('click', handleProjectArrowClick);
}
const project = document.getElementById("project")
const certificate = document.getElementById("certificate")
const tech = document.getElementById("tech")

const portfolio_project = document.getElementById("portfolio-project")
const portfolio_certificate = document.getElementById("portfolio-certificate")
const portfolio_skills = document.getElementById("portfolio-skills")

function set_color(){
    project.classList.remove('active-btn')
    certificate.classList.remove('active-btn')
    tech.classList.remove('active-btn')
}


// Portfolio tab switching logic (show/hide with .active class)

function showPortfolioTab(tab) {
    // Remove all actives
    portfolio_project.classList.remove('active');
    portfolio_certificate.classList.remove('active');
    portfolio_skills.classList.remove('active');
    // Add active to the selected
    if (tab === 'project') portfolio_project.classList.add('active');
    if (tab === 'certificate') portfolio_certificate.classList.add('active');
    if (tab === 'tech') portfolio_skills.classList.add('active');
    // Hide all
    portfolio_project.style.display = 'none';
    portfolio_certificate.style.display = 'none';
    portfolio_skills.style.display = 'none';
    // Show only the selected
    if (tab === 'project') portfolio_project.style.display = '';
    if (tab === 'certificate') portfolio_certificate.style.display = '';
    if (tab === 'tech') portfolio_skills.style.display = '';
    set_color();
    if (tab === 'project') project.classList.add('active-btn');
    if (tab === 'certificate') certificate.classList.add('active-btn');
    if (tab === 'tech') tech.classList.add('active-btn');
}

project.addEventListener("click",()=>{
    showPortfolioTab('project');
});
certificate.addEventListener("click",()=>{
    showPortfolioTab('certificate');
});
tech.addEventListener("click",()=>{
    showPortfolioTab('tech');
});

// Initial state: show only project
showPortfolioTab('project');

let lastScrollY = window.scrollY;
const header = document.querySelector('header');
let headerVisible = true;
let headerHideTimeout = null;

function showHeaderWithTimeout() {
    header.classList.remove('header-hidden');
    header.classList.add('header-visible');
    headerVisible = true;
    if (headerHideTimeout) clearTimeout(headerHideTimeout);
    headerHideTimeout = setTimeout(() => {
        if (window.scrollY > 60) {
            header.classList.add('header-hidden');
            header.classList.remove('header-visible');
            headerVisible = false;
        }
    }, 2000); // 2 seconds
}

function handleHeaderVisibility() {
    if (window.scrollY > 60) {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            header.classList.add('header-hidden');
            header.classList.remove('header-visible');
            headerVisible = false;
        } else {
            // Scrolling up
            showHeaderWithTimeout();
        }
    } else {
        // At top
        showHeaderWithTimeout();
    }
    lastScrollY = window.scrollY;
}

window.addEventListener('scroll', handleHeaderVisibility);

// Show header on mouse move to top, but only if not hovering a clickable element
window.addEventListener('mousemove', (e) => {
    if (e.clientY < 80 && !headerVisible) {
        // Check if the element under the cursor is not interactive
        const el = document.elementFromPoint(e.clientX, e.clientY);
        if (el) {
            // If it's a link, button, or inside a clickable element, don't trigger header
            const isClickable = el.closest('a, button, input, select, textarea, [tabindex], [role="button"], [role="link"]');
            if (!isClickable) {
                showHeaderWithTimeout();
            }
        } else {
            showHeaderWithTimeout();
        }
    }
});

// Ensure header is visible on load
window.addEventListener('DOMContentLoaded', () => {
    header.classList.add('header-visible');
});

const homeProjectBtn = document.getElementById("home-project-btn");
const portfolioSection = document.querySelector(".portfolio");


if (homeProjectBtn && portfolioSection) {
    homeProjectBtn.addEventListener("click", (e) => {
        e.preventDefault();
        // Scroll to portfolio section (existing logic)
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const extraOffset = 150; // scrolls 120px more for even more content visible
        const rect = portfolioSection.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetY = rect.top + scrollTop - headerHeight + extraOffset;
        window.scrollTo({ top: targetY, behavior: "smooth" });

        // Always activate the project tab/section
        if (typeof set_color === 'function') set_color();
        if (project) project.classList.add('active-btn');
        if (certificate) certificate.classList.remove('active-btn');
        if (tech) tech.classList.remove('active-btn');

        if (portfolio_project) {
            portfolio_project.style.display = "grid";
            portfolio_project.classList.add('active');
            portfolio_project.classList.remove('hidden');
        }
        if (portfolio_certificate) {
            portfolio_certificate.style.display = "none";
            portfolio_certificate.classList.remove('active');
            portfolio_certificate.classList.add('hidden');
        }
        if (portfolio_skills) {
            portfolio_skills.style.display = "none";
            portfolio_skills.classList.remove('active');
            portfolio_skills.classList.add('hidden');
        }
    });
}
