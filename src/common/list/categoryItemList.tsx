import images from '../../assets/images';
import { CATEGORY_ITEM_PATH, CATEGORY_ITEM_TITLE } from '../utils/constants';

const categoryItemList = [
	{
		icon: images.character,
		title: CATEGORY_ITEM_TITLE.CHARACTER,
		path: CATEGORY_ITEM_PATH.CHARACTER,
	},
	{
		icon: images.galaxy,
		title: CATEGORY_ITEM_TITLE.PATH,
		path: CATEGORY_ITEM_PATH.PATH,
	},
	{
		icon: images.gu,
		title: CATEGORY_ITEM_TITLE.GU,
		path: CATEGORY_ITEM_PATH.GU,
	},
	{
		icon: images.tower,
		title: CATEGORY_ITEM_TITLE.GU_HOUSE,
		path: CATEGORY_ITEM_PATH.GU_HOUSE,
	},
	{
		icon: images.abstract,
		title: CATEGORY_ITEM_TITLE.GU_FORMATION,
		path: CATEGORY_ITEM_PATH.GU_FORMATION,
	},
	{
		icon: images.hand,
		title: CATEGORY_ITEM_TITLE.KILLER_MOVE,
		path: CATEGORY_ITEM_PATH.KILLER_MOVE,
	},
	{
		icon: images.dragon,
		title: CATEGORY_ITEM_TITLE.BEAST,
		path: CATEGORY_ITEM_PATH.BEAST,
	},
	{
		icon: images.lake,
		title: CATEGORY_ITEM_TITLE.BLAND_GHEAVEN,
		path: CATEGORY_ITEM_PATH.BLAND_GHEAVEN,
	},
	{
		icon: images.portal,
		title: CATEGORY_ITEM_TITLE.SECLUDED_DOMAIN,
		path: CATEGORY_ITEM_PATH.SECLUDED_DOMAIN,
	},
	{
		icon: images.other,
		title: CATEGORY_ITEM_TITLE.OTHER_INFO,
		path: CATEGORY_ITEM_PATH.OTHER_INFO,
	},
];

export default categoryItemList;
