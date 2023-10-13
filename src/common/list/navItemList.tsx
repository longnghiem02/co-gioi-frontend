import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBook, faList, faUser } from '@fortawesome/free-solid-svg-icons';
import { PATH, NAV_TITLE } from '../utils';

export const navItemLeft = [
	{
		icon: <FontAwesomeIcon icon={faHouse} />,
		title: NAV_TITLE.HOME,
		path: PATH.HOME,
	},
	{
		icon: <FontAwesomeIcon icon={faBook} />,
		title: NAV_TITLE.NOVEL,
		path: PATH.NOVEL,
	},
];

export const navItemRight = [
	{
		icon: <FontAwesomeIcon icon={faList} />,
		title: NAV_TITLE.CATEGORY,
		path: PATH.CATEGORY,
	},
	{
		icon: <FontAwesomeIcon icon={faUser} />,
		title: NAV_TITLE.ACCOUNT,
		path: PATH.ACCOUNT,
	},
];
