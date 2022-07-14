export interface UserCreateData {
    email: string,
    name: string;
    password: string;
}


export interface UserRepository {
    create: (data: UserCreateData) => Promise<void>;
}