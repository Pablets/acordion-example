import React from 'react';
import Expandable from './Expandable';

const Accordion = ({ data, isMultiselect = false, header, body }) => {
	const [selectedID, setSelectedID] = React.useState(null);
	const [firstSelected, setFirstSelected] = React.useState(null);

	const handleSelected = (id, expanded) => {
		if (selectedID === null) {
			setFirstSelected(id);
		} else {
			setFirstSelected(null);
		}
		setSelectedID({ id: id, expanded: expanded });
	};

	const handleExpanded = (itemID) => {
		if (selectedID === null && firstSelected === null) {
			return firstSelected === itemID || false;
		}
		if (itemID === selectedID?.id) {
			return !selectedID?.expanded || false;
		}
	};

	return (
		<div>
			<h2>React {isMultiselect ? 'uncontrolled' : 'controlled'} Accordion</h2>
			<div className="accordion">
				{data.map(({ title, content }, key) => {
					return (
						<Expandable
							key={key}
							id={key}
							header={header(title)}
							body={body(content)}
							isMultiselect={isMultiselect}
							isExpanded={handleExpanded(key)}
							handleSelected={handleSelected}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Accordion;
