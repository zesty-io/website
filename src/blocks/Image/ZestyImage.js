import FillerContent from 'components/globals/FillerContent';
import { useMemo, useState } from 'react';

/**
 *
 * @param {string} src - (required!) remote url of the image
 * @param {string} alt - (required!) alternative text of the image
 * @param {object} options - (required!) pass optimization options as key values pairs, see parameters options here -> https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation#auto-optimize-image-jpg-auto
 * @param {object} style - (optional) custom inline css style
 * @param {string} loading - {optional} options - lazy | eager
 * @param {object} attributes - (optional) any custom attributes you want to pass must be in key value pairs

 * @returns react <img/> component
 */

const ZestyImage = ({ options, src, alt, loading, style, attributes }) => {
  /* Taking the options object and converting it into a query string. */
  const { width, height } = { ...options };
  const [url, setUrl] = useState('');

  // ignore if options params is empty or not defined
  if (options) {
    useMemo(() => {
      const imageUrl = Object.entries(options).reduce(
        (acc, item, idx) => {
          const newUrl = `${acc}${idx === 0 ? '?' : '&'}${item[0]}=${item[1]}`;
          return newUrl;
        },
        src ? src : FillerContent.photos[0].src,
      );

      setUrl(imageUrl);
    }, [options]);
  }

  return (
    <img
      width={width}
      height={height}
      {...attributes}
      src={url ? url : src}
      alt={alt}
      loading={loading}
      style={style}
    />
  );
};

export default ZestyImage;
