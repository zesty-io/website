import axios from 'axios';
import MarkdownIt from 'markdown-it';
import { transformText } from 'utils/product';

export const fetchMarkdownFile = async ({ mdUrl }) => {
  const response = await axios.get(mdUrl);
  return response.data;
};

export const parseMarkdownFile = ({
  markdown,
  tags = ['h2'],
  parentURL,
  title,
  isDocsPage = true,
}) => {
  const md = new MarkdownIt();
  const newMarkdown = [];
  const collection = [];
  const blockquoteTags = ['blockquote']; // Tags to detect as blockquotes

  const tokens = md.parse(markdown);

  let headingText;
  for (let i = 0; i < tokens.length; i++) {
    const checkTags = tags.find((e) => e === tokens[i].tag);
    // remove description
    const findDesc =
      tokens[i].content.includes('description') && isDocsPage ? true : false;
    if (findDesc) {
      continue;
    }

    if (tokens[i].type === 'heading_open' && checkTags) {
      headingText = tokens[i + 1]?.content?.trim();
      // remove description
      if (headingText.includes('description') && isDocsPage) {
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

    // Check for blockquote tags
    if (
      tokens[i].type === 'blockquote_open' &&
      blockquoteTags.includes(tokens[i].tag)
    ) {
      let blockquoteContent = '';

      // Extract blockquote content
      while (i < tokens.length && tokens[i].type !== 'blockquote_close') {
        blockquoteContent += tokens[i].content;
        i++;
      }

      // Wrap blockquote content with <blockquote> tags
      const wrappedBlockquote = `<blockquote style="background:#e7e7e7;padding:10px;borderLeft:2px #ccc solid">${blockquoteContent}</blockquote>`;
      newMarkdown.push(wrappedBlockquote);
    }
  }

  const newNavData = collection.map((e) => {
    return {
      ...e,
      label: e.label.replace(/\\/g, '/').replaceAll('/', ''),
      name: e.label.replace(/\\/g, '/').replaceAll('/', ''),
      url: `${parentURL}#${e.value}`,
      href: `#${transformText(e.label)}`,
      originalName: e.label,
    };
  });
  const newPageData = appendImageStyle(newMarkdown.join(''));
  return { pageData: newPageData, navData: newNavData };
};

function appendImageStyle(string) {
  var imgTagRegex = /<img([^>]+)>/g;
  var result = string.replace(imgTagRegex, function (match, imgTag) {
    var modifiedTag = imgTag.trim();
    if (modifiedTag.charAt(modifiedTag.length - 1) === '/') {
      modifiedTag = modifiedTag.slice(0, -1); // Remove closing slash if present
    }
    modifiedTag += ' style="width:100%">';
    return '<img ' + modifiedTag + '';
  });
  return result;
}

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
