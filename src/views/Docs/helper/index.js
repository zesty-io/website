import { getCookie } from 'cookies-next';

export const langTransformer = ({ data = {}, lang = 'fetch' }) => {
  const hasFormData = data?.request?.body?.mode === 'formdata' ? true : false;
  const hasToken = data?.request?.auth?.type === 'bearer' ? true : false;

  const headers = [
    {
      key: 'Content-Type',
      value: 'application/json',
    },
  ];

  hasToken &&
    headers.push({
      key: 'Authorization',
      value: `Bearer ${getCookie('APP_SID') || 'YOUR_API_KEY'}`,
    });

  const requestFetch = `
  ${hasFormData ? `const body = new FormData();` : ''}
  ${
    hasFormData
      ? data.request.body.formdata
          .map((e) => {
            return `body.append('${e.key}', '${e.value}')\n`;
          })
          .join('  ')
      : ''
  }
  const options = {
    method: '${data.request.method}',
    headers: {
      ${headers
        .map((e) => {
          return `${e.key} : '${e.value}',\n`;
        })
        .join('      ')}
    },
    body: JSON.stringify(body),
  };
  await fetch('${data.request.url.raw}', options)
  .then(response => response.json())
  .catch(error => console.log('error', error));
  `;

  const responseData = data.response ? `${data?.response[0]?.body}` : `{}`;

  const langSwitcher = (lang) => {
    switch (lang) {
      case 'Javascript Fetch':
        return fetchRequest;
      default:
        return requestFetch;
    }
  };

  console.log(data, 343434);
  const fetchRequest = `
  const request = async () => {
  ${hasFormData ? `const body = new FormData();` : ''}
  ${
    hasFormData
      ? data.request.body.formdata
          .map((e) => {
            return `body.append('${e.key}', '${e.value}')\n`;
          })
          .join('  ')
      : ''
  }
  const endpoint = '${data.request.url.raw}'

  const res = await fetch(endpoint, {
    method: '${data.request.method}',
    headers: {
      ${headers
        .map((e) => {
          return `${e.key} : '${e.value}'\n`;
        })
        .join('      ')}
    },
    ${data.request.body ? 'body: JSON.stringify(body)' : ''}
  })
  const data = await res.json();
  return data;
}

  `;

  return { request: langSwitcher(lang), response: responseData };
};

// todo convert to recursive FN //
export const transFormMainData = (mainCollection) => {
  mainCollection = mainCollection.map((e) => {
    return {
      ...e,
      parent: `/${e?.info?.name?.split(' ')[0]?.toLowerCase()}`,
      url: `/${e?.info?.name?.split(' ')[0]?.toLowerCase()}`,
    };
  });

  // const testCollect = (data) =>{
  // const newCollection = data?.map((e) => {
  //   const res = e.item.map((q) => {
  //     return { ...q, parent: e.parent || e.name, url: e.parent + q.name };
  //   });
  //   return { ...e, item: res };
  // });

  // return newCollection

  // }
  const newCollection = mainCollection?.map((e) => {
    const res = e.item.map((q) => {
      return { ...q, parent: e.parent || e.name, url: e.parent + q.name };
    });
    return { ...e, item: res };
  });

  const newColletion1 = newCollection.map((e) => {
    const res = e.item.map((q) => {
      const res2 = q?.item?.map((w) => {
        return { ...w, parent: q.name, url: e.parent + w.name };
      });
      return { ...q, item: res2 };
    });
    return { ...e, item: res };
  });

  const result = newColletion1.map((e) => {
    const res = e.item.map((q) => {
      const res2 = q?.item?.map((w) => {
        const res3 = w?.item?.map((y) => {
          return {
            ...y,
            parent: w?.name,
            // url: e.parent + w.name,
          };
        });
        return { ...w, item: res3 };
      });
      return { ...q, item: res2 };
    });
    return { ...e, item: res };
  });
  return result;
};
