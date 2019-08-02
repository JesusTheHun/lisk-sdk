const BaseGenerator = require('../../base_generator');
const utils = require('../../utils');

const genesisBlock = {
	version: 0,
	totalAmount: '10000000000000000',
	totalFee: '0',
	reward: '0',
	payloadHash:
		'198f2b61a8eb95fbeed58b8216780b68f697f26b849acf00c8c93bb9b24f783d',
	timestamp: 0,
	numberOfTransactions: 103,
	payloadLength: 19619,
	previousBlock: null,
	generatorPublicKey:
		'c96dec3595ff6041c3bd28b76b8cf75dce8225173d1bd00241624ee89b50f2a8',
	transactions: [
		{
			type: 0,
			amount: '10000000000000000',
			fee: '0',
			timestamp: 0,
			recipientId: '16313739661670634666L',
			senderId: '1085993630748340485L',
			senderPublicKey:
				'c96dec3595ff6041c3bd28b76b8cf75dce8225173d1bd00241624ee89b50f2a8',
			signature:
				'd8103d0ea2004c3dea8076a6a22c6db8bae95bc0db819240c77fc5335f32920e91b9f41f58b01fc86dfda11019c9fd1c6c3dcbab0a4e478e3c9186ff6090dc05',
			id: '1465651642158264047',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '2581762640681118072L',
			senderPublicKey:
				'01389197bbaf1afb0acd47bbfeabb34aca80fb372a8f694a1c0716b3398db746',
			asset: {
				delegate: {
					username: 'genesis_51',
				},
			},
			signature:
				'86e6eed7c8adcdfd0b58d4a718847a8bf4a8c61035003871e8b89d1071123ecacb00a34fd228d9a81074c95265281d578ccb5d72a0f679f7a8066bcae92d090e',
			id: '3634383815892709956',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '12254605294831056546L',
			senderPublicKey:
				'141b16ac8d5bd150f16b1caa08f689057ca4c4434445e56661831f4e671b7c0a',
			asset: {
				delegate: {
					username: 'genesis_2',
				},
			},
			signature:
				'02a3046ff8c7c328657e47afe10879aca863c1ff9c10874fd21c9f447a128ce0750aaa5b46f4f5ba7a439ba2009fbd51d77c564b1e4ad51df7cd05d2b957660b',
			id: '8038215676969674333',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '14018336151296112016L',
			senderPublicKey:
				'3ff32442bb6da7d60c1b7752b24e6467813c9b698e0f278d48c43580da972135',
			asset: {
				delegate: {
					username: 'genesis_3',
				},
			},
			signature:
				'4cfb92b1c3c41f46411db2887a6afacdb554a9a36d58b8b3b597704c06d8259d069adaeef01857379fc6b370a4891d08d357d8315b964fcf6941cd149b551001',
			id: '12531923965746850440',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '2003981962043442425L',
			senderPublicKey:
				'5d28e992b80172f38d3a2f9592cad740fd18d3c2e187745cd5f7badf285ed819',
			asset: {
				delegate: {
					username: 'genesis_4',
				},
			},
			signature:
				'2535718a28d3a4e423a1e1f6109021d49f153a9a65543fede2f04f204c9453382016ebf2a3939dc22b473a7cbd2a70d5aa8c4e495c16b960b5f41e88a9521201',
			id: '1513655759945413173',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '15685993315437640088L',
			senderPublicKey:
				'4fe5cd087a319956ddc05725651e56486961b7d5733ecd23e26e463bf9253bb5',
			asset: {
				delegate: {
					username: 'genesis_5',
				},
			},
			signature:
				'916b54124f59558cf8991f12fe0f27d827548f4c47d3db8451d2b1d5fe661928e74adbe451ddcb96fa4bc6bb45036d73e464df48d369be8eb2f862308b0f7b0f',
			id: '17128624452873376878',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '13796903232533379929L',
			senderPublicKey:
				'a796e9c0516a40ccd0eee7a32fdc2dc297fee40a9c76fef9c1bb0cf41ae69750',
			asset: {
				delegate: {
					username: 'genesis_6',
				},
			},
			signature:
				'04559423ff14200ffa54cf409b7900d24dc537d4a0f9e93d5d64c036e14afb0500e2e6ded9a1148827323f18fa9ce7b7c4fc009657fd01079a647f25f754c406',
			id: '15975725245957634226',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '10395427086746342233L',
			senderPublicKey:
				'67651d29dc8d94bcb1174d5bd602762850a89850503b01a5ffde3b726b43d3d2',
			asset: {
				delegate: {
					username: 'genesis_7',
				},
			},
			signature:
				'd89bad99453db55784964c2ff3228ad17e1265d62de39c4dc0ee358553f92947ec2a9bcdf64fb5f76479b339fd0edaf6d6af167f5ffd1d369b02cc4552f7bc0f',
			id: '11246867963654933991',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '10555862272344793163L',
			senderPublicKey:
				'c3d1bc76dea367512df3832c437c7b2c95508e140f655425a733090da86fb82d',
			asset: {
				delegate: {
					username: 'genesis_8',
				},
			},
			signature:
				'1dc3add7d239c617d7039af1271faee078913ab42d5e45bdbd68c2a911d8e4fe17f64d47a3aef8dc2584f5b851f3fa2c0a6d3c7b3380ebd2bb55f23548232d07',
			id: '8886362355238277998',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '9090572627256317041L',
			senderPublicKey:
				'640dfec4541daed209a455577d7ba519ad92b18692edd9ae71d1a02958f47b1b',
			asset: {
				delegate: {
					username: 'genesis_9',
				},
			},
			signature:
				'20e46a0f25b5f5220f58f4e84e87aee961b2a19f2db42ca88a9261e6beabb535d1d04988662ed03fc64d63f5449730cf17d1d7fa19c82117c5d2d1d2fe793302',
			id: '12511984344561945661',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '6147291942291731858L',
			senderPublicKey:
				'3ea481498521e9fb1201b2295d0e9afa826ac6a3ef51de2f00365f915ac7ac06',
			asset: {
				delegate: {
					username: 'genesis_10',
				},
			},
			signature:
				'a58601557370041d7b5b697ab56f6d34111014df102501c4af5abc5aaff5c595de4888dd4176b5961c75d3d6267385d8f364ee489f5aa5ecd661c1d68b407702',
			id: '12470576968560642688',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '1478505779553195737L',
			senderPublicKey:
				'5c4af5cb0c1c92df2ed4feeb9751e54e951f9d3f77196511f13e636cf6064e74',
			asset: {
				delegate: {
					username: 'genesis_11',
				},
			},
			signature:
				'4012c881ef2049b57573b26549cf27aa22fd4014b7c3ede454fe2eb0094596787810401dbcdfb2c736815eae6766b0b9a183b349d4791d6f652ec8f3d151b30e',
			id: '16979024391630063731',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '3485190523478756562L',
			senderPublicKey:
				'399a7d14610c4da8800ed929fc6a05133deb8fbac8403dec93226e96fa7590ee',
			asset: {
				delegate: {
					username: 'genesis_12',
				},
			},
			signature:
				'38fcea5586663558f36c6680d5e7ce3b798f4f594ec016534beda04b8e2c5a0717e11c4ec3300e5f1ee4d8143cd11c1f19cb886448292d5cb84f2ef831aa7106',
			id: '3132586618460208262',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '7749538982696555450L',
			senderPublicKey:
				'6e904b2f678eb3b6c3042acb188a607d903d441d61508d047fe36b3c982995c8',
			asset: {
				delegate: {
					username: 'genesis_13',
				},
			},
			signature:
				'20e5467066babf681b18f51be12c5d5e37aa04c7bf7558c62171b176b66ef5d772e2b7fe91bb3d7634d1d317d49e7c05df2c08f2c6f8a61db0e6f02a0bccde0d',
			id: '13612427145550979190',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '11858068254874463650L',
			senderPublicKey:
				'1af35b29ca515ff5b805a5e3a0ab8c518915b780d5988e76b0672a71b5a3be02',
			asset: {
				delegate: {
					username: 'genesis_14',
				},
			},
			signature:
				'4244d69605447b5d5df4dde6c465286086a1514855df6738e94ec3a46df489ac1c120608ec2528f3c559ed311a6c5533da9cf714a57c1cb46fe11be36d562706',
			id: '4820365613836031607',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '11959294293312794939L',
			senderPublicKey:
				'd8daea40fd098d4d546aa76b8e006ce4368c052ffe2c26b6eb843e925d54a408',
			asset: {
				delegate: {
					username: 'genesis_15',
				},
			},
			signature:
				'a25b30bb3affe823a95b2e6b1f9451447fbee880d9101d7a124495b8941c358d4d1b4b76b0e70d8345ce34aa02e35287b2c8733cf6e7843b1005bcd52a6a3c06',
			id: '12112106230786825768',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '6572481065061292413L',
			senderPublicKey:
				'386217d98eee87268a54d2d76ce9e801ac86271284d793154989e37cb31bcd0e',
			asset: {
				delegate: {
					username: 'genesis_16',
				},
			},
			signature:
				'75b4bfd3f49802f234f656b633993a085316d2942c74cf82efe559f0d6ddb8566f897025cd528e23b9fec4e22e8158c87e8173db333938010c1a406d5877aa03',
			id: '13821967849884105584',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '537318935439898807L',
			senderPublicKey:
				'86499879448d1b0215d59cbf078836e3d7d9d2782d56a2274a568761bff36f19',
			asset: {
				delegate: {
					username: 'genesis_17',
				},
			},
			signature:
				'06bea1efd7e09db6c80b46b54808cecf0b001c842c350c382624a3a69ec8149068aff1efe6d94273ffd8b4ab1fa2c63907fbd101e003e958bc7475c03ca6680e',
			id: '2697129531259680873',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '11194005483892021001L',
			senderPublicKey:
				'948b8b509579306694c00833ec1c0f81e964487db2206ddb1517bfeca2b0dc1b',
			asset: {
				delegate: {
					username: 'genesis_18',
				},
			},
			signature:
				'0274145b8bf513f2ffd16d2634dd144f0b5bc64e2d0225e9c0090c0a3a04daa23c1c96566a8ee11127f104b3b24f37abf1541b891816d7efbbea574e03170009',
			id: '3759946394491450982',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '12689367895996075612L',
			senderPublicKey:
				'b00269bd169f0f89bd2f278788616521dd1539868ced5a63b652208a04ee1556',
			asset: {
				delegate: {
					username: 'genesis_19',
				},
			},
			signature:
				'80e3b133d19cf0ace2fbfe6dc5f896e2a8777839dfa50054b1d75eaabbfafbc8f9965c987a35f4c56bbd4e04e221e5c87f1e3165151689e220afcaa2e2e76107',
			id: '18032556474095275261',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '12937672077630275226L',
			senderPublicKey:
				'e13a0267444e026fe755ec128858bf3c519864631e0e4c474ba33f2470a18b83',
			asset: {
				delegate: {
					username: 'genesis_20',
				},
			},
			signature:
				'cb92cd0ee8b8f0facc69287a2813e80a3e8e4d7e0c228056db46f82e9727d0ac131b1071bbbb67eb8cb2eaeb1cff385e2513cd0ef25b13277db078a1873f360b',
			id: '1560224518702707678',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '6719024567117648644L',
			senderPublicKey:
				'1cc68fa0b12521158e09779fd5978ccc0ac26bf99320e00a9549b542dd9ada16',
			asset: {
				delegate: {
					username: 'genesis_21',
				},
			},
			signature:
				'ebaed3b40da5cc1cfb8a99e176dc9a3068fc9a568ef8048478335fb6cab7e36d8344ec4373a67472beccbf8445ab86bb3c7ae46683e53d3b84c0bf30c06d5d09',
			id: '16703972713290793385',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '2185933284430885504L',
			senderPublicKey:
				'a10f963752b3a44702dfa48b429ac742bea94d97849b1180a36750df3a783621',
			asset: {
				delegate: {
					username: 'genesis_22',
				},
			},
			signature:
				'5526aec44e47ed945393254b8eafbc18a7a5490260436abc562a7b0a07dc1716481ec988fb4ae3e500b3d4fa99a36c0f9fa5ba36e05243ae3fd69b0a91a73504',
			id: '9024888972225135909',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '263761216888896549L',
			senderPublicKey:
				'f33f93aa1f3ddcfd4e42d3206ddaab966f7f1b6672e5096d6da6adefd38edc67',
			asset: {
				delegate: {
					username: 'genesis_23',
				},
			},
			signature:
				'956baeec335ccae10ab6930ea5a8df7eb3f7b45067157887af457f571b63fdf869351a99c2bf22253eb3b478f804ec4313b6e468d2fbd3d5bf12b3060658ef05',
			id: '17360344467587871549',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '6996737717246838071L',
			senderPublicKey:
				'b5341e839b25c4cc2aaf421704c0fb6ba987d537678e23e45d3ca32454a2908c',
			asset: {
				delegate: {
					username: 'genesis_24',
				},
			},
			signature:
				'c7249186c883e32db00bbb683c829ffd44c6c3b64b4b0b95edf2be9b9fe9bb5e98c8cdacbd358eca4e8e32ee3973cdf45445395c02d6070c2b1432224ddac70d',
			id: '5232920129259210735',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '17769700073017685523L',
			senderPublicKey:
				'da673805f349faf9ca1db167cb941b27f4517a36d23b3c21da4159cff0045fbe',
			asset: {
				delegate: {
					username: 'genesis_25',
				},
			},
			signature:
				'06c1dc3f90421dcebeec646b95682f066474f9e0c770c74090c516f6f0049e7e2c853fdc96c4f9f9ec758d74de54102b1403cde415baf0a4cd780f48ba93c20d',
			id: '9004206353403912975',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '18101328368221611426L',
			senderPublicKey:
				'55405aed8c3a1eabe678be3ad4d36043d6ef8e637d213b84ee703d87f6b250ed',
			asset: {
				delegate: {
					username: 'genesis_26',
				},
			},
			signature:
				'1c0918b29f3659bff3ffb2d0a4eff860660d6a102fa813af758e9e87917b14c50a0b420410ea8cbdc15d5763109bdfe3c4c56e2afd8cf2d3070380e1d3fbdd05',
			id: '1189545323092305750',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '3654804916322462690L',
			senderPublicKey:
				'19ffdf99dee16e4be2db4b0e000b56ab3a4e10bee9f457d8988f75ff7a79fc00',
			asset: {
				delegate: {
					username: 'genesis_27',
				},
			},
			signature:
				'96ad6b0eab799a5f3dab76f0d37b7a0af0b8f8ed5940fbc22739b013808fcd513a5692fc5c5d0b0ffbc8424bb950f0b65aa25a0ac8575897700151980d23fe07',
			id: '7550428103744152900',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '6214967903930344618L',
			senderPublicKey:
				'85b07e51ffe528f272b7eb734d0496158f2b0f890155ebe59ba2989a8ccc9a49',
			asset: {
				delegate: {
					username: 'genesis_28',
				},
			},
			signature:
				'389959a2454a0d7cf154d554681406d573d2864a9e6ff41fc0ed64c6eaa539dbd04d619cf9fcfba94044adc9d92113a1388a07d514307c6ece310e94284cf00e',
			id: '5063479199814313256',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '6700417780469657062L',
			senderPublicKey:
				'8a0bcba8e909036b7a0fdb244f049d847b117d871d203ef7cc4c3917c94fd5fd',
			asset: {
				delegate: {
					username: 'genesis_29',
				},
			},
			signature:
				'4e8bde31cfc365b79aff4ff2a5453d7ef62d310656be8e62dc61af1b09bc34877a3f6097fde82680cc625ab28f078b880970a89d170c6594a4e298dccc37170c',
			id: '16511653596135136784',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '17416795040643460696L',
			senderPublicKey:
				'95ea7eb026e250741be85e3593166ef0c4cb3a6eb9114dba8f0974987f10403f',
			asset: {
				delegate: {
					username: 'genesis_30',
				},
			},
			signature:
				'd821767a66a6e3f02e441c16d488079cd4cd27f551925ababb9c4a09385185eaefadcb1bdca3c5fa9629d9ccff81f50046c53a2233ff7df592c15920c8e3470e',
			id: '16595863059256490600',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '7806545753492919148L',
			senderPublicKey:
				'cf8a3bf23d1936a34facc4ff63d86d21cc2e1ac17e0010035dc3ef7ae85010dc',
			asset: {
				delegate: {
					username: 'genesis_31',
				},
			},
			signature:
				'83cd12534cf45d7a511a29dbe364b37fd0cf6ae01d3a28af1d37c1387c14e73095d1b129dca0f3e2aa03ff50d7599269e7e6b68a661ff17915596f2af009d004',
			id: '3751638297072961125',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '16807489144327319524L',
			senderPublicKey:
				'82174ee408161186e650427032f4cfb2496f429b4157da78888cbcea39c387fc',
			asset: {
				delegate: {
					username: 'genesis_32',
				},
			},
			signature:
				'f89bd9a0fc6302baa4062d504627584d894bd8725c073cd9c58e6cdcee2f18385d352070073dc13fdb28b8b07f9218ea3a2b33cee67adf1c001a5cc90f4bdd07',
			id: '14853252917548748',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '11009807324631489084L',
			senderPublicKey:
				'4bde949c19a0803631768148019473929b5f8661e9e48efb8d895efa9dd24aef',
			asset: {
				delegate: {
					username: 'genesis_33',
				},
			},
			signature:
				'5468546482bea86d19c647ad290f5b1490e7e8dfb52305bd64c616c649cf262844cd9d0ac9a807ead1307a31f8d4f549ad0fba85d7d5225475e8d0d9f2b04502',
			id: '16837042075842008948',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '5380829552614149409L',
			senderPublicKey:
				'2f9b9a43b915bb8dcea45ea3b8552ebec202eb196a7889c2495d948e15f4a724',
			asset: {
				delegate: {
					username: 'genesis_34',
				},
			},
			signature:
				'98822748cf4832ff29bdb45d13b9c1187818ba696be0e5f2be5cffc8e62635efdb582f3a8293d33c83cc30d6fd9219c7a2c0309c429c45a09a413360043d9207',
			id: '3818529290521217580',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '18181157191600196376L',
			senderPublicKey:
				'9503d36c0810f9ac1a9d7d45bf778387a2baab151a45d77ac1289fbe29abb18f',
			asset: {
				delegate: {
					username: 'genesis_35',
				},
			},
			signature:
				'4024d9234a7843bb7c09a6460793d699d128683eb3e853bf9699ba2e909e0cdcbafbcdbd0c3281897b4bc042bff971a181ad1d7cbe38a12046b32eb85c577506',
			id: '8222004892167905718',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '15279149762694772854L',
			senderPublicKey:
				'a50a55d4476bb118ba5121a07b51c185a8fe0a92b65840143b006b9820124df4',
			asset: {
				delegate: {
					username: 'genesis_36',
				},
			},
			signature:
				'1a42e0e6ac51f9fc2aebce804dec6af8f0d143ee4228c18cbd1622b2a368fc61cce2391099ad67fd3c063e890b28ffe093b9da14aa1625e60356b291d141c500',
			id: '13769488247922626310',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '15867701141673224975L',
			senderPublicKey:
				'fc8672466cc16688b5e239a784cd0e4c0acf214af039d9b2bf7a006da4043883',
			asset: {
				delegate: {
					username: 'genesis_37',
				},
			},
			signature:
				'c6d62cec1cdf4b5893a6baed6de74f8b679262937ca49b93714d080d384fd96fd4b90e27cdd8c86ac4294b5900978daba60afa1dfd4601dd3e8ae5c6f2ef7c03',
			id: '4447831995935541366',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '13787002016364430124L',
			senderPublicKey:
				'db821a4f828db977c6a8d186cc4a44280a6ef6f54ac18ec9eb32f78735f38683',
			asset: {
				delegate: {
					username: 'genesis_38',
				},
			},
			signature:
				'1ebf1518322a995da33c034e15eb05509cebdf11eb300c3ceadd8e259890978610cce79771a11fa67f1c0669f21ff6d46a1670a618e90b22caad089ae7d7ed04',
			id: '13853244827819802699',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '5312766513260345125L',
			senderPublicKey:
				'ba7acc3bcbd47dbf13d744e57f696341c260ce2ea8f332919f18cb543b1f3fc7',
			asset: {
				delegate: {
					username: 'genesis_39',
				},
			},
			signature:
				'220d93a052f44d41a37c4e288d18f97584ebe8ededf50c1b6523a8ec7ac9cd0fe340d43d60e25d868ab4bc799eb0e674d3ad6ffea339a9938e7e1d3a0bdcaa09',
			id: '13063373368205433852',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '11613981515632820140L',
			senderPublicKey:
				'47c8b3d6a9e418f0920ef58383260bcd04799db150612d4ff6eb399bcd07f216',
			asset: {
				delegate: {
					username: 'genesis_40',
				},
			},
			signature:
				'e895b7779ecb30605af4a42477d9b2be30161a2bde12414b91a6c977f1d0b2d6ed83ef0f227494104307161f59119725888e5df61f021f5e654516a5375fef06',
			id: '15486060283974943831',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '4351572711388220555L',
			senderPublicKey:
				'd1c3a2cb254554971db289b917a665b5c547617d6fd20c2d6051bc5dfc805b34',
			asset: {
				delegate: {
					username: 'genesis_41',
				},
			},
			signature:
				'259fa222f455a27329048cd727b1ccdea990fc753785e253b38c25ad0a99f12952ad666437f939027e5727e99062575aae70a111b2d841724a9e38e7fb2a0b09',
			id: '13721391570613926706',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '11595026565287740051L',
			senderPublicKey:
				'47b9b07df72d38c19867c6a8c12429e6b8e4d2be48b27cd407da590c7a2af0dc',
			asset: {
				delegate: {
					username: 'genesis_42',
				},
			},
			signature:
				'aa54a24e5f8f0cd8b32afdcbecb12be4dc43655e44be4975e92bbdd4dc04eaac23e7b4af26394be030e3f7dd22d0f71b294ace3ae0978503d76f265fcd32fa0a',
			id: '14867434600889949439',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '3466073897179860882L',
			senderPublicKey:
				'9a7452495138cf7cf5a1564c3ef16b186dd8ab4f96423f160e22a3aec6eb614f',
			asset: {
				delegate: {
					username: 'genesis_43',
				},
			},
			signature:
				'd399213490b64c75cc5a577926b152b872299c9d5482dfb36562e9d92e71327fd80e85af36f91407203bf3b7886f538c64648b1fdf730eb50a71961cf8b4c305',
			id: '4242368664678620951',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '4331258378288911563L',
			senderPublicKey:
				'c4dfedeb4f639f749e498a2307f1545ddd6bda62e5503ac1832b122c4a5aedf9',
			asset: {
				delegate: {
					username: 'genesis_44',
				},
			},
			signature:
				'df90864681a38a290ab5bcbb2ba943bf7e1d2618dafeb14dc2c2edf471dde467f97fb8ecb4194f0250475e505cb12026cd5743d7f99b843542714868e210f90f',
			id: '17935338216936715985',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '9928719876370886655L',
			senderPublicKey:
				'96c16a6251e1b9a8c918d5821a5aa8dfb9385607258338297221c5a226eca5c6',
			asset: {
				delegate: {
					username: 'genesis_45',
				},
			},
			signature:
				'c57eaf4f77b73f4d9968f8d9987e9ffd46cf43ae42f8c31147435a77f9b5efc86044c50e8d1fcf3b31cd02cb7860128208537468f78e2dd1b36f821120d99905',
			id: '18187129690272007362',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '11805364634236927749L',
			senderPublicKey:
				'910da2a8e20f25ccbcb029fdcafd369b43d75e5bc4dc6d92352c29404acc350f',
			asset: {
				delegate: {
					username: 'genesis_46',
				},
			},
			signature:
				'f111fd2972fc61522647f3e95719aacbc792972bf3eb814cb040f1325a26c83d38d270cc88c4fd5f2c86eb0ad72fdc32ce6c829cee8db4b5a93620beafc6490a',
			id: '7893064014890793889',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '9703017731198160198L',
			senderPublicKey:
				'eabfe7093ef2394deb1b84287f2ceb1b55fe638edc3358a28fc74f64b3498094',
			asset: {
				delegate: {
					username: 'genesis_47',
				},
			},
			signature:
				'562ae49096c79923479e9a4d32a053dc1a78f4ba0064ca99c26900dc23f7b7146052380ed7318a5961c84a35d7c2e89bce983cad163bef465cff170d070c570c',
			id: '342758163977987198',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '162664226572374905L',
			senderPublicKey:
				'94b163c5a5ad346db1c84edaff51604164476cf78b8834b6b610dd03bd6b65d9',
			asset: {
				delegate: {
					username: 'genesis_48',
				},
			},
			signature:
				'ef436c60bc9da7ff8c468d02223b18552725d73a456189d86b2c55d1cf355040f7a7201930c033f3d0fad9e283814e64c068abf84a30db234457f84d814ee202',
			id: '353353765871958610',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '14754807200586084685L',
			senderPublicKey:
				'6164b0cc68f8de44cde90c78e838b9ee1d6041fa61cf0cfbd834d76bb369a10e',
			asset: {
				delegate: {
					username: 'genesis_49',
				},
			},
			signature:
				'5e0914373777dcf1bd7972be40c99ebf19c421c427ee9d7cb9e3568d3f335d906eae70527c5f53c0e01ced0444cfca79aece6a8fbed559b4bce23960df77110b',
			id: '15765592360456554094',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '6596445655213033387L',
			senderPublicKey:
				'3476bba16437ee0e04a29daa34d753139fbcfc14152372d7be5b7c75d51bac6c',
			asset: {
				delegate: {
					username: 'genesis_50',
				},
			},
			signature:
				'ce514688166676f1c5385320abd670139339c64a30710349eb9f246df0d2559b4f4bb648df2632e4a411086979d83af37932ef22cbef001f7fe28425120fc800',
			id: '6638336032681784546',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '8273455169423958419L',
			senderPublicKey:
				'9d3058175acab969f41ad9b86f7a2926c74258670fe56b37c429c01fca9f2f0f',
			asset: {
				delegate: {
					username: 'genesis_1',
				},
			},
			signature:
				'31aca263f21f7c7e27f4f8c6c398d5d3031141bdec610454b4c534e0b47724d903ca0ea897fd1c0614b3fecffb4b5a06e43f05803f8a5fc889e60dfe93b0770e',
			id: '11549171951016850959',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '15064680481049926459L',
			senderPublicKey:
				'aa33af13b440746b4f24312cba5fa910eb077ce6b16b84ebb482cb7720b5c686',
			asset: {
				delegate: {
					username: 'genesis_52',
				},
			},
			signature:
				'99b79d08652cafceedd596ff8cf27be70ddea652736f6b76a65f55e9f619ba84dcc6bea55722aa8ba1852540c29fd052fe380de1854ff65bd17f184b9539a402',
			id: '10414244614775503370',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '6253486079725348800L',
			senderPublicKey:
				'6f04988de7e63537c8f14e84b0eb51e0ea9c5da8b4b9256243b3e40b1aeccb76',
			asset: {
				delegate: {
					username: 'genesis_53',
				},
			},
			signature:
				'7a6a7c7a8bf147a62fd87901f63fc8f042580929309b929b0b53e4b57d9c0d6360fb4e648a083d2f3eb7c32fd4d10e65bc70e48f6db8d4f8b7dcd770ca37340a',
			id: '4606554700024562903',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '7838076639178338424L',
			senderPublicKey:
				'07935c642c7409c365258c8488760e96a851cee618aec72eeeb135c9c827f0f9',
			asset: {
				delegate: {
					username: 'genesis_54',
				},
			},
			signature:
				'877d50ee45982ca6ad9b5f444f758905deb72e9f3963de00d0379e2c4724fb7bcd7756ba0edf1431bec74797371b8f0956546613eec0cd963f2e26661ebf0406',
			id: '72171856925056919',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '9824483707960713406L',
			senderPublicKey:
				'526931663cbee883ff22369172cba091a5dd5fa1200284fa790d7aeca53d37af',
			asset: {
				delegate: {
					username: 'genesis_55',
				},
			},
			signature:
				'191b1db5790332b3a8c10820b11fc5e35528515e020e2aa83fa8c1ab939a57a5c550588c470d4ad661e3db9a9f9388a7b735ae061cbb66a8a0d5d0e35a871205',
			id: '15715945518456696813',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '12144255005482188703L',
			senderPublicKey:
				'f7b9751d59dd6be6029aa36a81a3f6436e2970cf4348845ab6254678fb946c18',
			asset: {
				delegate: {
					username: 'genesis_56',
				},
			},
			signature:
				'acc88383469b912c478b989383356fd581b97414d76ee2c8ca862b3507547ebc2360223331ca80908e34a896c0c3ef425d6d9081aeb4e9724287d4cc3a91b702',
			id: '9723686770809371445',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '2037513790649430470L',
			senderPublicKey:
				'5f6cc5a8aac752d37c676b0d46a798f7625e37dfa1e96091983274e04ab7ffe2',
			asset: {
				delegate: {
					username: 'genesis_57',
				},
			},
			signature:
				'7e215d0f87395b554c5ca9a13b2c1b2ffdc77e20b70c53e15e58a631cbe903877d3fe721cc4b93e564cb993a66f1fe770b4ea28d5449bbc3870cce031efcf203',
			id: '17586624062051875064',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '2371768942272884594L',
			senderPublicKey:
				'9c16751dbe57f4dff7b3fb8911a62c0cb2bdee6240e3f3fefe76832788cb14c6',
			asset: {
				delegate: {
					username: 'genesis_58',
				},
			},
			signature:
				'52b2acca8eeef663a6db6c578e4544693384617513187d52222b7c2c52ea8fb0107f15a681261272dc16194941254ce5af3bf0ab99a29116931cf8ea47f19a0f',
			id: '14844773091422567888',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '309766985700168161L',
			senderPublicKey:
				'ba2ea5e324eeb42fa6f4d1132a1d79911721e8507033bb0abd49715f531877b4',
			asset: {
				delegate: {
					username: 'genesis_59',
				},
			},
			signature:
				'91b94726396559eda862373b1bc1750c1e2b186efd9a313202824b2e1b01ef5d701392997c40e53b29893624ff01c5ab7932596ad0ddcbd8db3a0505d9dce20b',
			id: '16337550070542495000',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '17110047919889272525L',
			senderPublicKey:
				'0186d6cbee0c9b1a9783e7202f57fc234b1d98197ada1cc29cfbdf697a636ef1',
			asset: {
				delegate: {
					username: 'genesis_60',
				},
			},
			signature:
				'b2b1a16e04b91c9807add6c769e2382ffe53dda5e9799a9e80800b3688e916efa282f36cf3305b943b90c02c022332a097e209bfeee68c4d68599d1045374802',
			id: '17712070383286525756',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '17271297386479765505L',
			senderPublicKey:
				'edbb9828fbe62da2a59afbc8623e8ebc5ed2f9b7f77a0cd1cdcf55edea30521c',
			asset: {
				delegate: {
					username: 'genesis_61',
				},
			},
			signature:
				'23a6382b34adc93271444123a1231ef7babb39dacc600cdcf99523df5c3877908db1d7efc81de915277c61d0ac663998a028992ad1c9fd9d33a3cbadff096509',
			id: '8663447682871356259',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '11229203525038722103L',
			senderPublicKey:
				'b6ac700bf890b887e218dbd55b8f6b091dfc5a684d0fd7a6f69db7dc0313b51b',
			asset: {
				delegate: {
					username: 'genesis_62',
				},
			},
			signature:
				'2ca4b263e81ecc861947bbc52fb5dfff20bff94c915cdbf91e366c50dd810c84011982de445c57ea617db0e10d14fdf6576f4b2d26d79c9c3d5d371bf1a34402',
			id: '3324886112005858282',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '1998811414849260567L',
			senderPublicKey:
				'62bbb3c41e43df73de2c3f87e6577d095b84cf6deb1b2d6e87612a9156b980f8',
			asset: {
				delegate: {
					username: 'genesis_63',
				},
			},
			signature:
				'705259bdaa3f72d69fd30d60ae07ebd1b548af665f424c90fb9f81522361711d456d0c1789dcfbd05c59f1979a08ace46d806b30aab36643d447339c15599d01',
			id: '16714595303925976854',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '1039287838469525702L',
			senderPublicKey:
				'6fb2e0882cd9d895e1e441b9f9be7f98e877aa0a16ae230ee5caceb7a1b896ae',
			asset: {
				delegate: {
					username: 'genesis_64',
				},
			},
			signature:
				'93699313f764e83b20f1955921ab6fbb995aca2928b85a87f1660f996361b6d1a67e5ae502ef825547e812ba762f5cb6eac60c91bbca86a0b6afea140bc13503',
			id: '4663342069887202151',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '9829702676947904862L',
			senderPublicKey:
				'9a0f19e60581003b70291cf4a874e8217b04871e676b2c53c85a18ab95c2683b',
			asset: {
				delegate: {
					username: 'genesis_65',
				},
			},
			signature:
				'b31958a00a99d24521184bac81fe499b4e743cd0ab879571b9001268a2ce015e77eea79a7a1be5e6c66b397054e24884607a10bebe038641f6cd90a39dce5504',
			id: '13416394776139336738',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '11776976371460504977L',
			senderPublicKey:
				'1e6ce18addd973ad432f05f16a4c86372eaca054cbdbcaf1169ad6df033f6b85',
			asset: {
				delegate: {
					username: 'genesis_66',
				},
			},
			signature:
				'69cbccc8123b4c5cf8a04363eb004b318a5d84d6e2fd5f11cf4c448da4c3488d7cea6259ff9379ba95d88ed13f02f406162122a199f81cdb4d0b98d07e02d304',
			id: '1848907307995212656',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '10718602563400390049L',
			senderPublicKey:
				'27f43391cca75cbc82d1750307649508d1d318cd015f1f172b97318f17ab954e',
			asset: {
				delegate: {
					username: 'genesis_67',
				},
			},
			signature:
				'6b913347d537f7114ec69663bc77ea3f1161b1de32b6b1b3507b319029510f476d1e494bfd75a5b104dc7532eb9fa4a7f94158bb47207c5f717a21d40c9c7501',
			id: '11414381136661678188',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '3978875557882351502L',
			senderPublicKey:
				'644a971f2c0d0d4b657d050fca27e5f9265e3dfa02a71f7fbf834cc2f2a6a4c8',
			asset: {
				delegate: {
					username: 'genesis_68',
				},
			},
			signature:
				'ec0121f67fdbeda38cb627ae18ee767ba17150594d2fb385ca3fff2c9df939d1aaca5a1e910edca6dda8234aeedf5b19c755d5eed2764524ef934c3d42bca507',
			id: '17139325089634275737',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '15196907279410793719L',
			senderPublicKey:
				'cdd68a321ea737e82bce23d2208040f79471d36f2e6f84c74ea36ab26245e522',
			asset: {
				delegate: {
					username: 'genesis_69',
				},
			},
			signature:
				'e41446f7c2e3b2d9bc13c88d2a851b16fa8f4d2e6264c387df56a7c99ebaad33d4d6b5ca50d3e50dcd0b83377c61fbc0a59573434a72403eb83e411fa1b6110e',
			id: '13234426641856480796',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '14846615469478045551L',
			senderPublicKey:
				'f9f6ff873c10c24eba834be28a56415a49c9c67b7c0ee9f106da827847168986',
			asset: {
				delegate: {
					username: 'genesis_70',
				},
			},
			signature:
				'd45633e29d7033566d40d6839b358b3acc73970b7d6d4c106aeefee2a91e8b8007de7d261f6a5113518531249420d89a3589a03d551054334a3f99485dcf670b',
			id: '12767453105623613758',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '9528507096611161860L',
			senderPublicKey:
				'fab7b58be4c1e9542c342023b52e9d359ea89a3af34440bdb97318273e8555f0',
			asset: {
				delegate: {
					username: 'genesis_71',
				},
			},
			signature:
				'45a835b74c6ddb759c87e186a313ea261e536151e37357b269bdd238d92dc749508901fc355da6a3197e894aa234229259f5270d984cdfc7c17969ac6bdee600',
			id: '12440982574150922736',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '5225235021585670513L',
			senderPublicKey:
				'1b5a93c7622c666b0228236a70ee1a31407828b71bfb6daaa29a1509e87d4d3c',
			asset: {
				delegate: {
					username: 'genesis_72',
				},
			},
			signature:
				'7eff31cd1803c7071fe9888f294569774deea78f44765e15ded52f5c354911e60a5206ef5baa77a50144d5ea804daf48d289cf7a5a384cbf1e83bb28bf6cf603',
			id: '14118647711627755742',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '8579664070066716758L',
			senderPublicKey:
				'74583aba9c0b92e4f08c8c75e6df341c255ca007971195ff64d6f909dc4b7177',
			asset: {
				delegate: {
					username: 'genesis_73',
				},
			},
			signature:
				'8f2cc2dd970feca1c560891e04fb2c3f397cdeb1b5673960f5ad73f5191a9f47384d48830ac0bbcc4e2aae1c04a321f958b113bd65b1bcb696e3164612da6503',
			id: '9465919849327369097',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '13607583239938732846L',
			senderPublicKey:
				'2b6f49383af36fd9f1a72d5d2708c8c354add89aaea7edc702c420e2d5fdf22e',
			asset: {
				delegate: {
					username: 'genesis_74',
				},
			},
			signature:
				'a33219b84b9f39cadbe49945b95e5a4eef2943a004ee7ed86247056d74578f63a18f3da13a1dbd3ba4169972d64fb5020e959e9af5b4fb403f27492a757a320f',
			id: '4912435783730903986',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '2460251951231579923L',
			senderPublicKey:
				'a10ed9c59dac2c4b8264dc34f2d318719fb5f20ecdd8d6be2d7abfe32294f20d',
			asset: {
				delegate: {
					username: 'genesis_75',
				},
			},
			signature:
				'b49fa6947774a962c5b8ca86bdb11b9ba4cd08d64a26ace110ca17217c55059a7b1b93538a8dffb17418749ca0dd5cd860203ae4e31ea68c96052a18d5595803',
			id: '10917747836082542151',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '1081724521551096934L',
			senderPublicKey:
				'c61d0822bbdbfe2a0b5503daff0ce8441c623115c94c0cfcf047a51f8b7160d3',
			asset: {
				delegate: {
					username: 'genesis_76',
				},
			},
			signature:
				'e75fc7167684ca516efb1b0bb43607d142da8f594fe9a75bb97ff6a1d8dbb0d254362061f370df57b6daaea628f7b3663e81f1f41b34478691816c2b0934bf0e',
			id: '2691125843573594092',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '11004588490103196952L',
			senderPublicKey:
				'031e27beab583e2c94cb3167d128fc1a356c1ae88adfcfaa2334abffa3ae0b4c',
			asset: {
				delegate: {
					username: 'genesis_77',
				},
			},
			signature:
				'4b8dbf8ef4c1552ba202738ed1fc99d03479be942e17088c72d9613908b12342fad2f73bfae7ee86326566e7b38e90b0ad1d6fa1175b22823ab48c2c7ce09405',
			id: '11661837377619541981',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '3038510178697972178L',
			senderPublicKey:
				'9986cedd4b5a28e4c81d9b4bff0461dddaa25099df00b8632fe99e88df28ce73',
			asset: {
				delegate: {
					username: 'genesis_78',
				},
			},
			signature:
				'dbfff6583f36d1cf4632cfe752e9424b8fd451441398c54cf6f847cddcb12c3916f6bc670a29ba1d575af7fc97ef93bec7e33aef903c3c0e43736affaad8f606',
			id: '14541242250709962583',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '11506830473925742632L',
			senderPublicKey:
				'03e811dda4f51323ac712cd12299410830d655ddffb104f2c9974d90bf8c583a',
			asset: {
				delegate: {
					username: 'genesis_79',
				},
			},
			signature:
				'ced313ad68a099199ed0378f13a6ce0829a97daef681a7b47daed3f6b3017decd57b6f8455870348951062825c74f1f429800d86365e2b0a0d7d4200383af50d',
			id: '8449655170803795602',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '1156554003019098747L',
			senderPublicKey:
				'64db2bce729e302f6021047dfd39b6c53caf83b42da4b5b881cb153a3fb31613',
			asset: {
				delegate: {
					username: 'genesis_80',
				},
			},
			signature:
				'1e52f1d7408f061c33873ef2a263e87f53dbbf011352f227cc1ab429c06fc081234f9c70c4709c0138aa07c036bd97e82376a474f94fb0772c2123148cafe30f',
			id: '15052254103554055468',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '15675505605575781355L',
			senderPublicKey:
				'f827f60366fae9f9ed65384979de780f4a18c6dbfbefb1c7d100957dde51a06d',
			asset: {
				delegate: {
					username: 'genesis_81',
				},
			},
			signature:
				'7b070c23601db3c607ebb2e783cabec81257ac1771d5bafc6ca1632cacfb38d351352e314421b4340c93f9b11952eacbfab25ee7b3718d71b0ed094702e47c0f',
			id: '18041778424101072784',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '1330932780504881464L',
			senderPublicKey:
				'68680ca0bcd4676489976837edeac305c34f652e970386013ef26e67589a2516',
			asset: {
				delegate: {
					username: 'genesis_82',
				},
			},
			signature:
				'16248af55f629ebce0c2bf78a00d6aca43314f7e0a85d1517a2099b158718cb494643292232fcf391bde7750ecf4d987906f7e6a5573a2e3412b07ce4938f206',
			id: '10297262142051706210',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '2393437289429474816L',
			senderPublicKey:
				'f25af3c59ac7f5155c7a9f36762bd941b9dc9c5c051a1bc2d4e34ed773dd04a3',
			asset: {
				delegate: {
					username: 'genesis_83',
				},
			},
			signature:
				'2ee33f874eb54792d1ec93a91a0323929306427ab2ccdf21c87eaf1aa7913181e37bbeaeacc7a759811ea2c54f32dcd9844aae00893e77f6de78ed74f0794204',
			id: '4578533224252295884',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '9373453086736696113L',
			senderPublicKey:
				'd3e3c8348bca51461eabfc382f8a01e8e284db54104ad37ec0695d48ae5531ac',
			asset: {
				delegate: {
					username: 'genesis_84',
				},
			},
			signature:
				'ccb09f91b0938800558a4aac781a112b240104ca100086ffb68d632cbdbde18f5ce1f81b3da205fdbe2419cf3532ed857bd015d39590528cc63b9429de777e02',
			id: '8967037086873023532',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '13996264772258038665L',
			senderPublicKey:
				'3be2eb47134d5158e5f7d52076b624b76744b3fba8aa50791b46ba21408524c9',
			asset: {
				delegate: {
					username: 'genesis_85',
				},
			},
			signature:
				'14f2bf688dc30a5fa6586e93daa07da7396fb89a9de9374c945446e5813b51238017b0bdbb16d78d7c0debf0899612a2b070952365ecc7861f386558ef104a06',
			id: '7210654822025606558',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '15441829200899900957L',
			senderPublicKey:
				'9f2fcc688518324273da230afff9756312bf23592174896fab669c2d78b1533c',
			asset: {
				delegate: {
					username: 'genesis_86',
				},
			},
			signature:
				'3550a4e9de0266896521d653f4d7c1feed7c1ccf1a368b59cd512bd0345b7a2c85db641c0986b3a6b55634d0c4964a4a3fb34259123e2e01d826132b7a584902',
			id: '2249208419001377172',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '9617151563281131501L',
			senderPublicKey:
				'e818ac2e8e9ffacd2d49f0f2f6739e16711644194d10bb1a8e9e434603125fa1',
			asset: {
				delegate: {
					username: 'genesis_87',
				},
			},
			signature:
				'd09b59c5decf17dc85c445c831b986c4e8507b170dcf58194c5154f6db39f51e85144ac5b4712574b6c1ba52bfe64b7909efaa1da01124c0177503f3bf29ed06',
			id: '6193329527964210071',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '11231201826468807624L',
			senderPublicKey:
				'19d55c023d85d6061d1e196fa440a50907878e2d425bcd893366fa04bc23b4de',
			asset: {
				delegate: {
					username: 'genesis_88',
				},
			},
			signature:
				'ea15ab00d9790ced80393804e6d60b49ba3fbd372884b026773c9cf8ef01ac8b0cafe0f87fa24cdc46fb802c081a433943083f922a6e72c397f7373b8e74250a',
			id: '9547991626350657969',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '8696372244926065755L',
			senderPublicKey:
				'6d462852d410e84ca199a34d7ccad443784471f22cf3de37c531ce3b87ebbc41',
			asset: {
				delegate: {
					username: 'genesis_89',
				},
			},
			signature:
				'b81ac34f5817b03961322395441c50b1274ac57e8099e70849d4dd30a0f55be947fcb06a0e4e0e3f5f2e95cfed141c96638a00aeed8eec6ade844339dc5ffd07',
			id: '14216334331634594439',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '13227119536266737242L',
			senderPublicKey:
				'e6d075e3e396673c853210f74f8fe6db5e814c304bb9cd7f362018881a21f76c',
			asset: {
				delegate: {
					username: 'genesis_90',
				},
			},
			signature:
				'9a9d7cceb82911b1e5d8ea57d505e938285d64cfbfa11d4a4952150f5dc564437b4cea42cd9dd1cb9e9e7fb9ccb03e5abfdff9ac3612403f9ffae94b983ced0f',
			id: '13072526486869193089',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '5179180534922237219L',
			senderPublicKey:
				'0779ca873bbda77f2850965c8a3a3d40a6ee4ec56af55f0a3f16c7c34c0f298b',
			asset: {
				delegate: {
					username: 'genesis_91',
				},
			},
			signature:
				'55eb32659d6792cd271e7255b2e711ebe4ca809f1799dec8b9b2bce6abbe680c0963726779c7a790c1460f78a929abd0ce2b1d87c453c25fa0e629666f4cab05',
			id: '12338516215462019478',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '15357346183081898956L',
			senderPublicKey:
				'73fec19d4bfe361c0680a7cfd24b3f744a1c1b29d932c4d89ce6157679f8af7d',
			asset: {
				delegate: {
					username: 'genesis_92',
				},
			},
			signature:
				'8392a8b1867fa188138ecf01505be756f653db40f95fa957ec5748f90a1630e7a305e161876d2f5c1b22b2b6f4eb6180f389afc94edc5c1a51e95bde6a95d10e',
			id: '14854816644454816461',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '5728878764625100394L',
			senderPublicKey:
				'1e82c7db09da2010e7f5fef24d83bc46238a20ef7ecdf12d9f32e4318a818777',
			asset: {
				delegate: {
					username: 'genesis_93',
				},
			},
			signature:
				'614f4c6bbb0613fe7120f34fb789e286c5c55af37480c64c1faf66e1ef2088303b87e09f53f661f44c0ca322956ae74869f3fb838ffc484fccaa229203f60a0e',
			id: '12881253135777401602',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '15692920659979620367L',
			senderPublicKey:
				'e42bfabc4a61f02131760af5f2fa0311007932a819a508da25f2ce6af2468156',
			asset: {
				delegate: {
					username: 'genesis_94',
				},
			},
			signature:
				'202e8bbf53280c673f42481313c8f324d5818b9218aed1e4ef40134d8fb09f57731acd5b6a0eb5a03b310b72212764367e64cb898c819ed8e80e872b19e5760f',
			id: '4215489645709707133',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '9950029393097476480L',
			senderPublicKey:
				'bf9f5cfc548d29983cc0dfa5c4ec47c66c31df0f87aa669869678996902ab47f',
			asset: {
				delegate: {
					username: 'genesis_95',
				},
			},
			signature:
				'dbba8bad6079ea96f097e0d24219f57079f69dcc8d83400a6dd30703fd2f32ac09d49ac9a7aa5c9e78bb74f0d30bb3a348c33b86ab58763880901c8316245a0b',
			id: '9049043867793253667',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '13047943150548380336L',
			senderPublicKey:
				'b137de324fcc79dd1a21ae39a2ee8eed05e76b86d8e89d378f8bb766afb8719f',
			asset: {
				delegate: {
					username: 'genesis_96',
				},
			},
			signature:
				'6e0060b31b8c2fb0dcf0a1784e66884a32782bedbb4d97edbeb7d5ff42d8beb6dbf537b89ba316a79a60135d772c66caa144c8cf547ef52a4aa6e5d35c71e601',
			id: '14334313647191139952',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '677098303101863197L',
			senderPublicKey:
				'31402977c7eaf9e38d18d0689a45d719d615de941f7e80f6db388453b46f4df5',
			asset: {
				delegate: {
					username: 'genesis_97',
				},
			},
			signature:
				'2a21251ce69eeceb282f57bacec9205581dd80e66c9b835a565b4055d477127e91a1009aeea7a4736b17776283bb225d70ef20e3f865a7fb4611d8a1f47fe50e',
			id: '6037004238012010505',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '68059329122227204L',
			senderPublicKey:
				'f62062b7590d46f382fb8c37a26ab0a1bd512951777aedcaa96822230727d3a1',
			asset: {
				delegate: {
					username: 'genesis_98',
				},
			},
			signature:
				'cf5f32ff69ed4d0f514ed61be9773e420312d5959bb82fc4290c1339dea74812ed1f2a2dfdb3197dc09a84620eebb28519cfa0f18d1df7e20fd8c5a33c274c06',
			id: '13162224626980620634',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '15300035861842713585L',
			senderPublicKey:
				'76c9494237e608d43fd6fb0114106a7517f5503cf79d7482db58a02304339b6c',
			asset: {
				delegate: {
					username: 'genesis_99',
				},
			},
			signature:
				'8e1f6ade038dd982da28952a4931cc03bdbf76f10f99262c53a293b60459f4bad0069edf9ddb810b3b1a9f42616417b6bb886b8b9e5fc79573562a9c3d7ced02',
			id: '16663544868599417891',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '10881167371402274308L',
			senderPublicKey:
				'addb0e15a44b0fdc6ff291be28d8c98f5551d0cd9218d749e30ddb87c6e31ca9',
			asset: {
				delegate: {
					username: 'genesis_100',
				},
			},
			signature:
				'5495bea66b026b0d6b72bab8611fca9c655c1f023267f3c51453c950aa3d0e0eb08b0bc04e6355909abd75cd1d4df8c3048a55c3a98d0719b4b71e5d527e580a',
			id: '8500285156990763245',
		},
		{
			type: 2,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: null,
			senderId: '6726252519465624456L',
			senderPublicKey:
				'904c294899819cce0283d8d351cb10febfa0e9f0acd90a820ec8eb90a7084c37',
			asset: {
				delegate: {
					username: 'genesis_101',
				},
			},
			signature:
				'b6fba2885eacc212f56f0ec0f35af974b278f2a00c9f417a925682dddeedb9025dfdb2ead2a507db9acab8e9451beeca9531405aa16d0b3c56b7346c37b62505',
			id: '7405433372825391963',
		},
		{
			type: 3,
			amount: '0',
			fee: '0',
			timestamp: 0,
			recipientId: '16313739661670634666L',
			senderId: '16313739661670634666L',
			senderPublicKey:
				'c094ebee7ec0c50ebee32918655e089f6e1a604b83bcaa760293c61e0f18ab6f',
			asset: {
				votes: [
					'+9d3058175acab969f41ad9b86f7a2926c74258670fe56b37c429c01fca9f2f0f',
					'+141b16ac8d5bd150f16b1caa08f689057ca4c4434445e56661831f4e671b7c0a',
					'+3ff32442bb6da7d60c1b7752b24e6467813c9b698e0f278d48c43580da972135',
					'+5d28e992b80172f38d3a2f9592cad740fd18d3c2e187745cd5f7badf285ed819',
					'+4fe5cd087a319956ddc05725651e56486961b7d5733ecd23e26e463bf9253bb5',
					'+a796e9c0516a40ccd0eee7a32fdc2dc297fee40a9c76fef9c1bb0cf41ae69750',
					'+67651d29dc8d94bcb1174d5bd602762850a89850503b01a5ffde3b726b43d3d2',
					'+c3d1bc76dea367512df3832c437c7b2c95508e140f655425a733090da86fb82d',
					'+640dfec4541daed209a455577d7ba519ad92b18692edd9ae71d1a02958f47b1b',
					'+3ea481498521e9fb1201b2295d0e9afa826ac6a3ef51de2f00365f915ac7ac06',
					'+5c4af5cb0c1c92df2ed4feeb9751e54e951f9d3f77196511f13e636cf6064e74',
					'+399a7d14610c4da8800ed929fc6a05133deb8fbac8403dec93226e96fa7590ee',
					'+6e904b2f678eb3b6c3042acb188a607d903d441d61508d047fe36b3c982995c8',
					'+1af35b29ca515ff5b805a5e3a0ab8c518915b780d5988e76b0672a71b5a3be02',
					'+d8daea40fd098d4d546aa76b8e006ce4368c052ffe2c26b6eb843e925d54a408',
					'+386217d98eee87268a54d2d76ce9e801ac86271284d793154989e37cb31bcd0e',
					'+86499879448d1b0215d59cbf078836e3d7d9d2782d56a2274a568761bff36f19',
					'+948b8b509579306694c00833ec1c0f81e964487db2206ddb1517bfeca2b0dc1b',
					'+b00269bd169f0f89bd2f278788616521dd1539868ced5a63b652208a04ee1556',
					'+e13a0267444e026fe755ec128858bf3c519864631e0e4c474ba33f2470a18b83',
					'+1cc68fa0b12521158e09779fd5978ccc0ac26bf99320e00a9549b542dd9ada16',
					'+a10f963752b3a44702dfa48b429ac742bea94d97849b1180a36750df3a783621',
					'+f33f93aa1f3ddcfd4e42d3206ddaab966f7f1b6672e5096d6da6adefd38edc67',
					'+b5341e839b25c4cc2aaf421704c0fb6ba987d537678e23e45d3ca32454a2908c',
					'+da673805f349faf9ca1db167cb941b27f4517a36d23b3c21da4159cff0045fbe',
					'+55405aed8c3a1eabe678be3ad4d36043d6ef8e637d213b84ee703d87f6b250ed',
					'+19ffdf99dee16e4be2db4b0e000b56ab3a4e10bee9f457d8988f75ff7a79fc00',
					'+85b07e51ffe528f272b7eb734d0496158f2b0f890155ebe59ba2989a8ccc9a49',
					'+8a0bcba8e909036b7a0fdb244f049d847b117d871d203ef7cc4c3917c94fd5fd',
					'+95ea7eb026e250741be85e3593166ef0c4cb3a6eb9114dba8f0974987f10403f',
					'+cf8a3bf23d1936a34facc4ff63d86d21cc2e1ac17e0010035dc3ef7ae85010dc',
					'+82174ee408161186e650427032f4cfb2496f429b4157da78888cbcea39c387fc',
					'+4bde949c19a0803631768148019473929b5f8661e9e48efb8d895efa9dd24aef',
					'+2f9b9a43b915bb8dcea45ea3b8552ebec202eb196a7889c2495d948e15f4a724',
					'+9503d36c0810f9ac1a9d7d45bf778387a2baab151a45d77ac1289fbe29abb18f',
					'+a50a55d4476bb118ba5121a07b51c185a8fe0a92b65840143b006b9820124df4',
					'+fc8672466cc16688b5e239a784cd0e4c0acf214af039d9b2bf7a006da4043883',
					'+db821a4f828db977c6a8d186cc4a44280a6ef6f54ac18ec9eb32f78735f38683',
					'+ba7acc3bcbd47dbf13d744e57f696341c260ce2ea8f332919f18cb543b1f3fc7',
					'+47c8b3d6a9e418f0920ef58383260bcd04799db150612d4ff6eb399bcd07f216',
					'+d1c3a2cb254554971db289b917a665b5c547617d6fd20c2d6051bc5dfc805b34',
					'+47b9b07df72d38c19867c6a8c12429e6b8e4d2be48b27cd407da590c7a2af0dc',
					'+9a7452495138cf7cf5a1564c3ef16b186dd8ab4f96423f160e22a3aec6eb614f',
					'+c4dfedeb4f639f749e498a2307f1545ddd6bda62e5503ac1832b122c4a5aedf9',
					'+96c16a6251e1b9a8c918d5821a5aa8dfb9385607258338297221c5a226eca5c6',
					'+910da2a8e20f25ccbcb029fdcafd369b43d75e5bc4dc6d92352c29404acc350f',
					'+eabfe7093ef2394deb1b84287f2ceb1b55fe638edc3358a28fc74f64b3498094',
					'+94b163c5a5ad346db1c84edaff51604164476cf78b8834b6b610dd03bd6b65d9',
					'+6164b0cc68f8de44cde90c78e838b9ee1d6041fa61cf0cfbd834d76bb369a10e',
					'+3476bba16437ee0e04a29daa34d753139fbcfc14152372d7be5b7c75d51bac6c',
					'+01389197bbaf1afb0acd47bbfeabb34aca80fb372a8f694a1c0716b3398db746',
					'+aa33af13b440746b4f24312cba5fa910eb077ce6b16b84ebb482cb7720b5c686',
					'+6f04988de7e63537c8f14e84b0eb51e0ea9c5da8b4b9256243b3e40b1aeccb76',
					'+07935c642c7409c365258c8488760e96a851cee618aec72eeeb135c9c827f0f9',
					'+526931663cbee883ff22369172cba091a5dd5fa1200284fa790d7aeca53d37af',
					'+f7b9751d59dd6be6029aa36a81a3f6436e2970cf4348845ab6254678fb946c18',
					'+5f6cc5a8aac752d37c676b0d46a798f7625e37dfa1e96091983274e04ab7ffe2',
					'+9c16751dbe57f4dff7b3fb8911a62c0cb2bdee6240e3f3fefe76832788cb14c6',
					'+ba2ea5e324eeb42fa6f4d1132a1d79911721e8507033bb0abd49715f531877b4',
					'+0186d6cbee0c9b1a9783e7202f57fc234b1d98197ada1cc29cfbdf697a636ef1',
					'+edbb9828fbe62da2a59afbc8623e8ebc5ed2f9b7f77a0cd1cdcf55edea30521c',
					'+b6ac700bf890b887e218dbd55b8f6b091dfc5a684d0fd7a6f69db7dc0313b51b',
					'+62bbb3c41e43df73de2c3f87e6577d095b84cf6deb1b2d6e87612a9156b980f8',
					'+6fb2e0882cd9d895e1e441b9f9be7f98e877aa0a16ae230ee5caceb7a1b896ae',
					'+9a0f19e60581003b70291cf4a874e8217b04871e676b2c53c85a18ab95c2683b',
					'+1e6ce18addd973ad432f05f16a4c86372eaca054cbdbcaf1169ad6df033f6b85',
					'+27f43391cca75cbc82d1750307649508d1d318cd015f1f172b97318f17ab954e',
					'+644a971f2c0d0d4b657d050fca27e5f9265e3dfa02a71f7fbf834cc2f2a6a4c8',
					'+cdd68a321ea737e82bce23d2208040f79471d36f2e6f84c74ea36ab26245e522',
					'+f9f6ff873c10c24eba834be28a56415a49c9c67b7c0ee9f106da827847168986',
					'+fab7b58be4c1e9542c342023b52e9d359ea89a3af34440bdb97318273e8555f0',
					'+1b5a93c7622c666b0228236a70ee1a31407828b71bfb6daaa29a1509e87d4d3c',
					'+74583aba9c0b92e4f08c8c75e6df341c255ca007971195ff64d6f909dc4b7177',
					'+2b6f49383af36fd9f1a72d5d2708c8c354add89aaea7edc702c420e2d5fdf22e',
					'+a10ed9c59dac2c4b8264dc34f2d318719fb5f20ecdd8d6be2d7abfe32294f20d',
					'+c61d0822bbdbfe2a0b5503daff0ce8441c623115c94c0cfcf047a51f8b7160d3',
					'+031e27beab583e2c94cb3167d128fc1a356c1ae88adfcfaa2334abffa3ae0b4c',
					'+9986cedd4b5a28e4c81d9b4bff0461dddaa25099df00b8632fe99e88df28ce73',
					'+03e811dda4f51323ac712cd12299410830d655ddffb104f2c9974d90bf8c583a',
					'+64db2bce729e302f6021047dfd39b6c53caf83b42da4b5b881cb153a3fb31613',
					'+f827f60366fae9f9ed65384979de780f4a18c6dbfbefb1c7d100957dde51a06d',
					'+68680ca0bcd4676489976837edeac305c34f652e970386013ef26e67589a2516',
					'+f25af3c59ac7f5155c7a9f36762bd941b9dc9c5c051a1bc2d4e34ed773dd04a3',
					'+d3e3c8348bca51461eabfc382f8a01e8e284db54104ad37ec0695d48ae5531ac',
					'+3be2eb47134d5158e5f7d52076b624b76744b3fba8aa50791b46ba21408524c9',
					'+9f2fcc688518324273da230afff9756312bf23592174896fab669c2d78b1533c',
					'+e818ac2e8e9ffacd2d49f0f2f6739e16711644194d10bb1a8e9e434603125fa1',
					'+19d55c023d85d6061d1e196fa440a50907878e2d425bcd893366fa04bc23b4de',
					'+6d462852d410e84ca199a34d7ccad443784471f22cf3de37c531ce3b87ebbc41',
					'+e6d075e3e396673c853210f74f8fe6db5e814c304bb9cd7f362018881a21f76c',
					'+0779ca873bbda77f2850965c8a3a3d40a6ee4ec56af55f0a3f16c7c34c0f298b',
					'+73fec19d4bfe361c0680a7cfd24b3f744a1c1b29d932c4d89ce6157679f8af7d',
					'+1e82c7db09da2010e7f5fef24d83bc46238a20ef7ecdf12d9f32e4318a818777',
					'+e42bfabc4a61f02131760af5f2fa0311007932a819a508da25f2ce6af2468156',
					'+bf9f5cfc548d29983cc0dfa5c4ec47c66c31df0f87aa669869678996902ab47f',
					'+b137de324fcc79dd1a21ae39a2ee8eed05e76b86d8e89d378f8bb766afb8719f',
					'+31402977c7eaf9e38d18d0689a45d719d615de941f7e80f6db388453b46f4df5',
					'+f62062b7590d46f382fb8c37a26ab0a1bd512951777aedcaa96822230727d3a1',
					'+76c9494237e608d43fd6fb0114106a7517f5503cf79d7482db58a02304339b6c',
					'+addb0e15a44b0fdc6ff291be28d8c98f5551d0cd9218d749e30ddb87c6e31ca9',
					'+904c294899819cce0283d8d351cb10febfa0e9f0acd90a820ec8eb90a7084c37',
				],
			},
			signature:
				'9f9446b527e93f81d3fb8840b02fcd1454e2b6276d3c19bd724033a01d3121dd2edb0aff61d48fad29091e222249754e8ec541132032aefaeebc312796f69e08',
			id: '9314232245035524467',
		},
	],
	height: 1,
	blockSignature:
		'c81204bf67474827fd98584e7787084957f42ce8041e713843dd2bb352b73e81143f68bd74b06da8372c43f5e26406c4e7250bbd790396d85dea50d448d62606',
	id: '6524861224470851795',
};

function generateTestCasesForValidBlock() {
	const secondBlock = utils.blocks.create(genesisBlock, {});
	const newBlock = utils.blocks.create(secondBlock, {});

	return {
		initialState: {
			chain: [genesisBlock, secondBlock],
		},
		input: newBlock,
		output: {
			chain: [genesisBlock, secondBlock, newBlock],
			accounts: [],
		},
	};
}

function generateTestCasesForInvalidBlock() {}

function validBlockSuite() {
	return {
		title: 'Valid block processing',
		summary: '',
		config: 'mainnet',
		runner: 'block_processing',
		handler: 'valid_block_processing',
		testCases: generateTestCasesForValidBlock(),
	};
}

function invalidBlockSuite() {
	return {
		title: 'Invalid block processing',
		summary: '',
		config: 'mainnet',
		runner: 'block_processing',
		handler: 'invalid_block_processing',
		testCases: generateTestCasesForInvalidBlock(),
	};
}

module.exports = BaseGenerator.runGenerator('block_processing', [
	validBlockSuite,
	invalidBlockSuite,
]);
