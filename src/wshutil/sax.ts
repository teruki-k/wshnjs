namespace WshUtil {
    export interface SaxHandler {
        startDocument(): void;
        endDocument(): void;
        startElement(uri: string, localName: string, qName: string, attributes: any): void;
        endElement(uri: string, localName: string, qName: string): void;
        characters(ch: string, start: number, length: number): void;
    }

    export class SimpleSaxHandler implements SaxHandler {
        private _path: string;
        constructor(path: string) {
            this._path = path;
        }
        getPath(): string {
            return this._path;
        }
        startDocument(): void {
        }
        endDocument(): void {
        }
        startElement(uri: string, localName: string, qName: string, attributes: any): void {
        }
        endElement(uri: string, localName: string, qName: string): void {
        }
        characters(ch: string, start: number, length: number): void {
        }
    }

    export interface SaxParser {
        parse(data: string, handler: SaxHandler);
    }

    export class SimpleSaxParser implements SaxParser {
        parse(data: string, handler: SaxHandler): void {
            handler.startDocument();
            for (let node_text of data.replace(/\s+/g, ' ').replace(/>\s*</g, '>\n<').split(/\n/)) {
                if (node_text.startsWith('<?xml')) {
                    continue;
                }
                // endElement
                let end_element_match = node_text.match(/^<\/([^ >]*) *>$/);
                if (end_element_match) {
                    handler.endElement('', end_element_match[1].trim(), '');
                    continue;
                }
                // startElement
                let start_element_match = node_text.match(/^<([^ \/>]*)(( [^ \/>=]*="[^"]*")*) *(\/)? *>$/);
                if (start_element_match) {
                    let attrs = {};
                    if (start_element_match[2]) {
                        let attrs_match = start_element_match[2].match(/([^ \/>=]*="[^"]*")/g);
                        for (let attr of attrs_match) {
                            let pair: string[] = attr.split(/=/, 2);
                            let key = pair[0];
                            let value = pair[1].substr(1, pair[1].length - 2);
                            attrs[key] = value;
                        }
                    }
                    handler.startElement('', start_element_match[1].trim(), '', attrs);
                    if (start_element_match[4] == '/') {
                        handler.endElement('', start_element_match[1].trim(), '');
                    }
                    continue;
                }
                // characters
                handler.characters(node_text, 0, node_text.length);
            }
            handler.endDocument();
        }
    }
}