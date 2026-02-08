# 摘要
Transaction Digest : 93Ae7st556pNmmt48U5iAGgAe9VdHr7CGZH14vBDM4DU

# 包地址
PackageID: 0x508df96194cf2449cc6a97e23cf270dd648cb9149215a6f03f88c13abef152cc

# 包内模块
Modules: hcsc, hcsc_v1

# 共享对象id AnalysisCenter

ObjectID: 0x43730530a28dc51baabc5911e30cf50d231b7eb020d4a2edc6a4c491be022fde

ObjectType: 0x508df96194cf2449cc6a97e23cf270dd648cb9149215a6f03f88c13abef152cc::hcsc_v1::AnalysisCenter<0x508df96194cf2449cc6a97e23cf270dd648cb9149215a6f03f88c13abef152cc::hcsc_v1::LabReport>  │

## sdk中需要调用方法1 user_register
下面为参数
public entry fun user_register(
analysis_center: &mut AnalysisCenter<LabReport>,
name: String,
age: u64,
gender: String,
ctx: &mut TxContext // 不用传的参数
)

# sdk中需要调用方法2 create_lab_report
下面为参数
public entry fun create_lab_report(
name: String,
wbc: u64,
rbc: u64,
platelets: u64,
crp: u64,
analysis_center: &mut AnalysisCenter<LabReport>,  // 传共享对象地址
ctx: &mut TxContext // 不用传的参数
)