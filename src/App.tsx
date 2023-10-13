import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { guestRoutes } from './routes/routes';

function App() {
	const [currentRoutes, setCurrentRoutes] = useState(guestRoutes);

	return (
		<Router basename="">
			<div className="App">
				<Routes>
					{currentRoutes &&
						currentRoutes.length > 0 &&
						currentRoutes.map((route, index) => {
							let Layout = route.layout;
							const Page = route.page;
							return (
								<Route
									key={index}
									path={route.path}
									element={
										<Layout>
											<Page />
										</Layout>
									}
								/>
							);
						})}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
