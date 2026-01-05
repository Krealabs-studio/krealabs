## 2024-03-24 - Target Blank Vulnerability (Reverse Tabnabbing)
**Vulnerability:** Usage of `target="_blank"` without `rel="noopener noreferrer"` in external links.
**Learning:** React/Next.js applications do not automatically add this protection, leaving users vulnerable to reverse tabnabbing attacks where the new tab can manipulate the original window.
**Prevention:** Always add `rel="noopener noreferrer"` to any `<a>` tag with `target="_blank"`. A linter rule `react/jsx-no-target-blank` can automate this check.
