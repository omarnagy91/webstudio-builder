export const prompt = `The JSX and CSS above describe the following edit request:

\`\`\`
{prompt-content}
\`\`\`

Your task is to rewrite the styles to fulfill the request. Use the following rules:

- Only output a valid CSS code block and no other text.
- The CSS must be minified and therefore you must avoid indentation and new lines.
- Preserve the CSS above that does not need changes.
- For each \`className\` that needs changes generate corresponding vanilla CSS.
- Don't assume any styles are inherited and don't generate any global styles.
- Don't use CSS comments.
- Don't use shorthand CSS properties: generate CSS using longhand properties only.
- When generating colors use hex or rgb(a)
`;
