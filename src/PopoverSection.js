import Popover from 'react-bootstrap/Popover';

function PopoverSection(props) {
  return (
    <>
       <Popover className="notePop">
        <Popover.Content style={{color: 'white'}}>
          <strong>{props.name}</strong>
        </Popover.Content>  
       </Popover>
    </>
  );
}

export default PopoverSection;