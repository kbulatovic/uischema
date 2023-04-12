import Parser from '../src/Parser';
import Tokenizer from '../src/Tokenizer';
import fs from 'node:fs';
import path from 'node:path';
import Config from '../src/Config';

const testFilePath = path.resolve(process.cwd(), 'packages/parser/test/testSchema.groovy');

const schemaInv1 = `
Page
    PageTitle
    PageTite
    PageTite
    PageTite
        PageTite
    PageTite
        PageTite
            PageTite
    PageTite
`;

const schemaInv2 = `
    Page
PageTitle
    PageTite
    PageTite
    PageTite
        PageTite
    PageTite
        PageTite
            PageTite
    PageTite
`;

describe('tokenizer.ts - indentation testing', () => {
    it('should throw Syntax error if indentation is invalid ', () => {
        expect(() => {
            const t = new Tokenizer(new Parser(schemaInv1));
            t.readLine();
        }).toThrow();

        expect(() => {
            const t = new Tokenizer(new Parser(schemaInv2));
            t.readLine();
        }).toThrow();
    });
});
