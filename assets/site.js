const root = document.documentElement.dataset.root || ".";
const current = document.documentElement.dataset.page || "";

const navItems = [
  { href: `${root}/index.html`, label: "Home", key: "home" },
  { href: `${root}/review/index.html`, label: "Review", key: "review" },
  { href: `${root}/pricing/index.html`, label: "Pricing", key: "pricing" },
  { href: `${root}/alternatives/index.html`, label: "Alternatives", key: "alternatives" },
  { href: `${root}/offers/index.html`, label: "Offers", key: "offers" },
  { href: `${root}/blog/index.html`, label: "Blog", key: "blog" }
];

const headerTarget = document.querySelector("[data-site-header]");
const footerTarget = document.querySelector("[data-site-footer]");

if (headerTarget) {
  headerTarget.innerHTML = `
    <header class="site-header">
      <div class="wrap header-inner">
        <a class="brand" href="${root}/index.html">
          <span>Multilogin <strong>Coupon Hub</strong></span>
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
        <div class="nav-row">
          <nav aria-label="Primary">
            <ul class="nav-list" id="site-nav">
              ${navItems
                .map(
                  (item) =>
                    `<li><a class="${current === item.key ? "active" : ""}" href="${item.href}">${item.label}</a></li>`
                )
                .join("")}
            </ul>
          </nav>
          <a class="nav-cta" href="https://multilogin.com/?ref=ml789">Open Multilogin</a>
        </div>
      </div>
    </header>
  `;
}

if (footerTarget) {
  footerTarget.innerHTML = `
    <footer class="site-footer">
      <div class="wrap footer-panel">
        <div class="footer-grid">
          <div>
            <h3>Multilogin Coupon Hub</h3>
            <p>Research-led content about Multilogin coupon AFF5025, current plan positioning, buyer FAQs, setup tutorials, and competitor comparisons.</p>
          </div>
          <div>
            <h3>Main Pages</h3>
            <ul class="footer-links">
              <li><a href="${root}/index.html">Homepage</a></li>
              <li><a href="${root}/review/index.html">Review</a></li>
              <li><a href="${root}/pricing/index.html">Pricing</a></li>
              <li><a href="${root}/alternatives/index.html">Alternatives</a></li>
              <li><a href="${root}/offers/index.html">Offers</a></li>
            </ul>
          </div>
          <div>
            <h3>Guides and Legal</h3>
            <ul class="footer-links">
              <li><a href="${root}/blog/index.html">Blog Archive</a></li>
              <li><a href="${root}/blog/multilogin-coupon-guide/index.html">Coupon Guide</a></li>
              <li><a href="${root}/blog/multilogin-setup-guide/index.html">Setup Guide</a></li>
              <li><a href="${root}/blog/multilogin-use-cases-guide/index.html">Use Cases Guide</a></li>
              <li><a href="${root}/disclosure/index.html">Disclosure</a></li>
              <li><a href="${root}/privacy/index.html">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-note">
          This website is an independent informational resource. Offer details, pricing, and product features can change, so confirm the final terms on the official Multilogin website before purchasing.
        </div>
      </div>
    </footer>
  `;
}

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-list");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

document.querySelectorAll("[data-copy-coupon]").forEach((button) => {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("AFF5025");
      button.textContent = "Coupon Copied";
    } catch {
      button.textContent = "Use AFF5025";
    }
  });
});

document.querySelectorAll("a[href]").forEach((link) => {
  const href = link.getAttribute("href") || "";
  const isOfferLink = href.includes("multilogin.com/?ref=ml789");

  if (isOfferLink) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  } else {
    link.removeAttribute("target");
    link.removeAttribute("rel");
  }
});
