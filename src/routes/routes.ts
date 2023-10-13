import { PATH, CATEGORY_ITEM_PATH, MANAGE_MENU_ITEM_PATH } from '../common/utils';

// Layouts
import DefaultLayout from '../layouts/DefaultLayout';

// Pages
import Home from '../containers/pages/Home';
import Novel from '../containers/pages/Novel';
import Category from '../containers/pages/Category';
import Account from '../containers/pages/Account';
import SignIn from '../containers/Auth/Sign/SignIn';
import SignUp from '../containers/Auth/Sign/SignUp';

// Category pages
import Path from '../containers/category-pages/Path';
import Beast from '../containers/category-pages/Beast';
import BlandGheaven from '../containers/category-pages/BlandGheaven';
import Character from '../containers/category-pages/Character';
import Gu from '../containers/category-pages/Gu';
import GuFormation from '../containers/category-pages/GuFormation';
import GuHouse from '../containers/category-pages/GuHouse';
import KillerMove from '../containers/category-pages/KillerMove';
import SecludedDomain from '../containers/category-pages/SecludedDomain';
import OtherInfo from '../containers/category-pages/OtherInfo';

// Manage pages
import ManageAccount from '../containers/manage-pages/ManageAccount';
import ManagePath from '../containers/manage-pages/ManagePath';
import ManageOtherInfo from '../containers/manage-pages/ManageOtherInfo';

const guestRoutes = [
	{ path: PATH.HOME, page: Home, layout: DefaultLayout },
	{ path: PATH.NOVEL, page: Novel, layout: DefaultLayout },
	{ path: PATH.CATEGORY, page: Category, layout: DefaultLayout },
	{ path: PATH.ACCOUNT, page: Account, layout: DefaultLayout },
	{ path: PATH.SIGN_IN, page: SignIn, layout: DefaultLayout },
	{ path: PATH.SIGN_UP, page: SignUp, layout: DefaultLayout },

	{ path: CATEGORY_ITEM_PATH.BEAST, page: Beast, layout: DefaultLayout },
	{ path: CATEGORY_ITEM_PATH.BLAND_GHEAVEN, page: BlandGheaven, layout: DefaultLayout },
	{ path: CATEGORY_ITEM_PATH.CHARACTER, page: Character, layout: DefaultLayout },
	{ path: CATEGORY_ITEM_PATH.GU, page: Gu, layout: DefaultLayout },
	{ path: CATEGORY_ITEM_PATH.GU_FORMATION, page: GuFormation, layout: DefaultLayout },
	{ path: CATEGORY_ITEM_PATH.GU_HOUSE, page: GuHouse, layout: DefaultLayout },
	{ path: CATEGORY_ITEM_PATH.KILLER_MOVE, page: KillerMove, layout: DefaultLayout },
	{ path: CATEGORY_ITEM_PATH.PATH, page: Path, layout: DefaultLayout },
	{ path: CATEGORY_ITEM_PATH.SECLUDED_DOMAIN, page: SecludedDomain, layout: DefaultLayout },
	{ path: CATEGORY_ITEM_PATH.OTHER_INFO, page: OtherInfo, layout: DefaultLayout },

	{ path: MANAGE_MENU_ITEM_PATH.ACCOUNT, page: ManageAccount, layout: DefaultLayout },
	{ path: MANAGE_MENU_ITEM_PATH.PATH, page: ManagePath, layout: DefaultLayout },
	{ path: MANAGE_MENU_ITEM_PATH.OTHER_INFO, page: ManageOtherInfo, layout: DefaultLayout },
];

// const userRoutes = [
// 	...guestRoutes,
// 	{ path: PATH.ACCOUNT_INFO, page: AccountInfo, layout: DefaultLayout },
// ];

// const adminRoutes = [
// 	{ path: PATH.UNDEFINED, page: NotFound, layout: null },
// 	{ path: PATH.LOGIN, page: Login, layout: null },
// 	{ path: PATH.SIGN_UP, page: SignUp, layout: null },
// 	{ path: PATH.HOME, page: Home, layout: AdminLayout },
// 	{ path: PATH.BOOK_DETAIL, page: BookDetail, layout: AdminLayout },
// 	{ path: PATH.BOOK_FOUND, page: BooksFound, layout: AdminLayout },
// 	{ path: PATH.CHAPTER_CONTENT, page: ChapterContent, layout: AdminLayout },
// 	{ path: PATH.ACCOUNT_INFO, page: AccountInfo, layout: AdminLayout },
// 	{ path: PATH.MANAGE_BOOK, page: ManageBook, layout: AdminLayout },
// 	{ path: PATH.MANAGE_CHAPTER, page: ManageChapter, layout: AdminLayout },
// 	{ path: PATH.MANAGE_ACCOUNT, page: ManageAccount, layout: AdminLayout },
// ];

export { guestRoutes };
