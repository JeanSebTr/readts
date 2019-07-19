// Copyright (c) 2016- readts authors, see AUTHORS.
// Released under the MIT license, see LICENSE.
import * as ts from 'typescript';

export { IdentifierSpec } from './IdentifierSpec';
export { SignatureSpec } from './SignatureSpec';
export { FunctionSpec } from './FunctionSpec';
export { EnumSpec } from './EnumSpec';
export { ClassSpec } from './ClassSpec';
export { ModuleSpec } from './ModuleSpec';
export { IndexSpec } from './IndexSpec';
export { TypeSpec, FormatHook, FormatHooks } from './TypeSpec';
export { Parser, SourcePos, RefSpec } from './Parser';
export function assertTsVersion(version: string): boolean {
    if(ts.version != version) {
        throw new Error('Typescript version mismatch with readts');
    }
    return true;
}
