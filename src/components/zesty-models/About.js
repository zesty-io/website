function About({content}) {
  return (
    <>
      <h2 dangerouslySetInnerHTML={{__html:content.title}}></h2>
      <div dangerouslySetInnerHTML={{__html:content.content}}></div>
    </>
  );
};

export default About;
