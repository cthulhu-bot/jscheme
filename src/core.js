import * as inputStream from './inputStream';
import * as tokenizer from './lexer';



const input = inputStream.fileRead('./test.jsc');
const tokenizedInput = tokenizer.tokenizer(input);
