import { BigNumber } from "ethers";
import { defaultAbiCoder } from "ethers/lib/utils";
import { UserOperationBuilder } from "userop";

export async function getUserOperationBuilder(walletContract:string, nonce: BigNumber, initCode: Uint8Array, encodedCallData: string, signatures: string[]) {
    try {
        // Encode our signatures into a bytes array
        const encodedSignatues = defaultAbiCoder.encode(["bytes[]"],[signatures] );

        // Use the UserOperationBuilder class to create a new builder
        // Supply the builder with all the necessary details to create a userOp
        const builder = new UserOperationBuilder()
        .useDefaults({
            preVerificationGas: 100_00,
            callGasLimit: 100_000,
            verificationGasLimit: 2_000_000,
        })
        .setSender(walletContract)
        .setNonce(nonce)
        .setCallData(encodedCallData)
        .setSignature(encodedSignatues)
        .setInitCode(initCode);

        return builder;
    } catch (error) {
        console.error(error);
        throw error;
        
    }
}