import React from 'react';
import {navigatorMachine} from "./machines/navigation";
import {useMachine} from "@xstate/react";
import {Mainpage} from "./componends/Mainpage";

function App() {
	const [state] = useMachine(navigatorMachine);
	return (
		<>
			{state.matches('mainpage') && <Mainpage/>}
		</>
	);
}

export default App;
