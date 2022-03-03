import {createModel} from "xstate/lib/model";

const navigationModel = createModel({});

export const navigatorMachine = navigationModel.createMachine({
	context: navigationModel.initialContext,
	initial: 'mainpage',
	states: {
		mainpage: {},
		aboutme: {},
		contact: {}
	}
})