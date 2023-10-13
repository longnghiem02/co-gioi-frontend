import { Props } from '../../common/utils';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import './DefaultLayout.scss';

function DefaultLayout({ children }: Props) {
	return (
		<div className="wrapper">
			<Header />
			<div className="container">
				<div className="content">
					{children}
				</div>
			</div>
			<Nav />
		</div>
	);
}

export default DefaultLayout;
