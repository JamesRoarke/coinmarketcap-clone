const main = async () => {
  const linkFactory = await hre.ethers.getContractFactory('Link')
  const linkContract = await linkFactory.deploy()
  await linkContract.deployed()
  console.log('ChainLink deployed to: ', linkContract.address)

  const daiFactory = await hre.ethers.getContractFactory('Dai')
  const daiContract = await daiFactory.deploy()
  await daiContract.deployed()
  console.log('DAI deployed to: ', daiContract.address)

  const usdcFactory = await hre.ethers.getContractFactory('Usdc')
  const usdcContract = await usdcFactory.deploy()
  await usdcContract.deployed()
  console.log('USDC deployed to: ', usdcContract.address)
}

;(async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()