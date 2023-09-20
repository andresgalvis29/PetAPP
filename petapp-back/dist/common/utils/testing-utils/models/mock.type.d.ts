/// <reference types="jest" />
export declare type MockType<T> = {
    [P in keyof T]?: jest.Mock<any>;
};
