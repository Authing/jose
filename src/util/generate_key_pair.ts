import { generateKeyPair as generate } from '../runtime/generate.js'
import type { KeyLike } from '../types'

export interface GenerateKeyPairOptions {
  /**
   * The EC "crv" (Curve) or OKP "crv" (Subtype of Key Pair) value to generate.
   * The curve must be both supported on the runtime as well as applicable for
   * the given JWA algorithm identifier.
   */
  crv?: string

  /**
   * A hint for RSA algorithms to generate an RSA key of a given `modulusLength`
   * (Key size in bits). JOSE requires 2048 bits or larger. Default is 2048.
   */
  modulusLength?: number

  /**
   * (Web Cryptography API specific) The value to use as
   * [SubtleCrypto.generateKey()](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/generateKey)
   * `extractable` argument. Default is false.
   */
  extractable?: boolean
}

/**
 * Generates a private and a public key for a given JWA algorithm identifier.
 * This can only generate asymmetric key pairs. For symmetric secrets use the
 * `generateSecret` function.
 *
 * Note: Under Web Cryptography API runtime the `privateKey` is generated with
 * `extractable` set to `false` by default.
 *
 * @example ESM import
 * ```js
 * import { generateKeyPair } from 'jose/util/generate_key_pair'
 * ```
 *
 * @example CJS import
 * ```js
 * const { generateKeyPair } = require('jose/util/generate_key_pair')
 * ```
 *
 * @example Usage
 * ```js
 * const { publicKey, privateKey } = await generateKeyPair('PS256')
 * console.log(publicKey)
 * console.log(privateKey)
 * ```
 *
 * @param alg JWA Algorithm Identifier to be used with the generated key pair.
 * @param options Additional options passed down to the key pair generation.
 */
async function generateKeyPair(
  alg: string,
  options?: GenerateKeyPairOptions,
): Promise<{ privateKey: KeyLike; publicKey: KeyLike }> {
  // @ts-ignore
  return generate(alg, options)
}

export { generateKeyPair }
export default generateKeyPair
