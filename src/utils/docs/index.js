import axios from 'axios';
import MarkdownIt from 'markdown-it';

export const fetchMarkdownFile = async ({ mdUrl }) => {
  const response = await axios.get(mdUrl);
  return response.data;
};

export const parseMarkdownFile = ({
  markdown,
  tags = ['h2'],
  parentURL,
  title,
  removeData,
}) => {
  const md = new MarkdownIt();
  const newMarkdown = [];
  const collection = [];

  const tokens = md.parse(markdown);

  let headingText;
  for (let i = 0; i < tokens.length; i++) {
    const checkTags = tags.find((e) => e === tokens[i].tag);
    // remove description
    const findDesc = removeData.find((e) => e === tokens[i].content);
    if (findDesc) {
      continue;
    }

    if (tokens[i].type === 'heading_open' && checkTags) {
      headingText = tokens[i + 1]?.content?.trim();
      // remove description
      if (removeData.find((e) => e === headingText)) {
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
      if (tokens[i].content === title) {
        newMarkdown.push(`<h1 style="color:#3B454E">${tokens[i].content}</h1>`);
      } else if (tokens[i].content !== headingText && !res) {
        let renderedToken = md.renderer.render([tokens[i]], md.options, {});
        for (let i = 0; i < tags.length; i++) {
          renderedToken = renderedToken.replaceAll(`</${tags[i]}>`, '');
        }
        const res = renderedToken.replaceAll('<hr>', '');
        newMarkdown.push(res);
      }
    }
  }

  const newNavData = collection.map((e) => {
    return {
      ...e,
      label: e.label.replace(/\\/g, '/').replaceAll('/', ''),
      name: e.label.replace(/\\/g, '/').replaceAll('/', ''),
      url: `${parentURL}#${e.value}`,
    };
  });
  return { pageData: newMarkdown.join(''), navData: newNavData };
};

export const PARSLEY_EXAMPLE_DATA = `<!-- access in the example_page template -->
{{this.title}}
{{this.description}}
{{this.html}}
{{this.image}}
{{this.multiple_images}}
{{this.date}}
{{this.dropdown}}
{{this.number}}

<!-- access outside of the example_page template -->
title: {{example_data.first().title}}
description: {{example_data.first().description.escapeForJS()}}
html: {{example_data.first().html.escapeForJS()}}
image: {{example_data.first().image}}
multiple_images: {{example_data.first().images}}
date: {{example_data.first().date}}
dropdown: {{example_data.first().dropdown}}
number: {{example_data.first().number}}
file: {{example_data.first().files}}
markdown: {{example_data.first().markdown.escapeForJS()}}
email: {{example_data.first().email}}
entity_code: {{example_data.first().entity_code}}
many_relationships: {{example_data.first().many_relationships}}
json_object: {{example_data.first().json_object}},
master_zuid: {{example_data.first().master_zuid}}
parent_zuid: {{example_data.first().parent_zuid}}
set_zuid: {{example_data.first().set_zuid}}
zuid: {{example_data.first().zuid}}
publish_at: {{example_data.first().publish_date}}
seo_meta_title: {{example_data.first().seo_meta_title.escapeForJS()}}
seo_meta_description: {{example_data.first().seo_meta_description.escapeForJS()}}
seo_meta_keywords: {{example_data.first().seo_meta_keywords}}`;
