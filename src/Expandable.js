import React, { useState } from 'react';

const Expandable = ({
	header,
	body,
	isExpanded = null,
	handleSelected = null,
	id,
	isMultiselect,
}) => {
	const [uncontrolledExpand, setUncontrolledExpand] = useState(
		isExpanded !== null ? isExpanded : false
	);

	const clickHandler = () => {
		if (!isMultiselect) {
			handleSelected(id, isExpanded);
		} else {
			setUncontrolledExpand(!uncontrolledExpand);
		}
	};

	const controlledExpand = () => {
		if (!isMultiselect) {
			return isExpanded;
		} else {
			return uncontrolledExpand;
		}
	};

	return (
		<div className="accordion-item">
			<div className="accordion-title" onClick={() => clickHandler()}>
				{header}
				<div>{controlledExpand() ? '-' : '+'}</div>
			</div>
			{controlledExpand() && <div className="accordion-content">{body}</div>}
		</div>
	);
};

export default Expandable;
