import axios from 'axios';
import MarkdownIt from 'markdown-it';

export const fetchMarkdownFile = async () => {
  const response = await axios.get(
    `https://raw.githubusercontent.com/zesty-io/zesty-org/master/services/web-engine/introduction-to-parsley/parsley-index.md`,
  );
  return response.data;
};

export const parseMarkdownFile = (markdown, setmdData, setnavData) => {
  const md = new MarkdownIt();
  const newMarkdown = [];
  const collection = [];

  const tokens = md.parse(markdown);

  let headingText;
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i].type === 'heading_open' && tokens[i].tag === 'h2') {
      headingText = tokens[i + 1]?.content?.trim();
      if (
        headingText ===
        'description: This index collects all Parsley syntax and methods.'
      ) {
        continue;
      }
      const id = headingText
        ?.replace(/[^\w\s]/gi, '')
        ?.replace(/\s+/g, '-')
        ?.toLowerCase();

      newMarkdown.push(
        `<${tokens[i].tag} id="${id}" style="color:#3B454E" >${headingText} <a href="#${id}" className="heading-link">#</a></${tokens[i].tag}>`,
      );

      collection.push({
        value: id,
        label: headingText,
      });
    } else {
      // remove redundant h2
      const res = collection.find((e) => e.label === tokens[i].content);
      if (tokens[i].content === 'Parsley Index') {
        newMarkdown.push(`<h1 style="color:#3B454E">${tokens[i].content}</h1>`);
      } else if (tokens[i].content !== headingText && !res) {
        const renderedToken = md.renderer.render([tokens[i]], md.options, {});
        const res = renderedToken
          .replaceAll('</h2>', '')
          .replaceAll('<hr>', '');
        newMarkdown.push(res);
      }
    }
  }

  setmdData(newMarkdown.join(''));
  const newNavData = collection.map((e) => {
    return {
      ...e,
      label: e.label.replace(/\\/g, '/').replaceAll('/', ''),
      name: e.label.replace(/\\/g, '/').replaceAll('/', ''),
      url: `/parsley/api-reference/#${e.value}`,
    };
  });
  setnavData(newNavData);
  return { pageData: newMarkdown.join(''), navData: newNavData };
};
