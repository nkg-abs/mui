const TabManager = {
	getTabPanel: (context) => {
		const { state: { tabPanels }, data } = context;

		return (
			tabPanels.map((panel) => (panel.index === data.index
				? {
					...panel,
					click: !data.click,
				}
				: panel))
		);
	},
};

export default TabManager;
