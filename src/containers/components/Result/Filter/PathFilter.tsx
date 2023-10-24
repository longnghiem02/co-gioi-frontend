import React, { useEffect, useState } from 'react';
import { getAllPathNameService } from '../../../../services/path/path.service';

function PathFilter() {
	const [pathOption, setPathOption] = useState([])
	const getAllPathName = async () => {
		const allPathName = await getAllPathNameService()
		setPathOption(allPathName)
	}

	useEffect(() => {
		getAllPathName()
	}, []);

	return (
		<div className="option">
			<option>
				{pathOption && pathOption.length > 0 &&
				pathOption.map((item, index) => {
					return (
						<select className="select" key={index}>{item}</select>
					)
				})
				}
			</option>
		</div>
	);
}

export default PathFilter;
