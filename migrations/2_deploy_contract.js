const Base = artifacts.require("base.sol")
const admin_address = "0x46cf1872A991a0b199E05765f7FdD181c814b048"

module.exports = function(deployer) {
    deployer.deploy(Base)
}