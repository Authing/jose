import { promisify } from 'util'

import type { InflateFunction, DeflateFunction } from '../../types'

const inflateRaw = promisify(require('zlib').inflateRaw)
const deflateRaw = promisify(require('zlib').deflateRaw)

export const inflate: InflateFunction = (input: Uint8Array) => inflateRaw(input)
export const deflate: DeflateFunction = (input: Uint8Array) => deflateRaw(input)
