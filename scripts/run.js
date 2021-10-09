const main = async () => {
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();
  console.log("Contract addy:", waveContract.address);

  let contractBalance = await hre.ethers.provider.getBalance(
    waveContract.address
  );
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );

  /*
   * Let's try two waves now
   */
  let waveTxn = await waveContract.wave("This is wave #1");
  await waveTxn.wait();

  waveTxn = await waveContract.wave("This is wave #2");
  await waveTxn.wait();

  contractBalance = await hre.ethers.provider.getBalance(waveContract.addresss);
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );

  let allWaves = await waveContract.getAllWaves();
  console.log(allWaves);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
