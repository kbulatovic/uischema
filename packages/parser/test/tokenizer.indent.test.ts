import Parser from '../src/Parser';
import Tokenizer from '../src/Tokenizer';
import fs from 'node:fs';
import path from 'node:path';
import Config from '../src/Config';

const testFilePath = path.resolve(
    process.cwd(),
    'packages/parser/test/testSchema.groovy'
);
const testFile = fs.readFileSync(testFilePath, { encoding: 'utf-8' });

describe('tokenizer.ts - indentation testing', () => {
    it('first line should throw if any spaces exist', () => {
        expect(() => {
            const t = new Tokenizer(
                new Parser(` Page\n    PageTitle`, { indent: 4 })
            );
            t.parseLine();
        }).toThrow();
    });

    it('should move 4 spaces right if previous was 0', () => {
        const t = new Tokenizer(
            new Parser(`Page\n    PageTitle`, { indent: 4 })
        );

        t.parseLine();
    });
});
