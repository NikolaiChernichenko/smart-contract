"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
class FlagsTestHelperFactory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(flagsContract, overrides) {
        return super.deploy(flagsContract, overrides);
    }
    getDeployTransaction(flagsContract, overrides) {
        return super.getDeployTransaction(flagsContract, overrides);
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
exports.FlagsTestHelperFactory = FlagsTestHelperFactory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "flagsContract",
                type: "address"
            }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [],
        name: "flags",
        outputs: [
            {
                internalType: "contract Flags",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "subject",
                type: "address"
            }
        ],
        name: "getFlag",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "subjects",
                type: "address[]"
            }
        ],
        name: "getFlags",
        outputs: [
            {
                internalType: "bool[]",
                name: "",
                type: "bool[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    }
];
const _bytecode = "0x608060405234801561001057600080fd5b5060405161046b38038061046b8339818101604052602081101561003357600080fd5b5051600080546001600160a01b039092166001600160a01b0319909216919091179055610406806100656000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063357e47fe1461004657806364cc4aa51461008d5780637d723cac146100be575b600080fd5b6100796004803603602081101561005c57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661017e565b604080519115158252519081900360200190f35b610095610224565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61012e600480360360208110156100d457600080fd5b8101906020810181356401000000008111156100ef57600080fd5b82018360208201111561010157600080fd5b8035906020019184602083028401116401000000008311171561012357600080fd5b509092509050610240565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561016a578181015183820152602001610152565b505050509050019250505060405180910390f35b60008054604080517f357e47fe00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301529151919092169163357e47fe916024808301926020929190829003018186803b1580156101f257600080fd5b505afa158015610206573d6000803e3d6000fd5b505050506040513d602081101561021c57600080fd5b505192915050565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b6000546040517f7d723cac0000000000000000000000000000000000000000000000000000000081526020600482018181526024830185905260609373ffffffffffffffffffffffffffffffffffffffff1692637d723cac928792879290918291604401908590850280828437600081840152601f19601f820116905080830192505050935050505060006040518083038186803b1580156102e157600080fd5b505afa1580156102f5573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052602081101561033c57600080fd5b810190808051604051939291908464010000000082111561035c57600080fd5b90830190602082018581111561037157600080fd5b825186602082028301116401000000008211171561038e57600080fd5b82525081516020918201928201910280838360005b838110156103bb5781810151838201526020016103a3565b5050505090500160405250505090509291505056fea2646970667358221220aee60bb21bc6c8db914992ebdad65e06c5be142dd98556df510abf6b58c393e764736f6c63430006060033";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhZ3NUZXN0SGVscGVyRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZsYWdzVGVzdEhlbHBlckZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBDQUEwQztBQUMxQyxvQkFBb0I7O0FBRXBCLG1DQUEyRDtBQU8zRCxNQUFhLHNCQUF1QixTQUFRLHdCQUFlO0lBQ3pELFlBQVksTUFBZTtRQUN6QixLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsTUFBTSxDQUNKLGFBQXFCLEVBQ3JCLFNBQWdDO1FBRWhDLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUE2QixDQUFDO0lBQzVFLENBQUM7SUFDRCxvQkFBb0IsQ0FDbEIsYUFBcUIsRUFDckIsU0FBZ0M7UUFFaEMsT0FBTyxLQUFLLENBQUMsb0JBQW9CLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFDRCxNQUFNLENBQUMsT0FBZTtRQUNwQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFvQixDQUFDO0lBQ2xELENBQUM7SUFDRCxPQUFPLENBQUMsTUFBYztRQUNwQixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUEyQixDQUFDO0lBQ3pELENBQUM7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUNaLE9BQWUsRUFDZixnQkFBbUM7UUFFbkMsT0FBTyxJQUFJLGlCQUFRLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsQ0FBb0IsQ0FBQztJQUMxRSxDQUFDO0NBQ0Y7QUE3QkQsd0RBNkJDO0FBRUQsTUFBTSxJQUFJLEdBQUc7SUFDWDtRQUNFLE1BQU0sRUFBRTtZQUNOO2dCQUNFLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsZUFBZTtnQkFDckIsSUFBSSxFQUFFLFNBQVM7YUFDaEI7U0FDRjtRQUNELGVBQWUsRUFBRSxZQUFZO1FBQzdCLElBQUksRUFBRSxhQUFhO0tBQ3BCO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsRUFBRTtRQUNWLElBQUksRUFBRSxPQUFPO1FBQ2IsT0FBTyxFQUFFO1lBQ1A7Z0JBQ0UsWUFBWSxFQUFFLGdCQUFnQjtnQkFDOUIsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFNBQVM7YUFDaEI7U0FDRjtRQUNELGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLElBQUksRUFBRSxVQUFVO0tBQ2pCO0lBQ0Q7UUFDRSxNQUFNLEVBQUU7WUFDTjtnQkFDRSxZQUFZLEVBQUUsU0FBUztnQkFDdkIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsSUFBSSxFQUFFLFNBQVM7YUFDaEI7U0FDRjtRQUNELElBQUksRUFBRSxTQUFTO1FBQ2YsT0FBTyxFQUFFO1lBQ1A7Z0JBQ0UsWUFBWSxFQUFFLE1BQU07Z0JBQ3BCLElBQUksRUFBRSxFQUFFO2dCQUNSLElBQUksRUFBRSxNQUFNO2FBQ2I7U0FDRjtRQUNELGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLElBQUksRUFBRSxVQUFVO0tBQ2pCO0lBQ0Q7UUFDRSxNQUFNLEVBQUU7WUFDTjtnQkFDRSxZQUFZLEVBQUUsV0FBVztnQkFDekIsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLElBQUksRUFBRSxXQUFXO2FBQ2xCO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsVUFBVTtRQUNoQixPQUFPLEVBQUU7WUFDUDtnQkFDRSxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFFBQVE7YUFDZjtTQUNGO1FBQ0QsZUFBZSxFQUFFLE1BQU07UUFDdkIsSUFBSSxFQUFFLFVBQVU7S0FDakI7Q0FDRixDQUFDO0FBRUYsTUFBTSxTQUFTLEdBQ2IsMHRFQUEwdEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdlbmVyYXRlZCBieSB0cy1nZW5lcmF0b3IgdmVyLiAwLjAuOCAqL1xuLyogdHNsaW50OmRpc2FibGUgKi9cblxuaW1wb3J0IHsgQ29udHJhY3QsIENvbnRyYWN0RmFjdG9yeSwgU2lnbmVyIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwiZXRoZXJzL3Byb3ZpZGVyc1wiO1xuaW1wb3J0IHsgVW5zaWduZWRUcmFuc2FjdGlvbiB9IGZyb20gXCJldGhlcnMvdXRpbHMvdHJhbnNhY3Rpb25cIjtcblxuaW1wb3J0IHsgVHJhbnNhY3Rpb25PdmVycmlkZXMgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgRmxhZ3NUZXN0SGVscGVyIH0gZnJvbSBcIi4vRmxhZ3NUZXN0SGVscGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBGbGFnc1Rlc3RIZWxwZXJGYWN0b3J5IGV4dGVuZHMgQ29udHJhY3RGYWN0b3J5IHtcbiAgY29uc3RydWN0b3Ioc2lnbmVyPzogU2lnbmVyKSB7XG4gICAgc3VwZXIoX2FiaSwgX2J5dGVjb2RlLCBzaWduZXIpO1xuICB9XG5cbiAgZGVwbG95KFxuICAgIGZsYWdzQ29udHJhY3Q6IHN0cmluZyxcbiAgICBvdmVycmlkZXM/OiBUcmFuc2FjdGlvbk92ZXJyaWRlc1xuICApOiBQcm9taXNlPEZsYWdzVGVzdEhlbHBlcj4ge1xuICAgIHJldHVybiBzdXBlci5kZXBsb3koZmxhZ3NDb250cmFjdCwgb3ZlcnJpZGVzKSBhcyBQcm9taXNlPEZsYWdzVGVzdEhlbHBlcj47XG4gIH1cbiAgZ2V0RGVwbG95VHJhbnNhY3Rpb24oXG4gICAgZmxhZ3NDb250cmFjdDogc3RyaW5nLFxuICAgIG92ZXJyaWRlcz86IFRyYW5zYWN0aW9uT3ZlcnJpZGVzXG4gICk6IFVuc2lnbmVkVHJhbnNhY3Rpb24ge1xuICAgIHJldHVybiBzdXBlci5nZXREZXBsb3lUcmFuc2FjdGlvbihmbGFnc0NvbnRyYWN0LCBvdmVycmlkZXMpO1xuICB9XG4gIGF0dGFjaChhZGRyZXNzOiBzdHJpbmcpOiBGbGFnc1Rlc3RIZWxwZXIge1xuICAgIHJldHVybiBzdXBlci5hdHRhY2goYWRkcmVzcykgYXMgRmxhZ3NUZXN0SGVscGVyO1xuICB9XG4gIGNvbm5lY3Qoc2lnbmVyOiBTaWduZXIpOiBGbGFnc1Rlc3RIZWxwZXJGYWN0b3J5IHtcbiAgICByZXR1cm4gc3VwZXIuY29ubmVjdChzaWduZXIpIGFzIEZsYWdzVGVzdEhlbHBlckZhY3Rvcnk7XG4gIH1cbiAgc3RhdGljIGNvbm5lY3QoXG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIHNpZ25lck9yUHJvdmlkZXI6IFNpZ25lciB8IFByb3ZpZGVyXG4gICk6IEZsYWdzVGVzdEhlbHBlciB7XG4gICAgcmV0dXJuIG5ldyBDb250cmFjdChhZGRyZXNzLCBfYWJpLCBzaWduZXJPclByb3ZpZGVyKSBhcyBGbGFnc1Rlc3RIZWxwZXI7XG4gIH1cbn1cblxuY29uc3QgX2FiaSA9IFtcbiAge1xuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLFxuICAgICAgICBuYW1lOiBcImZsYWdzQ29udHJhY3RcIixcbiAgICAgICAgdHlwZTogXCJhZGRyZXNzXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgdHlwZTogXCJjb25zdHJ1Y3RvclwiXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtdLFxuICAgIG5hbWU6IFwiZmxhZ3NcIixcbiAgICBvdXRwdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJjb250cmFjdCBGbGFnc1wiLFxuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIlxuICAgICAgfVxuICAgIF0sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgfSxcbiAge1xuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLFxuICAgICAgICBuYW1lOiBcInN1YmplY3RcIixcbiAgICAgICAgdHlwZTogXCJhZGRyZXNzXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwiZ2V0RmxhZ1wiLFxuICAgIG91dHB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImJvb2xcIixcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJib29sXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NbXVwiLFxuICAgICAgICBuYW1lOiBcInN1YmplY3RzXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1tdXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwiZ2V0RmxhZ3NcIixcbiAgICBvdXRwdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJib29sW11cIixcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJib29sW11cIlxuICAgICAgfVxuICAgIF0sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgfVxuXTtcblxuY29uc3QgX2J5dGVjb2RlID1cbiAgXCIweDYwODA2MDQwNTIzNDgwMTU2MTAwMTA1NzYwMDA4MGZkNWI1MDYwNDA1MTYxMDQ2YjM4MDM4MDYxMDQ2YjgzMzk4MTgxMDE2MDQwNTI2MDIwODExMDE1NjEwMDMzNTc2MDAwODBmZDViNTA1MTYwMDA4MDU0NjAwMTYwMDE2MGEwMWIwMzkwOTIxNjYwMDE2MDAxNjBhMDFiMDMxOTkwOTIxNjkxOTA5MTE3OTA1NTYxMDQwNjgwNjEwMDY1NjAwMDM5NjAwMGYzZmU2MDgwNjA0MDUyMzQ4MDE1NjEwMDEwNTc2MDAwODBmZDViNTA2MDA0MzYxMDYxMDA0MTU3NjAwMDM1NjBlMDFjODA2MzM1N2U0N2ZlMTQ2MTAwNDY1NzgwNjM2NGNjNGFhNTE0NjEwMDhkNTc4MDYzN2Q3MjNjYWMxNDYxMDBiZTU3NWI2MDAwODBmZDViNjEwMDc5NjAwNDgwMzYwMzYwMjA4MTEwMTU2MTAwNWM1NzYwMDA4MGZkNWI1MDM1NzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTY2MTAxN2U1NjViNjA0MDgwNTE5MTE1MTU4MjUyNTE5MDgxOTAwMzYwMjAwMTkwZjM1YjYxMDA5NTYxMDIyNDU2NWI2MDQwODA1MTczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjkwOTIxNjgyNTI1MTkwODE5MDAzNjAyMDAxOTBmMzViNjEwMTJlNjAwNDgwMzYwMzYwMjA4MTEwMTU2MTAwZDQ1NzYwMDA4MGZkNWI4MTAxOTA2MDIwODEwMTgxMzU2NDAxMDAwMDAwMDA4MTExMTU2MTAwZWY1NzYwMDA4MGZkNWI4MjAxODM2MDIwODIwMTExMTU2MTAxMDE1NzYwMDA4MGZkNWI4MDM1OTA2MDIwMDE5MTg0NjAyMDgzMDI4NDAxMTE2NDAxMDAwMDAwMDA4MzExMTcxNTYxMDEyMzU3NjAwMDgwZmQ1YjUwOTA5MjUwOTA1MDYxMDI0MDU2NWI2MDQwODA1MTYwMjA4MDgyNTI4MzUxODE4MzAxNTI4MzUxOTE5MjgzOTI5MDgzMDE5MTg1ODEwMTkxMDI4MDgzODM2MDAwNWI4MzgxMTAxNTYxMDE2YTU3ODE4MTAxNTE4MzgyMDE1MjYwMjAwMTYxMDE1MjU2NWI1MDUwNTA1MDkwNTAwMTkyNTA1MDUwNjA0MDUxODA5MTAzOTBmMzViNjAwMDgwNTQ2MDQwODA1MTdmMzU3ZTQ3ZmUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDgxNTI3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmY4NTgxMTY2MDA0ODMwMTUyOTE1MTkxOTA5MjE2OTE2MzM1N2U0N2ZlOTE2MDI0ODA4MzAxOTI2MDIwOTI5MTkwODI5MDAzMDE4MTg2ODAzYjE1ODAxNTYxMDFmMjU3NjAwMDgwZmQ1YjUwNWFmYTE1ODAxNTYxMDIwNjU3M2Q2MDAwODAzZTNkNjAwMGZkNWI1MDUwNTA1MDYwNDA1MTNkNjAyMDgxMTAxNTYxMDIxYzU3NjAwMDgwZmQ1YjUwNTE5MjkxNTA1MDU2NWI2MDAwNTQ3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYxNjgxNTY1YjYwMDA1NDYwNDA1MTdmN2Q3MjNjYWMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDgxNTI2MDIwNjAwNDgyMDE4MTgxNTI2MDI0ODMwMTg1OTA1MjYwNjA5MzczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjE2OTI2MzdkNzIzY2FjOTI4NzkyODc5MjkwOTE4MjkxNjA0NDAxOTA4NTkwODUwMjgwODI4NDM3NjAwMDgxODQwMTUyNjAxZjE5NjAxZjgyMDExNjkwNTA4MDgzMDE5MjUwNTA1MDkzNTA1MDUwNTA2MDAwNjA0MDUxODA4MzAzODE4NjgwM2IxNTgwMTU2MTAyZTE1NzYwMDA4MGZkNWI1MDVhZmExNTgwMTU2MTAyZjU1NzNkNjAwMDgwM2UzZDYwMDBmZDViNTA1MDUwNTA2MDQwNTEzZDYwMDA4MjNlNjAxZjNkOTA4MTAxN2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmUwMTY4MjAxNjA0MDUyNjAyMDgxMTAxNTYxMDMzYzU3NjAwMDgwZmQ1YjgxMDE5MDgwODA1MTYwNDA1MTkzOTI5MTkwODQ2NDAxMDAwMDAwMDA4MjExMTU2MTAzNWM1NzYwMDA4MGZkNWI5MDgzMDE5MDYwMjA4MjAxODU4MTExMTU2MTAzNzE1NzYwMDA4MGZkNWI4MjUxODY2MDIwODIwMjgzMDExMTY0MDEwMDAwMDAwMDgyMTExNzE1NjEwMzhlNTc2MDAwODBmZDViODI1MjUwODE1MTYwMjA5MTgyMDE5MjgyMDE5MTAyODA4MzgzNjAwMDViODM4MTEwMTU2MTAzYmI1NzgxODEwMTUxODM4MjAxNTI2MDIwMDE2MTAzYTM1NjViNTA1MDUwNTA5MDUwMDE2MDQwNTI1MDUwNTA5MDUwOTI5MTUwNTA1NmZlYTI2NDY5NzA2NjczNTgyMjEyMjBhZWU2MGJiMjFiYzZjOGRiOTE0OTkyZWJkYWQ2NWUwNmM1YmUxNDJkZDk4NTU2ZGY1MTBhYmY2YjU4YzM5M2U3NjQ3MzZmNmM2MzQzMDAwNjA2MDAzM1wiO1xuIl19