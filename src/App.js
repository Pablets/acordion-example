import React from 'react';
import Accordion from './Accordion';

import { accordionData } from './utils/content';

const AccordionBody = (content) => {
	return <p style={{ color: 'white' }}>{content}</p>;
};
const AccordionHeader = (content) => {
	return <h3 style={{ color: 'white' }}>{content}</h3>;
};

const App = () => {
	const [controlled, setControlled] = React.useState(false);
	return (
		<>
			<div style={{ padding: '20px', backgroundColor: 'bisque' }}>
				<button onClick={() => setControlled(!controlled)}>
					Controlled/uncontrolled
				</button>
			</div>
			<Accordion
				data={accordionData}
				body={AccordionBody}
				header={AccordionHeader}
				isMultiselect={controlled}
			/>
		</>
	);
};

export default App;
