"""Snapshots GitHub star counts for every app with a `repo` field into stars.js.
Needs the gh CLI (authenticated) and node."""
import json, subprocess
from pathlib import Path

root = Path(__file__).parent
apps = json.loads(subprocess.run(
    ["node", "-e", 'global.window={};require("./apps.js");console.log(JSON.stringify(window.APPS))'],
    capture_output=True, text=True, cwd=root).stdout)

out = {}
for a in apps:
    if not a.get("repo"):
        continue
    r = subprocess.run(["gh", "api", f"repos/{a['repo']}", "--jq", "[.full_name,.stargazers_count]|@tsv"],
                       capture_output=True, text=True)
    if r.returncode:
        print("FAILED", a["name"], a["repo"], r.stderr.strip()[:80])
        continue
    full, stars = r.stdout.strip().split("\t")
    out[a["name"]] = {"repo": full, "stars": int(stars)}
    print(a["name"], full, stars)

(root / "stars.js").write_text("window.STARS = " + json.dumps(out, indent=1) + ";\n")
