"""Render the Professional Qualifications HTML sources to PDF (+ optional PNG previews).

usage: python scripts/qualifications/render.py OUT_DIR [--preview]

Writes OUT_DIR/brandon.pdf and OUT_DIR/jason.pdf. Copy them over
public/images/brandon-engel-cv-rev2.pdf and public/images/jason-engel-cv.pdf
once reviewed.
"""
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

HERE = Path(__file__).resolve().parent
out = Path(sys.argv[1]).resolve()
out.mkdir(parents=True, exist_ok=True)
preview = "--preview" in sys.argv

with sync_playwright() as p:
    browser = p.chromium.launch(channel="chrome")
    page = browser.new_page()
    for name in ("brandon", "jason"):
        page.goto((HERE / f"{name}.html").as_uri())
        page.wait_for_load_state("networkidle")
        page.evaluate("document.fonts.ready")
        # report any page whose content runs into the footer
        overflow = page.evaluate("""() => [...document.querySelectorAll('.page')].map((pg, i) => {
            const foot = pg.querySelector('.foot').getBoundingClientRect().top;
            const last = [...pg.children].filter(c => !c.classList.contains('foot')).pop()
                          .getBoundingClientRect().bottom;
            return {page: i + 1, gap_in: +((foot - last) / 96).toFixed(2)};
        })""")
        print(name, overflow)
        page.pdf(path=str(out / f"{name}.pdf"), width="8.5in", height="11in",
                 print_background=True, prefer_css_page_size=True)
    browser.close()

if preview:
    import pymupdf
    for name in ("brandon", "jason"):
        doc = pymupdf.open(out / f"{name}.pdf")
        for i, pg in enumerate(doc, 1):
            pg.get_pixmap(dpi=110).save(out / f"{name}-p{i}.png")
        print(name, "pages:", len(doc))
