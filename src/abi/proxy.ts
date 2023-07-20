import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './proxy.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const functions = {
    getFunctionImplementation: new Func<[selector: string], {selector: string}, string>(
        abi, '0x972fdd26'
    ),
}

export class Contract extends ContractBase {

    getFunctionImplementation(selector: string): Promise<string> {
        return this.eth_call(functions.getFunctionImplementation, [selector])
    }
}
