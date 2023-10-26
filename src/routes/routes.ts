import { PATH, CATEGORY_ITEM_PATH, MANAGE_MENU_ITEM_PATH, CATEGORY_ITEM_DATA_PATH } from '../common/utils';

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
import Gu from '../containers/category-pages/Gu';

//
import PathData from '../containers/category-pages/Path/PathItemData/PathData';

// Manage pages
import ManageAccount from '../containers/manage-pages/ManageAccount';
import ManagePath from '../containers/manage-pages/ManagePath';

const guestRoutes = [
	{ path: PATH.HOME, page: Home, layout: DefaultLayout },
	{ path: PATH.NOVEL, page: Novel, layout: DefaultLayout },
	{ path: PATH.CATEGORY, page: Category, layout: DefaultLayout },
	{ path: PATH.ACCOUNT, page: Account, layout: DefaultLayout },
	{ path: PATH.SIGN_IN, page: SignIn, layout: DefaultLayout },
	{ path: PATH.SIGN_UP, page: SignUp, layout: DefaultLayout },

	{ path: CATEGORY_ITEM_PATH.GU, page: Gu, layout: DefaultLayout },
	{ path: CATEGORY_ITEM_PATH.PATH, page: Path, layout: DefaultLayout },

	{ path: CATEGORY_ITEM_DATA_PATH.PATH, page: PathData, layout: DefaultLayout },

	{ path: MANAGE_MENU_ITEM_PATH.ACCOUNT, page: ManageAccount, layout: DefaultLayout },
	{ path: MANAGE_MENU_ITEM_PATH.PATH, page: ManagePath, layout: DefaultLayout },
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
