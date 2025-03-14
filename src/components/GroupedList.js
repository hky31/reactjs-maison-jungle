function GroupedList({ items, groupBy }) {
	const groupedItems = items.reduce((accumulator, item) => {
		const key = item[groupBy];
		if (!accumulator[key]) {
			accumulator[key] = [];
		}
		accumulator[key].push(item);
		return accumulator;
	}, {});

	return (
		<div>
			{Object.entries(groupedItems).map(([group, itemsInGroup]) => (
				<div key={group}>
					<h3>{group}</h3>
					<ul>
						{itemsInGroup.map((item) => (
							<li key={item.id}>{item.name}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}

export default GroupedList;
s;
