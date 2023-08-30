export const fetchTransformer = (data, endpoint) => {
  const body = data?.originalRequest?.body?.raw || '{}';
  const postRequest = `

 const fetchData = async ()=> {
    const method = "POST";
    const url = "${endpoint}"
    const body = ${body};

    const headers: {
          'Content-Type': 'application/json', 
        },
    const requestOptions = {
        method,
        headers,
        body
    };

    const response = await fetch(url, requestOptions);
    return  await response.json();
}

`;

  const getRequest = `
  const fetchData = async () => {
    const url = "${endpoint}"
    const method = 'GET';

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  };

`;

  const deleteRequest = `

  const deleteLink = async () => {
    const url = "${endpoint}"
    const method = 'DELETE';
    await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

`;

  const putRequest = `

  const updateLink = async () => {
    const url = "${endpoint}"
    const method = 'PUT';
    const body = ${body}

    await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });
  };

`;

  const method = data?.originalRequest?.method;
  switch (method) {
    case 'POST':
      return postRequest;
    case 'GET':
      return getRequest;
    case 'PUT':
      return putRequest;
    case 'PATCH':
      return putRequest;
    case 'DELETE':
      return deleteRequest;

    default:
      return ``;
  }
};
