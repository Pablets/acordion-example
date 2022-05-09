import React from 'react';

const Accordion = ({ title, content, isExpanded, handleSelected, id }) => {
	const clickHandler = () => {
		if (handleSelected) {
			handleSelected(id, isExpanded);
		}
	};

	return (
		<div className="accordion-item">
			<div className="accordion-title" onClick={() => clickHandler()}>
				<div>{title}</div>
				<div>{isExpanded ? '-' : '+'}</div>
			</div>
			{isExpanded && <div className="accordion-content">{content}</div>}
		</div>
	);
};

export default Accordion;
