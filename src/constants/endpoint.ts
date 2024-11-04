export const endpoint = {
  // fengshui element endpoint
  GET_FENGSHUI_ELEMENT: "/fengshui-element/get-list",

  // fengshui element endpoint
  GET_FENGSHUI_DIRECTION: "/fengshui-direction/get-list",

  //Heaven earth endpoint
  GET_HEAVEN_EARTH: "/heavenly-earthly-elements/get-list",

  //App user
  GET_APP_USER_GROUP: "/app-user/get-user-group",
  GET_APP_USER_PERSONAL_FENGSHUI: "/app-user/get-user-group",
  GET_APP_USER_ROLE: "/app-user/get-user-role",
  UPDATE_APP_USER_INFO: "/app-user/update-user-info",
  GET_APP_USER_BY_USER_ID: "/app-user/get-by-id",

  //blog category endpoint
  GET_BLOG_CATEGORY: "/blog-category/get-list",

  // category endpoint
  GET_CATEGORY: "/category/get-list",
  CREATE_CATEGORY: "/category/create",

  //koi fish
  CREATE_KOI_FISH: '/koi-fish/create',
  GET_KOI_FISH: '/koi-fish/get-list',
  UPDATE_KOI_FISH: '/koi-fish/update',
  DELETE_KOI_FISH: '/koi-fish/delete',
  GET_KOI_FISH_BY_ELEMENT_NAME: '/koi-fish/get-list-by-element-name',

  //fish pond
  CREATE_FISH_POND: '/fish-pond/create',
  GET_FISH_POND: '/fish-pond/get-list',
  GET_FISH_POND_BY_CREATOR: '/fish-pond/get-list-by-creator',
  UPDATE_FISH_POND: '/fish-pond/update',
  DELETE_FISH_POND: '/fish-pond/delete',

  //advertisement
  CREATE_ADVERTISEMENT: '/advertisement/create',
  GET_ADVERTISEMENT: '/advertisement/get-list',
  GET_ADVERTISEMENT_BY_CREATOR: '/advertisement/get-list-by-creator',
  GET_ADVERTISEMENT_BY_ID: '/advertisement/get-by-id',
  GET_ADVERTISEMENT_TYPE: '/advertisement/get-list-advertisement-type',
  UPDATE_ADVERTISEMENT: '/advertisement/update',
  DELETE_ADVERTISEMENT: '/advertisement/delete',
  APPROVE_ADVERTISEMENT: '/advertisement/approve',
  DENY_ADVERTISEMENT: '/advertisement/deny',
  GET_ADVERTISEMENT_BY_STAFF: '/advertisement/get-list-by-staff',
  GET_ADVERTISEMENT_PACKAGE: '/advertisement-package/get-list',
  GET_ADS_BY_ELEMENT_OR_DIRECTION: '/advertisement/get-by-element-or-direction',

  //blog
  CREATE_BLOG: '/blog/create',
  GET_BLOG: '/blog/get-list',
  UPDATE_BLOG: '/blog/update',
  DELETE_BLOG: '/blog/delete',
  VERIFY_BLOG: '/blog/verify',

  //fengshui consultation
  GET_BASIC_CONSULTATION: '/fengshui/calculate',
  GET_AI_CONSULTATION: '/fengshui/chatgpt-calculate',
  SAVE_CONSULTATION: '/personal-fengshui/save',
  GET_USER_CONSULTATION: '/personal-fengshui/get-by-user-id',
  

  CREATE_PAYMENT: '/payos-payment/create',
}
