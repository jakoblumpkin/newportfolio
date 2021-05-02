import Card from 'react-bootstrap/Card'

function ProjectCard(props) {
  return (
  <a id="linkCard" href={props.project} target="_blank" rel="noreferrer">
    <Card id="projectCard">
      <a href={props.project} target="_blank" rel="noreferrer"><div>Completed Project</div></a>
      <a href={props.code} target="_blank" rel="noreferrer"><div>Github Code</div></a>
      <a href={props.Tech}target="_blank" rel="noreferrer"><div>Technologies Used</div></a>
    </Card>
  </a>
  );
}

export default ProjectCard;
