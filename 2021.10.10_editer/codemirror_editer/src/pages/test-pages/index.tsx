/* eslint-disable quotes */
import React from 'react';
import Codemirror0 from '../../components/codemirror-0/index';
import './index.scss';

const TestPages = () => {
	const mockData = `
{
	"a":1,
	"b":"xxx"
}	
	`;

	const mockDataObj = {
		port: 8080,
		exclude_from_auth: ['/login', '/check_token', '/battles:get', '/team'],
		db: {
			default_data: {
				battles: [],
				active_battle_id: null,
				admin: {},
				secret: '',
				active_tokens: [],
			},
			path: '.db.json',
		},
		default_salt_rounds: 10,
		default_admin_password: 'adminonaly',
		uws_server: {
			port: 9000,
			action_types: {
				BROADCAST: 'BROADCAST',
				CREATE_BATTLE: 'CREATE_BATTLE',
				SEND_CHALLENGE_ANSWER: 'SEND_CHALLENGE_ANSWER',
				CREATE_TEAM: 'CREATE_TEAM',
				DELETE_TEAM: 'DELETE_TEAM',
				START_BATTLE: 'START_BATTLE',
				FINISH_BATTLE: 'FINISH_BATTLE',
				DELETE_BATTLE: 'DELETE_BATTLE',
			},
			child_process_parameters: [],
		},
		http_error_messages: {
			'400': 'Your request is bad, and you should feel bad.',
			'401': "I don't know who you are, but I'll find you and login you.",
			'403': 'Here we store NASA top secret files, Forbidden.',
			'404': 'Oops! You tried to get something that does not exist in this universe.',
			'406': "It's unacceptable!!! It's all over between us.",
			'408': "This request took a century to process and didn't even finished.",
			'500': 'Our server is a little bit sad now, try again later.',
			'503': 'Our server is too tired now, try again after a short break.',
		},
		general_error_messages: {
			no_active: 'No active battle.',
			not_started: "Battle hasn't started yet.",
			started: 'Battle has already started.',
			finished: 'Battle has already finished.',
			invalid_data: 'Invalid Data.',
			no_data: 'Data is not passed.',
			not_admin:
				"Our admin has all possible, 4 incredible and 2 impossible rights, but you aren't our admin.",
			challenge_not_started: "Can't submit unbegun battle challenges.",
			admin_challenge: "Admin can't solve challenges.",
			already_solved:
				'This challenge has already been solved by your team.',
			better_solution: 'The previous vesrion of your team is better.',
			no_challenge: 'There is no challenge mentioned by you!',
			auth_fail: 'Authentication failed.',
			short_password: 'Password should be at least 6 chars long.',
		},
	};

	return (
		<div className="test-pages">
			<h1>TEST_PAGES</h1>
			<h3>0 - Codemirror初步实验</h3>
			<Codemirror0 value={mockDataObj} lang="json" />
		</div>
	);
};

export default TestPages;
