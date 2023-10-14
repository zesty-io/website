/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Tags
 * Name: tags
 * Model ZUID: 6-5d9734-r0hk9m
 * File Created On: Fri Mar 04 2022 12:16:05 GMT-0800 (Pacific Standard Time)
 *
 * Model Fields:
 *
  * tag (text)

 *
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 *
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-5d9734-r0hk9m
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React, { useEffect, useState } from 'react';
import { SimpleHeroSolidBg } from 'blocks/heroes';
import { Result } from 'blocks/formLayouts';
import Container from 'components/Container';
import FillerContent from 'components/globals/FillerContent';

function Tag({ content }) {
  let zestyURL = content.zestyProductionMode
    ? process.env.zesty.production
    : process.env.zesty.stage;

  const [cardsData, setCardData] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  // search states
  const [searchValue, setSearchValue] = useState(null);
  const [term, setTerm] = useState('');
  const [notFound, setNotFound] = useState(false);
  const [hideLoad, setHideLoad] = useState(false);
  // current page for pagination
  let [page, setPage] = useState(0);

  const uri = `${zestyURL}/-/tag.json?tag=${content.meta.zuid}&page=${page}&limit=6`;
  // Get card data based on author zuid  on page load
  useEffect(() => {
    fetchCardsData(uri, setCardData);
  }, []);

  // fetch tagged articles
  const fetchCardsData = async (uri, setFunc) => {
    const res = await fetch(uri).then((response) => response.json());
    await setAllArticles(res);
    res && (await setFunc(res));
  };
  // search on change
  const handleOnChange = (evt) => {
    evt.preventDefault();
    // handle empty search value
    if (evt.target.value === null || evt.target.value === '') {
      setCardData(allArticles);
      setPage(0);
      setNotFound(false);
      setHideLoad(false);
    }
    setSearchValue(evt.target.value);
  };
  // form submission
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    try {
      const searchArticles = async () => {
        const url = `${zestyURL}/-/searchtaggedarticles.json?q=${searchValue}&tag=${content.meta.zuid}&page=${page}&limit=6`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        const searchData = await response.json();
        if (!searchData.length) {
          setNotFound(true);
          setCardData([]);
          setTerm(searchValue);
          return;
        }
        setHideLoad(true);
        setNotFound(false);
        setCardData(searchData);
      };
      searchArticles();
    } catch (error) {
      console.error(`Could Not Find Results: ${error}`);
    }
  };
  // load more on click
  const handleOnClick = async () => {
    try {
      setPage((page += 6));
      const url = `${zestyURL}/-/tag.json?tag=${content.meta.zuid}&page=${page}&limit=6`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      if (!data.length) {
        // add conditional rendering to hide the load more button
        setHideLoad(true);
      }
      setCardData([...cardsData, ...data]);
    } catch (error) {
      console.error(`Could Not Find Results: ${error}`);
    }
  };
  return (
    <>
      <SimpleHeroSolidBg
        title={content?.meta?.web?.seo_meta_title || FillerContent.header}
      />
      <Container paddingY={{ xs: 1, sm: 2, md: 4 }}>
        <Result
          array={cardsData}
          onChange={handleOnChange}
          value={searchValue}
          term={term}
          onSubmit={handleOnSubmit}
          notFound={notFound}
          onClick={handleOnClick}
          hideLoad={hideLoad}
        />
      </Container>
      {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
      {/* <h1
        dangerouslySetInnerHTML={{ __html: content.meta.web.seo_meta_title }}
      ></h1>
      <div>{content.meta.web.seo_meta_description}</div>
      <div
        style={{
          background: '#eee',
          border: '1px #000 solid',
          margin: '10px',
          padding: '20px',
        }}
      >
        <h2>Accessible Zesty.io JSON Object</h2>
        <pre>{JSON.stringify(content, null, 2)}</pre>
      </div> */}
      {/* End of Zesty.io output example */}
    </>
  );
}

export default Tag;
