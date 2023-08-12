import { IUser } from '@/types/user';
import api from '@/utils/api';

export interface IUserBaseRegistration
  extends Pick<IUser, 'FirstName' | 'LastName' | 'Email'> {
  Password: string;
}

class RegistrationService {
  async baseRegistration(props: IUserBaseRegistration) {
    const response = await api().post('/registration-user', {
      ...props,
    });
    return response;
  }
}

export default RegistrationService;
