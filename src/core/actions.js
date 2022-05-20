const actions = {
	setView: ({ state: { view }}) => ({
		view: view === 'plot' ? 'table' : 'plot',
	}),
};

export default actions;
