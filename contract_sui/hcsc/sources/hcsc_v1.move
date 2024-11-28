module hcsc::hcsc_v1;
use std::string;
use std::string::{String, utf8};
use std::u64::to_string;
use sui::address;
use sui::table::{Self, Table};
use sui::linked_table::{Self, LinkedTable};
use sui::object;
use sui::object::ID;
use sui::transfer;
use sui::tx_context;

public struct AnalysisCenter<phantom T: store> has key {
    id: UID,
    name: String,
    users: LinkedTable<String, User<T>>,
}

public struct User<phantom T: store> has store {
    name: String,
    age: u64,
    gender: String,
    count: u64,
    reports: LinkedTable<String, T>,
}

public struct LabReport has store {
    name: String,
    //白细胞 - White Blood Cells (WBC)
    wbc: u64,
    //红细胞 - Red Blood Cells (RBC)
    rbc: u64,
    // 血小板
    platelets: u64,
    // C反应蛋白 - C-Reactive Protein (CRP)
    crp: u64,
}

public struct AdminCap has key {
    id: UID
}

fun init(ctx: &mut TxContext) {
    transfer::transfer(
        AdminCap { id: object::new(ctx) },
        tx_context::sender(ctx)
    );
}

public entry fun user_register(
    analysis_center: &mut AnalysisCenter<LabReport>,
    name: String,
    age: u64,
    gender: String,
    ctx: &mut TxContext
) {
    let user = User {
        name,
        age,
        gender,
        count: 0,
        reports: linked_table::new<String, LabReport>(ctx),
    };

    linked_table::push_back(&mut analysis_center.users, address::to_string(ctx.sender()), user);
}

public entry fun create_lab_report(
    name: String,
    wbc: u64,
    rbc: u64,
    platelets: u64,
    crp: u64,
    analysis_center: &mut AnalysisCenter<LabReport>,
    ctx: &mut TxContext
) {
    let lab_rep = LabReport {
        name,
        wbc,
        rbc,
        platelets,
        crp
    };

    let user = linked_table::borrow_mut(&mut analysis_center.users, address::to_string(ctx.sender()));
    let count = &mut user.count;
    let count_str = to_string(count);

    string::append_utf8(&mut count_str, address::to_bytes(ctx.sender()));

    linked_table::push_back(&mut user.reports, count_str, lab_rep);
    user.count = user.count + 1;
}