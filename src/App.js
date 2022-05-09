import React from 'react';
import Accordion from './Accordion';
import { accordionData } from './utils/content';

const App = () => {
	const [selectedID, setSelectedID] = React.useState(null);
	const [firstSelected, setFirstSeleted] = React.useState(null);

	const handleSelected = (id, expanded) => {
		if (selectedID) setFirstSeleted(id);
		setSelectedID({ id: id, expanded: expanded });
	};

	const handleExpanded = (itemID) => {
		if (itemID === selectedID?.id) {
			return !selectedID?.expanded;
		}
		return false || firstSelected === itemID;
	};

	return (
		<div>
			<h1>React Accordion Demo</h1>
			<div className="accordion">
				{accordionData.map(({ title, content }, key) => {
					const itemID = key;
					console.log({ itemID, selectedID });
					return (
						<Accordion
							key={key}
							id={itemID}
							title={title}
							content={content}
							isExpanded={handleExpanded(itemID)}
							handleSelected={handleSelected}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default App;
