const {
	hash,
	signDataWithPrivateKey,
	BIG_ENDIAN,
	hexToBuffer,
	intToBuffer,
	LITTLE_ENDIAN,
} = require('@liskhq/lisk-cryptography');
const { getDelegateKeypairForCurrentSlot } = require('../dpos');
const blockRewards = require('../blocks/block_rewards');

const SIZE_INT32 = 4;
const SIZE_INT64 = 8;

const getBytes = block => {
	const blockVersionBuffer = intToBuffer(
		block.version,
		SIZE_INT32,
		LITTLE_ENDIAN
	);

	const timestampBuffer = intToBuffer(
		block.timestamp,
		SIZE_INT32,
		LITTLE_ENDIAN
	);

	const previousBlockBuffer = block.previousBlock
		? intToBuffer(block.previousBlock, SIZE_INT64, BIG_ENDIAN)
		: Buffer.alloc(SIZE_INT64);

	const numTransactionsBuffer = intToBuffer(
		block.numberOfTransactions,
		SIZE_INT32,
		LITTLE_ENDIAN
	);

	const totalAmountBuffer = intToBuffer(
		block.totalAmount.toString(),
		SIZE_INT64,
		LITTLE_ENDIAN
	);

	const totalFeeBuffer = intToBuffer(
		block.totalFee.toString(),
		SIZE_INT64,
		LITTLE_ENDIAN
	);

	const rewardBuffer = intToBuffer(
		block.reward.toString(),
		SIZE_INT64,
		LITTLE_ENDIAN
	);

	const payloadLengthBuffer = intToBuffer(
		block.payloadLength,
		SIZE_INT32,
		LITTLE_ENDIAN
	);

	const payloadHashBuffer = hexToBuffer(block.payloadHash);

	const generatorPublicKeyBuffer = hexToBuffer(block.generatorPublicKey);

	const blockSignatureBuffer = block.blockSignature
		? hexToBuffer(block.blockSignature)
		: Buffer.alloc(0);

	return Buffer.concat([
		blockVersionBuffer,
		timestampBuffer,
		previousBlockBuffer,
		numTransactionsBuffer,
		totalAmountBuffer,
		totalFeeBuffer,
		rewardBuffer,
		payloadLengthBuffer,
		payloadHashBuffer,
		generatorPublicKeyBuffer,
		blockSignatureBuffer,
	]);
};

const sign = (block, keypair) =>
	signDataWithPrivateKey(hash(getBytes(block)), keypair.privateKey);

const createBlock = (
	config,
	accountsState,
	previousBlock,
	round,
	slot,
	{ version = 1, transactions = [] }
) => {
	const forgerKeyPair = getDelegateKeypairForCurrentSlot(
		config,
		accountsState,
		slot,
		round
	);

	const blockRewardsSettings = {
		distance: config.constants.REWARDS.DISTANCE,
		rewardOffset: config.constants.REWARDS.OFFSET,
		milestones: config.constants.REWARDS.MILESTONES,
	};

	const reward = blockRewards.calculateReward(
		previousBlock.height + 1,
		blockRewardsSettings
	);

	const newBlock = {
		version,
		totalAmount: '0',
		totalFee: '0',
		reward: reward.toString(),
		timestamp: previousBlock.timestamp + config.constants.BLOCK_TIME,
		numberOfTransactions: 0,
		payloadLength: 0,
		previousBlock: previousBlock.id,
		generatorPublicKey: forgerKeyPair.publicKey.toString('hex'),
		transactions,
	};

	newBlock.payloadHash = hash(Buffer.concat([])).toString('hex'); // arg is [] as block has no txs

	newBlock.blockSignature = sign(newBlock, forgerKeyPair);
	newBlock.height = previousBlock.height + 1;

	return newBlock;
};

module.exports = {
	createBlock,
};
