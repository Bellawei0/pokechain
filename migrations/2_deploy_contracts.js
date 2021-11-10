const PokeChain = artifacts.require("PokeChain")

module.exports = function (deployer) {
  deployer.deploy(PokeChain)
}
