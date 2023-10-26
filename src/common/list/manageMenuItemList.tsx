import { MANAGE_MENU_ITEM_PATH, MANAGE_MENU_ITEM_TITLE } from "../utils"

const manageMenuItemList = [
  {
    title: MANAGE_MENU_ITEM_TITLE.ACCOUNT,
    path: MANAGE_MENU_ITEM_PATH.ACCOUNT,
  },
  // {
  //   title: MANAGE_MENU_ITEM_TITLE.NOVEL,
  //   path: MANAGE_MENU_ITEM_PATH.NOVEL,
  // },
  {
    title: MANAGE_MENU_ITEM_TITLE.CATEGORY,
    path: MANAGE_MENU_ITEM_PATH.CATEGORY,
    child: [
      // {
      //   title: MANAGE_MENU_ITEM_TITLE.CHARACTER,
      //   path: MANAGE_MENU_ITEM_PATH.CHARACTER,
      // },
      {
        title: MANAGE_MENU_ITEM_TITLE.PATH,
        path: MANAGE_MENU_ITEM_PATH.PATH,
      },
      {
        title: MANAGE_MENU_ITEM_TITLE.GU,
        path: MANAGE_MENU_ITEM_PATH.GU,
      },
      // {
      //   title: MANAGE_MENU_ITEM_TITLE.GU_HOUSE,
      //   path: MANAGE_MENU_ITEM_PATH.GU_HOUSE,
      // },
      // {
      //   title: MANAGE_MENU_ITEM_TITLE.GU_FORMATION,
      //   path: MANAGE_MENU_ITEM_PATH.GU_FORMATION,
      // },
      // {
      //   title: MANAGE_MENU_ITEM_TITLE.KILLER_MOVE,
      //   path: MANAGE_MENU_ITEM_PATH.KILLER_MOVE,
      // },
      // {
      //   title: MANAGE_MENU_ITEM_TITLE.BEAST,
      //   path: MANAGE_MENU_ITEM_PATH.BEAST,
      // },
      // {
      //   title: MANAGE_MENU_ITEM_TITLE.BLAND_GHEAVEN,
      //   path: MANAGE_MENU_ITEM_PATH.BLAND_GHEAVEN,
      // },
      // {
      //   title: MANAGE_MENU_ITEM_TITLE.SECLUDED_DOMAIN,
      //   path: MANAGE_MENU_ITEM_PATH.SECLUDED_DOMAIN,
      // },
      // {
      //   title: MANAGE_MENU_ITEM_TITLE.OTHER_INFO,
      //   path: MANAGE_MENU_ITEM_PATH.OTHER_INFO,
      // }
    ]
  }
]

export default manageMenuItemList