import { v4 as uuidv4 } from 'uuid';

// 游客身份长久储存
export const getUUID = () => {
  let uuid_token = localStorage.getItem('UUIDTOKEN');
  // 如果本地没有 uuid 则生成一个并存储在本地
  if (!uuid_token) {
    uuid_token = uuidv4();
    localStorage.setItem('UUIDTOKEN', uuid_token);
  }
  return uuid_token;
}