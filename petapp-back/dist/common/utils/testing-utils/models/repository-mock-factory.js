"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repositoryMockFactory = void 0;
exports.repositoryMockFactory = jest.fn(() => ({
    findOne: jest.fn((entity) => entity),
    find: jest.fn((entity) => entity),
    create: jest.fn((entity) => entity),
    save: jest.fn((entity) => entity),
    merge: jest.fn((entity, partial) => (Object.assign(Object.assign({}, entity), partial))),
    update: jest.fn((entity, partial) => (Object.assign(Object.assign({}, entity), partial))),
}));
//# sourceMappingURL=repository-mock-factory.js.map