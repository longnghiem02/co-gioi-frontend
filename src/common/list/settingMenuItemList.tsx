import { SETTING_MENU_ITEM_TITLE, SETTING_TYPE, THEME_KEY, THEME_TITLE } from "../utils"


const settingMenuItemList = [
  {
    title: SETTING_MENU_ITEM_TITLE.THEME,
    type: SETTING_TYPE.THEME,
    child: [
      {
        title: THEME_TITLE.LIGHT,
        key: THEME_KEY.LIGHT
      },
      {
        title: THEME_TITLE.DARK,
        key: THEME_KEY.DARK
      }
    ]
  }
]

export default settingMenuItemList