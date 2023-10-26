import { useSelector } from 'react-redux';
import { Props } from '../../common/utils';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import './DefaultLayout.scss';
import { selectTheme } from '../../store/app/selectors';

function DefaultLayout({ children }: Props) {
	const theme = useSelector(selectTheme);

	return (
		<div className="wrapper">
			<Header />
			<div className={`container ${theme}`}>
				<div className="content">{children}</div>
			</div>
			<Nav />
		</div>
	);
}

export default DefaultLayout;
