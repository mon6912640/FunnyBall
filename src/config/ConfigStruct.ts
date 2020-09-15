/**
 * B-BOSS玩法排行奖励表.xlsx
 * 表名 bossRankReward
 * 此文件由工具生成，请勿自行添加代码
 */
type bossRankRewardCfg = {
	/** ID */
	id:number;
	/** 类型 */
	bossId:number;
	/** 排行范围 */
	rank:number;
	/** 奖励 */
	reward:string;
}
/**
 * B-BOSS玩法表.xlsx
 * 表名 boss
 * 此文件由工具生成，请勿自行添加代码
 */
type bossCfg = {
	/** 关卡id */
	id:number;
	/** 关卡名称 */
	name:string;
	/** 模型id */
	modelId:number;
	/** 关卡类型 */
	type:number;
	/** 开启条件 */
	openLv:number;
	/** 怪物配置 */
	monsterId:number;
	/** 击杀奖励 */
	reward:string;
	/** 首通奖励 */
	firstReward:string;
	/** 挑战消耗 */
	itemCost:string;
	/** 挑战奖励 */
	fightReward:string;
	/** 复活时间 */
	returnTime:number;
}
/**
 * B-Buff表.xlsx
 * 表名 buff
 * 此文件由工具生成，请勿自行添加代码
 */
type buffCfg = {
	/** buff_id */
	id:number;
	/** buff类型 */
	type:number;
	/** 触发概率 */
	probability:number;
	/** buff时长 */
	time:number;
	/** buff对象 */
	target:number;
	/** 对象数量 */
	targetcount:number;
	/** 效果类型 */
	effectType:number;
	/** 效果参数 */
	effectParam:string;
	/** 执行方式 */
	execType:number;
	/** buff特效 */
	effectId:number;
}
/**
 * B-兵符-升星表-amuletStar.xlsx
 * 表名 amuletStar
 * 此文件由工具生成，请勿自行添加代码
 */
type amuletStarCfg = {
	/** 编号id */
	id:number;
	/** 兵符id */
	amuletId:number;
	/** 星级 */
	star:number;
	/** 所需材料 */
	cost:number;
	/** 升星属性 */
	property:string;
	/** 是否传闻 */
	isBroadcast:number;
}
/**
 * B-兵符-突破表-amuletBreak.xlsx
 * 表名 amuletBreak
 * 此文件由工具生成，请勿自行添加代码
 */
type amuletBreakCfg = {
	/** 编号id */
	id:number;
	/** 品质 */
	color:number;
	/** 突破等级 */
	level:number;
	/** 等级限制 */
	limit:number;
	/** 升级次数 */
	nums:number;
	/** 单次消耗增加属性 */
	property:string;
	/** 当阶加成属性比 */
	starRate:number;
	/** 突破消耗 */
	costGoods1:string;
	/** 飞升消耗 */
	costGoods2:string;
	/** 总属性 */
	pastProperty:string;
	/** 是否传闻 */
	isBroadcast:number;
}
/**
 * B-兵符表-amulet.xlsx
 * 表名 amulet
 * 此文件由工具生成，请勿自行添加代码
 */
type amuletCfg = {
	/** 兵符id */
	id:number;
	/** 兵符名称 */
	name:string;
	/** 品质 */
	color:number;
	/** 最大孔数 */
	number:number;
	/** 镶孔属性 */
	numberType:string;
	/** 基础属性 */
	property:string;
}
/**
 * B-宝物升级配置表-baowuUpgrade.xlsx
 * 表名 baowuUpgrade
 * 此文件由工具生成，请勿自行添加代码
 */
type baowuUpgradeCfg = {
	/** 宝物等级 */
	id:number;
	/** 升级消耗 */
	need:string;
	/** 是否传闻 */
	isBroadcast:number;
}
/**
 * B-宝物套装配置表-baowuSuit.xlsx
 * 表名 baowuSuit
 * 此文件由工具生成，请勿自行添加代码
 */
type baowuSuitCfg = {
	/** ID */
	id:number;
	/** 套装描述 */
	describe:string;
	/** 套装属性 */
	property:string;
	/** 套装 */
	suit:string;
}
/**
 * B-宝物神炼配置表-baowuShenlian.xlsx
 * 表名 baowuShenlian
 * 此文件由工具生成，请勿自行添加代码
 */
type baowuShenlianCfg = {
	/** 神炼等级 */
	id:number;
	/** 神炼等级限制 */
	limit:number;
	/** 神炼单次消耗 */
	need:string;
	/** 神炼消耗次数 */
	nums:number;
	/** 单次消耗增加的属性 */
	addAttr:string;
	/** 突破加成属性比 */
	attrRate:number;
	/** 突破消耗 */
	breakNeed:string;
	/** 总属性 */
	allAttr:string;
	/** 是否传闻 */
	isBroadcast:number;
}
/**
 * B-宝物配置表-baowu.xlsx
 * 表名 baowu
 * 此文件由工具生成，请勿自行添加代码
 */
type baowuCfg = {
	/** 宝物ID */
	id:number;
	/** 宝物名称 */
	name:string;
	/** 附加属性 */
	extAttr:string;
	/** 每级增加属性 */
	levelAttr:string;
	/** 普通打造权重 */
	juniorWeight:number;
	/** 高级打造权重 */
	seniorWeight:number;
	/** 20次必出 */
	bestWeight:number;
}
/**
 * B-宝箱成就配置表-shareAchievement.xlsx
 * 表名 shareAchievement
 * 此文件由工具生成，请勿自行添加代码
 */
type shareAchievementCfg = {
	/** 序号 */
	id:number;
	/** 类型 */
	type:number;
	/** 好友数量 */
	nums:number;
	/** 条件 */
	condition:number;
	/** 奖励 */
	award:string;
}
/**
 * B-宝箱豪礼配置表-share.xlsx
 * 表名 share
 * 此文件由工具生成，请勿自行添加代码
 */
type shareCfg = {
	/** 序号 */
	id:number;
	/** 类型 */
	type:number;
	/** 条件 */
	condition:number;
	/** 奖励 */
	award:string;
}
/**
 * B-新宝物描述表.xlsx
 * 表名 xbaowuDescribe
 * 此文件由工具生成，请勿自行添加代码
 */
type xbaowuDescribeCfg = {
	/** 部件类型ID */
	id:number;
	/** 描述1 */
	desc1:string;
	/** 描述2 */
	desc2:string;
}
/**
 * B-新宝物表.xlsx
 * 表名 xbaowu
 * 此文件由工具生成，请勿自行添加代码
 */
type xbaowuCfg = {
	/** 宝物ID */
	id:number;
	/** 模型表ID */
	modelId:number;
	/** 宝物激活属性 */
	property:string;
	/** 激活宝物技能类型 */
	type:number;
	/** 激活宝物技能子类型 */
	subtype:number;
	/** 激活宝物技能值 */
	value:string;
	/** 宝物技能描述 */
	desc:string;
}
/**
 * B-新宝物部件表.xlsx
 * 表名 xbaowuParts
 * 此文件由工具生成，请勿自行添加代码
 */
type xbaowuPartsCfg = {
	/** 宝物部件ID */
	id:number;
	/** 宝物部件属性 */
	property:string;
	/** 宝物部件激活类型 */
	taskid:number;
	/** 宝物部件激活类型 */
	valueParts:string;
	/** 宝物部件跳转 */
	goto:number;
	/** 宝物ID */
	baowuId:number;
}
/**
 * B-百战沙场-关卡配置.xlsx
 * 表名 battlefieldPass
 * 此文件由工具生成，请勿自行添加代码
 */
type battlefieldPassCfg = {
	/** 关id */
	id:number;
	/** 挑战奖励 */
	reward:string;
}
/**
 * B-百战沙场-宝箱配置.xlsx
 * 表名 battlefieldBox
 * 此文件由工具生成，请勿自行添加代码
 */
type battlefieldBoxCfg = {
	/** id */
	id:number;
	/** 通关关卡id */
	passId:number;
	/** 宝箱奖励 */
	reward:string;
}
/**
 * C-传闻提示语.xlsx
 * 表名 chuanwen
 * 此文件由工具生成，请勿自行添加代码
 */
type chuanwenCfg = {
	/** id */
	id:number;
	/** 类型 */
	type:number;
	/** 内容 */
	des:string;
	/** 播放位置 */
	position:string;
	/** 模块 */
	module:number;
	/** 跳转文字 */
	gotodes:string;
	/** 跳转id */
	gotoid:string;
	/** 需要解析字符 */
	needParse:string;
	/** ios充值屏蔽 */
	iosRecharge:number;
}
/**
 * C-充值表.xlsx
 * 表名 recharge
 * 此文件由工具生成，请勿自行添加代码
 */
type rechargeCfg = {
	/** id */
	id:number;
	/** 名称 */
	name:string;
	/** 类型 */
	type:number;
	/** 充值金额 */
	money:number;
	/** 基本元宝 */
	gold:number;
	/** 赠送元宝 */
	giftGold:number;
	/** 充值icon */
	icon:string;
	/** 显示排序 */
	order:number;
	/** 首充描述 */
	firstDes:string;
	/** 再充描述 */
	refillDes:string;
}
/**
 * C-称号配置表格.xlsx
 * 表名 honor
 * 此文件由工具生成，请勿自行添加代码
 */
type honorCfg = {
	/** 称号id */
	id:number;
	/** 称号名称 */
	name:string;
	/** 属性加成列表 */
	property:string;
	/** 百分比属性加成类型 */
	percentAddType:number;
	/** 百分比属性加成 */
	percentAddValue:number;
	/** 百分比描述 */
	percentAddDes:string;
	/** 特殊称号 */
	hornorType:number;
	/** 使用时效 */
	day:number;
	/** 称号类型 */
	type:number;
	/** 数值 */
	num:number;
	/** 称号描述 */
	description:string;
	/** 称号优先级 */
	sort:number;
	/** 称号展示类型 */
	showType:number;
	/** 称号icon */
	icon:string;
	/** 特效名_底 */
	effName1:string;
	/** 特效名_光 */
	effName2:string;
	/** 特效偏移高度 */
	height:number;
	/** 称号类型 */
	effectType:number;
}
/**
 * C-称霸三国.xlsx
 * 表名 hegemonyKing
 * 此文件由工具生成，请勿自行添加代码
 */
type hegemonyKingCfg = {
	/** 序号 */
	id:number;
	/** 奖励类型 */
	type:number;
	/** 奖励名称 */
	name:string;
	/** 消耗 */
	expend:string;
	/** 奖励 */
	award:string;
}
/**
 * C-超级特权表.xlsx
 * 表名 privilege
 * 此文件由工具生成，请勿自行添加代码
 */
type privilegeCfg = {
	/** 特权等级 */
	id:number;
	/** 充值表ID */
	rechargeId:number;
	/** 特权天数 */
	day:number;
	/** 购买所需金额 */
	money:number;
	/** 每日返还奖励（礼包id） */
	dailyPresent:number;
	/** 免费日常副本（额外增加） */
	dailyTimes:number;
	/** 主将经验挂机加成 */
	roleExp:number;
	/** 武将经验挂机加成 */
	heroExp:number;
	/** 银币挂机加成 */
	coin:number;
	/** 属性战力加成 */
	power:string;
	/** 特权专属光效 */
	specialEffect:number;
	/** 特权文字说明 */
	des:string;
}
/**
 * C-闯荡九州-关卡配置-adventurePass.xlsx
 * 表名 adventurePass
 * 此文件由工具生成，请勿自行添加代码
 */
type adventurePassCfg = {
	/** 关id */
	id:number;
	/** 关卡名称 */
	name:string;
	/** 显示模型 */
	modelId:number;
	/** 所属章节 */
	chapter:number;
	/** 等级限制 */
	openLv:number;
	/** 怪物配置 */
	monsterId:number;
	/** 挑战奖励 */
	reward:string;
	/** 首通奖励 */
	firstReward:string;
}
/**
 * C-闯荡九州-章节宝箱配置-adventureChapterBox.xlsx
 * 表名 adventureChapterBox
 * 此文件由工具生成，请勿自行添加代码
 */
type adventureChapterBoxCfg = {
	/** id */
	id:number;
	/** 所属章节 */
	chapter:number;
	/** 星数条件 */
	star:number;
	/** 宝箱奖励 */
	reward:string;
}
/**
 * C-闯荡九州-章节配置-adventureChapter.xlsx
 * 表名 adventureChapter
 * 此文件由工具生成，请勿自行添加代码
 */
type adventureChapterCfg = {
	/** 章节id */
	id:number;
	/** 难度 */
	type:number;
	/** 章节名称 */
	chapterName:string;
}
/**
 * D-帝王争霸场景配置表.xlsx
 * 表名 crossEmperorScene
 * 此文件由工具生成，请勿自行添加代码
 */
type crossEmperorSceneCfg = {
	/** 场景 */
	id:number;
	/** 场景名字 */
	name:string;
	/** 场景地图 */
	map:string;
	/** 机器人外观 */
	npcModel:number;
	/** 战斗胜利积分 */
	victoryScore:number;
	/** 战斗战败积分 */
	failScore:number;
	/** 战斗胜利战功 */
	victoryFeats:number;
	/** 战功达标条件 */
	featsCondition:number;
	/** 钥匙达标条件 */
	keyCondition:number;
	/** 皇宫在线积分时间（秒） */
	onlineTime:number;
	/** 皇宫在线积分 */
	onlineScore:number;
}
/**
 * D-帝皇争霸排行奖励表.xlsx
 * 表名 crossEmperorRankReward
 * 此文件由工具生成，请勿自行添加代码
 */
type crossEmperorRankRewardCfg = {
	/** 序号 */
	id:number;
	/** 类型 */
	type:number;
	/** N名及之前 */
	rank:number;
	/** 排行奖励 */
	reward:string;
}
/**
 * D-帝皇争霸积分目标表.xlsx
 * 表名 crossEmperorTarget
 * 此文件由工具生成，请勿自行添加代码
 */
type crossEmperorTargetCfg = {
	/** 序号 */
	id:number;
	/** 所需积分 */
	score:number;
	/** 达标奖励 */
	reward:string;
}
/**
 * D-掉落表-可选礼包.xlsx
 * 表名 dropchoice
 * 此文件由工具生成，请勿自行添加代码
 */
type dropchoiceCfg = {
	/** 可选掉落ID */
	id:number;
	/** 奖品类型 */
	type:number;
	/** 奖品 */
	award:string;
}
/**
 * D-掉落表.xlsx
 * 表名 drop
 * 此文件由工具生成，请勿自行添加代码
 */
type dropCfg = {
	/** 掉落ID */
	id:number;
	/** 奖品分组 */
	type:number;
	/** 等级区间 */
	level:string;
	/** 抽取次数 */
	number:number;
	/** 奖品 */
	prize:string;
}
/**
 * D-等级事件表.xlsx
 * 表名 levelEvent
 * 此文件由工具生成，请勿自行添加代码
 */
type levelEventCfg = {
	/** 编码 */
	id:number;
	/** 活动id */
	activityId:number;
	/** 触发条件 */
	condition:number;
	/** 角色等级数 */
	level:number;
	/** 执行事件 */
	execEvent:number;
	/** 显示图片 */
	image:string;
}
/**
 * D-答题活动排名奖励-answerRank.xlsx
 * 表名 answerRank
 * 此文件由工具生成，请勿自行添加代码
 */
type answerRankCfg = {
	/** ID */
	id:number;
	/** 名次 */
	ranking:string;
	/** 奖励 */
	reward:string;
}
/**
 * D-答题活动题库-question.xlsx
 * 表名 question
 * 此文件由工具生成，请勿自行添加代码
 */
type questionCfg = {
	/** 编码 */
	id:number;
	/** 问题 */
	question:string;
	/** 回答 */
	answer:string;
	/** 答案 */
	key:number;
	/** 是否有效 */
	usable:number;
}
/**
 * F-服务器提示码.xlsx
 * 表名 notice
 * 此文件由工具生成，请勿自行添加代码
 */
type noticeCfg = {
	/** 编码 */
	id:number;
	/** 消息内容 */
	msg:string;
}
/**
 * F-消息配置码.xlsx
 * 表名 newsnum
 * 此文件由工具生成，请勿自行添加代码
 */
type newsnumCfg = {
	/** 编码 */
	id:number;
	/** 消息内容 */
	msg:string;
	/** 点击事件 */
	click:string;
}
/**
 * G-goto跳转表.xlsx
 * 表名 goto
 * 此文件由工具生成，请勿自行添加代码
 */
type gotoCfg = {
	/** 跳转id */
	id:number;
	/** 跳转类型 */
	type:number;
	/** 打开界面 */
	viewName:string;
	/** 附件参数 */
	params:string;
	/** 功能开启 */
	funOpenId:number;
}
/**
 * G-共鸣表.xlsx
 * 表名 resonance
 * 此文件由工具生成，请勿自行添加代码
 */
type resonanceCfg = {
	/** ID */
	id:number;
	/** 装备资质 */
	aptid:number;
	/** 强化共鸣 */
	strong:string;
	/** 精炼共鸣 */
	refine:string;
	/** 锻造共鸣 */
	cast:string;
	/** 强化整除等级 */
	strongdiv:number;
	/** 精炼整除等级 */
	refinediv:number;
	/** 锻造整除等级 */
	castdiv:number;
	/** 强化传闻 */
	strongChuanwen:number;
	/** 精炼传闻 */
	refineChuanwen:number;
	/** 锻造传闻 */
	castChuanwen:number;
}
/**
 * G-功能开启.xlsx
 * 表名 funOpen
 * 此文件由工具生成，请勿自行添加代码
 */
type funOpenCfg = {
	/** 功能ID */
	id:number;
	/** 描述 */
	dec:string;
	/** 是否由前端控制 */
	type:number;
	/** 开启条件1 */
	openCondition:string;
	/** 开启条件2 */
	andCondition:string;
	/** 显示等级 */
	showLevel:number;
	/** 显示战役条件 */
	warId:number;
	/** 前端对应界面-前端填写 */
	viewName:string;
	/** 功能图标 */
	icon:string;
	/** 开启说明 */
	openDec:string;
	/** 功能未开启时操作提示  */
	ftips:string;
	/** 功能开启图标 */
	openIcon:string;
	/** 开启图标类型 */
	openIconType:number;
	/** 开启提示类型 */
	openShow:number;
	/** 分享奖励 */
	sharingRewards:string;
}
/**
 * G-功能预告配置表.xlsx
 * 表名 funNotice
 * 此文件由工具生成，请勿自行添加代码
 */
type funNoticeCfg = {
	/** ID */
	id:number;
	/** 名称 */
	name:string;
	/** 功能ID */
	functionId:number;
	/** 文字描述 */
	describe:string;
}
/**
 * G-官职表.xlsx
 * 表名 official
 * 此文件由工具生成，请勿自行添加代码
 */
type officialCfg = {
	/** 官职id */
	id:number;
	/** 官职名称 */
	official:string;
	/** 官职类型 */
	tpyid:number;
	/** 官职等级 */
	lev:number;
	/** 官印资源 */
	seal:number;
	/** 官印底图 */
	sealbg:string;
	/** 奖励属性 */
	props:string;
	/** 升级消耗 */
	cost:string;
	/** 每日奖励 */
	salary:string;
	/** 晋级奖励 */
	isbroadcast:string;
	/** 经验系数 */
	expratio:number;
}
/**
 * G-怪物总表.xlsx
 * 表名 monster
 * 此文件由工具生成，请勿自行添加代码
 */
type monsterCfg = {
	/** 编号 */
	id:number;
	/** 地图 */
	map:number;
	/** 等级 */
	level:number;
	/** 怪物信息 */
	list:string;
	/** 前排小怪属性 */
	attr1:string;
	/** 后排小怪属性 */
	attr2:string;
	/** 前排boss属性 */
	attr3:string;
	/** 后排boss属性 */
	attr4:string;
	/** 合体技能 */
	teamSkill:number;
	/** 普通怪物怒气 */
	norPower:number;
	/** boss怒气 */
	BossPower:number;
	/** 等级区间 */
	levelFloat:number;
	/** 属性范围 */
	attrFloat:string;
}
/**
 * G-攻城略地城池总表.xlsx
 * 表名 cityInfo
 * 此文件由工具生成，请勿自行添加代码
 */
type cityInfoCfg = {
	/** id */
	id:number;
	/** 城池名 */
	name:string;
	/** 可否争夺 */
	rob:number;
	/** 是否中心城 */
	core:number;
	/** 城池类型 */
	type:number;
	/** 城防衰减 */
	weak:number;
	/** 所属州 */
	ascription:number;
	/** 位置编号 */
	position:number;
	/** 城主身份 */
	job:string;
	/** 占领宣言 */
	notic:string;
	/** 怪物图标 */
	icon:string;
}
/**
 * G-攻城略地城池等级表.xlsx
 * 表名 cityLevel
 * 此文件由工具生成，请勿自行添加代码
 */
type cityLevelCfg = {
	/** id */
	id:number;
	/** 所属州 */
	ascription:number;
	/** 城池类型 */
	type:number;
	/** 城池等级 */
	level:number;
	/** 升级所需 */
	consume:number;
	/** 资源收益 */
	profit:string;
	/** 次数上限 */
	profitLimit:number;
	/** 基础驻防 */
	baseAttr:number;
	/** 保护时间 */
	proTime:number;
	/** 城池怪物 */
	monster:number;
	/** 挑战奖励 */
	fightReward:string;
	/** 城池损毁 */
	weak:number;
	/** 名字颜色 */
	color:number;
}
/**
 * G-攻城略地城池管理表.xlsx
 * 表名 cityAdmin
 * 此文件由工具生成，请勿自行添加代码
 */
type cityAdminCfg = {
	/** id */
	id:number;
	/** 类型1 */
	upType:number;
	/** 类型2 */
	upSub:number;
	/** 排序 */
	sort:number;
	/** 获得建设值 */
	levelPoints:number;
	/** 获得驻防加成 */
	addAttr:number;
	/** 驻防持续时间 */
	proTime:number;
	/** 冷却时间 */
	coolingTime:number;
	/** 物品消耗 */
	consume:string;
	/** 标题 */
	title:string;
	/** 描述 */
	notic:string;
}
/**
 * G-攻城略地州配置.xlsx
 * 表名 cityState
 * 此文件由工具生成，请勿自行添加代码
 */
type cityStateCfg = {
	/** id */
	id:number;
	/** 州名 */
	name:string;
	/** 开启条件 */
	open:string;
	/** 位置编号 */
	position:number;
	/** 所属国家 */
	country:number;
}
/**
 * G-攻城略地武将驻防效果.xlsx
 * 表名 cityHeroDef
 * 此文件由工具生成，请勿自行添加代码
 */
type cityHeroDefCfg = {
	/** id */
	id:number;
	/** 驻防效果 */
	effect:number;
}
/**
 * G-规则配置表.xlsx
 * 表名 rule
 * 此文件由工具生成，请勿自行添加代码
 */
type ruleCfg = {
	/**  */
	id:number;
	/** 规则内容 */
	value:string;
}
/**
 * G-过关斩将表.xlsx
 * 表名 conquer
 * 此文件由工具生成，请勿自行添加代码
 */
type conquerCfg = {
	/** 索引 */
	id:number;
	/** 章节id */
	chapter:number;
	/** 章节名称 */
	chapterName:string;
	/** 关卡 */
	level:number;
	/** 限制等级 */
	openLv:number;
	/** 显示武将id */
	heroId:number;
	/** 关卡名称 */
	name:string;
	/** 小关 */
	levelNum:number;
	/** 怪物 */
	monsterId:number;
	/** 小关一星奖励 */
	oneStar:string;
	/** 小关二星奖励 */
	twoStar:string;
	/** 小关三星奖励 */
	threeStar:string;
	/** 小关首通奖励 */
	firstReward:string;
	/** 章节奖励 */
	chapterReward:string;
	/** 推荐战力 */
	lowFight:number;
}
/**
 * H-活动图标.xlsx
 * 表名 topIcon
 * 此文件由工具生成，请勿自行添加代码
 */
type topIconCfg = {
	/** 活动ID */
	id:number;
	/** 活动名称 */
	name:string;
	/** 图标ID */
	icon:string;
	/** 位置 */
	type:number;
	/** 排序权重 */
	sort:number;
	/** 运营活动类型 */
	groupType:number;
	/** 跳转id */
	gotoId:number;
	/** ios充值屏蔽 */
	iosRecharge:number;
	/** 是否使用特效 */
	specialEffects:number;
}
/**
 * H-获取途径.xlsx
 * 表名 gainWay
 * 此文件由工具生成，请勿自行添加代码
 */
type gainWayCfg = {
	/** id */
	id:number;
	/** 图标 */
	icon:string;
	/** 描述标题 */
	titleStr:string;
	/** 描述详情 */
	desStr:string;
	/** gotoId */
	gotoId:number;
}
/**
 * H-运营活动 - 开服冲榜.xlsx
 * 表名 severRankings
 * 此文件由工具生成，请勿自行添加代码
 */
type severRankingsCfg = {
	/** ID */
	id:number;
	/** 批次 */
	batch:number;
	/** typeId */
	typeId:number;
	/** 名次 */
	ranking:string;
	/** 奖励 */
	reward:string;
	/** 大奖奖励 */
	bigReward:string;
}
/**
 * H-运营活动 - 开服冲榜天数和大奖条件.xlsx
 * 表名 severRankingsCondition
 * 此文件由工具生成，请勿自行添加代码
 */
type severRankingsConditionCfg = {
	/** id */
	id:number;
	/** 活动id */
	actId:number;
	/** 批次 */
	batch:number;
	/** 大奖条件 */
	condition:number;
	/** 排行类型 */
	type:number;
	/** 目标类型 */
	target:number;
	/** 排行启用天数 */
	openDay:string;
	/** 大奖描述 */
	desc:string;
}
/**
 * H-运营活动 - 开服冲榜目标奖励.xlsx
 * 表名 severRankingsReward
 * 此文件由工具生成，请勿自行添加代码
 */
type severRankingsRewardCfg = {
	/** ID */
	id:number;
	/** 批次 */
	batch:number;
	/** typeId */
	typeId:number;
	/** 达成条件 */
	condition:number;
	/** 目标奖励 */
	reward:string;
}
/**
 * H-运营活动 - 开服冲榜类型表.xlsx
 * 表名 rankingsType
 * 此文件由工具生成，请勿自行添加代码
 */
type rankingsTypeCfg = {
	/** ID == 排行类型 */
	id:number;
	/** 排行类型名称 */
	name:string;
	/** 活动标签图标 */
	tabIcon:string;
	/** 完成条件说明名称 */
	helpNane:string;
	/** 目标文字说明 */
	targetName:string;
	/** 跳转设置-前往提升 */
	gotoPromote:number;
	/** 跳转设置-冲榜礼包 */
	gotoPackage:number;
	/** 规则描述 */
	desc:string;
}
/**
 * H-运营活动 - 开服白送战力.xlsx
 * 表名 severGiftCap
 * 此文件由工具生成，请勿自行添加代码
 */
type severGiftCapCfg = {
	/** ID */
	id:number;
	/** 批次 */
	batch:number;
	/** 达成条件 */
	costYB:number;
	/** 图标 */
	icon:string;
	/** 目标奖励属性 */
	attr:string;
	/** 描述1 */
	desc1:string;
	/** 描述2 */
	desc2:string;
}
/**
 * H-运营活动 - 排名活动.xlsx
 * 表名 activityExtrarank
 * 此文件由工具生成，请勿自行添加代码
 */
type activityExtrarankCfg = {
	/** ID */
	id:number;
	/** 排行类型 */
	actId:number;
	/** 活动批次 */
	batch:number;
	/** 奖励类型 */
	type:number;
	/** 名次 */
	ranking:string;
	/** 达成条件 */
	condition:number;
	/** 奖励 */
	reward:string;
	/** 界面描述 */
	des:string;
}
/**
 * H-运营活动 - 每日首充今日豪礼.xlsx
 * 表名 dailyRecharge
 * 此文件由工具生成，请勿自行添加代码
 */
type dailyRechargeCfg = {
	/** ID */
	id:number;
	/** 活动编号 */
	actId:number;
	/** 天数 */
	day:number;
	/** 奖励 */
	reward:string;
}
/**
 * H-运营活动 - 活动任务.xlsx
 * 表名 activitytask
 * 此文件由工具生成，请勿自行添加代码
 */
type activitytaskCfg = {
	/** ID */
	id:number;
	/** 活动id */
	actId:number;
	/** 活动批次 */
	time:number;
	/** 一级分类 */
	type:number;
	/** 二级分类 */
	module:number;
	/** 完成条件 */
	condition:string;
	/** 任务奖励、商品 */
	reward:string;
	/** 前置任务 */
	pretask:number;
	/** 跳转 */
	entry:number;
	/** 排序 */
	sort:number;
	/** 参与条件 */
	lvcondition:string;
	/** 活动任务描述 */
	taskDes:string;
	/** 礼包原价 */
	oldPrice:string;
}
/**
 * H-运营活动 - 激活码奖励.xlsx
 * 表名 activitycode
 * 此文件由工具生成，请勿自行添加代码
 */
type activitycodeCfg = {
	/** ID */
	id:number;
	/** 奖励 */
	reward:string;
}
/**
 * H-运营活动 - 竞技排行.xlsx
 * 表名 activityrankings
 * 此文件由工具生成，请勿自行添加代码
 */
type activityrankingsCfg = {
	/** ID */
	id:number;
	/** 排行类型 */
	type:number;
	/** 奖励类型 */
	rewardType:number;
	/** 名次 */
	ranking:string;
	/** 达成条件 */
	condition:number;
	/** 奖励 */
	reward:string;
	/** 全服领取份额 */
	limit:number;
	/** 界面描述 */
	des:string;
	/** 额外奖励模型名字 */
	model:string;
}
/**
 * H-运营活动 - 转盘活动.xlsx
 * 表名 activityDraw
 * 此文件由工具生成，请勿自行添加代码
 */
type activityDrawCfg = {
	/** ID */
	id:number;
	/** 活动类型 */
	actId:number;
	/** 批次 */
	batch:number;
	/** 分组 */
	subtype:number;
	/** 位置 */
	local:number;
	/** 奖品 */
	reward:string;
	/** 权重 */
	weight:number;
	/** 预览权重 */
	weightFales:number;
	/** 珍稀奖励 */
	rare:string;
	/** 出现条件 */
	need:number;
	/** 抽取上限 */
	limit:number;
	/** 标签 */
	label:number;
}
/**
 * H-运营活动-一元礼包.xlsx
 * 表名 OneYuanActivity
 * 此文件由工具生成，请勿自行添加代码
 */
type OneYuanActivityCfg = {
	/** ID */
	id:number;
	/** 充值ID */
	pay:number;
	/** 天数 */
	day:number;
	/** 奖励 */
	reward:string;
	/** 价值 */
	desc:string;
	/** 价值 */
	desc1:string;
	/** 图标ID */
	icon:string;
}
/**
 * H-运营活动-宝藏基地.xlsx
 * 表名 treasure
 * 此文件由工具生成，请勿自行添加代码
 */
type treasureCfg = {
	/** ID */
	id:number;
	/** 活动类型 */
	type:number;
	/** 批次 */
	time:number;
	/** 分组 */
	subtype:number;
	/** 位置 */
	local:number;
	/** 奖品 */
	award:string;
	/** 权重 */
	weight:number;
	/** 预览权重 */
	weightFales:number;
	/** 珍稀奖励 */
	rare:string;
	/** 出现条件 */
	need:number;
	/** 抽取上限 */
	limit:number;
	/** 标签 */
	label:number;
	/** 天数 */
	day:number;
}
/**
 * H-运营活动-战力飙升礼包.xlsx
 * 表名 powerGift
 * 此文件由工具生成，请勿自行添加代码
 */
type powerGiftCfg = {
	/** id */
	id:number;
	/** 活动批次 */
	batch:number;
	/** 提升途径 */
	type:number;
	/** 礼包名字 */
	name:string;
	/** 礼包价格 */
	cost:string;
	/** 礼包内容 */
	include:string;
	/** 限购 */
	limit:string;
	/** 跳转 */
	goto:number;
	/** 预览信息 */
	show:number;
	/** 购买条件 */
	condition:string;
	/** 预览信息 */
	preview:string;
}
/**
 * H-运营活动-新首充豪礼.xlsx
 * 表名 HaoLiActivityNew
 * 此文件由工具生成，请勿自行添加代码
 */
type HaoLiActivityNewCfg = {
	/** id */
	id:number;
	/** 活动批次 */
	batch:number;
	/** 档位 */
	pay:number;
	/** 奖励 */
	reward:string;
	/** 描述 */
	dec:string;
}
/**
 * H-运营活动-砸金蛋.xlsx
 * 表名 goldEgg
 * 此文件由工具生成，请勿自行添加代码
 */
type goldEggCfg = {
	/** ID */
	id:number;
	/** 活动类型 */
	type:number;
	/** 批次 */
	time:number;
	/** 位置 */
	local:number;
	/** 奖品 */
	award:string;
	/** 权重 */
	weight:number;
	/** 预览权重 */
	weightFales:number;
	/** 珍稀奖励 */
	rare:string;
	/** 出现条件 */
	need:number;
	/** 抽取上限 */
	limit:number;
	/** 标签 */
	label:number;
}
/**
 * H-运营活动-签到表.xlsx
 * 表名 sign
 * 此文件由工具生成，请勿自行添加代码
 */
type signCfg = {
	/** id */
	id:number;
	/** 签到类型 */
	type:number;
	/** 批次 */
	module:number;
	/** 奖励 */
	reward:string;
	/** vip多倍 */
	multiple:string;
	/** 补签花费 */
	spend:string;
}
/**
 * H-运营活动-过关抢宝.xlsx
 * 表名 activityFight
 * 此文件由工具生成，请勿自行添加代码
 */
type activityFightCfg = {
	/** 关ID */
	id:number;
	/** 关名称 */
	name:string;
	/** 显示模型 */
	model:number;
	/** 怪物配置 */
	monsterId:number;
	/** 通关掉落 */
	dropReward:string;
}
/**
 * H-运营活动-进度宝箱表.xlsx
 * 表名 activitybox
 * 此文件由工具生成，请勿自行添加代码
 */
type activityboxCfg = {
	/** id */
	id:number;
	/** 活动类型 */
	type:number;
	/** 进度 */
	num:number;
	/** 奖励 */
	reward:string;
}
/**
 * H-运营活动-首充豪礼.xlsx
 * 表名 HaoLiActivity
 * 此文件由工具生成，请勿自行添加代码
 */
type HaoLiActivityCfg = {
	/** 活动批次 */
	id:number;
	/** 奖励 */
	reward:string;
	/** 档位1 */
	pay6:number;
	/** 档位2 */
	pay98:number;
	/** 档位3 */
	pay50:number;
	/** 档位4 */
	pay200:number;
}
/**
 * H-运营活动.xlsx
 * 表名 activity
 * 此文件由工具生成，请勿自行添加代码
 */
type activityCfg = {
	/** 活动编号 */
	id:number;
	/** 活动批次 */
	time:string;
	/** 活动名称 */
	name:string;
	/** 活动标签图标 */
	tabIcon:string;
	/** 一级类型 */
	type:number;
	/** 二级类型 */
	module:number;
	/** 在活动有效时间内,需要隐藏 */
	hide:number;
	/** 开启日期 */
	openDay:string;
	/** 显示条件 */
	conditions:string;
	/** 活动描述 */
	des:string;
	/** 标签排序 */
	sort:number;
	/** ios充值屏蔽 */
	iosRecharge:number;
}
/**
 * H-魂意图鉴表.xlsx
 * 表名 soulMeaningBook
 * 此文件由工具生成，请勿自行添加代码
 */
type soulMeaningBookCfg = {
	/** id */
	id:number;
	/** 物品id */
	goodsid:number;
	/** 等级 */
	level:number;
	/** 宝物名称 */
	name:string;
	/** 普通类型 */
	typeAttr:number;
	/** 特殊属性 */
	levelAttr:string;
}
/**
 * H-魂意猎魂库配置表.xlsx
 * 表名 preyLibrary
 * 此文件由工具生成，请勿自行添加代码
 */
type preyLibraryCfg = {
	/** ID */
	id:number;
	/** 抽奖库类型 */
	type:number;
	/** 奖品 */
	award:string;
	/** 权重 */
	weight:number;
	/** 珍稀奖励 */
	rare:string;
	/** 出现条件 */
	need:number;
	/** 抽取上限 */
	limit:number;
}
/**
 * H-魂意猎魂进度表.xlsx
 * 表名 preyLifting
 * 此文件由工具生成，请勿自行添加代码
 */
type preyLiftingCfg = {
	/** ID */
	id:number;
	/** 升级1概率 */
	upgrade1:number;
	/** 升级2概率 */
	upgrade2:number;
	/** 清空概率 */
	decline:number;
}
/**
 * H-魂意配置表.xlsx
 * 表名 soulMeaning
 * 此文件由工具生成，请勿自行添加代码
 */
type soulMeaningCfg = {
	/** id */
	id:number;
	/** 物品id */
	goodsid:number;
	/** 等级 */
	level:number;
	/** 宝物名称 */
	name:string;
	/** 升级消耗 */
	need:string;
	/** 普通类型 */
	typeAttr:string;
	/** 特殊属性 */
	levelAttr:string;
	/** 是否传闻 */
	isBroadcast:number;
}
/**
 * J-军团叛军营地宝箱.xlsx
 * 表名 armycampreward
 * 此文件由工具生成，请勿自行添加代码
 */
type armycamprewardCfg = {
	/** 关卡id */
	id:number;
	/** 领取条件 */
	killNum:number;
	/** 宝箱奖励 */
	reward:string;
}
/**
 * J-军团叛军营地表.xlsx
 * 表名 armycampbattle
 * 此文件由工具生成，请勿自行添加代码
 */
type armycampbattleCfg = {
	/** 关卡id */
	id:number;
	/** 关卡名称 */
	name:string;
	/** 模型id */
	model:number;
	/** 推荐战力 */
	power:number;
	/** 怪物配置 */
	monsterId:number;
	/** 通关奖励 */
	reward:string;
}
/**
 * J-军团委托任务表.xlsx
 * 表名 armytask
 * 此文件由工具生成，请勿自行添加代码
 */
type armytaskCfg = {
	/** 任务id */
	id:number;
	/** 任务名称 */
	name:string;
	/** 开启条件 */
	openLv:number;
	/** 所需时间（分钟） */
	minute:number;
	/** 可得奖励 */
	reward:string;
}
/**
 * J-军团总表.xlsx
 * 表名 army
 * 此文件由工具生成，请勿自行添加代码
 */
type armyCfg = {
	/** 公会等级 */
	id:number;
	/** 升下一级所需经验 */
	nextExp:number;
	/** 每天经验上限 */
	expMax:number;
	/** 人数上限 */
	maxNum:number;
	/** 申请列表 */
	applyMax:number;
	/** 公会技能等级上限 */
	skillMax:number;
	/** 委托队列 */
	taskMax:number;
}
/**
 * J-军团技能表.xlsx
 * 表名 armyskill
 * 此文件由工具生成，请勿自行添加代码
 */
type armyskillCfg = {
	/** ID */
	id:number;
	/** 属性类型 */
	propertyId:number;
	/** 技能图标 */
	icon:string;
	/** 属性等级系数 */
	pk:number;
	/** 消耗基础 */
	cBase:number;
	/** 消耗等级系数 */
	ck:number;
	/** 消耗最大值 */
	cMax:number;
	/** 属性基础值 */
	pBase:number;
	/** 属性成长值 */
	pGrowth:number;
	/** 属性最大值 */
	pMax:number;
}
/**
 * J-军团捐献表.xlsx
 * 表名 armydonate
 * 此文件由工具生成，请勿自行添加代码
 */
type armydonateCfg = {
	/** 捐献方式 */
	id:number;
	/** 名称 */
	name:string;
	/** 花费 */
	cost:string;
	/** 奖励 */
	reward:string;
}
/**
 * J-军团组队副本表.xlsx
 * 表名 armyteambattle
 * 此文件由工具生成，请勿自行添加代码
 */
type armyteambattleCfg = {
	/** 关卡id */
	id:number;
	/** 关卡名称 */
	name:string;
	/** 模型id */
	model:number;
	/** 开放等级 */
	level:number;
	/** 怪物配置 */
	monsterId:number;
	/** 通关奖励 */
	reward:string;
}
/**
 * J-剧情对白.xlsx
 * 表名 dialog
 * 此文件由工具生成，请勿自行添加代码
 */
type dialogCfg = {
	/** id */
	id:number;
	/** 对话人名 */
	name:string;
	/** 半身像 */
	gaine:number;
	/** 半身位置 */
	position:number;
	/** 说话内容 */
	content:string;
}
/**
 * J-技能表.xlsx
 * 表名 skill
 * 此文件由工具生成，请勿自行添加代码
 */
type skillCfg = {
	/** 技能id */
	id:number;
	/** 技能品质 */
	quality:number;
	/** 技能名称 */
	name:string;
	/** 技能类型 */
	type:number;
	/** 伤害类型 */
	harmType:number;
	/** 技能对象 */
	target:number;
	/** 对象数量 */
	targetNum:number;
	/** 基础伤害 */
	baseHarm:number;
	/** 伤害参数 */
	harmParam:number;
	/** 附加buff */
	buff:string;
	/** 击杀回怒 */
	killpower:number;
	/** 技能受击回怒 */
	hitpower:number;
	/** 是否必中 */
	ishit:number;
	/** 距离 */
	distance:number;
	/** 攻击时长 */
	attackSpeed:number;
	/** 需求能量 */
	costAnger:number;
	/** 获得怒气 */
	addAnger:number;
	/** 获得合体能量 */
	addComAnger:number;
	/** 是否为远程攻击 */
	attackType:number;
	/** 技能特效 */
	skillEffect:number;
	/** 子弹特效 */
	arrowEffect:number;
	/** 受击特效 */
	hitEffect:number;
	/** 技能屏幕特效 */
	screeneffect:number;
	/** 受击时间 */
	hitTime:number;
	/** 是否冻结画面 */
	freeze:number;
	/** 冻结时长 */
	freezetime:number;
	/** 冻结时攻击延时时间 */
	freezeAttackTime:number;
	/** 是否震屏 */
	isShake:number;
	/** 技能描述 */
	skillDesc:string;
	/** 合体武将组合 */
	comHeroList:string;
	/** 合体触发武将 */
	comUseHero:number;
}
/**
 * J-新进阶奖励表.xlsx
 * 表名 advancedreward
 * 此文件由工具生成，请勿自行添加代码
 */
type advancedrewardCfg = {
	/** id */
	id:number;
	/** 类型 */
	type:number;
	/** 等级 */
	level:string;
	/** 进阶奖励 */
	reward:string;
	/** 奖励状态 */
	state:number;
}
/**
 * J-机器人名字库.xlsx
 * 表名 robot
 * 此文件由工具生成，请勿自行添加代码
 */
type robotCfg = {
	/** 机器人id */
	id:number;
	/** 机器人名字 */
	name:string;
	/** 性别 */
	sex:number;
}
/**
 * J-界限配置表.xlsx
 * 表名 limit
 * 此文件由工具生成，请勿自行添加代码
 */
type limitCfg = {
	/** 编号 */
	id:number;
	/** 品质 */
	quality:number;
	/** 进阶数 */
	level:number;
	/** 武将等级限制 */
	limit:number;
	/** 单次升级消耗 */
	singleConsumption:string;
	/** 升级需要次数 */
	frequency:number;
	/** 满进度消耗武将碎片数量 */
	heroMaxNums:number;
	/** 单次增加的属性 */
	attribute:string;
	/** 总属性 */
	allAttr:string;
	/** 突破增加的总效果 */
	levelAttribute:string;
	/** 突破增加的法印特效 */
	levelFayin:number;
	/** 突破增加的合体能量 */
	levelBuff:number;
	/** 特殊效果描述 */
	desc:string;
	/** 是否传闻 */
	isBroadcast:number;
}
/**
 * J-竞技场排位赛表.xlsx
 * 表名 arena
 * 此文件由工具生成，请勿自行添加代码
 */
type arenaCfg = {
	/** id */
	id:number;
	/** 排名范围 */
	ranking:number;
	/** 高排名差距 */
	hRange:string;
	/** 低排名差距 */
	lRange:number;
	/** 机器人武将怪物 */
	robot:number;
	/** 结算奖励 */
	prize:string;
	/** 历史最高排名奖励 */
	highestPrize:string;
	/** 单次历史奖励上限 */
	highestLimit:number;
}
/**
 * J-角色状态表.xlsx
 * 表名 state
 * 此文件由工具生成，请勿自行添加代码
 */
type stateCfg = {
	/** id */
	id:number;
	/** 名字 */
	name:string;
	/** 图标 */
	icon:string;
	/** 持续时间 */
	duration:number;
	/** 状态类 */
	type:number;
	/** 状态参数 */
	subType:string;
	/** 描述 */
	stateDes:string;
}
/**
 * J_技能特效表.xlsx
 * 表名 skillEffect
 * 此文件由工具生成，请勿自行添加代码
 */
type skillEffectCfg = {
	/** 特效ID */
	id:number;
	/** 特效类型 */
	type:number;
	/** 特效名 */
	name:string;
	/** 特效位置 */
	pos:number;
	/** 是否有方向性 */
	dir:number;
	/** 缩放倍率 */
	scale:number;
}
/**
 * K-跨服争霸押注奖励.xlsx
 * 表名 crossHegemonyBet
 * 此文件由工具生成，请勿自行添加代码
 */
type crossHegemonyBetCfg = {
	/** 序号 */
	id:number;
	/** 押注类型1 */
	betType1:string;
	/** 押注类型2 */
	betType2:string;
	/** 押注类型3 */
	betType3:string;
	/** 押注1胜利奖励 */
	winReward1:string;
	/** 押注1失败奖励 */
	failReward1:string;
	/** 押注2胜利奖励 */
	winReward2:string;
	/** 押注2失败奖励 */
	failReward2:string;
	/** 押注3胜利奖励 */
	winReward3:string;
	/** 押注3失败奖励 */
	failReward3:string;
	/** 赛季名称 */
	title:string;
	/** 赛季说明 */
	titleDes:string;
	/** 赛季时间 */
	time:string;
}
/**
 * K-跨服争霸排名奖励.xlsx
 * 表名 crossHegemonyRank
 * 此文件由工具生成，请勿自行添加代码
 */
type crossHegemonyRankCfg = {
	/** 序号 */
	id:number;
	/** N名及之前 */
	rank:number;
	/** 排名奖励 */
	reward:string;
}
/**
 * K-跨服夺宝奇兵.xlsx
 * 表名 duobao
 * 此文件由工具生成，请勿自行添加代码
 */
type duobaoCfg = {
	/** 层数 */
	id:number;
	/** 奖励 */
	prizePeriod:string;
	/** 宝箱个数/波 */
	boxNumRange:string;
	/** 宝箱最大个数 */
	boxMax:number;
	/** 机器人个数/波 */
	robotMax:number;
	/** 机器人ID */
	robotId:number;
	/** buff权重 */
	buffWeight:number;
	/** 物品权重 */
	dropWeight:number;
	/** buff列表 */
	buffList:string;
	/** 宝箱物品奖励 */
	boxPrize:string;
	/** 胜利积分 */
	score:number;
	/** 战败积分 */
	fail:number;
	/** 胜利奖励 */
	reward:string;
	/** 机器人外观 */
	model:number;
}
/**
 * K-跨服夺宝奇兵排行奖励表.xlsx
 * 表名 duobaoPrize
 * 此文件由工具生成，请勿自行添加代码
 */
type duobaoPrizeCfg = {
	/** 序号 */
	id:number;
	/** 排名 */
	ranking:number;
	/** 排名奖励 */
	prize:string;
}
/**
 * K-跨服夺宝奇兵积分宝箱.xlsx
 * 表名 duobaoBox
 * 此文件由工具生成，请勿自行添加代码
 */
type duobaoBoxCfg = {
	/** 序号 */
	id:number;
	/** 类型 */
	score:number;
	/** 奖励 */
	reward:string;
}
/**
 * K-跨服活动.xlsx
 * 表名 crossActivity
 * 此文件由工具生成，请勿自行添加代码
 */
type crossActivityCfg = {
	/** 活动编号 */
	id:number;
	/** 跨服活动名称 */
	name:string;
	/** 开启或屏蔽 */
	isShow:number;
	/** 活动奖励图标 */
	tabIcon:string;
	/** 活动时间 */
	activitytime:string;
	/** 活动描述 */
	des:string;
	/** 排序id */
	sortId:number;
	/** 背景图 */
	bgUrl:string;
	/** 开服天数 */
	penService:number;
	/** 玩家等级 */
	lvLimit:number;
	/** goto表ID */
	gotoId:number;
	/** 活动描述 */
	ruleDes:string;
}
/**
 * K-跨服竞技排行奖励.xlsx
 * 表名 crossArenaRankReward
 * 此文件由工具生成，请勿自行添加代码
 */
type crossArenaRankRewardCfg = {
	/** 序号 */
	id:number;
	/** N名及之前 */
	rank:number;
	/** 排行奖励 */
	reward:string;
}
/**
 * K-跨服阵营战城池分布表.xlsx
 * 表名 crossCampBattleCity
 * 此文件由工具生成，请勿自行添加代码
 */
type crossCampBattleCityCfg = {
	/** 序号 */
	id:number;
	/** 城池类型 */
	type:number;
	/** 专属阵营 */
	privilege:number;
	/** 坐标 */
	coords:string;
	/** 开采人数上限 */
	exploitLimit:number;
	/** 开采所需时间 */
	exploitTime:number;
	/** 开采获得的奖励 */
	exploitReward:string;
	/** 开采获得的积分 */
	exploitScore:number;
	/** 攻城奖励 */
	cityAward:string;
	/** 开采获得绑元的数量 */
	randomAward:string;
	/** 开采绑元的概率 */
	probability:number;
}
/**
 * K-跨服阵营战排行奖励.xlsx
 * 表名 crossCampBattleRankReward
 * 此文件由工具生成，请勿自行添加代码
 */
type crossCampBattleRankRewardCfg = {
	/** 序号 */
	id:number;
	/** 类型 */
	type:number;
	/** N名及之前 */
	rank:number;
	/** 排行奖励 */
	reward:string;
}
/**
 * L-礼包表.xlsx
 * 表名 gift
 * 此文件由工具生成，请勿自行添加代码
 */
type giftCfg = {
	/** id */
	id:number;
	/** 名称 */
	name:string;
	/** 类型 */
	type:number;
	/** 包含物品 */
	content:string;
	/** 原价 */
	originalPrice:number;
	/** 折扣价 */
	realPrice:number;
	/** 物品表Id */
	itemId:number;
}
/**
 * L-聊天限制-chatLimit.xlsx
 * 表名 chatLimit
 * 此文件由工具生成，请勿自行添加代码
 */
type chatLimitCfg = {
	/** id */
	id:number;
	/** 等级范围 */
	level:number;
	/** 是否限制 */
	limil:number;
	/** 可视发言 */
	num:number;
	/** vip条件 */
	vip:number;
}
/**
 * M-名字库.xlsx
 * 表名 roldname
 * 此文件由工具生成，请勿自行添加代码
 */
type roldnameCfg = {
	/** 编号 */
	id:number;
	/** 姓 */
	familyName:string;
	/** 男名 */
	boyName:string;
	/** 女名 */
	girlName:string;
}
/**
 * M-名将册共鸣配置表.xlsx
 * 表名 famousBookAddition
 * 此文件由工具生成，请勿自行添加代码
 */
type famousBookAdditionCfg = {
	/** 编号 */
	id:number;
	/** 武将类型 */
	rareid:number;
	/** 等级 */
	lv:number;
	/** 完成条件 */
	num:number;
	/** 共鸣加成 */
	addition:number;
}
/**
 * M-名将册升星配置表.xlsx
 * 表名 famousBookStar
 * 此文件由工具生成，请勿自行添加代码
 */
type famousBookStarCfg = {
	/** 编号 */
	id:number;
	/** 武将类型 */
	rareid:number;
	/** 星级 */
	star:number;
	/** 升星属性 */
	attr:string;
	/** 所需碎片数量 */
	num:number;
}
/**
 * M-模型表.xlsx
 * 表名 model
 * 此文件由工具生成，请勿自行添加代码
 */
type modelCfg = {
	/** id */
	id:number;
	/** 模型类型 */
	type:number;
	/** 模型 */
	model:string;
	/** 品质 */
	color:number;
	/** 坐骑高度 */
	height:number;
	/** 大模型高度 */
	bigheight:number;
	/** 前置模型 */
	preModel:string;
	/** 战斗时是否使用前置模型 */
	usePreModel:number;
}
/**
 * N-内城建筑表.xlsx
 * 表名 townBuild
 * 此文件由工具生成，请勿自行添加代码
 */
type townBuildCfg = {
	/** id */
	id:number;
	/** 建筑类型 */
	buildType:number;
	/** 建筑名称 */
	buildName:string;
	/** 建造条件 */
	condition:number;
	/** 建造费用 */
	buildCost:string;
	/** 收集冷却 */
	coolDown:number;
	/** 资源产出 */
	reward:string;
	/** 掠夺所得 */
	lootReward:string;
	/** 被掠夺次数 */
	lootTime:number;
}
/**
 * N-内城活动-townActivity.xlsx
 * 表名 townActivity
 * 此文件由工具生成，请勿自行添加代码
 */
type townActivityCfg = {
	/** 活动编号 */
	id:number;
	/** 跨服活动名称 */
	name:string;
	/** 开启或屏蔽 */
	isShow:number;
	/** 活动描述 */
	des:string;
	/** 排序id */
	sortId:number;
	/** 背景图 */
	bgUrl:string;
	/** 开启条件 */
	activityCondition:string;
	/** goto表ID */
	gotoId:number;
	/** 商店图标 */
	shopIcon:string;
	/** 商店跳转 */
	shopGoto:number;
}
/**
 * N-内城等级表.xlsx
 * 表名 townLevel
 * 此文件由工具生成，请勿自行添加代码
 */
type townLevelCfg = {
	/** id */
	id:number;
	/** 升级所需 */
	upgrade:number;
	/** 资源加成 */
	extraReward:number;
	/** 被掠夺加成 */
	extraLoot:number;
}
/**
 * N-南蛮入侵表.xlsx
 * 表名 invade
 * 此文件由工具生成，请勿自行添加代码
 */
type invadeCfg = {
	/** 波id */
	id:number;
	/** 关卡id */
	level:number;
	/** 关卡名称 */
	name:string;
	/** 展示怪物id */
	monsterId:number;
	/** 等级限制 */
	openLv:number;
	/** 波数 */
	batch:number;
	/** 关卡地图 */
	mapId:number;
	/** 关卡怪物 */
	monster:number;
	/** 战斗结算 */
	reward:string;
	/** 首次通关奖励 */
	firstReward:string;
}
/**
 * P-排行榜膜拜奖励.xlsx
 * 表名 worshipPrize
 * 此文件由工具生成，请勿自行添加代码
 */
type worshipPrizeCfg = {
	/** 等级 */
	id:number;
	/** 膜拜奖励 */
	prize:string;
}
/**
 * P-排行榜表.xlsx
 * 表名 rank
 * 此文件由工具生成，请勿自行添加代码
 */
type rankCfg = {
	/** id */
	id:number;
	/** 名称 */
	name:string;
	/** 对应系统 */
	system:number;
}
/**
 * P-爬塔表.xlsx
 * 表名 tower
 * 此文件由工具生成，请勿自行添加代码
 */
type towerCfg = {
	/** 层id */
	id:number;
	/** 层名称 */
	name:string;
	/** 是否boss层 */
	isBoss:number;
	/** 推荐战力 */
	power:number;
	/** 显示模型 */
	model:number;
	/** 战斗地图 */
	map:number;
	/** 等级限制 */
	level:number;
	/** 怪物配置 */
	monsterId:number;
	/** 通关掉落 */
	dropReward:string;
	/** boss层宝箱 */
	bossReward:string;
	/** 爬塔结算1 */
	prize1:string;
	/** 爬塔结算2 */
	prize2:string;
}
/**
 * Q-强化最大值消耗表.xlsx
 * 表名 equipmaxexpend
 * 此文件由工具生成，请勿自行添加代码
 */
type equipmaxexpendCfg = {
	/** ID */
	id:number;
	/** 装备类型 */
	equiptype:number;
	/** 资质 */
	aptid:number;
	/** 精炼最大值 */
	refinemax:number;
	/** 铸星最大值 */
	castmax:number;
}
/**
 * Q-情缘表.xlsx
 * 表名 gay
 * 此文件由工具生成，请勿自行添加代码
 */
type gayCfg = {
	/** ID */
	id:number;
	/** 名字 */
	name:string;
	/** 情缘类型 */
	type:number;
	/** 天命觉醒等级 */
	stage:number;
	/** 组合武将 */
	hero:string;
	/** 组合装备 */
	equip:string;
	/** 属性加成 */
	property:string;
}
/**
 * Q-新强化消耗表.xlsx
 * 表名 equipupgradeexpendnew
 * 此文件由工具生成，请勿自行添加代码
 */
type equipupgradeexpendnewCfg = {
	/** ID */
	id:number;
	/** 大类 */
	type:number;
	/** 等级 */
	grade:number;
	/** 强化基础值 */
	strongbase:number;
	/** 强化成长系数 */
	stronggrow:number;
	/** 精炼基础值 */
	refinebase:number;
	/** 精炼成长系数 */
	refinegrow:number;
	/** 锻造基础值 */
	castbase:number;
	/** 锻造成长系数 */
	castgrow:number;
}
/**
 * Q-新强化表.xlsx
 * 表名 equipupgradenew
 * 此文件由工具生成，请勿自行添加代码
 */
type equipupgradenewCfg = {
	/** ID */
	id:number;
	/** 大类 */
	type:number;
	/** 装备资质 */
	aptid:number;
	/** 部位 */
	subtype:number;
	/** 强化属性 */
	strong:string;
	/** 精炼属性 */
	refine:string;
	/** 锻造属性 */
	cast:string;
}
/**
 * R-任务参数表.xlsx
 * 表名 taskparam
 * 此文件由工具生成，请勿自行添加代码
 */
type taskparamCfg = {
	/** id */
	id:number;
}
/**
 * R-任务成就配置.xlsx
 * 表名 taskAchieve
 * 此文件由工具生成，请勿自行添加代码
 */
type taskAchieveCfg = {
	/** id */
	id:number;
	/** 所需点数 */
	needpoint:string;
	/** 奖励 */
	reward:string;
	/** 成就图标 */
	icon:string;
	/** 是否传闻 */
	isbroadcast:number;
}
/**
 * R-任务日常活跃度宝箱配置.xlsx
 * 表名 taskDailyActivity
 * 此文件由工具生成，请勿自行添加代码
 */
type taskDailyActivityCfg = {
	/** 序号 */
	id:number;
	/** 活跃度目标 */
	activityTarget:number;
	/** 奖励 */
	reward:string;
}
/**
 * R-任务配置.xlsx
 * 表名 task
 * 此文件由工具生成，请勿自行添加代码
 */
type taskCfg = {
	/** id */
	id:number;
	/** 任务标题 */
	tastname:string;
	/** 任务描述 */
	info:string;
	/** 模块类型 */
	moduletype:number;
	/** 完成条件 */
	functiontype:number;
	/** 条件参数 */
	functionparameter:string;
	/** 任务奖励 */
	reward:string;
	/** 前置任务 */
	pretask:number;
	/** 后置任务 */
	behindtask:number;
	/** 跳转 */
	entry:number;
	/** 排序 */
	sort:number;
	/** 任务图标 */
	icon:string;
	/** 成就大类 */
	achievetype:number;
	/** 接取条件 */
	lvcondition:number;
	/** 活跃度 */
	activity:number;
	/** 是否显示特效 */
	showEffect:number;
}
/**
 * R-日常副本表.xlsx
 * 表名 daily
 * 此文件由工具生成，请勿自行添加代码
 */
type dailyCfg = {
	/** 副本id */
	id:number;
	/** 副本名称 */
	name:string;
	/** 排序id（显示排序用） */
	sortId:number;
	/** ui背景url */
	bgUrl:string;
	/** ui名字 */
	nameUrl:string;
	/** 免费副本次数 */
	num:number;
	/** 开启等级 */
	level:string;
	/** 怪物 */
	monster:number;
	/** 通关奖励 */
	award:string;
	/** 额外挑战消耗 */
	expend:string;
	/** 副本类型 */
	type:number;
}
/**
 * R-日志配置表.xlsx
 * 表名 log
 * 此文件由工具生成，请勿自行添加代码
 */
type logCfg = {
	/** 编码 */
	id:number;
	/** 日志模板 */
	msg:string;
	/** 数据属性字段配置 */
	propertys:string;
	/** 属性功能类型 */
	types:string;
}
/**
 * S-商店配置表-隐藏商店.xlsx
 * 表名 hideShop
 * 此文件由工具生成，请勿自行添加代码
 */
type hideShopCfg = {
	/** 物品id */
	id:number;
	/** 替换货币 */
	currency:string;
	/** 价格 */
	price:number;
}
/**
 * S-商店配置表.xlsx
 * 表名 products
 * 此文件由工具生成，请勿自行添加代码
 */
type productsCfg = {
	/** 索引 */
	id:number;
	/** 商店id */
	storeType:number;
	/** 货架id */
	type:number;
	/** 货物状态 */
	effId:number;
	/** 商品排序 */
	orderby:string;
	/** 道具id */
	itemId:number;
	/** 道具份额 */
	itemNum:number;
	/** 商品价格 */
	price:string;
	/** 折扣 */
	discount:string;
	/** 限购方式 */
	limitType:number;
	/** 限购份数 */
	limitNum:number;
	/** 购买条件 */
	buyCondition:string;
	/** 商品上下架日期 */
	openTime:string;
}
/**
 * S-新神兵兵魂升星表.xlsx
 * 表名 superEquipSoulStar
 * 此文件由工具生成，请勿自行添加代码
 */
type superEquipSoulStarCfg = {
	/** id */
	id:number;
	/** 品质 */
	color:number;
	/** 星级 */
	star:number;
	/** 升星属性 */
	attr:string;
	/** 所需材料 */
	num:number;
}
/**
 * S-新神兵升星表.xlsx
 * 表名 superEquipStar
 * 此文件由工具生成，请勿自行添加代码
 */
type superEquipStarCfg = {
	/** id */
	id:number;
	/** 品质 */
	color:number;
	/** 星级 */
	star:number;
	/** 升星属性 */
	attr:string;
	/** 所需材料 */
	num:number;
}
/**
 * S-新神兵符文升级表.xlsx
 * 表名 superequiprunelevel
 * 此文件由工具生成，请勿自行添加代码
 */
type superequiprunelevelCfg = {
	/** 编号 */
	id:number;
	/** 神兵品质 */
	color:number;
	/** 符文类型 */
	type:number;
	/** 进阶数 */
	level:number;
	/** 进阶丹单次消耗 */
	expend:string;
	/** 当前阶级增加的属性 */
	attr:string;
	/** 显示增加的值 */
	addstarattr:string;
	/** 是否传闻 */
	isBroadcast:number;
}
/**
 * S-新神兵符文注灵表.xlsx
 * 表名 superequiprunenote
 * 此文件由工具生成，请勿自行添加代码
 */
type superequiprunenoteCfg = {
	/** 编号 */
	id:number;
	/** 品质 */
	color:number;
	/** 注灵等级 */
	level:number;
	/** 符文等级限制 */
	limit:number;
	/** 注灵丹单次消耗 */
	expend:string;
	/** 升级需要次数 */
	upgradeFrequency:number;
	/** 单次消耗增加的属性 */
	attr:string;
	/** 当阶加成属性比 */
	percentage:number;
	/** 飞升丹消耗 */
	fly:string;
	/** 到该阶总属性 */
	allAttr:string;
	/** 是否传闻 */
	isBroadcast:number;
}
/**
 * S-新神兵符文附魔表.xlsx
 * 表名 superequipruneenchanting
 * 此文件由工具生成，请勿自行添加代码
 */
type superequipruneenchantingCfg = {
	/** 编号 */
	id:number;
	/** 品质 */
	color:number;
	/** 附魔等级 */
	level:number;
	/** 符文等级限制 */
	limit:number;
	/** 元宝消耗 */
	expend:string;
	/** 到该级增加的属性 */
	attr:string;
	/** 是否传闻 */
	isBroadcast:number;
}
/**
 * S-新神兵进阶突破表.xlsx
 * 表名 superequipmentbreachnew
 * 此文件由工具生成，请勿自行添加代码
 */
type superequipmentbreachnewCfg = {
	/** 编号 */
	id:number;
	/** 品质 */
	quality:number;
	/** 进阶数 */
	level:number;
	/** 神兵进阶等级限制 */
	limit:number;
	/** 突破丹单次消耗 */
	singleConsumption:string;
	/** 升级需要次数 */
	frequency:number;
	/** 单次消耗增加的属性 */
	attribute:string;
	/** 当阶加成属性比 */
	percentage:number;
	/** 飞升丹消耗 */
	fly:string;
	/** 总属性 */
	allAttr:string;
	/** 是否传闻 */
	isBroadcast:number;
}
/**
 * S-新神兵进阶表.xlsx
 * 表名 superequipstrongnew
 * 此文件由工具生成，请勿自行添加代码
 */
type superequipstrongnewCfg = {
	/** 编号 */
	id:number;
	/** 品质 */
	quality:number;
	/** 进阶数 */
	level:number;
	/** 主将等级限制 */
	limit:number;
	/** 进阶丹单次消耗 */
	singleConsumption:string;
	/** 升级需要次数 */
	frequency:number;
	/** 单次消耗增加的属性 */
	attribute:string;
	/** 当阶加成属性 */
	levelAttribute:string;
	/** 可使用属性丹 */
	useLimit:string;
	/** 总属性 */
	allAttr:string;
	/** 是否传闻 */
	isBroadcast:number;
}
/**
 * S-神兵兵魂石炼化表.xlsx
 * 表名 superEquipSoulRefine
 * 此文件由工具生成，请勿自行添加代码
 */
type superEquipSoulRefineCfg = {
	/** 编号 */
	id:number;
	/** 品质 */
	color:number;
	/** 等级 */
	level:number;
	/** 兵魂之石升级限制 */
	stoneLimit:number;
	/** 兵魂之灵升级限制 */
	spiritLimit:number;
	/** 兵魂之心升级限制 */
	heartLimit:number;
	/** 兵魂之魄升级限制 */
	soulLimit:number;
	/** 升级需要次数 */
	needNum:number;
	/** 升级消耗 */
	expend:string;
	/** 兵魂之石突破材料 */
	stone:string;
	/** 兵魂之灵突破材料 */
	spirit:string;
	/** 兵魂之心突破材料 */
	heart:string;
	/** 兵魂之魄突破材料 */
	soul:string;
	/** 升级属性 */
	attribute:string;
	/** 当前本级突破加成属性 */
	extraProperty:string;
	/** 总属性 */
	allAttr:string;
	/** 是否传闻 */
	isBroadcast:number;
}
/**
 * S-神兵兵魂表.xlsx
 * 表名 superEquipSoul
 * 此文件由工具生成，请勿自行添加代码
 */
type superEquipSoulCfg = {
	/** ID */
	id:number;
	/** 名称 */
	name:string;
	/** 显示效果 */
	modelEff:string;
	/** 品质 */
	color:number;
	/** 兵魂激活属性 */
	property:string;
	/** 名称图标 */
	nameIcon:string;
	/** 兵魂大图标 */
	bigIcon:string;
	/** 兵魂之石激活限制 */
	stoneLimit:number;
	/** 兵魂之灵激活限制 */
	spiritLimit:number;
	/** 兵魂之心激活限制 */
	heartLimit:number;
	/** 兵魂之魄激活限制 */
	soulLimit:number;
	/** 绑定神兵ID */
	superEquipId:number;
}
/**
 * S-神兵兵魂进阶表.xlsx
 * 表名 superEquipSoulBreak
 * 此文件由工具生成，请勿自行添加代码
 */
type superEquipSoulBreakCfg = {
	/** 编号 */
	id:number;
	/** 品质 */
	color:number;
	/** 进阶数 */
	level:number;
	/** 主将等级限制 */
	limit:number;
	/** 进阶石单次消耗 */
	singleConsumption:string;
	/** 升级需要次数 */
	frequency:number;
	/** 单次消耗增加的属性 */
	attribute:string;
	/** 当阶加成属性 */
	levelAttribute:string;
	/** 总属性 */
	allAttr:string;
	/** 是否传闻 */
	isBroadcast:number;
}
/**
 * S-神兵表.xlsx
 * 表名 superequip
 * 此文件由工具生成，请勿自行添加代码
 */
type superequipCfg = {
	/** 神兵ID */
	id:number;
	/** 神兵名称 */
	name:string;
	/** 模型表ID */
	modelId:number;
	/** 神器品质 */
	color:number;
	/** 途径说明 */
	explain:string;
	/** 神兵属性 */
	property:string;
	/** 附带属性 */
	attach:string;
	/** 普攻技能 */
	skill1:number;
	/** 专属技能 */
	skill2:number;
	/** 激活所需 */
	equip:number;
	/** 详细途径说明 */
	detailedExplain:string;
	/** 跳转 */
	goTo:number;
}
/**
 * S-神装共鸣表.xlsx
 * 表名 divineEquipResonance
 * 此文件由工具生成，请勿自行添加代码
 */
type divineEquipResonanceCfg = {
	/** 编号 */
	id:number;
	/** 类型 */
	type:number;
	/** 条件 */
	condition:number;
	/** 共鸣属性 */
	allAttr:string;
	/** 每级增加属性 */
	increaseAttr:string;
}
/**
 * S-神装升阶淬炼表.xlsx
 * 表名 divineEquipmentQuenching
 * 此文件由工具生成，请勿自行添加代码
 */
type divineEquipmentQuenchingCfg = {
	/** id */
	id:number;
	/** 条目 */
	entry:number;
	/** 神装消耗 */
	consumption:number;
	/** 升阶初始概率 */
	upgradeProbability:number;
	/** 失败提升概率 */
	upProbability:number;
}
/**
 * S-神装基础表.xlsx
 * 表名 divineEquipment
 * 此文件由工具生成，请勿自行添加代码
 */
type divineEquipmentCfg = {
	/** 装备ID */
	id:number;
	/** 等级 */
	lv:number;
	/** 基础属性 */
	property:string;
	/** 升级消耗碎片 */
	upgrade:string;
	/** 淬炼失败返还碎片 */
	failReturn:string;
	/** 极品属性id */
	bestid:number;
	/** 神装升级是否传闻 */
	isBroadcast:number;
}
/**
 * S-神装极品属性表.xlsx
 * 表名 divineEquipmentBest
 * 此文件由工具生成，请勿自行添加代码
 */
type divineEquipmentBestCfg = {
	/** id */
	id:number;
	/** 极品属性基础值 */
	basicsProperty:string;
	/** 极品属性上限 */
	upgrade:string;
	/** 每次洗炼增加的具体值 */
	proportion:string;
	/** 洗炼随机增加条目数量 */
	entry:string;
	/** 种类洗炼 */
	typeConsume:string;
	/** 属性洗炼 */
	valueConsume:string;
}
/**
 * T-图腾表.xlsx
 * 表名 totem
 * 此文件由工具生成，请勿自行添加代码
 */
type totemCfg = {
	/** id */
	id:number;
	/** 图腾名称 */
	name:string;
	/** 模型表ID */
	modelId:number;
	/** 图腾品质 */
	color:number;
	/** 激活属性 */
	property:string;
	/** 激活所需 */
	actGoods:string;
}
/**
 * T-图腾进阶表.xlsx
 * 表名 totemUpgrade
 * 此文件由工具生成，请勿自行添加代码
 */
type totemUpgradeCfg = {
	/** 编号 */
	id:number;
	/** 图腾id */
	totemId:number;
	/** 进阶数 */
	lv:number;
	/** 单次升级消耗 */
	lvNeed:string;
	/** 升级需要次数 */
	lvNums:number;
	/** 单次消耗增加的属性 */
	lvAttr:string;
	/** 飞升消耗 */
	flyNeed:string;
	/** 当前等级之前累计的总属性 */
	addUpAttr:string;
	/** 飞升奖励额外属性 */
	flyExtraAttr:string;
	/** 是否传闻 */
	sendChuanwen:number;
}
/**
 * T-天赋表.xlsx
 * 表名 talent
 * 此文件由工具生成，请勿自行添加代码
 */
type talentCfg = {
	/** 序号 */
	id:number;
	/** 类型 */
	type:number;
	/** 加成效果 */
	value:string;
	/** 描述 */
	des:string;
}
/**
 * T-提示图标.xlsx
 * 表名 tipsIcon
 * 此文件由工具生成，请勿自行添加代码
 */
type tipsIconCfg = {
	/** 提示ID */
	id:number;
	/** 图标资源 */
	icon:string;
	/** 位置 */
	type:number;
	/** 跳转id */
	gotoId:number;
}
/**
 * T-通天试炼.xlsx
 * 表名 tongtianShilian
 * 此文件由工具生成，请勿自行添加代码
 */
type tongtianShilianCfg = {
	/** 层id */
	id:number;
	/** 难度 */
	type:number;
	/** 层名称 */
	name:string;
	/** 显示模型 */
	model:number;
	/** 战斗地图 */
	map:number;
	/** 等级限制 */
	level:number;
	/** 怪物配置 */
	monsterId:number;
	/** 通关奖励 */
	passReward:string;
	/** 宝箱奖励 */
	boxReward:string;
}
/**
 * T-通用活动弹窗提示.xlsx
 * 表名 commonActTips
 * 此文件由工具生成，请勿自行添加代码
 */
type commonActTipsCfg = {
	/** id */
	id:number;
	/** 标题文本 */
	titleStr:string;
	/** 按钮文本 */
	btnStr:string;
	/** 描述文本 */
	desStr:string;
	/** 活动图标 */
	icon:string;
	/** gotoId */
	gotoId:number;
}
/**
 * V-vip特权描述表.xlsx
 * 表名 vipdes
 * 此文件由工具生成，请勿自行添加代码
 */
type vipdesCfg = {
	/** 特权id */
	id:number;
	/** 说明 */
	des:string;
	/** 对应VIP表的字段名称 */
	keyName:string;
}
/**
 * V-vip表.xlsx
 * 表名 vip
 * 此文件由工具生成，请勿自行添加代码
 */
type vipCfg = {
	/** id */
	id:number;
	/** 下一级所需金额 */
	upgradeMoney:number;
	/** 该级总金额 */
	gradeMoney:number;
	/** VIP礼包 */
	gift:number;
	/** 战役收益加成 */
	warAddition:number;
	/** 创建军团特权 */
	armyCreate:number;
	/** VIP招募特权 */
	recruit:number;
	/** 快速战斗次数 */
	quickFightMax:number;
	/** 个人boss扫荡 */
	sweepPrivateBoss:number;
	/** 全民boss购买次数 */
	nationalBossBuy:number;
	/** 世界boss购买次数 */
	worldBossBuy:number;
	/** 斩将次数 */
	conquer:number;
	/** 斩将购买次数 */
	conquerBuy:number;
	/** 神秘每日刷新次数上限 */
	mysteryFlush:number;
	/** 武将商店每日总刷新次数 */
	heroFlush:number;
	/** 装备商店每日总刷新次数 */
	itemFlush:number;
	/** 转生商店每日刷新次数 */
	rebirthFlush:number;
	/** 城池挑战次数 */
	cityFight:number;
	/** 日常副本购买次数 */
	buydaily:number;
	/** 排位赛购买次数 */
	ladderBuy:number;
	/** 内城收集购买次数 */
	citycollectBuy:number;
	/** 特权显示 */
	privilege:string;
	/** vip专属光效 */
	lighting:number;
	/** 个人副本一键扫荡 */
	sweepPrivateCopy:number;
	/** vip属性加成 */
	attr:string;
	/** 粮仓加位 */
	barnUp:number;
	/** vip折扣礼包id */
	discountVipGift:number;
	/** 转生副本购买次数 */
	rebirthdaily:number;
	/** 宝石副本购买次数 */
	jeweldailyBuy:number;
}
/**
 * W-微信分享图配置表-weChatShare.xlsx
 * 表名 weChatShare
 * 此文件由工具生成，请勿自行添加代码
 */
type weChatShareCfg = {
	/** 序号 */
	id:number;
	/** 标题语 */
	title:string;
	/** 图片名 */
	imageUrl:string;
}
/**
 * W-我要变强配置表.xlsx
 * 表名 becomeStronger
 * 此文件由工具生成，请勿自行添加代码
 */
type becomeStrongerCfg = {
	/** ID */
	id:number;
	/** 名称 */
	name:string;
	/** 功能ID */
	functionId:number;
	/** 跳转设置 */
	goto:number;
	/** 排序ID */
	sortId:number;
	/** 文字描述 */
	describe:string;
}
/**
 * W-招将_酒馆招募成功率配置表.xlsx
 * 表名 recruitrate
 * 此文件由工具生成，请勿自行添加代码
 */
type recruitrateCfg = {
	/** 索引 */
	id:number;
	/** 品质 */
	color:number;
	/** 好感度(百分比) */
	goodFeeling:number;
	/** 成功率(万分比) */
	rate:number;
}
/**
 * W-招将表.xlsx
 * 表名 recruit
 * 此文件由工具生成，请勿自行添加代码
 */
type recruitCfg = {
	/** 索引 */
	id:number;
	/** 武将ID */
	heroId:number;
	/** 物品数量 */
	num:number;
	/** 招募方式 */
	way:number;
	/** 权重 */
	weight:number;
	/** 好感需求 */
	goodfeeling:number;
	/** 兑换所需积分 */
	score:number;
	/** 兑换所需vip等级 */
	viplevel:number;
	/** 出现条件 */
	mixNums:number;
	/** 珍稀奖励 */
	rare:string;
	/** 是否传闻 */
	sendChuanwen:number;
}
/**
 * W-新武将升星表.xlsx
 * 表名 herostarV2
 * 此文件由工具生成，请勿自行添加代码
 */
type herostarV2Cfg = {
	/** 编号 */
	id:number;
	/** 武将属性类型 */
	herotype:number;
	/** 品质 */
	color:number;
	/** 升星等级 */
	level:number;
	/** 武将等级限制 */
	limit:number;
	/** 升星石单次消耗 */
	needGoods:string;
	/** 升级需要次数 */
	needNums:number;
	/** 单次消耗增加的属性 */
	property:string;
	/** 当前升星加成属性 */
	extraProperty:string;
	/** 可使用属性丹 */
	maxNums:number;
	/** 武将消耗 */
	heroUseType:number;
	/** 消耗数量 */
	heroNums:number;
	/** 满进度武将消耗 */
	heroMaxUseType:number;
	/** 满进度消耗数量 */
	heroMaxNums:number;
	/** 到该级总属性 */
	pastProperty:string;
	/** 天赋id */
	talent:number;
	/** 是否传闻 */
	sendChuanwen:number;
}
/**
 * W-新武将升星觉醒表.xlsx
 * 表名 herostarV2JX
 * 此文件由工具生成，请勿自行添加代码
 */
type herostarV2JXCfg = {
	/** 编号 */
	id:number;
	/** 武将属性类型 */
	herotype:number;
	/** 品质 */
	color:number;
	/** 升星觉醒等级 */
	level:number;
	/** 武将升星等级限制 */
	limit:number;
	/** 觉醒丹单次消耗 */
	st1Goods:string;
	/** 升级需要次数 */
	st1Nums:number;
	/** 单次消耗增加的属性 */
	st2Property:string;
	/** 当阶加成属性比 */
	st2Rate:number;
	/** 飞升石消耗 */
	st2Goods:string;
	/** 武将消耗 */
	heroUseType:number;
	/** 消耗数量 */
	heroNums:number;
	/** 飞升武将消耗 */
	heroMaxUseType:number;
	/** 飞升消耗数量 */
	heroMaxNums:number;
	/** 到该级总属性 */
	pastProperty:string;
	/** 是否传闻 */
	sendChuanwen:number;
}
/**
 * W-新武将升级表.xlsx
 * 表名 herolevelV2
 * 此文件由工具生成，请勿自行添加代码
 */
type herolevelV2Cfg = {
	/** 编号 */
	id:number;
	/** 主将经验 */
	exp:number;
	/** 蓝将经验 */
	heroExp2:number;
	/** 紫将经验 */
	heroExp3:number;
	/** 橙将经验 */
	heroExp4:number;
	/** 红将经验 */
	heroExp5:number;
	/** 金将经验 */
	heroExp6:number;
	/** 可使用属性丹 */
	maxNums:number;
	/** 是否传闻 */
	sendChuanwen:number;
}
/**
 * W-新武将升级觉醒表.xlsx
 * 表名 herolevelV2JX
 * 此文件由工具生成，请勿自行添加代码
 */
type herolevelV2JXCfg = {
	/** 编号 */
	id:number;
	/** 武将属性类型 */
	herotype:number;
	/** 品质 */
	color:number;
	/** 升星觉醒等级 */
	level:number;
	/** 武将等级限制 */
	limit:number;
	/** 觉醒丹单次消耗 */
	st1Goods:string;
	/** 升级需要次数 */
	st1Nums:number;
	/** 单次消耗增加的属性 */
	st2Property:string;
	/** 当前升级加成属性比 */
	st2Rate:number;
	/** 飞升石消耗 */
	st2Goods:string;
	/** 武将消耗 */
	heroUseType:number;
	/** 消耗数量 */
	heroNums:number;
	/** 飞升武将消耗 */
	heroMaxUseType:number;
	/** 飞升消耗数量 */
	heroMaxNums:number;
	/** 到该级总属性 */
	pastProperty:string;
	/** 是否传闻 */
	sendChuanwen:number;
}
/**
 * W-新武将天命表.xlsx
 * 表名 herobreakV2
 * 此文件由工具生成，请勿自行添加代码
 */
type herobreakV2Cfg = {
	/** 编号 */
	id:number;
	/** 天命等级 */
	level:number;
	/** 主将品质 */
	color:number;
	/** 武将等级限制 */
	limit:number;
	/** 天命丹单次消耗 */
	needGoods:string;
	/** 升级需要次数 */
	needNums:number;
	/** 单次消耗增加的属性 */
	property:string;
	/** 当前天命加成属性 */
	extraProperty:string;
	/** 可使用属性丹 */
	maxNums:number;
	/** 到该级总属性 */
	pastProperty:string;
	/** 是否传闻 */
	sendChuanwen:number;
}
/**
 * W-新武将天命觉醒表.xlsx
 * 表名 herobreakV2JX
 * 此文件由工具生成，请勿自行添加代码
 */
type herobreakV2JXCfg = {
	/** 编号 */
	id:number;
	/** 天命觉醒等级 */
	level:number;
	/** 武将天命等级限制 */
	limit:number;
	/** 觉醒丹单次消耗 */
	st1Goods:string;
	/** 升级需要次数 */
	st1Nums:number;
	/** 单次消耗增加的属性 */
	st2Property:string;
	/** 当阶加成属性比 */
	st2Rate:number;
	/** 飞升石消耗 */
	st2Goods:string;
	/** 主将品质 */
	color:number;
	/** 品质阶段 */
	colorLevel:number;
	/** 武将消耗 */
	heroUseType:number;
	/** 消耗数量 */
	heroNums:number;
	/** 飞升武将消耗 */
	heroMaxUseType:number;
	/** 飞升武将数量 */
	heroMaxNums:number;
	/** 到该级总属性 */
	pastProperty:string;
	/** 是否传闻 */
	sendChuanwen:number;
}
/**
 * W-新武将属性丹.xlsx
 * 表名 heroShuxingdan
 * 此文件由工具生成，请勿自行添加代码
 */
type heroShuxingdanCfg = {
	/** id */
	id:number;
	/** 武将属性类型 */
	herotype:number;
	/** 属性丹类型 */
	type:number;
	/** 消耗物品 */
	item:number;
	/** 单次增加属性 */
	property:string;
}
/**
 * W-新武将进阶表.xlsx
 * 表名 herostairV2
 * 此文件由工具生成，请勿自行添加代码
 */
type herostairV2Cfg = {
	/** 编号 */
	id:number;
	/** 武将属性类型 */
	herotype:number;
	/** 品质 */
	color:number;
	/** 进阶等级 */
	level:number;
	/** 武将等级限制 */
	limit:number;
	/** 进阶丹单次消耗 */
	needGoods:string;
	/** 升级需要次数 */
	needNums:number;
	/** 单次消耗增加的属性 */
	property:string;
	/** 当前进阶加成属性 */
	extraProperty:string;
	/** 可使用属性丹 */
	maxNums:number;
	/** 武将消耗 */
	heroUseType:number;
	/** 消耗数量 */
	heroNums:number;
	/** 满进度武将消耗 */
	heroMaxUseType:number;
	/** 满进度消耗数量 */
	heroMaxNums:number;
	/** 到该级总属性 */
	pastProperty:string;
	/** 天赋id */
	talent:number;
	/** 是否传闻 */
	sendChuanwen:number;
}
/**
 * W-新武将进阶觉醒表.xlsx
 * 表名 herostairV2JX
 * 此文件由工具生成，请勿自行添加代码
 */
type herostairV2JXCfg = {
	/** 编号 */
	id:number;
	/** 武将属性类型 */
	herotype:number;
	/** 品质 */
	color:number;
	/** 进阶觉醒等级 */
	level:number;
	/** 武将进阶等级限制 */
	limit:number;
	/** 觉醒丹单次消耗 */
	st1Goods:string;
	/** 升级需要次数 */
	st1Nums:number;
	/** 单次消耗增加的属性 */
	st2Property:string;
	/** 当阶加成属性比 */
	st2Rate:number;
	/** 飞升石消耗 */
	st2Goods:string;
	/** 武将消耗 */
	heroUseType:number;
	/** 消耗数量 */
	heroNums:number;
	/** 飞升武将消耗 */
	heroMaxUseType:number;
	/** 飞升消耗数量 */
	heroMaxNums:number;
	/** 到该级总属性 */
	pastProperty:string;
	/** 是否传闻 */
	sendChuanwen:number;
}
/**
 * W-武将表.xlsx
 * 表名 hero
 * 此文件由工具生成，请勿自行添加代码
 */
type heroCfg = {
	/** 武将ID */
	id:number;
	/** 武将名称 */
	name:string;
	/** 是否怪物 */
	monsterType:number;
	/** 品质 */
	color:number;
	/** 武将属性类型 */
	herotype:number;
	/** 缘分类型 */
	relationType:number;
	/** 阵营 */
	country:number;
	/** 头像ID */
	icon:number;
	/** 模型ID */
	model:number;
	/** 基础属性 */
	property:string;
	/** 成长属性 */
	growProperty:string;
	/** 收集属性 */
	collectionProperty:string;
	/** 普攻技能 */
	skill1:number;
	/** 专属技能 */
	skill2:number;
	/** 合体技能 */
	skill3:number;
	/** 觉醒显示 */
	wakeShow:number;
	/** 图鉴排序 */
	bookSort:number;
	/** 每秒回怒 */
	secondpower:number;
	/** 描述 */
	itemdes:string;
	/** 出场怒气 */
	power:number;
	/** 出场合体能量 */
	teampower:number;
	/** 是否在图鉴中显示 */
	showFoBook:number;
	/** 情缘ID */
	gayid:string;
	/** 稀有度 */
	rareid:number;
}
/**
 * W-武神传章节配置表.xlsx
 * 表名 wushenChapter
 * 此文件由工具生成，请勿自行添加代码
 */
type wushenChapterCfg = {
	/** 章节类型ID */
	id:number;
	/** 背景图 */
	bgIcon:string;
	/** 章节模型id */
	modelId:number;
}
/**
 * W-武神传配置表.xlsx
 * 表名 wushen
 * 此文件由工具生成，请勿自行添加代码
 */
type wushenCfg = {
	/** 排序 */
	id:number;
	/** 章节类型 */
	chapterId:number;
	/** 关卡 */
	index:number;
	/** 组队副本名称 */
	name:string;
	/** 模型id */
	modelId:number;
	/** 怪物ID */
	monsterId:number;
	/** 个人首通奖励 */
	firstPassReward:string;
	/** 每日扫荡奖励 */
	moppingUpReward:number;
	/** 个人首通和扫荡随机奖励 */
	randReward:number;
	/** 每日开启宝箱奖励 */
	boxReward:number;
	/** 每日开启宝箱元宝消耗 */
	consume:string;
	/** 协助奖励 */
	helpReward:string;
	/** 全服首通邮件奖励 */
	serverFirstPassReward:string;
}
/**
 * W-物品合成-itemFuse.xlsx
 * 表名 itemFuse
 * 此文件由工具生成，请勿自行添加代码
 */
type itemFuseCfg = {
	/** 物品id */
	id:number;
	/** 来源 */
	type:number;
	/** 合成所需 */
	expend:string;
	/** 额外材料 */
	extraExpend:string;
	/** 合成条件 */
	condition:string;
	/** 是否传闻 */
	isBroadcast:number;
}
/**
 * W-物品表.xlsx
 * 表名 item
 * 此文件由工具生成，请勿自行添加代码
 */
type itemCfg = {
	/** 编号 */
	id:number;
	/** 物品名字 */
	name:string;
	/** 品质 */
	color:number;
	/** 大类 */
	type:number;
	/** 小类 */
	subtype:number;
	/** 界面图标 */
	icon:string;
	/** 掉落图标 */
	dicon:string;
	/** 描述 */
	itemdes:string;
	/** 叠加上限 */
	maxnum:number;
	/** 使用条件 */
	usecon:string;
	/** 可否背包用 */
	isuse:number;
	/** 可否批量用 */
	useall:number;
	/** 使用效果 */
	effect:string;
	/** 使用参数 */
	effectparam:string;
	/** 分解所得 */
	resolve:string;
	/** 重生费用 */
	repeatcost:string;
	/** 时效性 */
	cd:number;
	/** 属性 */
	property:string;
	/** 快速获得 */
	connect:string;
	/** 显示特效 */
	lightingeffect:number;
	/** 获取途径 */
	way:string;
}
/**
 * X-新手引导-指引ui.xlsx
 * 表名 guideKey
 * 此文件由工具生成，请勿自行添加代码
 */
type guideKeyCfg = {
	/** 引导id */
	id:number;
	/** 引导ui类型 */
	type:number;
	/** 特殊参数 */
	params:string;
	/** 是否关闭其他界面 */
	isCloseOthers:number;
	/** 排除界面 */
	exclude:string;
}
/**
 * X-新手引导.xlsx
 * 表名 guide
 * 此文件由工具生成，请勿自行添加代码
 */
type guideCfg = {
	/** 引导id */
	id:number;
	/** 引导组 */
	group:number;
	/** 引导类型 */
	guidetype:number;
	/** 触发条件 */
	condition:string;
	/** 完成条件 */
	complete:string;
	/** 引导组步骤 */
	step:number;
	/** 内容类型 */
	contenttype:number;
	/** 引导内容Key */
	uiKey:number;
	/** 提示语 */
	tips:string;
	/** 提示语位置 */
	position:string;
	/** 提示语默认布局位置 */
	tipsLayout:number;
	/** 手指箭头角度 */
	arrowAngle:number;
	/** 是否保存 */
	issave:number;
}
/**
 * X-新手目标配置.xlsx
 * 表名 target
 * 此文件由工具生成，请勿自行添加代码
 */
type targetCfg = {
	/** id */
	id:number;
	/** 目标类型 */
	type:number;
	/** 完成条件 */
	condition:number;
	/** 奖励 */
	reward:string;
	/** 跳转 */
	goto:number;
	/** 提示语 */
	tips:string;
	/** 奖励显示 */
	model:string;
	/** 开启条件 */
	show:string;
	/** 优先级 */
	priority:number;
	/** 下方提示 */
	bottomTip:string;
	/** 提示跳转 */
	tipGoto:number;
}
/**
 * Y-愿望表.xlsx
 * 表名 wish
 * 此文件由工具生成，请勿自行添加代码
 */
type wishCfg = {
	/** 索引 */
	id:number;
	/** 物品 */
	itemId:number;
	/** 数量 */
	itemNum:number;
	/** 刷新权重 */
	weights:number;
	/** 需要协助人数 */
	limitNum:number;
}
/**
 * Y-邮件模板.xlsx
 * 表名 emailTemplate
 * 此文件由工具生成，请勿自行添加代码
 */
type emailTemplateCfg = {
	/** 索引 */
	id:number;
	/** 标题 */
	title:string;
	/** 内容 */
	content:string;
}
/**
 * Z-主城功能配置.xlsx
 * 表名 city
 * 此文件由工具生成，请勿自行添加代码
 */
type cityCfg = {
	/** 主城功能id */
	id:number;
	/** 图标类型 */
	type:number;
	/** 是否显示 */
	isShow:number;
	/** 图标 */
	icon:string;
	/** 显示名字 */
	name:string;
	/** 跳转id */
	gotoId:number;
}
/**
 * Z-周期活动表.xlsx
 * 表名 actTime
 * 此文件由工具生成，请勿自行添加代码
 */
type actTimeCfg = {
	/** 活动ID */
	id:number;
	/** 活动名称 */
	name:string;
	/** 开启日期 */
	openDay:string;
	/** 开启时间 */
	openTime:string;
	/** 活动描述 */
	des:string;
}
/**
 * Z-坐骑表.xlsx
 * 表名 mount
 * 此文件由工具生成，请勿自行添加代码
 */
type mountCfg = {
	/** id */
	id:number;
	/** 坐骑名称 */
	name:string;
	/** 模型id */
	modelId:number;
	/** 头像 */
	icon:string;
	/** 品质 */
	color:number;
	/** 类型 */
	type:number;
}
/**
 * Z-战役事件表.xlsx
 * 表名 warEvent
 * 此文件由工具生成，请勿自行添加代码
 */
type warEventCfg = {
	/** 编码 */
	id:number;
	/** 战役关卡ID */
	warId:string;
	/** 出现条件 */
	condition:number;
	/** 执行事件 */
	execEvent:number;
}
/**
 * Z-战役章节表.xlsx
 * 表名 warlist
 * 此文件由工具生成，请勿自行添加代码
 */
type warlistCfg = {
	/** 关卡id */
	id:number;
	/** 篇章 */
	chapter:number;
	/** 章节名字 */
	chapterName:string;
	/** 事件 */
	event:number;
	/** 小关 */
	level:number;
	/** 关卡名称 */
	levelName:string;
	/** 事件通关奖励 */
	eventReward:string;
	/** 章节通关奖励 */
	chapterReward:string;
}
/**
 * Z-战役表.xlsx
 * 表名 war
 * 此文件由工具生成，请勿自行添加代码
 */
type warCfg = {
	/** 关卡id */
	id:number;
	/** 篇章 */
	chapter:number;
	/** 事件 */
	event:number;
	/** 小关 */
	level:number;
	/** 关卡名称 */
	levelName:string;
	/** 普通关怪物 */
	normalGremlin:number;
	/** BOSS关怪物 */
	BOSSGremlin:number;
	/** BOSS名字 */
	BossName:string;
	/** BOSS形象 */
	BossSkin:number;
	/** 普通关次数 */
	normalNum:number;
	/** 挂机收益/每场战斗 */
	normalReward:string;
	/** 离线收益/min */
	offlineReward:string;
	/** BOSS关结算奖励 */
	BOSSReward:string;
	/** 每一场战斗掉落 */
	normalDropReward:number;
	/** 我方助战武将 */
	convoy:number;
	/** 出场剧情 */
	startDialog:string;
	/** 结束剧情 */
	endDialog:string;
	/** 等级限制 */
	openLv:number;
	/** 是否显示引导 */
	showGuide:number;
}
/**
 * Z-战斗地图管理.xlsx
 * 表名 battleMap
 * 此文件由工具生成，请勿自行添加代码
 */
type battleMapCfg = {
	/** 编号 */
	id:number;
	/** 战斗类型 */
	type:number;
	/** 其他参数 */
	params:string;
	/** 地图 */
	map:string;
}
/**
 * Z-战斗失败指引.xlsx
 * 表名 loseGuide
 * 此文件由工具生成，请勿自行添加代码
 */
type loseGuideCfg = {
	/** id */
	id:number;
	/** 图标 */
	icon:string;
	/** 功能描述 */
	name:string;
	/** 消失条件 */
	condition:number;
	/** 条件参数 */
	conditionParam:number;
	/** 跳转 */
	goto:number;
}
/**
 * Z-新坐骑幻化表.xlsx
 * 表名 mountstar
 * 此文件由工具生成，请勿自行添加代码
 */
type mountstarCfg = {
	/** id */
	id:number;
	/** 坐骑 */
	mountId:number;
	/** 星级 */
	star:number;
	/** 基础属性 */
	attr:string;
	/** 所需材料 */
	wastage:string;
}
/**
 * Z-新坐骑法印修炼表.xlsx
 * 表名 mountsAperturePractice
 * 此文件由工具生成，请勿自行添加代码
 */
type mountsAperturePracticeCfg = {
	/** 编号 */
	id:number;
	/** 品质 */
	quality:number;
	/** 升阶等级 */
	level:number;
	/** 修炼限制 */
	limit:number;
	/** 修炼丹单次消耗 */
	singleConsumption:string;
	/** 升级需要次数 */
	frequency:number;
	/** 单次消耗增加的属性 */
	attribute:string;
	/** 当阶加成属性比 */
	percentage:number;
	/** 升阶丹消耗 */
	fly:string;
	/** 总属性 */
	allAttr:string;
	/** 是否传闻 */
	isBroadcast:number;
}
/**
 * Z-新坐骑法印升星表.xlsx
 * 表名 mountsApertureStar
 * 此文件由工具生成，请勿自行添加代码
 */
type mountsApertureStarCfg = {
	/** id */
	id:number;
	/** 法印ID */
	apertureId:number;
	/** 星级 */
	star:number;
	/** 升星属性 */
	attr:string;
	/** 所需材料 */
	wastage:string;
}
/**
 * Z-新坐骑法印突破表.xlsx
 * 表名 mountsApertureBreach
 * 此文件由工具生成，请勿自行添加代码
 */
type mountsApertureBreachCfg = {
	/** 编号 */
	id:number;
	/** 品质 */
	quality:number;
	/** 飞升等级 */
	level:number;
	/** 突破等级限制 */
	limit:number;
	/** 突破丹单次消耗 */
	singleConsumption:string;
	/** 升级需要次数 */
	frequency:number;
	/** 单次消耗增加的属性 */
	attribute:string;
	/** 当阶加成属性比 */
	percentage:number;
	/** 飞升丹消耗 */
	fly:string;
	/** 总属性 */
	allAttr:string;
	/** 是否传闻 */
	isBroadcast:number;
}
/**
 * Z-新坐骑法印表.xlsx
 * 表名 mountsAperture
 * 此文件由工具生成，请勿自行添加代码
 */
type mountsApertureCfg = {
	/** 法印ID */
	id:number;
	/** 法印名称 */
	name:string;
	/** 模型表ID */
	modelId:number;
	/** 法印品质 */
	color:number;
	/** 法印激活属性 */
	property:string;
	/** 名称图标 */
	nameIcon:string;
	/** 法印大图标 */
	bigIcon:string;
	/** 附带属性 */
	attach:string;
}
/**
 * Z-新坐骑法印进阶表.xlsx
 * 表名 mountsApertureAdvanced
 * 此文件由工具生成，请勿自行添加代码
 */
type mountsApertureAdvancedCfg = {
	/** 编号 */
	id:number;
	/** 品质 */
	quality:number;
	/** 进阶数 */
	level:number;
	/** 主将等级限制 */
	limit:number;
	/** 进阶丹单次消耗 */
	singleConsumption:string;
	/** 升级需要次数 */
	frequency:number;
	/** 单次消耗增加的属性 */
	attribute:string;
	/** 当阶加成属性 */
	levelAttribute:string;
	/** 总属性 */
	allAttr:string;
	/** 是否传闻 */
	isBroadcast:number;
}
/**
 * Z-新坐骑觉醒表.xlsx
 * 表名 mountrebirth
 * 此文件由工具生成，请勿自行添加代码
 */
type mountrebirthCfg = {
	/** ID */
	id:number;
	/** 转生等级 */
	advanced:number;
	/** 坐骑进阶数 */
	advancedLimit:number;
	/** 觉醒丹单次消耗 */
	breach:string;
	/** 觉醒次数 */
	upgradeFrequency:number;
	/** 觉醒单次消耗增加的属性 */
	breachAttr:string;
	/** 转生加成属性比 */
	percentage:number;
	/** 转生丹消耗 */
	fly:string;
	/** 总属性 */
	allAttr:string;
	/** 是否传闻 */
	isBroadcast:number;
}
/**
 * Z-新坐骑进阶表.xlsx
 * 表名 mountadvanced
 * 此文件由工具生成，请勿自行添加代码
 */
type mountadvancedCfg = {
	/** 进阶数 */
	id:number;
	/** 进阶丹单次消耗 */
	breach:string;
	/** 升级需要次数 */
	upgradeFrequency:number;
	/** 单次消耗增加的属性 */
	breachAttr:string;
	/** 进阶加成属性 */
	advancedAttribute:string;
	/** 可使用属性丹上限 */
	useLimit:number;
	/** 总属性 */
	allAttr:string;
	/** 是否传闻 */
	isBroadcast:number;
}
/**
 * Z-新装备强化突破表.xlsx
 * 表名 equipbreach
 * 此文件由工具生成，请勿自行添加代码
 */
type equipbreachCfg = {
	/** 编号 */
	id:number;
	/** 大类 */
	type:number;
	/** 装备强化等级 */
	upgradeLevel:number;
	/** 装备资质 */
	aptid:number;
	/** 装备部位 */
	position:number;
	/** 飞升数 */
	advanced:number;
	/** 突破丹单次消耗 */
	breach:string;
	/** 突破消耗次数 */
	upgrade:number;
	/** 单次消耗增加的属性 */
	breachAttr:string;
	/** 当阶飞升加成属性比 */
	percentage:number;
	/** 飞升丹消耗 */
	fly:string;
	/** 突破装备消耗 */
	equipmentConsumption:number;
	/** 飞升装备消耗 */
	flyUp:number;
	/** 总属性 */
	allAttr:string;
	/** 是否传闻 */
	isBroadcast:number;
}
/**
 * Z-新装备洗练表.xlsx
 * 表名 equipwashing
 * 此文件由工具生成，请勿自行添加代码
 */
type equipwashingCfg = {
	/** ID */
	id:number;
	/** 大类 */
	type:number;
	/** 装备资质 */
	aptid:number;
	/** 装备部位 */
	position:number;
	/** 属性ID */
	attributeID:number;
	/** 属性总范围 */
	attributeRange:number;
	/** 低级洗练单次随机值 */
	primaryValue:string;
	/** 高级洗练单次值 */
	seniorValue:number;
}
/**
 * Z-新装备精炼突破表.xlsx
 * 表名 equiprefine
 * 此文件由工具生成，请勿自行添加代码
 */
type equiprefineCfg = {
	/** 编号 */
	id:number;
	/** 大类 */
	type:number;
	/** 装备精炼等级 */
	upgradeLevel:number;
	/** 装备资质 */
	aptid:number;
	/** 装备部位 */
	position:number;
	/** 飞升数 */
	advanced:number;
	/** 突破丹单次消耗 */
	breach:string;
	/** 突破消耗次数 */
	upgrade:number;
	/** 单次消耗增加的属性 */
	breachAttr:string;
	/** 飞升加成属性比 */
	percentage:number;
	/** 飞升丹消耗 */
	fly:string;
	/** 突破装备消耗 */
	equipmentConsumption:number;
	/** 飞升装备消耗 */
	flyUp:number;
	/** 总属性 */
	allAttr:string;
	/** 是否传闻 */
	isBroadcast:number;
}
/**
 * Z-新装备表.xlsx
 * 表名 equipnew
 * 此文件由工具生成，请勿自行添加代码
 */
type equipnewCfg = {
	/** 装备ID */
	id:number;
	/** 大类 */
	type:number;
	/** 资质 */
	aptid:number;
	/** 洗练属性类型 */
	washproperty:string;
	/** 套装ID */
	suitid:number;
	/** 套装名 */
	suitname:string;
	/** 装备评分 */
	score:number;
	/** 初级洗练石消耗 */
	expend:string;
	/** 高级洗练石消耗 */
	expendplus:string;
	/** 情缘ID */
	gayid:string;
}
/**
 * Z-新装备锻造突破表.xlsx
 * 表名 equipforging
 * 此文件由工具生成，请勿自行添加代码
 */
type equipforgingCfg = {
	/** 编号 */
	id:number;
	/** 大类 */
	type:number;
	/** 装备锻造等级 */
	upgradeLevel:number;
	/** 装备资质 */
	aptid:number;
	/** 装备部位 */
	position:number;
	/** 飞升数 */
	advanced:number;
	/** 突破丹单次消耗 */
	breach:string;
	/** 突破消耗次数 */
	upgrade:number;
	/** 单次消耗增加的属性 */
	breachAttr:string;
	/** 飞升加成属性比 */
	percentage:number;
	/** 飞升丹消耗 */
	fly:string;
	/** 突破装备消耗 */
	equipmentConsumption:number;
	/** 飞升装备消耗 */
	flyUp:number;
	/** 总属性 */
	allAttr:string;
	/** 是否传闻 */
	isBroadcast:number;
}
/**
 * Z-新阵法共鸣和属性丹表.xlsx
 * 表名 tacticalidlevelconsumedan
 * 此文件由工具生成，请勿自行添加代码
 */
type tacticalidlevelconsumedanCfg = {
	/** id */
	id:number;
	/** 共鸣等级（不是进阶数） */
	level:number;
	/** 阵法共鸣 */
	specialAttr:string;
	/** 可使用属性丹上限 */
	useLimit:number;
}
/**
 * Z-新阵法突破表.xlsx
 * 表名 tacticalbreach
 * 此文件由工具生成，请勿自行添加代码
 */
type tacticalbreachCfg = {
	/** id */
	id:number;
	/** 进阶数 */
	advanced:number;
	/** 阵法突破限制 */
	limit:number;
	/** 突破丹单次消耗 */
	breach:string;
	/** 升级需要次数 */
	upgradeFrequency:number;
	/** 单次消耗增加的属性 */
	breachAttr:string;
	/** 当阶加成属性比 */
	percentage:number;
	/** 飞升丹消耗 */
	fly:string;
	/** 总属性 */
	allAttr:string;
	/** 是否传闻 */
	isBroadcast:number;
}
/**
 * Z-新阵法进阶表.xlsx
 * 表名 tacticalpromotionattr
 * 此文件由工具生成，请勿自行添加代码
 */
type tacticalpromotionattrCfg = {
	/** id */
	id:number;
	/** 阵法类型 */
	tacticalId:number;
	/** 进阶数 */
	level:number;
	/** 进阶丹单次消耗 */
	consume:string;
	/** 当前阶级属性(可直接使用的属性) */
	attr:string;
	/** 显示属性 */
	addstarattr:string;
	/** 是否传闻 */
	isBroadcast:number;
}
/**
 * Z-杂项配置表.xlsx
 * 表名 systemparam
 * 此文件由工具生成，请勿自行添加代码
 */
type systemparamCfg = {
	/** 编号 */
	id:number;
	/** 参数 */
	value:string;
}
/**
 * Z-组队副本表.xlsx
 * 表名 teamcopy
 * 此文件由工具生成，请勿自行添加代码
 */
type teamcopyCfg = {
	/** 排序 */
	id:number;
	/** 组队类型 */
	type:number;
	/** 组队副本名称 */
	name:string;
	/** 副本等级要求 */
	openLv:number;
	/** 模型id */
	modelId:number;
	/** 怪物ID */
	monsterId:number;
	/** 固定奖励 */
	fixedReward:string;
	/** 时段固定奖励 */
	fixedTimeReward:string;
	/** 正常随机奖励 */
	randReward:number;
	/** 时段随机奖励 */
	randTimeReward:number;
	/** 组队额外收益 */
	teamReward:string;
}
/**
 * Z-装备套装表.xlsx
 * 表名 equipsuit
 * 此文件由工具生成，请勿自行添加代码
 */
type equipsuitCfg = {
	/** ID */
	id:number;
	/** 套装ID */
	suitid:number;
	/** 需要数量 */
	amount:number;
	/** 套装属性 */
	property:string;
}
/**
 * Z-装备表.xlsx
 * 表名 equip
 * 此文件由工具生成，请勿自行添加代码
 */
type equipCfg = {
	/** 装备ID */
	id:number;
	/** 资质 */
	aptid:number;
	/** 可洗练属性 */
	washproperty:string;
	/** 可洗练条数 */
	washcount:number;
	/** 套装ID */
	suitid:number;
	/** 套装名 */
	suitname:string;
	/** 装备评分 */
	score:number;
	/** 低级洗练石消耗 */
	expend:number;
	/** 高级洗练石消耗 */
	expendplus:number;
	/** 洗练锁消耗 */
	lock:number;
	/** 情缘ID */
	gayid:string;
}
/**
 * Z-转生表.xlsx
 * 表名 rebirth
 * 此文件由工具生成，请勿自行添加代码
 */
type rebirthCfg = {
	/** 编号 */
	id:number;
	/** 转生等级 */
	rebirthLevel:number;
	/** 星级 */
	starLevel:number;
	/** 武将等级限制 */
	levelLimit:number;
	/** 武将消耗 */
	heroUseType:number;
	/** 消耗数量 */
	heroNums:number;
	/** 转生材料 */
	useGoods:string;
	/** 消耗装备 */
	useEquip:string;
	/** 升级额外增加的属性 */
	levelAttr:string;
	/** 到该级的属性(吃的装备累加属性) */
	equipAttr:string;
	/** 当前加成属性比 */
	attrRate:number;
	/** 是否传闻 */
	isBroadcast:number;
}
/**
 * Z-阵法信息表.xlsx
 * 表名 tactical
 * 此文件由工具生成，请勿自行添加代码
 */
type tacticalCfg = {
	/** 阵法id */
	id:number;
	/** 阵法名 */
	name:string;
	/** 开启条件 */
	condition:string;
	/** 专有属性 */
	uniqueatt:number;
	/** 阵法描述 */
	remark:string;
}
/**
 * Z_战斗地图表.xlsx
 * 表名 fightMap
 * 此文件由工具生成，请勿自行添加代码
 */
type fightMapCfg = {
	/** ID */
	id:number;
	/** 地图名 */
	name:string;
	/** 前景图 */
	foreground:string;
	/** 远景图 */
	background:string;
}
