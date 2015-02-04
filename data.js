var sourceData = {
	scoreData: [
		{name: 'Dragonite小D', permanent: true, historyScore: 332, recent: [4, 5, 4, 6, 5, 6, 6, 6, 4, 5, 5, 2, 4, null, null, null, null, null, null, null, null, 4, 5, 6, 6, 5, 5, 3, 6, 5, 6, 6, 5, 6, 6, 6, 5, 5, 6, 6, 6, 5, 4, 5, 5, 4, 6, 6, 6, 5, 2, 6, 6, 6, 6, 6, 4, 6, 5, 6, 5, 6, 6, 6, 5, 6, 6, null, 4]},
		{name: 'Frostwyrms', permanent: false, historyScore: 440, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 6, 5, 3, 4, 6, null, null, null, null, 4, 6, 4, 3, 5, 2, 3, 6, 6, 3, 6, 6, 5, 6]},
		{name: '调皮狸的梦之城堡', permanent: true, historyScore: 236, recent: [4, 2, 4, 4, 5, 5, 4, 5, 2, 5, 5, 6, 4, 6, 3, 4, 6, 5, 6, 6, 4, 3, 4, 5, 2, 5, 4, 5, 5, 6, 3, 5, 4, 5, 2, 5, 5, 3, 6, 4, 6, 6, 4, 6, null, 4, 2, 6, 6, 6, 5, 5, 4, 6, 3, 6, 3, 6, 4, 4, 4, 4, 6, 5, 5, 3, 5, 2, 6]},
		  {name: '九因白故障', permanent: false, historyScore: 339, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 3]},
		{name: '海洋之心', permanent: true, historyScore: 237, recent: [0, 3, 2, 4, 5, 3, 3, 6, 6, 5, 0, 0, 3, 0, 4, 5, 5, 3, 6, 2, 2, 5, 0, 5, 4, 3, 5, 3, 6, 2, 2, 2, 6, 0, 5, 5, 3, 6, 2, 6, 5, 6, 6, 3, 3, 2, 2, 0, 3, 6, 3, 2, 0, 3, 3, 3, 0, 3, 2, 6, 3, 3, 3, 4, 2, 5, 0, null, 1]},
		  {name: 'ni zai', permanent: true, historyScore: 232, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 1, 3, 2, 4, 5, 4, 3, 3, 2, 2, 1, 0, 3, null, null, null, null, null, null, null, null, null, null, 4, 5, 6, 4, null, null, null, null, null, null, 3, null, 6]},
		{name: '绝隐村', permanent: true, historyScore: 77, recent: [6, 6, 6, 5, 1, null, null, 5, 6, 4, 3, 1, 3, 4, 3, 4, 4, 2, 6, 3, 2, 4, 0, 1, 4, 2, 5, 4, 2, 4, 4, 2, 2, 2, 1, 5, 2, 1, 3, 0, 4, 2, 0, 3, 3, 4, 1, 2, 3, 4, 0, null, 4, null, 1, 5, 0, null, 2, 1, 0, 6, 4, 3, 4, 6, 5, 3, 2]},
		{name: 'zzzzf', permanent: true, historyScore: 260, recent: [2, 2, 2, 3, 2, 5, 2, 1, 5, 5, 2, 1, 0, 6, 2, 2, 2, 5, 4, 0, 6, 5, 2, 2, 5, 3, 3, 6, 2, 3, 2, 2, 4, 0, 6, 3, 5, 3, 3, 6, 5, 4, 4, 2, 0, 2, 4, 2, 3, 6, 6, 4, 6, 6, 6, 4, 3, 5, 3, 2, 2, 6, 5, 0, 0, 2, 0, 3, 0]},
		  {name: '+ Arcobaleno +', permanent: false, historyScore: 153, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 4]},
		{name: '索伦堡', permanent: true, historyScore: 262, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 5, 3, 4, 4, 4, 1, 5, 4, 3, 5, 6, 2, 3, 3, 6, 6, 2, null, null, null, null, 2, 5, 3, 3, 6, 4, 5, 5]},
		{name: 'Zoo', permanent: true, historyScore: 174, recent: [5, null, 0, null, 0, 6, 4, 6, 3, 2, 3, 3, 0, 4, 4, 2, 4, 4, 3, 5, 5, 2, 2, 3, 1, 6, 6, 1, 3, 0, 3, 6, 6, 0, 6, 3, 6, 6, 3, 3, 6, 5, 6, 6, 5, 5, 3, 3, 1, 3, 3, 6, 6, 6, 5, 5, 5, 6, 6, 5, 5, 6, 1, 4, 1, 5, 4, 5, 5]},
		{name: '<#0小宇0#>', permanent: true, historyScore: 114, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 6, 5, 5, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 6, 6, 6, 5]},
		  {name: '华中村', permanent: false, historyScore: 283, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 3, 2, 5, null, null, null, null, null, 6, 6, 0, 3, null, null, null, null, null, null, null]},
		  {name: 'bad apple', permanent: false, historyScore: 201, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 5]},
		  {name: '猛龙过海', permanent: false, historyScore: 236, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 2]},
		{name: '罪恶城堡', permanent: false, historyScore: 165, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 6, 5, 5, 5, 6, 3, null, null, null, null, null, null, null, null, null, null, null, null, null, 2, 3, 5, 4, 3]},
		{name: 'li', permanent: true, historyScore: 122, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 5, 3, 3, 5, 4, 2, 3, 4, 4, 5, 2, 0, 2, 5, 6, 3, 6, 6, 6, 5, 5, 3, 2, 3, null, 0, 2, 4, 0, 3, 6, 0, 3, 4, 0, 0, 0]},
		{name: '天下大势为我所用', permanent: true, historyScore: 247, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 6, 5, 6, 6]},
		{name: 'TTK', permanent: true, historyScore: 217, recent: [5, 6, 5, 6, 3, 6, 4, 4, 4, 4, 5, 4, 5, 6, 4, 5, 6, 4, 4, 3, 5, 5, 6, 3, 1, 6, 3, 6, 3, 3, 6, 1, 3, 6, 5, 5, 1, 6, 4, 5, 4, 3, 3, 3, 6, 2, 5, null, null, null, null, null, null, null, 3, 3, 3, 0, 1, 5, 2, 4, 6, 6, 6, 3, 6, 5, 6]},
		{name: 'vic shi', permanent: true, historyScore: 209, recent: [3, 1, 2, 5, 6, 6, 3, 4, 2, 3, 0, 0, 4, 6, 2, 6, 2, 2, 3, 4, 3, 4, 3, 5, 6, 4, 5, 0, 0, 2, 1, 0, 2, 3, 3, 5, 2, 3, 3, 3, 2, 0, 2, 3, 6, 3, 4, 4, 3, 3, 0, 0, 6, 0, null, 2, 0, 2, 4, 0, 6, 0, 2, 0, 3, 2, 1, 0, 3]},
		{name: '*> 黯淡 <*', permanent: true, historyScore: 141, recent: [6, 6, 4, 5, 4, 6, 5, 6, 5, 6, 6, 6, 2, 4, 6, 3, 1, 2, 2, 4, 3, 6, 5, 6, 4, 5, 6, 6, 5, 5, 6, 5, 5, 5, 6, 6, 3, 2, 5, 4, 3, 4, 6, 5, 6, 2, 5, 4, 3, 3, 4, 6, 3, 5, 4, 6, 4, 5, 4, 4, 6, 5, 0, 6, 6, 5, 4, 4, 3]},
		{name: '喝咖啡不加香菜的毛毛部落', permanent: true, historyScore: 138, recent: [6, 6, 6, 6, 5, 5, 6, 6, 4, 5, 6, 0, 6, 3, 3, 6, 6, 0, 5, 5, 6, 6, 6, 5, 5, 5, 6, 6, 0, 0, 4, 6, 6, 5, 4, 6, 6, 6, 6, 6, 0, null, 4, 5, 2, 4, 3, 6, 4, 6, 5, 4, 6, 5, 6, 4, 6, 2, 3, 4, 6, 6, 6, 6, 5, 5, 5, 5, 5]},
		{name: 'sophiezhong1', permanent: true, historyScore: 25, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 5, 3, 3, 2, 3, 6, 3, 5, 5, 6, 4, 5, 3, 4, 4, 5, 3, 1, 2, 6, 4, 5, 3, 2, 6, 5, 0, 0, 5, 0, 3, 0, 1, 0, 0, 3, 5, 4, 0, 5, 0, 4, 5, 2, 0, 2, 0, 0, 6, null, 0, 3, 3, 5]},
		{name: '樟树', permanent: false, historyScore: 108, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 3, 3, 2, 4, 5, 5, 6, 3, 3, 1, 3, 0, 5, 5, 3, 2, 0, 5, 3, 3, 3, 3]},
		{name: '麦兜窝窝', permanent: false, historyScore: 0, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 0, 0, 0, 0, 0, null, null, null, null, 4, 1, 3, 2, 0, 0, 4, 0, 1, 0, 4, 3, 3, 0, 3, 0, 3, 3, 3, 3, 1, 0, 3, 3, 6, 1, 2, 0, 6, 6, 0, 6, 6, 5, 0, 6, 5, 6, 0, 3, 5, 2, 3]},
		{name: '遥远的理想乡', permanent: true, historyScore: 0, recent: [0, null, null, null, null, null, null, 5, 0, 0, 3, null, null, 1, 1, 5, 4, 3, 1, 3, 4, 1, 3, 4, 3, 2, 3, 5, 5, 6, 0, 6, 5, 4, 1, 6, 3, 5, 5, 5, 3, 2, 6, 6, 6, 4, 5, 5, 2, 3, 2, 3, 2, 5, 1, 6, 5, 3, 5, 4, 4, 3, 2, 4, 6, 4, 3, 3, 4]},
		{name: '龙城', permanent: false, historyScore: 91, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 3, 3, 6, 3, 4, 4, 5, 3, 3, 3, 3, 3, 3]},
		{name: '我的村庄', permanent: true, historyScore: 0, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 3, 2, 1, 3, 0, 0, null, null, null, 4, 4, 3, 4, 5, 4, 1, 6, 5, 4, 2, 6, 5, 3, 6, 3, 5, 6, 1, 2, 2, 3, 0, null, 6, null, 6]},
		{name: 'cooky', permanent: true, historyScore: 59, recent: [0, 0, 0, 0, null, 0, null, 3, null, null, null, null, null, null, 0, 3, 2, 5, 3, 5, 0, 5, 3, 0, 3, 0, 0, null, 6, 3, 6, 3, 0, 3, 3, 6, 6, 3, 5, 5, 3, 6, null, 0, 0, null, 4, 6, 3, 0, 0, 6, 0, 3, 3, 6, 5, 6, 6, 3, 3, 6, 6, 3, 1, 0, 0, 6, 6]},
		{name: '小D捐兵', permanent: true, historyScore: 0, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, 2, null, 0, 4, 0, null, 4, 6, 6, 2, 6, 5, 6, 4, 6, 6, 6, 6, 5, 3, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 3, 0, 6, 6, 0, 0, null, 4, 4, 3]},
		{name: 'rouerdon', permanent: true, historyScore: 0, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, null, null, null, 0, 0, 3, null, 6, 0, 6, 5, 5, 6, 0, 0, 2, 2, 6, 3, 0, 0, 4, 5, 6, 0, 2, 3, 6, 1, 2]},
		{name: '_MR.MJ_', permanent: true, historyScore: 0, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 0, 0, 0, 0, 3, null, 0, null, null, null, 0, 1, 0, 2, 0, null, 0, null, 3, 1, 2, 3, 0, 0, 6, 2, 3, 0, 0, null, 0, 0, 3]},
		{name: 'Ｘter', permanent: false, historyScore: 3, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, null, 3, 6, null, 3, null, 5, 6, 6, null, 6, 3, 6, 3, 6, 6]},
		{name: 'MY TOWN', permanent: true, historyScore: 0, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 0, null, 0, 5, 0, 0, 3, 0, 1, 0, 0, 0, 0, 3, null, null, null, 1, 1, null, 0, 5, 2, 5, 0, 6, 0, 0, 3, 0, 0, 2, 0, 0, 0, 0]},
		{name: '田小歪', permanent: true, historyScore: 0, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 0, null, 0, 2, 0, null, null, null, null, null, null, null, null, null, null, 0, null, 3, 2, null, 0, null, null, null, null, null, 0, null, null, 0, null, null, null, null, null, null, null, null, null, null, 3, null, null, 6, null, null, null, null, null, null, null, null]},
		{name: '急速RUN', permanent: false, historyScore: 0, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 0, null, 1, 0, 0, 2, 3, 1, 6, 3, 0, 0, null, 0]},
		{name: '览胜', permanent: false, historyScore: 0, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, null, null, null, null, null]},
		{name: 'Young 829', permanent: false, historyScore: 0, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 1, null, 0]},

			{name: 'leestar', permanent: true, historyScore: 105, recent: [null, null, null, null, null, null, null, null, null, null, null, 2, 1, null, 3, 1, 3, 4, 5, 4, 2, 2, 4, 2, 3, null, null, 2, 4, 0, 4, 4, 5, 2, 3, 6, 5, 1, 5, 5, 3, 2, 2, 6, 3, 5, 3, 2, 6, 3, 4, 3, 5, 3, 6, 1, 4, 4, 3, 1, 3, 3, 3, 6, null, 1, 3, null, null]},
			{name: '软软的床', permanent: true, historyScore: 253, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 3, 5, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 3, 3, 2, null, null]},
			{name: '一叶知秋', permanent: false, historyScore: 232, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 5, 5, 2, 2, 5, 2, 1, 1, 3, 1, 0, null, null]},
			{name: '丰臀人妻', permanent: false, historyScore: 143, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 3, 0, 0, 0, 3, null, null]},
			{name: 'lennan', permanent: true, historyScore: 0, recent: [1, null, 4, 5, 3, 6, 6, 6, 2, 6, null, null, null, 6, 6, 4, 6, 6, 5, 6, 5, 4, 3, 6, 5, 3, 0, 3, 0, 6, 0, 4, 6, 1, 5, 5, 3, 6, 6, 6, 3, null, null, null, null, null, null, 0, 3, 3, 6, 0, 3, 3, 6, 3, 3, 0, 3, 6, 0, 0, 3, 0, 0, null, null, null, null]},
			{name: '绝情谷', permanent: true, historyScore: 244, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 3, 4, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 3, 1, null, null, null, null, null, null, null, null, null, null]},
			{name: '艾欧尼亚', permanent: false, historyScore: 114, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 5, 4, 3, 3, null, null, null, null, 3, 2, 3, 5, 6, 1, 3, null, null, null, null, null, null, null, null, null, null, null, 5, 6, 1, 0, null, null, null, null, null, null, null, null, null, null, null, null]},
			{name: 'tHeStariNyOu', permanent: true, historyScore: 124, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 5, 5, 3, 2, 4, 2, 5, 3, 5, 4, 5, 3, 2, 2, 4, 4, 1, 4, 0, 1, 3, 3, 5, 2, 6, 2, 5, 0, 3, 0, 0, 5, 3, 3, 3, 5, 0, null, null, null, null, null, null, null, null, null, null, null, null, null]},
			{name: 'Boes', permanent: true, historyScore: 236, recent: [0, 0, 3, 5, 0, 6, 0, 4, 2, 0, 3, 6, 0, 6, 2, 0, 6, 3, 3, 3, 3, 6, 4, 0, 1, 6, 4, 3, 6, 0, 5, 3, 3, 0, 5, 6, 3, 3, 3, 0, 3, 3, 0, 5, 0, 3, 0, 3, 6, 3, 3, 3, 3, 3, 3, 3, null, null, null, null, null, null, null, null, null, null, null, null, null]}

		// {name: '沙巴克', permanent: true, historyScore: 229, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 6, 1, 2, 6, 5, 6, 3, 4, 6, 3, 4, 6, 5, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]},
		// {name: '白银城', permanent: true, historyScore: 280, recent: [4, 2, 0, 3, 3, 3, 2, 5, 4, 0, 0, 4, 0, 4, 0, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]},
		// {name: 'jamie', permanent: true, historyScore: 229, recent: [1, 4, 5, 4, 2, 3, 1, 0, null, null, 2, 2, 1, 2, 5, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]},
		// {name: 'Kenny克莱儿', permanent: true, historyScore: 151, recent: [2, 3, 2, 2, 4, 0, 3, 4, 6, 1, 2, 4, 2, 1, 2, 2, 3, 2, 3, 3, 2, 4, 0, 0, 4, 2, 3, 3, 0, null, null, 3, 3, 0, 2, 3, 2, 2, 2, 0, 0, 1, 4, 3, 0, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]},
		// {name: 'PigCharlie', permanent: true, historyScore: 40, recent: [4, 4, 5, 4, 4, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 3, 3, 3, 3, 5, 3, 0, 0, 3, 3, 0, 2, 5, 3, 0, 0, 0, 0, 0, 0, 0, 5, null, 0, 0, null, 0, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]},
		// {name: 'YANG', permanent: false, historyScore: 133, recent: [null, null, null, null, null, null, null, null, 5, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 3, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]},
		// {name: 'f du wireless', permanent: false, historyScore: 147, recent: [null, null, null, null, null, null, null, null, 5, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, null, null, null, null, null, null, null, null, null, null, null, null, null]},
		// {name: 'Richard（大）', permanent: true, historyScore: 198, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 5, 2, 3, 3, 4, 5, 3, 1, 3, 1, 3, 1, 4, 3, 4, 5, 5, 4, 3, null, 2, 0, null, 5, 4, 6, 2, 5, null, null, null, 3, null, null, null, null, null, null, null, null, null]},
		// {name: 'Richard（小）', permanent: true, historyScore: 82, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 3, 3, 3, 0, 2, 0, 3, 0, 0, null, null, 0, 0, 6, null, 5, 2, 6, 3, 0, null, null, 3, 3, 0, 0, 0, 6, null, null, 0, null, null, null, null, null, null, null, null, null, null]},
		// {name: 'cyc', permanent: true, historyScore: 0, recent: [3, 3, 0, 0, null, 3, null, null, null, null, null, null, null, null, null, null, 3, 3, 2, 6, 2, null, null, null, null, 0, 0, null, null, null, null, null, null, null, null, 2, 0, 0, null, null, null, null, null, null, null, null, 0, null, 0, null, null, null, null, null, null, null, null, null, null, null]},
		// {name: 'LOVE', permanent: false, historyScore: 95, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 1, null, 2, null, 0, 1, 0, 0, 0, 0, 3, 5, 5, 3, 6, null, 3, 2, 0, 2, 3, 3, null, null, null, null, null, null, null, null, null, null, null, null, null]},
		// {name: '罪恶族', permanent: false, historyScore: 3, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 0, null, null, null, null]}

		// {name: 'blank tony', permanent: false, historyScore: 51, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 1, null, null]},
		// {name: '东...', permanent: false, historyScore: 167, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 4, 3, null]},
		// {name: '皇族', permanent: false, historyScore: 22, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 0, 0, null, null]},
		// {name: 'faeries', permanent: false, historyScore: 296, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 6, 6]},
		// {name: '哈哈哈', permanent: false, historyScore: 205, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null]},
		// {name: '奥格瑞玛', permanent: true, historyScore: 173, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 3, 0, null, null]},
		// {name: '黑客帝国', permanent: true, historyScore: 277, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 4, 5, 3, null, null]},
		// {name: '李氏部落', permanent: true, historyScore: 271, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 2, 1, null, null, null]},
		// {name: '阳光生活', permanent: true, historyScore: 184, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 4, 0, 1, null, null]},
		// {name: '龙城', permanent: true, historyScore: 162, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 3, 3, 3, 0]},
		// {name: '哭泣的刀', permanent: true, historyScore: 118, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 3, 2, 0, null, null]},
		// {name: '停靠的港湾', permanent: true, historyScore: 211, recent: [2, 2, 1, 2, 4, 3, 0, null, null, 2, 2, 2, null, 1, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 4, null, null, null, null]},
		// {name: 'lin', permanent: true, historyScore: 127, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 4, 3, 4, null, null]},
		// {name: '(*枫*)', permanent: true, historyScore: 193, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 2, 0, 1, null, null]},
		// {name: 'gaolaozhuang', permanent: true, historyScore: 85, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 3, 3, 6, 2, 6, 3, 6, 3, 5, 0, 2, 0, 0, 0, null, null, null, null, null, null, null, null, null, null, null, null]},
		// {name: '愕、文哥', permanent: true, historyScore: 130, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 3, 3, 0, 3, 0, null, null, null, null, null]},
		// {name: '御天阁', permanent: true, historyScore: 31, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 1, 4, 4, null, null]},
		// {name: '木鱼寨', permanent: true, historyScore: 0, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 5, 6, 0, 0, 3, 1, 3, 0, 3, 0, 0, null, 0, 3, 0, 4, 0, 3, 0, 6, 0, 0, 0, 3, 0, 0]},
		// {name: '我的村庄叫做......', permanent: true, historyScore: 14, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 3, 3, 3, 1, 5, 5, null, null, null, null, null]},
		// {name: 'tf', permanent: false, historyScore: 150, recent: [2, 2, null, 0, 5, 0, 0, 0, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]},
		// {name: 'Anson的世界很简单', permanent: false, historyScore: 94, recent: [null, null, null, null, null, null, null, null, 0, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]},
		// {name: 'weikeHome', permanent: false, historyScore: 208, recent: [5, null, 3, 6, 3, 3, 0, 5, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]},
		// {name: '梦星海岸', permanent: false, historyScore: 120, recent: [null, 0, 1, 3, 0, 3, 0, 0, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]},
		// {name: 'LB', permanent: false, historyScore: 60, recent: [null, null, null, null, null, null, null, 5, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]},
		// {name: 'poke', permanent: false, historyScore: 27, recent: [null, null, null, null, null, null, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]},
		// {name: 'super丿狂爷', permanent: false, historyScore: 37, recent: [null, null, null, null, null, null, null, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]},
		// {name: '[ sumomo ]', permanent: false, historyScore: 49, recent: [0, 6, null, null, null, null, 3, 0, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]},
		// {name: 'vita di bagnore', permanent: false, historyScore: 0, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, 0, 0, 0, 0, 0, 0, null, null]},
		// {name: 'jack', permanent: false, historyScore: 83, recent: [null, null, 0, 3, 3, 3, 2, 3]},
		// {name: '天天向上', permanent: false, historyScore: 88, recent: [null, null, null, null, null, null, 1, 6]},
		// {name: '啊克西斯', permanent: false, historyScore: 27, recent: [null, null, null, null, null, null, 5, 2]},
		// {name: 'plutowhl', permanent: false, historyScore: 163, recent: [null, null, null, null, null, null, null, 2, null, null]},
		// {name: '次头呱腦', permanent: false, historyScore: 147, recent: [0, 1, 4, 0, null, 0, 1, 3, null, null]},
		// {name: '浩天城', permanent: false, historyScore: 127, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 4, 4, 5]},
		// {name: '爱心堡', permanent: false, historyScore: 128, recent: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 5, 3, 4]},
		// {name: '以德服人', permanent: false, historyScore: 171, recent: [null, 2, 0, 2, null, 3, 3, 2]},
		// {name: '时好时坏', permanent: false, historyScore: 119, recent: [2, 2, 0, 6, 3, 3, 0, 3]},
		// {name: '龙皇', permanent: false, historyScore: 17, recent: [null, 6, 3, 6, 6, 0, null, 0, null, null]},
		// {name: '哈哈', permanent: false, historyScore: 135, recent: [null, null, null, null, null, null, null, 0]},
		// {name: 'king of war', permanent: false, historyScore: 4, recent: [null, 4, 2, 6, 3, 2, 3, 2, null, null, null, null, null]},
		// {name: '外山谷', permanent: false, historyScore: 0, recent: [null, 3, 3, 0, 6, 2, 0, 0, null, null, null, null, null]},
		// {name: '你妹的秘密花园', permanent: false, historyScore: 0, recent: [4, null, null, 3, null, null, null, null]},
		// {name: '喵星人城堡', permanent: false, historyScore: 8, recent: [5, 1, 0, 2, 1, 6, 0, 3]},
		// {name: '闽西美家园', permanent: false, historyScore: 0, recent: [4, 2, 2, 4, null, 6, 4, 4, 0, 2, 5, 2, 3]},
		// {name: '果园新村', permanent: false, historyScore: 0, recent: [null, null, null, null, 0, null, 0, 3, null, null, null, 0, 0]},
		// {name: 'wonderland(大)', permanent: false, historyScore: 28, recent: [0, 3, 6, 0, 0, 6, 3, 0, null, null]},
		// {name: 'wonderland(小)', permanent: false, historyScore: 7, recent: [3, 5, 1, 3, 6, 0, null, null]},
		// {name: '轩辕', permanent: false, historyScore: 11, recent: [0, null, null, null, null, null]},
		// {name: '猫咪家园', permanent: false, historyScore: 10, recent: [4, 3, null, null, null, 5, 4, 3]},
		// {name: '菠萝菠萝蜜', permanent: false, historyScore: 0, recent: [0, 0, 1, 0, null, null, 1, 6, null, 1, 0, null, 0]},
		// {name: '与君同乐_kyo', permanent: false, historyScore: 0, recent: [0, 0, null, null, null, 0, null, 0, null, null, null, null, null]},
		// {name: '漫步云端', permanent: true, historyScore: 6, recent: [2, 0, 2, 0, 0, 4, 6, 6, 0, 3, 3, 6, 4, 0, 0, 0, 3, 6, 3, 0, 1, 0, 3, 0, 0, null, null, null, null, null, null, null, null]},
	

	],
	recordDate: ['9/6', '9/8', '9/10', '9/12', '9/15', '9/17', '9/19', '9/23', '9/25', '9/27', '9/29', '10/1', '10/5', '10/9', '10/11', '10/13', '10/15', '10/17', '10/19', '10/21', '10/24', '10/26', '10/28', '10/30', '11/1', '11/3', '11/5', '11/7', '11/9', '11/11', '11/13', '11/15', '11/17', '11/19', '11/21', '11/23', '11/25', '11/27', '11/30', '12/2', '12/4', '12/6', '12/9', '12/11', '12/13', '12/15', '12/17', '12/20', '12/22', '12/24', '12/26', '12/28', '12/30', '1/2', '1/4', '1/6', '1/8', '1/11', '1/13', '1/15', '1/18', '1/20', '1/22', '1/24', '1/26', '1/28', '1/30', '2/1', '2/4']
};
