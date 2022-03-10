import React from 'react';
import { navigatorMachine } from './machines/navigation';
import { useMachine } from '@xstate/react';
import { Mainpage } from './componends/Mainpage';
import { Match } from './componends/Match';

function App() {
	const [state] = useMachine(navigatorMachine);
	return (
		<>
			<Match condition={state.matches('mainpage')}>
				<Mainpage />
			</Match>
		</>
	);
}

export default App;
