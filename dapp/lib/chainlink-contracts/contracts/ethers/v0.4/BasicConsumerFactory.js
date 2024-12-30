"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
class BasicConsumerFactory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_link, _oracle, _specId, overrides) {
        return super.deploy(_link, _oracle, _specId, overrides);
    }
    getDeployTransaction(_link, _oracle, _specId, overrides) {
        return super.getDeployTransaction(_link, _oracle, _specId, overrides);
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.BasicConsumerFactory = BasicConsumerFactory;
const _abi = [
    {
        constant: false,
        inputs: [
            {
                name: "_requestId",
                type: "bytes32"
            },
            {
                name: "_price",
                type: "bytes32"
            }
        ],
        name: "fulfill",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_currency",
                type: "string"
            }
        ],
        name: "requestEthereumPrice",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [],
        name: "withdrawLink",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "currentPrice",
        outputs: [
            {
                name: "",
                type: "bytes32"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_requestId",
                type: "bytes32"
            },
            {
                name: "_payment",
                type: "uint256"
            },
            {
                name: "_callbackFunctionId",
                type: "bytes4"
            },
            {
                name: "_expiration",
                type: "uint256"
            }
        ],
        name: "cancelRequest",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                name: "_link",
                type: "address"
            },
            {
                name: "_oracle",
                type: "address"
            },
            {
                name: "_specId",
                type: "bytes32"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "requestId",
                type: "bytes32"
            },
            {
                indexed: true,
                name: "price",
                type: "bytes32"
            }
        ],
        name: "RequestFulfilled",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "id",
                type: "bytes32"
            }
        ],
        name: "ChainlinkRequested",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "id",
                type: "bytes32"
            }
        ],
        name: "ChainlinkFulfilled",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "id",
                type: "bytes32"
            }
        ],
        name: "ChainlinkCancelled",
        type: "event"
    }
];
const _bytecode = "0x6080604052600160045534801561001557600080fd5b506040516060806112cc83398101604090815281516020830151919092015161004683640100000000610063810204565b61005882640100000000610085810204565b600655506100a79050565b60028054600160a060020a031916600160a060020a0392909216919091179055565b60038054600160a060020a031916600160a060020a0392909216919091179055565b611216806100b66000396000f30060806040526004361061006c5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663042f2b6581146100715780636c0cae681461008e5780638dc654a2146100e75780639d1b464a146100fc578063ec65d0f814610123575b600080fd5b34801561007d57600080fd5b5061008c600435602435610166565b005b34801561009a57600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261008c9436949293602493928401919081908401838280828437509497506102af9650505050505050565b3480156100f357600080fd5b5061008c610462565b34801561010857600080fd5b50610111610622565b60408051918252519081900360200190f35b34801561012f57600080fd5b5061008c6004356024357fffffffff0000000000000000000000000000000000000000000000000000000060443516606435610628565b600082815260056020526040902054829073ffffffffffffffffffffffffffffffffffffffff16331461022057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f536f75726365206d75737420626520746865206f7261636c65206f662074686560448201527f2072657175657374000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b60008181526005602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690555182917f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a91a2604051829084907f0c2366233f634048c0f0458060d1228fab36d00f7c0ecf6bdf2d9c458503631190600090a35060075550565b6102b761119d565b60606102e96006543063042f2b657c010000000000000000000000000000000000000000000000000000000002610634565b91506103b76040805190810160405280600381526020017f6765740000000000000000000000000000000000000000000000000000000000815250608060405190810160405280604781526020017f68747470733a2f2f6d696e2d6170692e63727970746f636f6d706172652e636f81526020017f6d2f646174612f70726963653f6673796d3d455448267473796d733d5553442c81526020017f4555522c4a5059000000000000000000000000000000000000000000000000008152508461065f9092919063ffffffff16565b60408051600180825281830190925290816020015b60608152602001906001900390816103cc579050509050828160008151811015156103f357fe5b9060200190602002018190525061044a6040805190810160405280600481526020017f7061746800000000000000000000000000000000000000000000000000000000815250828461068e9092919063ffffffff16565b61045c82670de0b6b3a7640000610701565b50505050565b600061046c610731565b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905191925073ffffffffffffffffffffffffffffffffffffffff83169163a9059cbb91339184916370a082319160248083019260209291908290030181600087803b1580156104e757600080fd5b505af11580156104fb573d6000803e3d6000fd5b505050506040513d602081101561051157600080fd5b5051604080517c010000000000000000000000000000000000000000000000000000000063ffffffff861602815273ffffffffffffffffffffffffffffffffffffffff909316600484015260248301919091525160448083019260209291908290030181600087803b15801561058657600080fd5b505af115801561059a573d6000803e3d6000fd5b505050506040513d60208110156105b057600080fd5b5051151561061f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f556e61626c6520746f207472616e736665720000000000000000000000000000604482015290519081900360640190fd5b50565b60075481565b61045c8484848461074d565b61063c61119d565b61064461119d565b6106568186868663ffffffff61088816565b95945050505050565b6080830151610674908363ffffffff6108ea16565b6080830151610689908263ffffffff6108ea16565b505050565b60808301516000906106a6908463ffffffff6108ea16565b6106b38460800151610907565b5060005b81518110156106f4576106ec82828151811015156106d157fe5b6020908102909101015160808601519063ffffffff6108ea16565b6001016106b7565b61045c8460800151610912565b6003546000906107289073ffffffffffffffffffffffffffffffffffffffff16848461091d565b90505b92915050565b60025473ffffffffffffffffffffffffffffffffffffffff1690565b60008481526005602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000008116909155905173ffffffffffffffffffffffffffffffffffffffff9091169186917fe1fe3afa0f7f761ff0a8b89086790efd5140d2907ebd5b7ff6bfcb5e075fd4c59190a2604080517f6ee4d55300000000000000000000000000000000000000000000000000000000815260048101879052602481018690527fffffffff000000000000000000000000000000000000000000000000000000008516604482015260648101849052905173ffffffffffffffffffffffffffffffffffffffff831691636ee4d55391608480830192600092919082900301818387803b15801561086957600080fd5b505af115801561087d573d6000803e3d6000fd5b505050505050505050565b61089061119d565b6108a08560800151610100610c7f565b505091835273ffffffffffffffffffffffffffffffffffffffff1660208301527fffffffff0000000000000000000000000000000000000000000000000000000016604082015290565b6108f78260038351610cb9565b610689828263ffffffff610db616565b61061f816004610dd0565b61061f816007610dd0565b600030600454604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401828152602001925050506040516020818303038152906040526040518082805190602001908083835b602083106109d157805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610994565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0180199092169116179052604080519290940182900390912060045460608a01526000818152600590925283822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8c1617905592519295508594507fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af99350919050a260025473ffffffffffffffffffffffffffffffffffffffff16634000aea08584610ac287610de9565b6040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610b62578181015183820152602001610b4a565b50505050905090810190601f168015610b8f5780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b158015610bb057600080fd5b505af1158015610bc4573d6000803e3d6000fd5b505050506040513d6020811015610bda57600080fd5b50511515610c6f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f756e61626c6520746f207472616e73666572416e6443616c6c20746f206f726160448201527f636c650000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b6004805460010190559392505050565b610c876111d2565b6020820615610c9c5760208206602003820191505b506020828101829052604080518085526000815290920101905290565b60178111610cdb57610cd58360ff848116602002168317610f9b565b50610689565b60ff8111610d0f57610cfc836018602060ff8616021763ffffffff610f9b16565b50610cd58382600163ffffffff610fb316565b61ffff8111610d4457610d31836019602060ff8616021763ffffffff610f9b16565b50610cd58382600263ffffffff610fb316565b63ffffffff8111610d7b57610d6883601a602060ff8616021763ffffffff610f9b16565b50610cd58382600463ffffffff610fb316565b67ffffffffffffffff811161068957610da383601b602060ff8616021763ffffffff610f9b16565b5061045c8382600863ffffffff610fb316565b610dbe6111d2565b61072883846000015151848551610fd4565b61068982601f602060ff8516021763ffffffff610f9b16565b8051602080830151604080850151606086810151608088015151935160006024820181815260448301829052606483018a905273ffffffffffffffffffffffffffffffffffffffff881660848401527fffffffff00000000000000000000000000000000000000000000000000000000861660a484015260c48301849052600160e48401819052610100610104850190815288516101248601528851969b7f40429946000000000000000000000000000000000000000000000000000000009b949a8b9a91999098909796939591949361014401918501908083838e5b83811015610ede578181015183820152602001610ec6565b50505050905090810190601f168015610f0b5780820380516001836020036101000a031916815260200191505b50604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909d169c909c17909b5250989950505050505050505050919050565b610fa36111d2565b61072883846000015151846110c6565b610fbb6111d2565b610fcc848560000151518585611111565b949350505050565b610fdc6111d2565b600080600085518511151515610ff157600080fd5b8760200151858801111561101b5761101b886110138a602001518a890161116f565b600202611186565b8751805188602083010194508089880111156110375788870182525b60208801935050505b6020851061108057815183527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09094019360209283019290910190611040565b505181516020949094036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018019909116931692909217909152509192915050565b6110ce6111d2565b602084015183106110ea576110ea848560200151600202611186565b8351805160208583010184815381861415611106576001820183525b509495945050505050565b6111196111d2565b6000856020015185840111156111385761113886868501600202611186565b6001836101000a03905085518386820101858319825116178152815185880111156111635784870182525b50959695505050505050565b60008183111561118057508161072b565b50919050565b81516111928383610c7f565b5061045c8382610db6565b6040805160c0810182526000808252602082018190529181018290526060810191909152608081016111cd6111d2565b905290565b604080518082019091526060815260006020820152905600a165627a7a7230582077f67df690489920c3d5197d12d48c1a89cd64a9edfeb01943204e2f815134e20029";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzaWNDb25zdW1lckZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCYXNpY0NvbnN1bWVyRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMENBQTBDO0FBQzFDLG9CQUFvQjs7QUFFcEIsbUNBQTJEO0FBUTNELE1BQWEsb0JBQXFCLFNBQVEsd0JBQWU7SUFDdkQsWUFBWSxNQUFlO1FBQ3pCLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxNQUFNLENBQ0osS0FBYSxFQUNiLE9BQWUsRUFDZixPQUFpQixFQUNqQixTQUFnQztRQUVoQyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUVyRCxDQUFDO0lBQ0osQ0FBQztJQUNELG9CQUFvQixDQUNsQixLQUFhLEVBQ2IsT0FBZSxFQUNmLE9BQWlCLEVBQ2pCLFNBQWdDO1FBRWhDLE9BQU8sS0FBSyxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFDRCxNQUFNLENBQUMsT0FBZTtRQUNwQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFrQixDQUFDO0lBQ2hELENBQUM7SUFDRCxPQUFPLENBQUMsTUFBYztRQUNwQixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUF5QixDQUFDO0lBQ3ZELENBQUM7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUNaLE9BQWUsRUFDZixnQkFBbUM7UUFFbkMsT0FBTyxJQUFJLGlCQUFRLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsQ0FBa0IsQ0FBQztJQUN4RSxDQUFDO0NBQ0Y7QUFuQ0Qsb0RBbUNDO0FBRUQsTUFBTSxJQUFJLEdBQUc7SUFDWDtRQUNFLFFBQVEsRUFBRSxLQUFLO1FBQ2YsTUFB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QUMxQixJQUFJLEVBQUUsT0FBTztLQUNkO0lBQ0Q7UUFDRSxTQUFTLEVBQUUsS0FBSztRQUNoQixNQUFNLEVBQUU7WUFDTjtnQkFDRSxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUzthQUNoQjtTQUNGO1FBQ0QsSUFBSSxFQUFFLG9CQUFvQjtRQUMxQixJQUFJLEVBQUUsT0FBTztLQUNkO0lBQ0Q7UUFDRSxTQUFTLEVBQUUsS0FBSztRQUNoQixNQUFNLEVBQUU7WUFDTjtnQkFDRSxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUzthQUNoQjtTQUNGO1FBQ0QsSUFBSSxFQUFFLG9CQUFvQjtRQUMxQixJQUFJLEVBQUUsT0FBTztLQUNkO0NBQ0YsQ0FBQztBQUVGLE1BQU0sU0FBUyxHQUNiLDQ1U0FBNDVTLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHZW5lcmF0ZWQgYnkgdHMtZ2VuZXJhdG9yIHZlci4gMC4wLjggKi9cbi8qIHRzbGludDpkaXNhYmxlICovXG5cbmltcG9ydCB7IENvbnRyYWN0LCBDb250cmFjdEZhY3RvcnksIFNpZ25lciB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcImV0aGVycy9wcm92aWRlcnNcIjtcbmltcG9ydCB7IFVuc2lnbmVkVHJhbnNhY3Rpb24gfSBmcm9tIFwiZXRoZXJzL3V0aWxzL3RyYW5zYWN0aW9uXCI7XG5pbXBvcnQgeyBBcnJheWlzaCB9IGZyb20gXCJldGhlcnMvdXRpbHNcIjtcblxuaW1wb3J0IHsgVHJhbnNhY3Rpb25PdmVycmlkZXMgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgQmFzaWNDb25zdW1lciB9IGZyb20gXCIuL0Jhc2ljQ29uc3VtZXJcIjtcblxuZXhwb3J0IGNsYXNzIEJhc2ljQ29uc3VtZXJGYWN0b3J5IGV4dGVuZHMgQ29udHJhY3RGYWN0b3J5IHtcbiAgY29uc3RydWN0b3Ioc2lnbmVyPzogU2lnbmVyKSB7XG4gICAgc3VwZXIoX2FiaSwgX2J5dGVjb2RlLCBzaWduZXIpO1xuICB9XG5cbiAgZGVwbG95KFxuICAgIF9saW5rOiBzdHJpbmcsXG4gICAgX29yYWNsZTogc3RyaW5nLFxuICAgIF9zcGVjSWQ6IEFycmF5aXNoLFxuICAgIG92ZXJyaWRlcz86IFRyYW5zYWN0aW9uT3ZlcnJpZGVzXG4gICk6IFByb21pc2U8QmFzaWNDb25zdW1lcj4ge1xuICAgIHJldHVybiBzdXBlci5kZXBsb3koX2xpbmssIF9vcmFjbGUsIF9zcGVjSWQsIG92ZXJyaWRlcykgYXMgUHJvbWlzZTxcbiAgICAgIEJhc2ljQ29uc3VtZXJcbiAgICA+O1xuICB9XG4gIGdldERlcGxveVRyYW5zYWN0aW9uKFxuICAgIF9saW5rOiBzdHJpbmcsXG4gICAgX29yYWNsZTogc3RyaW5nLFxuICAgIF9zcGVjSWQ6IEFycmF5aXNoLFxuICAgIG92ZXJyaWRlcz86IFRyYW5zYWN0aW9uT3ZlcnJpZGVzXG4gICk6IFVuc2lnbmVkVHJhbnNhY3Rpb24ge1xuICAgIHJldHVybiBzdXBlci5nZXREZXBsb3lUcmFuc2FjdGlvbihfbGluaywgX29yYWNsZSwgX3NwZWNJZCwgb3ZlcnJpZGVzKTtcbiAgfVxuICBhdHRhY2goYWRkcmVzczogc3RyaW5nKTogQmFzaWNDb25zdW1lciB7XG4gICAgcmV0dXJuIHN1cGVyLmF0dGFjaChhZGRyZXNzKSBhcyBCYXNpY0NvbnN1bWVyO1xuICB9XG4gIGNvbm5lY3Qoc2lnbmVyOiBTaWduZXIpOiBCYXNpY0NvbnN1bWVyRmFjdG9yeSB7XG4gICAgcmV0dXJuIHN1cGVyLmNvbm5lY3Qoc2lnbmVyKSBhcyBCYXNpY0NvbnN1bWVyRmFjdG9yeTtcbiAgfVxuICBzdGF0aWMgY29ubmVjdChcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgc2lnbmVyT3JQcm92aWRlcjogU2lnbmVyIHwgUHJvdmlkZXJcbiAgKTogQmFzaWNDb25zdW1lciB7XG4gICAgcmV0dXJuIG5ldyBDb250cmFjdChhZGRyZXNzLCBfYWJpLCBzaWduZXJPclByb3ZpZGVyKSBhcyBCYXNpY0NvbnN1bWVyO1xuICB9XG59XG5cbmNvbnN0IF9hYmkgPSBbXG4gIHtcbiAgICBjb25zdGFudDogZmFsc2UsXG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiX3JlcXVlc3RJZFwiLFxuICAgICAgICB0eXBlOiBcImJ5dGVzMzJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJfcHJpY2VcIixcbiAgICAgICAgdHlwZTogXCJieXRlczMyXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwiZnVsZmlsbFwiLFxuICAgIG91dHB1dHM6IFtdLFxuICAgIHBheWFibGU6IGZhbHNlLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH0sXG4gIHtcbiAgICBjb25zdGFudDogZmFsc2UsXG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiX2N1cnJlbmN5XCIsXG4gICAgICAgIHR5cGU6IFwic3RyaW5nXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwicmVxdWVzdEV0aGVyZXVtUHJpY2VcIixcbiAgICBvdXRwdXRzOiBbXSxcbiAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgY29uc3RhbnQ6IGZhbHNlLFxuICAgIGlucHV0czogW10sXG4gICAgbmFtZTogXCJ3aXRoZHJhd0xpbmtcIixcbiAgICBvdXRwdXRzOiBbXSxcbiAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgY29uc3RhbnQ6IHRydWUsXG4gICAgaW5wdXRzOiBbXSxcbiAgICBuYW1lOiBcImN1cnJlbnRQcmljZVwiLFxuICAgIG91dHB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJieXRlczMyXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIHBheWFibGU6IGZhbHNlLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH0sXG4gIHtcbiAgICBjb25zdGFudDogZmFsc2UsXG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiX3JlcXVlc3RJZFwiLFxuICAgICAgICB0eXBlOiBcImJ5dGVzMzJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJfcGF5bWVudFwiLFxuICAgICAgICB0eXBlOiBcInVpbnQyNTZcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJfY2FsbGJhY2tGdW5jdGlvbklkXCIsXG4gICAgICAgIHR5cGU6IFwiYnl0ZXM0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiX2V4cGlyYXRpb25cIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwiY2FuY2VsUmVxdWVzdFwiLFxuICAgIG91dHB1dHM6IFtdLFxuICAgIHBheWFibGU6IGZhbHNlLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJfbGlua1wiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJfb3JhY2xlXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIl9zcGVjSWRcIixcbiAgICAgICAgdHlwZTogXCJieXRlczMyXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIHBheWFibGU6IGZhbHNlLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgdHlwZTogXCJjb25zdHJ1Y3RvclwiXG4gIH0sXG4gIHtcbiAgICBhbm9ueW1vdXM6IGZhbHNlLFxuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBpbmRleGVkOiB0cnVlLFxuICAgICAgICBuYW1lOiBcInJlcXVlc3RJZFwiLFxuICAgICAgICB0eXBlOiBcImJ5dGVzMzJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcbiAgICAgICAgbmFtZTogXCJwcmljZVwiLFxuICAgICAgICB0eXBlOiBcImJ5dGVzMzJcIlxuICAgICAgfVxuICAgIF0sXG4gICAgbmFtZTogXCJSZXF1ZXN0RnVsZmlsbGVkXCIsXG4gICAgdHlwZTogXCJldmVudFwiXG4gIH0sXG4gIHtcbiAgICBhbm9ueW1vdXM6IGZhbHNlLFxuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBpbmRleGVkOiB0cnVlLFxuICAgICAgICBuYW1lOiBcImlkXCIsXG4gICAgICAgIHR5cGU6IFwiYnl0ZXMzMlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBuYW1lOiBcIkNoYWlubGlua1JlcXVlc3RlZFwiLFxuICAgIHR5cGU6IFwiZXZlbnRcIlxuICB9LFxuICB7XG4gICAgYW5vbnltb3VzOiBmYWxzZSxcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcbiAgICAgICAgbmFtZTogXCJpZFwiLFxuICAgICAgICB0eXBlOiBcImJ5dGVzMzJcIlxuICAgICAgfVxuICAgIF0sXG4gICAgbmFtZTogXCJDaGFpbmxpbmtGdWxmaWxsZWRcIixcbiAgICB0eXBlOiBcImV2ZW50XCJcbiAgfSxcbiAge1xuICAgIGFub255bW91czogZmFsc2UsXG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGluZGV4ZWQ6IHRydWUsXG4gICAgICAgIG5hbWU6IFwiaWRcIixcbiAgICAgICAgdHlwZTogXCJieXRlczMyXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwiQ2hhaW5saW5rQ2FuY2VsbGVkXCIsXG4gICAgdHlwZTogXCJldmVudFwiXG4gIH1cbl07XG5cbmNvbnN0IF9ieXRlY29kZSA9XG4gIFwiMHg2MDgwNjA0MDUyNjAwMTYwMDQ1NTM0ODAxNTYxMDAxNTU3NjAwMDgwZmQ1YjUwNjA0MDUxNjA2MDgwNjExMmNjODMzOTgxMDE2MDQwOTA4MTUyODE1MTYwMjA4MzAxNTE5MTkwOTIwMTUxNjEwMDQ2ODM2NDAxMDAwMDAwMDA2MTAwNjM4MTAyMDQ1NjViNjEwMDU4ODI2NDAxMDAwMDAwMDA2MTAwODU4MTAyMDQ1NjViNjAwNjU1NTA2MTAwYTc5MDUwNTY1YjYwMDI4MDU0NjAwMTYwYTA2MDAyMGEwMzE5MTY2MDAxNjBhMDYwMDIwYTAzOTI5MDkyMTY5MTkwOTExNzkwNTU1NjViNjAwMzgwNTQ2MDAxNjBhMDYwMDIwYTAzMTkxNjYwMDE2MGEwNjAwMjBhMDM5MjkwOTIxNjkxOTA5MTE3OTA1NTU2NWI2MTEyMTY4MDYxMDBiNjYwMDAzOTYwMDBmMzAwNjA4MDYwNDA1MjYwMDQzNjEwNjEwMDZjNTc2M2ZmZmZmZmZmN2MwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNjAwMDM1MDQxNjYzMDQyZjJiNjU4MTE0NjEwMDcxNTc4MDYzNmMwY2FlNjgxNDYxMDA4ZTU3ODA2MzhkYzY1NGEyMTQ2MTAwZTc1NzgwNjM5ZDFiNDY0YTE0NjEwMGZjNTc4MDYzZWM2NWQwZjgxNDYxMDEyMzU3NWI2MDAwODBmZDViMzQ4MDE1NjEwMDdkNTc2MDAwODBmZDViNTA2MTAwOGM2MDA0MzU2MDI0MzU2MTAxNjY1NjViMDA1YjM0ODAxNTYxMDA5YTU3NjAwMDgwZmQ1YjUwNjA0MDgwNTE2MDIwNjAwNDgwMzU4MDgyMDEzNTYwMWY4MTAxODQ5MDA0ODQwMjg1MDE4NDAxOTA5NTUyODQ4NDUyNjEwMDhjOTQzNjk0OTI5MzYwMjQ5MzkyODQwMTkxOTA4MTkwODQwMTgzODI4MDgyODQzNzUwOTQ5NzUwNjEwMmFmOTY1MDUwNTA1MDUwNTA1MDU2NWIzNDgwMTU2MTAwZjM1NzYwMDA4MGZkNWI1MDYxMDA4YzYxMDQ2MjU2NWIzNDgwMTU2MTAxMDg1NzYwMDA4MGZkNWI1MDYxMDExMTYxMDYyMjU2NWI2MDQwODA1MTkxODI1MjUxOTA4MTkwMDM2MDIwMDE5MGYzNWIzNDgwMTU2MTAxMmY1NzYwMDA4MGZkNWI1MDYxMDA4YzYwMDQzNTYwMjQzNTdmZmZmZmZmZmYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYwNDQzNTE2NjA2NDM1NjEwNjI4NTY1YjYwMDA4MjgxNTI2MDA1NjAyMDUyNjA0MDkwMjA1NDgyOTA3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYxNjMzMTQ2MTAyMjA1NzYwNDA4MDUxN2YwOGMzNzlhMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwODE1MjYwMjA2MDA0ODIwMTUyNjAyODYwMjQ4MjAxNTI3ZjUzNmY3NTcyNjM2NTIwNmQ3NTczNzQyMDYyNjUyMDc0Njg2NTIwNmY3MjYxNjM2YzY1MjA2ZjY2MjA3NDY4NjU2MDQ0ODIwMTUyN2YyMDcyNjU3MTc1NjU3Mzc0MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNjA2NDgyMDE1MjkwNTE5MDgxOTAwMzYwODQwMTkwZmQ1YjYwMDA4MTgxNTI2MDA1NjAyMDUyNjA0MDgwODIyMDgwNTQ3ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxNjkwNTU1MTgyOTE3ZjdjYzEzNWUwY2ViYjAyYzM0ODBhZTVkNzRkMzc3MjgzMTgwYTI2MDFmOGY2NDRlZGY3OTg3YjAwOTMxNmM2M2E5MWEyNjA0MDUxODI5MDg0OTA3ZjBjMjM2NjIzM2Y2MzQwNDhjMGYwNDU4MDYwZDEyMjhmYWIzNmQwMGY3YzBlY2Y2YmRmMmQ5YzQ1ODUwMzYzMTE5MDYwMDA5MGEzNTA2MDA3NTU1MDU2NWI2MTAyYjc2MTExOWQ1NjViNjA2MDYxMDJlOTYwMDY1NDMwNjMwNDJmMmI2NTdjMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyNjEwNjM0NTY1YjkxNTA2MTAzYjc2MDQwODA1MTkwODEwMTYwNDA1MjgwNjAwMzgxNTI2MDIwMDE3ZjY3NjU3NDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA4MTUyNTA2MDgwNjA0MDUxOTA4MTAxNjA0MDUyODA2MDQ3ODE1MjYwMjAwMTdmNjg3NDc0NzA3MzNhMmYyZjZkNjk2ZTJkNjE3MDY5MmU2MzcyNzk3MDc0NmY2MzZmNmQ3MDYxNzI2NTJlNjM2ZjgxNTI2MDIwMDE3ZjZkMmY2NDYxNzQ2MTJmNzA3MjY5NjM2NTNmNjY3Mzc5NmQzZDQ1NTQ0ODI2NzQ3Mzc5NmQ3MzNkNTU1MzQ0MmM4MTUyNjAyMDAxN2Y0NTU1NTIyYzRhNTA1OTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwODE1MjUwODQ2MTA2NWY5MDkyOTE5MDYzZmZmZmZmZmYxNjU2NWI2MDQwODA1MTYwMDE4MDgyNTI4MTgzMDE5MDkyNTI5MDgxNjAyMDAxNWI2MDYwODE1MjYwMjAwMTkwNjAwMTkwMDM5MDgxNjEwM2NjNTc5MDUwNTA5MDUwODI4MTYwMDA4MTUxODExMDE1MTU2MTAzZjM1N2ZlNWI5MDYwMjAwMTkwNjAyMDAyMDE4MTkwNTI1MDYxMDQ0YTYwNDA4MDUxOTA4MTAxNjA0MDUyODA2MDA0ODE1MjYwMjAwMTdmNzA2MTc0NjgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDgxNTI1MDgyODQ2MTA2OGU5MDkyOTE5MDYzZmZmZmZmZmYxNjU2NWI2MTA0NWM4MjY3MGRlMGI2YjNhNzY0MDAwMDYxMDcwMTU2NWI1MDUwNTA1MDU2NWI2MDAwNjEwNDZjNjEwNzMxNTY1YjYwNDA4MDUxN2Y3MGEwODIzMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwODE1MjMwNjAwNDgyMDE1MjkwNTE5MTkyNTA3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmY4MzE2OTE2M2E5MDU5Y2JiOTEzMzkxODQ5MTYzNzBhMDgyMzE5MTYwMjQ4MDgzMDE5MjYwMjA5MjkxOTA4MjkwMDMwMTgxNjAwMDg3ODAzYjE1ODAxNTYxMDRlNzU3NjAwMDgwZmQ1YjUwNWFmMTE1ODAxNTYxMDRmYjU3M2Q2MDAwODAzZTNkNjAwMGZkNWI1MDUwNTA1MDYwNDA1MTNkNjAyMDgxMTAxNTYxMDUxMTU3NjAwMDgwZmQ1YjUwNTE2MDQwODA1MTdjMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYzZmZmZmZmZmY4NjE2MDI4MTUyNzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmOTA5MzE2NjAwNDg0MDE1MjYwMjQ4MzAxOTE5MDkxNTI1MTYwNDQ4MDgzMDE5MjYwMjA5MjkxOTA4MjkwMDMwMTgxNjAwMDg3ODAzYjE1ODAxNTYxMDU4NjU3NjAwMDgwZmQ1YjUwNWFmMTE1ODAxNTYxMDU5YTU3M2Q2MDAwODAzZTNkNjAwMGZkNWI1MDUwNTA1MDYwNDA1MTNkNjAyMDgxMTAxNTYxMDViMDU3NjAwMDgwZmQ1YjUwNTExNTE1NjEwNjFmNTc2MDQwODA1MTdmMDhjMzc5YTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDgxNTI2MDIwNjAwNDgyMDE1MjYwMTI2MDI0ODIwMTUyN2Y1NTZlNjE2MjZjNjUyMDc0NmYyMDc0NzI2MTZlNzM2NjY1NzIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNjA0NDgyMDE1MjkwNTE5MDgxOTAwMzYwNjQwMTkwZmQ1YjUwNTY1YjYwMDc1NDgxNTY1YjYxMDQ1Yzg0ODQ4NDg0NjEwNzRkNTY1YjYxMDYzYzYxMTE5ZDU2NWI2MTA2NDQ2MTExOWQ1NjViNjEwNjU2ODE4Njg2ODY2M2ZmZmZmZmZmNjEwODg4MTY1NjViOTU5NDUwNTA1MDUwNTA1NjViNjA4MDgzMDE1MTYxMDY3NDkwODM2M2ZmZmZmZmZmNjEwOGVhMTY1NjViNjA4MDgzMDE1MTYxMDY4OTkwODI2M2ZmZmZmZmZmNjEwOGVhMTY1NjViNTA1MDUwNTY1YjYwODA4MzAxNTE2MDAwOTA2MTA2YTY5MDg0NjNmZmZmZmZmZjYxMDhlYTE2NTY1YjYxMDZiMzg0NjA4MDAxNTE2MTA5MDc1NjViNTA2MDAwNWI4MTUxODExMDE1NjEwNmY0NTc2MTA2ZWM4MjgyODE1MTgxMTAxNTE1NjEwNmQxNTdmZTViNjAyMDkwODEwMjkwOTEwMTAxNTE2MDgwODYwMTUxOTA2M2ZmZmZmZmZmNjEwOGVhMTY1NjViNjAwMTAxNjEwNmI3NTY1YjYxMDQ1Yzg0NjA4MDAxNTE2MTA5MTI1NjViNjAwMzU0NjAwMDkwNjEwNzI4OTA3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYxNjg0ODQ2MTA5MWQ1NjViOTA1MDViOTI5MTUwNTA1NjViNjAwMjU0NzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTY5MDU2NWI2MDAwODQ4MTUyNjAwNTYwMjA1MjYwNDA4MDgyMjA4MDU0N2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwODExNjkwOTE1NTkwNTE3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmY5MDkxMTY5MTg2OTE3ZmUxZmUzYWZhMGY3Zjc2MWZmMGE4Yjg5MDg2NzkwZWZkNTE0MGQyOTA3ZWJkNWI3ZmY2YmZjYjVlMDc1ZmQ0YzU5MTkwYTI2MDQwODA1MTdmNmVlNGQ1NTMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDgxNTI2MDA0ODEwMTg3OTA1MjYwMjQ4MTAxODY5MDUyN2ZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwODUxNjYwNDQ4MjAxNTI2MDY0ODEwMTg0OTA1MjkwNTE3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmY4MzE2OTE2MzZlZTRkNTUzOTE2MDg0ODA4MzAxOTI2MDAwOTI5MTkwODI5MDAzMDE4MTgzODc4MDNiMTU4MDE1NjEwODY5NTc2MDAwODBmZDViNTA1YWYxMTU4MDE1NjEwODdkNTczZDYwMDA4MDNlM2Q2MDAwZmQ1YjUwNTA1MDUwNTA1MDUwNTA1MDU2NWI2MTA4OTA2MTExOWQ1NjViNjEwOGEwODU2MDgwMDE1MTYxMDEwMDYxMGM3ZjU2NWI1MDUwOTE4MzUyNzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTY2MDIwODMwMTUyN2ZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTY2MDQwODIwMTUyOTA1NjViNjEwOGY3ODI2MDAzODM1MTYxMGNiOTU2NWI2MTA2ODk4MjgyNjNmZmZmZmZmZjYxMGRiNjE2NTY1YjYxMDYxZjgxNjAwNDYxMGRkMDU2NWI2MTA2MWY4MTYwMDc2MTBkZDA1NjViNjAwMDMwNjAwNDU0NjA0MDUxNjAyMDAxODA4MzczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjE2NzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTY2YzAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDI4MTUyNjAxNDAxODI4MTUyNjAyMDAxOTI1MDUwNTA2MDQwNTE2MDIwODE4MzAzMDM4MTUyOTA2MDQwNTI2MDQwNTE4MDgyODA1MTkwNjAyMDAxOTA4MDgzODM1YjYwMjA4MzEwNjEwOWQxNTc4MDUxODI1MjdmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlMDkwOTIwMTkxNjAyMDkxODIwMTkxMDE2MTA5OTQ1NjViNTE4MTUxNjAyMDkzODQwMzYxMDEwMDBhN2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMDE4MDE5OTA5MjE2OTExNjE3OTA1MjYwNDA4MDUxOTI5MDk0MDE4MjkwMDM5MDkxMjA2MDA0NTQ2MDYwOGEwMTUyNjAwMDgxODE1MjYwMDU5MDkyNTI4MzgyMjA4MDU0N2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTY3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmY4YzE2MTc5MDU1OTI1MTkyOTU1MDg1OTQ1MDdmYjVlNmUwMWU3OWY5MTI2N2RjMTdiNGU2MzE0ZDVkNGQwMzU5M2QyY2VlZTBmYmI0NTJiNzUwYmQ3MGVhNWFmOTkzNTA5MTkwNTBhMjYwMDI1NDczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjE2NjM0MDAwYWVhMDg1ODQ2MTBhYzI4NzYxMGRlOTU2NWI2MDQwNTE4NDYzZmZmZmZmZmYxNjdjMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyODE1MjYwMDQwMTgwODQ3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYxNjczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjE2ODE1MjYwMjAwMTgzODE1MjYwMjAwMTgwNjAyMDAxODI4MTAzODI1MjgzODE4MTUxODE1MjYwMjAwMTkxNTA4MDUxOTA2MDIwMDE5MDgwODM4MzYwMDA1YjgzODExMDE1NjEwYjYyNTc4MTgxMDE1MTgzODIwMTUyNjAyMDAxNjEwYjRhNTY1YjUwNTA1MDUwOTA1MDkwODEwMTkwNjAxZjE2ODAxNTYxMGI4ZjU3ODA4MjAzODA1MTYwMDE4MzYwMjAwMzYxMDEwMDBhMDMxOTE2ODE1MjYwMjAwMTkxNTA1YjUwOTQ1MDUwNTA1MDUwNjAyMDYwNDA1MTgwODMwMzgxNjAwMDg3ODAzYjE1ODAxNTYxMGJiMDU3NjAwMDgwZmQ1YjUwNWFmMTE1ODAxNTYxMGJjNDU3M2Q2MDAwODAzZTNkNjAwMGZkNWI1MDUwNTA1MDYwNDA1MTNkNjAyMDgxMTAxNTYxMGJkYTU3NjAwMDgwZmQ1YjUwNTExNTE1NjEwYzZmNTc2MDQwODA1MTdmMDhjMzc5YTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDgxNTI2MDIwNjAwNDgyMDE1MjYwMjM2MDI0ODIwMTUyN2Y3NTZlNjE2MjZjNjUyMDc0NmYyMDc0NzI2MTZlNzM2NjY1NzI0MTZlNjQ0MzYxNmM2YzIwNzQ2ZjIwNmY3MjYxNjA0NDgyMDE1MjdmNjM2YzY1MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYwNjQ4MjAxNTI5MDUxOTA4MTkwMDM2MDg0MDE5MGZkNWI2MDA0ODA1NDYwMDEwMTkwNTU5MzkyNTA1MDUwNTY1YjYxMGM4NzYxMTFkMjU2NWI2MDIwODIwNjE1NjEwYzljNTc2MDIwODIwNjYwMjAwMzgyMDE5MTUwNWI1MDYwMjA4MjgxMDE4MjkwNTI2MDQwODA1MTgwODU1MjYwMDA4MTUyOTA5MjAxMDE5MDUyOTA1NjViNjAxNzgxMTE2MTBjZGI1NzYxMGNkNTgzNjBmZjg0ODExNjYwMjAwMjE2ODMxNzYxMGY5YjU2NWI1MDYxMDY4OTU2NWI2MGZmODExMTYxMGQwZjU3NjEwY2ZjODM2MDE4NjAyMDYwZmY4NjE2MDIxNzYzZmZmZmZmZmY2MTBmOWIxNjU2NWI1MDYxMGNkNTgzODI2MDAxNjNmZmZmZmZmZjYxMGZiMzE2NTY1YjYxZmZmZjgxMTE2MTBkNDQ1NzYxMGQzMTgzNjAxOTYwMjA2MGZmODYxNjAyMTc2M2ZmZmZmZmZmNjEwZjliMTY1NjViNTA2MTBjZDU4MzgyNjAwMjYzZmZmZmZmZmY2MTBmYjMxNjU2NWI2M2ZmZmZmZmZmODExMTYxMGQ3YjU3NjEwZDY4ODM2MDFhNjAyMDYwZmY4NjE2MDIxNzYzZmZmZmZmZmY2MTBmOWIxNjU2NWI1MDYxMGNkNTgzODI2MDA0NjNmZmZmZmZmZjYxMGZiMzE2NTY1YjY3ZmZmZmZmZmZmZmZmZmZmZjgxMTE2MTA2ODk1NzYxMGRhMzgzNjAxYjYwMjA2MGZmODYxNjAyMTc2M2ZmZmZmZmZmNjEwZjliMTY1NjViNTA2MTA0NWM4MzgyNjAwODYzZmZmZmZmZmY2MTBmYjMxNjU2NWI2MTBkYmU2MTExZDI1NjViNjEwNzI4ODM4NDYwMDAwMTUxNTE4NDg1NTE2MTBmZDQ1NjViNjEwNjg5ODI2MDFmNjAyMDYwZmY4NTE2MDIxNzYzZmZmZmZmZmY2MTBmOWIxNjU2NWI4MDUxNjAyMDgwODMwMTUxNjA0MDgwODUwMTUxNjA2MDg2ODEwMTUxNjA4MDg4MDE1MTUxOTM1MTYwMDA2MDI0ODIwMTgxODE1MjYwNDQ4MzAxODI5MDUyNjA2NDgzMDE4YTkwNTI3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmY4ODE2NjA4NDg0MDE1MjdmZmZmZmZmZmYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDg2MTY2MGE0ODQwMTUyNjBjNDgzMDE4NDkwNTI2MDAxNjBlNDg0MDE4MTkwNTI2MTAxMDA2MTAxMDQ4NTAxOTA4MTUyODg1MTYxMDEyNDg2MDE1Mjg4NTE5NjliN2Y0MDQyOTk0NjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwOWI5NDlhOGI5YTkxOTk5MDk4OTA5Nzk2OTM5NTkxOTQ5MzYxMDE0NDAxOTE4NTAxOTA4MDgzODM4ZTViODM4MTEwMTU2MTBlZGU1NzgxODEwMTUxODM4MjAxNTI2MDIwMDE2MTBlYzY1NjViNTA1MDUwNTA5MDUwOTA4MTAxOTA2MDFmMTY4MDE1NjEwZjBiNTc4MDgyMDM4MDUxNjAwMTgzNjAyMDAzNjEwMTAwMGEwMzE5MTY4MTUyNjAyMDAxOTE1MDViNTA2MDQwODA1MTdmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlMDgxODQwMzAxODE1MjkxOTA1MjYwMjA4MTAxODA1MTdiZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYxNjdmZmZmZmZmZmYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDkwOWQxNjljOTA5YzE3OTA5YjUyNTA5ODk5NTA1MDUwNTA1MDUwNTA1MDUwNTA5MTkwNTA1NjViNjEwZmEzNjExMWQyNTY1YjYxMDcyODgzODQ2MDAwMDE1MTUxODQ2MTEwYzY1NjViNjEwZmJiNjExMWQyNTY1YjYxMGZjYzg0ODU2MDAwMDE1MTUxODU4NTYxMTExMTU2NWI5NDkzNTA1MDUwNTA1NjViNjEwZmRjNjExMWQyNTY1YjYwMDA4MDYwMDA4NTUxODUxMTE1MTUxNTYxMGZmMTU3NjAwMDgwZmQ1Yjg3NjAyMDAxNTE4NTg4MDExMTE1NjExMDFiNTc2MTEwMWI4ODYxMTAxMzhhNjAyMDAxNTE4YTg5MDE2MTExNmY1NjViNjAwMjAyNjExMTg2NTY1Yjg3NTE4MDUxODg2MDIwODMwMTAxOTQ1MDgwODk4ODAxMTExNTYxMTAzNzU3ODg4NzAxODI1MjViNjAyMDg4MDE5MzUwNTA1MDViNjAyMDg1MTA2MTEwODA1NzgxNTE4MzUyN2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmUwOTA5NDAxOTM2MDIwOTI4MzAxOTI5MDkxMDE5MDYxMTA0MDU2NWI1MDUxODE1MTYwMjA5NDkwOTQwMzYxMDEwMDBhN2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMDE4MDE5OTA5MTE2OTMxNjkyOTA5MjE3OTA5MTUyNTA5MTkyOTE1MDUwNTY1YjYxMTBjZTYxMTFkMjU2NWI2MDIwODQwMTUxODMxMDYxMTBlYTU3NjExMGVhODQ4NTYwMjAwMTUxNjAwMjAyNjExMTg2NTY1YjgzNTE4MDUxNjAyMDg1ODMwMTAxODQ4MTUzODE4NjE0MTU2MTExMDY1NzYwMDE4MjAxODM1MjViNTA5NDk1OTQ1MDUwNTA1MDUwNTY1YjYxMTExOTYxMTFkMjU2NWI2MDAwODU2MDIwMDE1MTg1ODQwMTExMTU2MTExMzg1NzYxMTEzODg2ODY4NTAxNjAwMjAyNjExMTg2NTY1YjYwMDE4MzYxMDEwMDBhMDM5MDUwODU1MTgzODY4MjAxMDE4NTgzMTk4MjUxMTYxNzgxNTI4MTUxODU4ODAxMTExNTYxMTE2MzU3ODQ4NzAxODI1MjViNTA5NTk2OTU1MDUwNTA1MDUwNTA1NjViNjAwMDgxODMxMTE1NjExMTgwNTc1MDgxNjEwNzJiNTY1YjUwOTE5MDUwNTY1YjgxNTE2MTExOTI4MzgzNjEwYzdmNTY1YjUwNjEwNDVjODM4MjYxMGRiNjU2NWI2MDQwODA1MTYwYzA4MTAxODI1MjYwMDA4MDgyNTI2MDIwODIwMTgxOTA1MjkxODEwMTgyOTA1MjYwNjA4MTAxOTE5MDkxNTI2MDgwODEwMTYxMTFjZDYxMTFkMjU2NWI5MDUyOTA1NjViNjA0MDgwNTE4MDgyMDE5MDkxNTI2MDYwODE1MjYwMDA2MDIwODIwMTUyOTA1NjAwYTE2NTYyN2E3YTcyMzA1ODIwNzdmNjdkZjY5MDQ4OTkyMGMzZDUxOTdkMTJkNDhjMWE4OWNkNjRhOWVkZmViMDE5NDMyMDRlMmY4MTUxMzRlMjAwMjlcIjtcbiJdfQ==