"""Downloads the largest icon found for each app into logos/<slug>.<ext>.
Looks at the site's own icon tags first, then falls back to Google's favicon service."""
import json, re, subprocess, sys, urllib.request, urllib.parse
from pathlib import Path

root = Path(__file__).parent
(root / "logos").mkdir(exist_ok=True)
UA = {"User-Agent": "Mozilla/5.0"}
# apps whose own domain only has a generic icon
DOMAIN = {"claude-code": "claude.ai", "claude": "claude.ai", "hermes-agent": "nousresearch.com",
          "openhands": "all-hands.dev", "dots": "openai.com", "github-copilot": "github.com"}

def get(url):
    return urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=10).read()

def width(path):
    out = subprocess.run(["sips", "-g", "pixelWidth", str(path)], capture_output=True, text=True).stdout
    m = re.search(r"pixelWidth: (\d+)", out)
    return int(m.group(1)) if m else 0

apps = json.loads(subprocess.run(
    ["node", "-e", 'global.window={};require("./apps.js");console.log(JSON.stringify(window.APPS))'],
    capture_output=True, text=True, cwd=root).stdout)

for a in apps:
    if not a.get("url"):
        continue
    slug = re.sub(r"[^a-z0-9]+", "-", a["name"].lower())
    host = DOMAIN.get(slug) or urllib.parse.urlparse(a["url"]).hostname
    cands = [f"https://www.google.com/s2/favicons?domain={host}&sz=256"]
    try:
        html = get(f"https://{host}").decode("utf8", "ignore")
        for tag in re.findall(r"<link[^>]*>", html, re.I):
            if re.search(r"rel=\"[^\"]*icon", tag, re.I):
                h = re.search(r"href=\"([^\"]+)\"", tag)
                if h and ".svg" not in h.group(1) and ".ico" not in h.group(1):
                    cands.append(urllib.parse.urljoin(f"https://{host}/", h.group(1).replace("&amp;", "&")))
    except Exception:
        pass
    best, best_w = None, 0
    for i, c in enumerate(cands):
        tmp = root / "logos" / f".tmp{i}"
        try:
            tmp.write_bytes(get(c))
        except Exception:
            continue
        w = width(tmp)
        if w > best_w:
            best, best_w = tmp, w
    for f in (root / "logos").glob(f"{slug}.*"):
        f.unlink()
    if best:
        best.rename(root / "logos" / f"{slug}.png")
    for f in (root / "logos").glob(".tmp*"):
        f.unlink()
    print(slug, best_w)
