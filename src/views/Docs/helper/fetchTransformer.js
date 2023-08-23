export const fetchTransformer = (data, endpoint) => {
  const body = data?.originalRequest?.body?.raw || '{}';
  const postRequest = `

 const fetchData =()=> {
    const method = "POST";
    const url = ${endpoint}
    const body = ${body};

    const headers = {
        // Add any headers you need here
    };

    const requestOptions = {
        method,
        headers,
        body
    };

    try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        console.log(data); // Handle the response data here
    } catch (error) {
        console.error(error); // Handle any errors here
    }
}


`;

  const getRequest = `

const fetchData =()=> {
    const url = ${endpoint}
    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {}
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

`;
  const method = data?.originalRequest?.method;
  switch (method) {
    case 'POST':
      return postRequest;
    case 'GET':
      return getRequest;
    case 'PUT':
      return getRequest;
    case 'PATCH':
      return getRequest;
    case 'DELETE':
      return getRequest;

    default:
      return ``;
  }
};
