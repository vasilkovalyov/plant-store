import { IUser } from '@/types/user';
import api from '@/utils/api';

export interface IBaseLogin extends Pick<IUser, 'Email'> {
  Password: string;
}

class LoginService {
  async baseLogin(props: IBaseLogin) {
    const response = await api().post('/login', {
      ...props,
    });
    return response;
  }
}

export default LoginService;
