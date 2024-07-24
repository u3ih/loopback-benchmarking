// Copyright h2platform - vntopmas@gmail.com. 2019,2020. All Rights Reserved.
// Node module: h2platform

import {BindingScope, injectable} from '@loopback/core';

@injectable({scope: BindingScope.SINGLETON})
export class DevService {

  constructor(
    // @repository(UserRepository) public userRepository: UserRepository,
    // @inject.getter(SecurityBindings.USER, { optional: true })
    // private getCurrentUser: Getter<UserProfile>,
    // @repository(RoleRepository) public roleRepository: RoleRepository,
    // @repository(PermissionRepository) public permissionRepository: PermissionRepository,
    // @repository(PositionRepository) public positionRepository: PositionRepository,
  ) {
  }

  async testTransaction() {
    // const transaction = await this.dataSource.beginTransaction({
    //   isolationLevel: "READ COMMITTED", //IsolationLevel.READ_COMMITTED,
    //   timeout: 30000, // 30000ms = 30s
    //   readPreference: "primary",
    //   readConcern: { level: "local" },
    //   writeConcern: { w: "majority" },
    // });
    // const transaction = await this.userRepository.createDatabaseTransaction();
    // try {
    //   await this.userRepository.create(new User({
    //     fullName: "Hoangnh",
    //     emails: [{ email: "test@gmail.com" }],
    //     tels: [{ tel: "test@gmail.com" }],
    //   }), { transaction });
    //
    //   await this.positionRepository.updateById("6242b432a98fadf3c6282fd2", {
    //     code: "test",
    //     name: "test",
    //     group: "test",
    //   }, { transaction });
    //
    //   await transaction.commit();
    // } catch (e) {
    //   console.log(e);
    //   await transaction.rollback();
    // }
  }

}
