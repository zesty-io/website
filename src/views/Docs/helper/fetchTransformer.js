const protocol = 'https';
const instance_zuid = 'xxxxxxxxxxxxxxxxxxxxxxxxxx';
const instances_api_url = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';
const instances_api_version = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';

export const fetchTransformer = (data, endpoint) => {
  console.log(endpoint, 666);
  const postRequest = `

 const fetchData =()=> {
    const method = "POST";
    const url = ${endpoint}
    const body = JSON.stringify({
        type: "external",
        parentZUID: "{{item_zuid}}",
        label: "New External Link",
        metaTitle: "New External Link",
        target: "https://your.external.link"
    });

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

  console.log(data, 44);
  const method = data?.originalRequest?.method;
  switch (method) {
    case 'POST':
      return postRequest;

    default:
      return ``;
  }
};
