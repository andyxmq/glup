import axios from 'axios';
/**
 * @description 获取服务器列表
 * @param {*} url 
 * @param {*} params 
 */
export function loadServerList(url,params){
  return [
    {
      "name":"image_host",
      "value":["i1.go2yd.com", "i3.go2yd.com",],
      "services":[
        {
          "axe_address":"yidian/superfe/open/open_website/oppobrowser/api-oppobrowser-group_user_login/prod",
          "config_api_path": "/Website/config/global-config"
        },
        {
          "axe_address":"yidian/superfe/web/browser/www/test",
          "config_api_path": "/api/config"
        },
      ],
    },
    {
      "name":"text_host",
      "value":["Aaaaa", "i3.cccc.com",],
      "services":[
        {
          "axe_address":"yasdasd/open_website/oppobrowser/api-oppobrowser-group_user_login/prod",
          "config_api_path": "/Website/config/global-config"
        },
        {
          "axe_address":"yiasdasdwser/www/test",
          "config_api_path": "/api/config"
        },
      ],
    }
  ]
  // return axios.get(url,params);
}

