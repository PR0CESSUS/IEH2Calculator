export type SourceKind = {
  ascendTime?: number;
  currentAreaKind?: number[];
  currentAreaId?: number[];
  isActiveBattle?: boolean[];
  blessingDurationLefts?: number[];
  monsterDefeatedNumsSlime?: number[];
  monsterDefeatedNumsMagicSlime?: number[];
  monsterDefeatedNumsSpider?: number[];
  monsterDefeatedNumsBat?: number[];
  monsterDefeatedNumsFairy?: number[];
  monsterDefeatedNumsFox?: number[];
  monsterDefeatedNumsDevilFish?: number[];
  monsterDefeatedNumsTreant?: number[];
  monsterDefeatedNumsFlameTiger?: number[];
  monsterDefeatedNumsUnicorn?: number[];
  monsterDefeatedNumsMimic?: number[];
  monsterDefeatedNumsChallenge?: number[];
  monsterCapturedNumsSlime?: number[];
  monsterCapturedNumsMagicSlime?: number[];
  monsterCapturedNumsSpider?: number[];
  monsterCapturedNumsBat?: number[];
  monsterCapturedNumsFairy?: number[];
  monsterCapturedNumsFox?: number[];
  monsterCapturedNumsDevilFish?: number[];
  monsterCapturedNumsTreant?: number[];
  monsterCapturedNumsFlameTiger?: number[];
  monsterCapturedNumsUnicorn?: number[];
  monsterCapturedNumsMimic?: number[];
  monsterCapturedNumsChallenge?: number[];
  monsterMutantDefeatedNumsSlime?: number[];
  monsterMutantDefeatedNumsMagicSlime?: number[];
  monsterMutantDefeatedNumsSpider?: number[];
  monsterMutantDefeatedNumsBat?: number[];
  monsterMutantDefeatedNumsFairy?: number[];
  monsterMutantDefeatedNumsFox?: number[];
  monsterMutantDefeatedNumsDevilFish?: number[];
  monsterMutantDefeatedNumsTreant?: number[];
  monsterMutantDefeatedNumsFlameTiger?: number[];
  monsterMutantDefeatedNumsUnicorn?: number[];
  monsterMutantDefeatedNumsMimic?: number[];
  monsterMutantDefeatedNumsChallenge?: number[];
  monsterMutantCapturedNumsSlime?: number[];
  monsterMutantCapturedNumsMagicSlime?: number[];
  monsterMutantCapturedNumsSpider?: number[];
  monsterMutantCapturedNumsBat?: number[];
  monsterMutantCapturedNumsFairy?: number[];
  monsterMutantCapturedNumsFox?: number[];
  monsterMutantCapturedNumsDevilFish?: number[];
  monsterMutantCapturedNumsTreant?: number[];
  monsterMutantCapturedNumsFlameTiger?: number[];
  monsterMutantCapturedNumsUnicorn?: number[];
  monsterMutantCapturedNumsMimic?: number[];
  monsterMutantCapturedNumsChallenge?: number[];
  summonSpecies?: number[];
  summonColor?: number[];
  isSetSummonPet?: boolean[];
  isInitialized?: boolean;
  materials?: number[];
  movedDistance?: number[];
  movedDistancePet?: number;
  heroLevel?: number[];
  heroExp?: number[];
  abilityPoints?: number[];
  abilityPointsVitality?: number[];
  abilityPointsStrength?: number[];
  abilityPointsIntelligence?: number[];
  abilityPointsAgility?: number[];
  abilityPointsLuck?: number[];
  combatRangeId?: number[];
  currentAreaLevelsSlime?: number[];
  currentAreaLevelsMagicSlime?: number[];
  currentAreaLevelsSpider?: number[];
  currentAreaLevelsBat?: number[];
  currentAreaLevelsFairy?: number[];
  currentAreaLevelsFox?: number[];
  currentAreaLevelsDevilFish?: number[];
  currentAreaLevelsTreant?: number[];
  currentAreaLevelsFlameTiger?: number[];
  currentAreaLevelsUnicorn?: number[];
  areaIsReceivedFirstRewardSlime?: boolean[];
  areaIsReceivedFirstRewardMagicSlime?: boolean[];
  areaIsReceivedFirstRewardSpider?: boolean[];
  areaIsReceivedFirstRewardBat?: boolean[];
  areaIsReceivedFirstRewardFairy?: boolean[];
  areaIsReceivedFirstRewardFox?: boolean[];
  areaIsReceivedFirstRewardDevilFish?: boolean[];
  areaIsReceivedFirstRewardTreant?: boolean[];
  areaIsReceivedFirstRewardFlameTiger?: boolean[];
  areaIsReceivedFirstRewardUnicorn?: boolean[];
  areaCompleteNumsSlime?: number[];
  areaCompleteNumsMagicSlime?: number[];
  areaCompleteNumsSpider?: number[];
  areaCompleteNumsBat?: number[];
  areaCompleteNumsFairy?: number[];
  areaCompleteNumsFox?: number[];
  areaCompleteNumsDevilFish?: number[];
  areaCompleteNumsTreant?: number[];
  areaCompleteNumsFlameTiger?: number[];
  areaCompleteNumsUnicorn?: number[];
  areaBestTimesSlime?: number[];
  areaBestTimesMagicSlime?: number[];
  areaBestTimesSpider?: number[];
  areaBestTimesBat?: number[];
  areaBestTimesFairy?: number[];
  areaBestTimesFox?: number[];
  areaBestTimesDevilFish?: number[];
  areaBestTimesTreant?: number[];
  areaBestTimesFlameTiger?: number[];
  areaBestTimesUnicorn?: number[];
  areaBestGoldsSlime?: number[];
  areaBestGoldsMagicSlime?: number[];
  areaBestGoldsSpider?: number[];
  areaBestGoldsBat?: number[];
  areaBestGoldsFairy?: number[];
  areaBestGoldsFox?: number[];
  areaBestGoldsDevilFish?: number[];
  areaBestGoldsTreant?: number[];
  areaBestGoldsFlameTiger?: number[];
  areaBestGoldsUnicorn?: number[];
  areaBestExpsSlime?: number[];
  areaBestExpsMagicSlime?: number[];
  areaBestExpsSpider?: number[];
  areaBestExpsBat?: number[];
  areaBestExpsFairy?: number[];
  areaBestExpsFox?: number[];
  areaBestExpsDevilFish?: number[];
  areaBestExpsTreant?: number[];
  areaBestExpsFlameTiger?: number[];
  areaBestExpsUnicorn?: number[];
  areaPrestigePointsSlime?: number[];
  areaPrestigePointsMagicSlime?: number[];
  areaPrestigePointsSpider?: number[];
  areaPrestigePointsBat?: number[];
  areaPrestigePointsFairy?: number[];
  areaPrestigePointsFox?: number[];
  areaPrestigePointsDevilFish?: number[];
  areaPrestigePointsTreant?: number[];
  areaPrestigePointsFlameTiger?: number[];
  areaPrestigePointsUnicorn?: number[];
  areaPrestigeUpgradeLevelsSlime?: number[];
  areaPrestigeUpgradeLevelsMagicSlime?: number[];
  areaPrestigeUpgradeLevelsSpider?: number[];
  areaPrestigeUpgradeLevelsBat?: number[];
  areaPrestigeUpgradeLevelsFairy?: number[];
  areaPrestigeUpgradeLevelsFox?: number[];
  areaPrestigeUpgradeLevelsDevilFish?: number[];
  areaPrestigeUpgradeLevelsTreant?: number[];
  areaPrestigeUpgradeLevelsFlameTiger?: number[];
  areaPrestigeUpgradeLevelsUnicorn?: number[];
  areaPrestigeResetNumsSlime?: number[];
  areaPrestigeResetNumsMagicSlime?: number[];
  areaPrestigeResetNumsSpider?: number[];
  areaPrestigeResetNumsBat?: number[];
  areaPrestigeResetNumsFairy?: number[];
  areaPrestigeResetNumsFox?: number[];
  areaPrestigeResetNumsDevilFish?: number[];
  areaPrestigeResetNumsTreant?: number[];
  areaPrestigeResetNumsFlameTiger?: number[];
  areaPrestigeResetNumsUnicorn?: number[];
  isClearedMission: boolean[];
  isClearedChallenge: boolean[];
  isReceivedRewardsChallenge?: boolean[];
  accomplishedFirstTimesChallenge?: number[];
  accomplishedTimesChallenge?: number[];
  accomplishedBestTimesChallenge?: number[];
  equipmentKinds: number[];
  equipmentOptionNums?: number[];
  equipmentIsLocked?: number[];
  dictionaryUpgradePoint?: number;
  dictionaryUpgradeLevels?: number[];
  enchantKinds?: number[];
  enchantEffectKinds?: number[];
  enchantEffectLevels?: number[];
  enchantForgeEffectKinds?: number[];
  enchantEffectValues?: number[];
  enchantIsLocked?: boolean[];
  equipment1stForgeValues: number[];
  equipment2ndForgeValues: number[];
  equipment3rdForgeValues: number[];
  equipment4thForgeValues: number[];
  equipment5thForgeValues: number[];
  equipment6thForgeValues: number[];
  equipmentLevelsWarrior: number[];
  equipmentLevelsWizard: number[];
  equipmentLevelsAngel: number[];
  equipmentLevelsThief: number[];
  equipmentLevelsArcher: number[];
  equipmentLevelsTamer: number[];
  equipmentProficiencyWarrior?: number[];
  equipmentProficiencyWizard?: number[];
  equipmentProficiencyAngel?: number[];
  equipmentProficiencyThief?: number[];
  equipmentProficiencyArcher?: number[];
  equipmentProficiencyTamer?: number[];
  equipmentIsMaxedWarrior: boolean[];
  equipmentIsMaxedWizard: boolean[];
  equipmentIsMaxedAngel: boolean[];
  equipmentIsMaxedThief: boolean[];
  equipmentIsMaxedArcher: boolean[];
  equipmentIsMaxedTamer: boolean[];
  equipmentIsAutoDisassemble?: boolean[];
  equipmentIsAutoProficiency?: boolean[];
  disassembledEquipmentNums?: number[];
  townMatGainFromdisassemble?: number[];
  equipment1stOptionEffectKinds: number[];
  equipment2ndOptionEffectKinds: number[];
  equipment3rdOptionEffectKinds: number[];
  equipment4thOptionEffectKinds: number[];
  equipment5thOptionEffectKinds: number[];
  equipment6thOptionEffectKinds: number[];
  equipment7thOptionEffectKinds: number[];
  equipment1stOptionLevels: number[];
  equipment2ndOptionLevels: number[];
  equipment3rdOptionLevels: number[];
  equipment4thOptionLevels: number[];
  equipment5thOptionLevels: number[];
  equipment6thOptionLevels: number[];
  equipment7thOptionLevels: number[];
  equipment1stOptionEffectValues: number[];
  equipment2ndOptionEffectValues: number[];
  equipment3rdOptionEffectValues: number[];
  equipment4thOptionEffectValues: number[];
  equipment5thOptionEffectValues: number[];
  equipment6thOptionEffectValues: number[];
  equipment7thOptionEffectValues: number[];
  equipmentId: number[];
  enchantId?: number[];
  potionId: number[];
  potionKinds: number[];
  potionStackNums: number[];
  potionIsLocked?: boolean[];
  potionLevels: number[];
  potionProductedNums?: number[];
  potionDisassembledNums: number[];
  guildLevel?: number;
  guildExp?: number;
  guildAbilityPoint?: number;
  guildAbilityLevels?: number[];
  accomplishedFirstTimesGuildLevel?: number[];
  accomplishedTimesGuildLevel?: number[];
  accomplishedBestTimesGuildLevel?: number[];
  alchemyPoint?: number;
  mysteriousWater?: number;
  mysteriousWaterProgress?: number;
  mysteriousWaterExpandedCapNum?: number;
  alchemyUpgradeLevels?: number[];
  catalystLevels?: number[];
  isEquippedCatarysts?: boolean[];
  essenceWaterPerSecs?: number[];
  essenceProgresses?: number[];
  craftEnchantScrollLevels?: number[];
  essences?: number[];
  totalGeneralQuestClearedNum?: number;
  totalGeneralQuestClearedNums?: number[];
  generalQuestClearNumsPerClass?: number[];
  isClearedQuestGeneralOnce?: boolean[];
  isPersistentUnlockedQuestGeneral?: boolean[];
  isClearedQuestsGlobal: boolean[];
  isClearedQuestsTitleWarrior?: boolean[];
  isClearedQuestsTitleWizard?: boolean[];
  isClearedQuestsTitleAngel?: boolean[];
  isClearedQuestsTitleThief?: boolean[];
  isClearedQuestsTitleArcher?: boolean[];
  isClearedQuestsTitleTamer?: boolean[];
  isClearedQuestsGeneralWarrior?: boolean[];
  isClearedQuestsGeneralWizard?: boolean[];
  isClearedQuestsGeneralAngel?: boolean[];
  isClearedQuestsGeneralThief?: boolean[];
  isClearedQuestsGeneralArcher?: boolean[];
  isClearedQuestsGeneralTamer?: boolean[];
  isAcceptedQuestsGlobal?: boolean[];
  isAcceptedQuestsTitleWarrior?: boolean[];
  isAcceptedQuestsTitleWizard?: boolean[];
  isAcceptedQuestsTitleAngel?: boolean[];
  isAcceptedQuestsTitleThief?: boolean[];
  isAcceptedQuestsTitleArcher?: boolean[];
  isAcceptedQuestsTitleTamer?: boolean[];
  isAcceptedQuestsGeneralWarrior?: boolean[];
  isAcceptedQuestsGeneralWizard?: boolean[];
  isAcceptedQuestsGeneralAngel?: boolean[];
  isAcceptedQuestsGeneralThief?: boolean[];
  isAcceptedQuestsGeneralArcher?: boolean[];
  isAcceptedQuestsGeneralTamer?: boolean[];
  initDefeatedNumQuestsGlobal?: number[];
  initDefeatedNumQuestsTitleWarrior?: number[];
  initDefeatedNumQuestsTitleWizard?: number[];
  initDefeatedNumQuestsTitleAngel?: number[];
  initDefeatedNumQuestsTitleThief?: number[];
  initDefeatedNumQuestsTitleArcher?: number[];
  initDefeatedNumQuestsTitleTamer?: number[];
  initDefeatedNumQuestsGeneralWarrior?: number[];
  initDefeatedNumQuestsGeneralWizard?: number[];
  initDefeatedNumQuestsGeneralAngel?: number[];
  initDefeatedNumQuestsGeneralThief?: number[];
  initDefeatedNumQuestsGeneralArcher?: number[];
  initDefeatedNumQuestsGeneralTamer?: number[];
  initCompletedAreaNumQuestsTitleWarrior?: number[];
  initCompletedAreaNumQuestsTitleWizard?: number[];
  initCompletedAreaNumQuestsTitleAngel?: number[];
  initCompletedAreaNumQuestsTitleThief?: number[];
  initCompletedAreaNumQuestsTitleArcher?: number[];
  initCompletedAreaNumQuestsTitleTamer?: number[];
  initCompletedAreaNumQuestsGeneralWarrior?: number[];
  initCompletedAreaNumQuestsGeneralWizard?: number[];
  initCompletedAreaNumQuestsGeneralAngel?: number[];
  initCompletedAreaNumQuestsGeneralThief?: number[];
  initCompletedAreaNumQuestsGeneralArcher?: number[];
  initCompletedAreaNumQuestsGeneralTamer?: number[];
  initMovedDistanceQuestTitle?: number[];
  initPhysicalSkillTriggeredNumQuestTitle?: number[];
  initFireSkillTriggeredNumQuestTitle?: number[];
  initIceSkillTriggeredNumQuestTitle?: number[];
  initThunderSkillTriggeredNumQuestTitle?: number[];
  initLightSkillTriggeredNumQuestTitle?: number[];
  initDarkSkillTriggeredNumQuestTitle?: number[];
  survivalNumQuestTitle?: number[];
  rebirthMaxHeroLevels?: number[];
  rebirthNumsWarrior?: number[];
  rebirthNumsWizard?: number[];
  rebirthNumsAngel?: number[];
  rebirthNumsThief?: number[];
  rebirthNumsArcher?: number[];
  rebirthNumsTamer?: number[];
  rebirthPlayTimesWarrior?: number[];
  rebirthPlayTimesWizard?: number[];
  rebirthPlayTimesAngel?: number[];
  rebirthPlayTimesThief?: number[];
  rebirthPlayTimesArcher?: number[];
  rebirthPlayTimesTamer?: number[];
  rebirthMaxHeroLevelsWarrior?: number[];
  rebirthMaxHeroLevelsWizard?: number[];
  rebirthMaxHeroLevelsAngel?: number[];
  rebirthMaxHeroLevelsThief?: number[];
  rebirthMaxHeroLevelsArcher?: number[];
  rebirthMaxHeroLevelsTamer?: number[];
  rebirthPointsWarrior?: number[];
  rebirthPointsWizard?: number[];
  rebirthPointsAngel?: number[];
  rebirthPointsThief?: number[];
  rebirthPointsArcher?: number[];
  rebirthPointsTamer?: number[];
  rebirthUpgradeLevelsWarrior?: number[];
  rebirthUpgradeLevelsWizard?: number[];
  rebirthUpgradeLevelsAngel?: number[];
  rebirthUpgradeLevelsThief?: number[];
  rebirthUpgradeLevelsArcher?: number[];
  rebirthUpgradeLevelsTamer?: number[];
  purchasedNumMaterials?: number[];
  purchasedNumTraps?: number[];
  purchasedNumBlessing?: number;
  purchasedNumTownMaterials?: number[];
  shopRestockTimecount?: number;
  isAutoBuyBlessings?: boolean[];
  warriorSkillLevel?: number[];
  wizardSkillLevel?: number[];
  angelSkillLevel?: number[];
  thiefSkillLevel?: number[];
  archerSkillLevel?: number[];
  tamerSkillLevel?: number[];
  warriorMaxReachedSkillLevel?: number[];
  wizardMaxReachedSkillLevel?: number[];
  angelMaxReachedSkillLevel?: number[];
  thiefMaxReachedSkillLevel?: number[];
  archerMaxReachedSkillLevel?: number[];
  tamerMaxReachedSkillLevel?: number[];
  warriorSkillRank?: number[];
  wizardSkillRank?: number[];
  angelSkillRank?: number[];
  thiefSkillRank?: number[];
  archerSkillRank?: number[];
  tamerSkillRank?: number[];
  warriorSkillProficiency?: number[];
  wizardSkillProficiency?: number[];
  angelSkillProficiency?: number[];
  thiefSkillProficiency?: number[];
  archerSkillProficiency?: number[];
  tamerSkillProficiency?: number[];
  currentStanceId?: number[];
  isEquippedWarriorSkillForWarrior?: boolean[];
  isEquippedWizardSkillForWarrior?: boolean[];
  isEquippedAngelSkillForWarrior?: boolean[];
  isEquippedThiefSkillForWarrior?: boolean[];
  isEquippedArcherSkillForWarrior?: boolean[];
  isEquippedTamerSkillForWarrior?: boolean[];
  isEquippedWarriorSkillForWizard?: boolean[];
  isEquippedWizardSkillForWizard?: boolean[];
  isEquippedAngelSkillForWizard?: boolean[];
  isEquippedThiefSkillForWizard?: boolean[];
  isEquippedArcherSkillForWizard?: boolean[];
  isEquippedTamerSkillForWizard?: boolean[];
  isEquippedWarriorSkillForAngel?: boolean[];
  isEquippedWizardSkillForAngel?: boolean[];
  isEquippedAngelSkillForAngel?: boolean[];
  isEquippedThiefSkillForAngel?: boolean[];
  isEquippedArcherSkillForAngel?: boolean[];
  isEquippedTamerSkillForAngel?: boolean[];
  isEquippedWarriorSkillForThief?: boolean[];
  isEquippedWizardSkillForThief?: boolean[];
  isEquippedAngelSkillForThief?: boolean[];
  isEquippedThiefSkillForThief?: boolean[];
  isEquippedArcherSkillForThief?: boolean[];
  isEquippedTamerSkillForThief?: boolean[];
  isEquippedWarriorSkillForArcher?: boolean[];
  isEquippedWizardSkillForArcher?: boolean[];
  isEquippedAngelSkillForArcher?: boolean[];
  isEquippedThiefSkillForArcher?: boolean[];
  isEquippedArcherSkillForArcher?: boolean[];
  isEquippedTamerSkillForArcher?: boolean[];
  isEquippedWarriorSkillForTamer?: boolean[];
  isEquippedWizardSkillForTamer?: boolean[];
  isEquippedAngelSkillForTamer?: boolean[];
  isEquippedThiefSkillForTamer?: boolean[];
  isEquippedArcherSkillForTamer?: boolean[];
  isEquippedTamerSkillForTamer?: boolean[];
  buildingLevels: number[];
  buildingRanks?: number[];
  buildingResearchLevelsStone: number[];
  buildingResearchLevelsCrystal: number[];
  buildingResearchLevelsLeaf: number[];
  buildingResearchExpsStone?: number[];
  buildingResearchExpsCrystal?: number[];
  buildingResearchExpsLeaf?: number[];
  IsBuildingResearchStone?: boolean[];
  IsBuildingResearchCrystal?: boolean[];
  IsBuildingResearchLeaf?: boolean[];
  accomplishedFirstTimesBuilding?: number[];
  accomplishedTimesBuilding?: number[];
  accomplishedBestTimesBuilding?: number[];
  townMaterials?: number[];
  upgradeLevelsResource: number[];
  upgradeLevelsBasicStats: number[];
  upgradeLevelsGoldGain: number;
  upgradeLevelsExpGain: number;
  upgradeLevelsEquipmentInventory: number;
  upgradeLevelsGoldCap: number[];
  upgradeLevelsSlimebank: number[];
  gold?: number;
  slimeCoin?: number;
  resources?: number[];
  playtimes?: number[];
  playtimesRealTime?: number[];
  multibuyId?: number;
  version?: number;
  lastServerTimeGotServerTime?: number;
  lastLocalTimeGotServerTime?: number;
  lastTimeLocal?: number;
  birthDate?: number;
  allTime?: number;
  allTimeRealtime?: number;
  allTimeWorldAscension?: number;
  lastDailyTime?: number;
  SEVolume?: number;
  BGMVolume?: number;
  wasd?: number;
  lastCloudSaveTimeForBonus?: number;
  isCloudSaveOnce?: boolean;
  isGotAchievements?: boolean[];
  isGotAchievementRewards?: boolean[];
  achievementPlaytimes?: number[];
  monsterMilk?: number;
  monsterPetRanks: number[];
  monsterPetLevels: number[];
  monsterPetExps?: number[];
  monsterPetLoyalty: number[];
  monsterPetLoyaltyExp?: number[];
  monsterPetTamingPoints?: number[];
  monsterPetIsActives?: boolean[];
  openedChestNum?: number;
  isVer01010201?: boolean;
  isVer01010302?: boolean;
  isVer01010402?: boolean;
  isVer01010706?: boolean;
  isVer01010801?: boolean;
  isVer01010803?: boolean;
  isVer01010805?: boolean;
  isVer01011101?: boolean;
  isVer01011112?: boolean;
  isVer01011113?: boolean;
  isVer01011301?: boolean;
  isVer01011401?: boolean;
  isVer01011401_2?: boolean;
  isVer01011404?: boolean;
  isVer01011405?: boolean;
  isVer01011406?: boolean;
  isVer01011407?: boolean;
  isVer01011408?: boolean;
  totalMovedDistance?: number[];
  totalMovedDistancePet?: number;
  maxHeroLevelReached?: number[];
  physicalTriggeredNum?: number[];
  fireTriggeredNum?: number[];
  iceTriggeredNum?: number[];
  thunderTriggeredNum?: number[];
  lightTriggeredNum?: number[];
  darkTriggeredNum?: number[];
  persistentSkillSlotNum?: number[];
  persistentGlobalSkillSlotNum?: number;
  areaIsUnlockedOnceSlime?: boolean[];
  areaIsUnlockedOnceMagicslime?: boolean[];
  areaIsUnlockedOnceSpider?: boolean[];
  areaIsUnlockedOnceBat?: boolean[];
  areaIsUnlockedOnceFairy?: boolean[];
  areaIsUnlockedOnceFox?: boolean[];
  areaIsUnlockedOnceDevilfish?: boolean[];
  areaIsUnlockedOnceTreant?: boolean[];
  areaIsUnlockedOnceFlametiger?: boolean[];
  areaIsUnlockedOnceUnicorn?: boolean[];
  portalOrbNum?: number;
  lastSwarmPlaytime?: number;
  swarmClearedNum?: number;
  swarmBestScores?: number[];
  ascensionNum?: number[];
  ascensionPlayTime?: number[];
  ascensionPoints?: number[];
  bestAscensionPlayTime?: number[];
  accomplishedFirstTimeAscension?: number[];
  accomplishedTimeAscension?: number[];
  accomplishedBestTimeAscension?: number[];
  ascensionMilestoneLevelReached: number[];
  isGotRewardWAAccomplishments?: boolean[];
  worldAscensionUpgradeLevels?: number[];
  regularChestRNG?: number[];
  regularChestRNGUsedIdNum?: number;
  isReceivedRegularChestToday?: boolean;
  epicCoin?: number;
  epicCoinConsumed?: number;
  epicStorePurchasedNum: number[];
  language?: number;
  inAppPurchasedNum: number[];
  inAppPurchasedNum_ver01011401?: number[];
  totalEquipmentGained?: number;
  equipmentIsGotOnce?: boolean[];
  equipmentLoadoutIds?: number[];
  potionQueues?: number[];
  potionIsSuperQueues?: boolean[];
  isStartedExpedition?: boolean[];
  expeditionProgress?: number[];
  expeditionTimeId?: number[];
  expeditionMovedDistance?: number[];
  expeditionPetSpecies: number[];
  expeditionPetColors: number[];
  expeditionPetIsSet: boolean[];
  expeditionKinds?: number[];
  expeditionLevels: number[];
  expeditionExps?: number[];
  expeditionCompletedNums?: number[];
  expeditionTimes?: number[];
  maxGuildLevel?: number;
  talismanFragement?: number;
  totalAlchemyPointGained?: number;
  isOnAMWA?: boolean;
  amwaIsEquippedCatalysts?: boolean[];
  amwaSavedEssenceWaterPerSecs?: number[];
  dailyQuestRarities?: number[];
  dailyQuestMonsterSpecies?: number[];
  dailyQuestAreaKind?: number[];
  dailyQuestAreaId?: number[];
  isClearedQuestsDaily?: boolean[];
  isAcceptedQuestsDaily?: boolean[];
  initDefeatedNumQuestsDaily?: number[];
  initCompletedAreaNumQuestsDaily?: number[];
  maxReachedGeneralQuestClearedNums?: number[];
  isFavoriteQuestWarrior?: boolean[];
  isFavoriteQuestWizard?: boolean[];
  isFavoriteQuestAngel?: boolean[];
  isFavoriteQuestThief?: boolean[];
  isFavoriteQuestArcher?: boolean[];
  isFavoriteQuestTamer?: boolean[];
  questingAreaKinds?: number[];
  questingAreaIds?: number[];
  questingAreaIsDungeon?: boolean[];
  isGotFirstEQ?: boolean;
  totalRebirthNums?: number[];
  bestRebirthPlaytimes?: number[];
  isAutoRebirthOns?: boolean[];
  autoRebirthLevels?: number[];
  autoRebirthPoints?: number[];
  autoRebirthTiers?: number[];
  favoriteAreaKinds?: number[];
  favoriteAreaIds?: number[];
  isBestExpSecAreas?: boolean[];
  isLazyQuestingMode?: boolean[];
  isAutoAbilityPointPresets?: boolean[];
  autoAbilityPointPresetsVIT?: number[];
  autoAbilityPointPresetsSTR?: number[];
  autoAbilityPointPresetsINT?: number[];
  autoAbilityPointPresetsAGI?: number[];
  autoAbilityPointPresetsLUK?: number[];
  autoAbilityPointMaxVIT?: number[];
  autoAbilityPointMaxSTR?: number[];
  autoAbilityPointMaxINT?: number[];
  autoAbilityPointMaxAGI?: number[];
  autoAbilityPointMaxLUK?: number[];
  accomplishedFirstTimesRebirth?: number[];
  accomplishedTimesRebirth?: number[];
  accomplishedBestTimesRebirth?: number[];
  warriorSkillTriggeredNum?: number[];
  wizardSkillTriggeredNum?: number[];
  angelSkillTriggeredNum?: number[];
  thiefSkillTriggeredNum?: number[];
  archerSkillTriggeredNum?: number[];
  tamerSkillTriggeredNum?: number[];
  skillLoadoutIds?: number[];
  upgradeQueuesResource?: number[];
  upgradeQueuesBasicStats?: number[];
  upgradeQueuesGoldGain?: number;
  upgradeQueueExpGain?: number;
  upgradeQueuesEquipmentInventory?: number;
  upgradeQueuesGoldCap?: number[];
  upgradeQueuesSlimebank?: number[];
  upgradeIsSuperQueuesResource?: boolean[];
  upgradeIsSuperQueuesBasicStats?: boolean[];
  upgradeIsSuperQueuesGoldGain?: boolean;
  upgradeIsSuperQueueExpGain?: boolean;
  upgradeIsSuperQueueEquipmentInventory?: boolean;
  upgradeIsSuperQueuesGoldCap?: boolean[];
  upgradeIsSuperQueuesSlimebank?: boolean[];
  nitro?: number;
  nitroConsumed?: number;
  nitroSpeed: number;
  totalGold?: number;
  totalStone?: number;
  totalCrystal?: number;
  totalLeaf?: number;
  totalSlimeCoin?: number;
  isDlcStarterPack?: boolean;
  isDlcNitroPack?: boolean;
  isDlcGlobalSkillSlotPack?: boolean;
  isDlcInventorySlotPack?: boolean;
  currentHero?: number;
  multibuyNums?: number[];
  isUsedSimulationOnce?: boolean;
  isShowQuickAccess?: boolean;
  autoAreaProgressionTargetClearNums?: number[];
  isReceivedBonusCodes?: boolean[];
  isEnchantFilter?: boolean[];
  enchantFilterLevel?: number[];
  isSlotNumEnchantFilter?: boolean;
  slotNumEnchantFilter?: number;
  checkedIEH1Achievement?: number;
  receivedIEH1Achievement?: number;
  isReceivedIEH1DLCIEH2SupportPack?: boolean;
  isScrollFilter?: boolean[];
  isToggleOn?: boolean[];
  bgmVolume?: number;
  sfxVolume?: number;
  numberFormatKind?: number;
  isFirstWelcomed?: boolean;
  currentTutorialArrow?: number;
  equipmentOptionNums1?: number[];
  equipmentOptionNums2?: number[];
  equipmentOptionNums3?: number[];
  equipmentOptionNums4?: number[];
  equipmentOptionNums5?: number[];
  equipmentOptionNums6?: number[];
  equipmentIsLocked1?: boolean[];
  equipmentIsLocked2?: boolean[];
  equipmentIsLocked3?: boolean[];
  equipmentIsLocked4?: boolean[];
  equipmentIsLocked5?: boolean[];
  equipmentIsLocked6?: boolean[];
  sdGemLevels: number[];
  dungeonCoin?: number;
  topaz?: number;
  ruby?: number;
  pieceOfRuby?: number;
  motherStone?: number;
  entryCostRefreshTicket?: number;
  guildGrade?: number;
  guildFame?: number;
  guildSuperAbilityPoint?: number;
  totalSDRun?: number;
  totalSDRunFailed?: number;
  totalDungeonCoinGained?: number;
  totalPermanentDungeonCoinGained?: number;
  totalTopazGained?: number;
  totalRubyGained?: number;
  totalPieceOfRubyGained?: number;
  totalMotherStoneGained?: number;
  totalEntryCostRefreshTicketGained?: number;
  totalEntryCostRefreshTicketUsed?: number;
  totalDodgeNum?: number;
  pieceOfRubyGainFromDisassemble?: number;
  maxGuildGrade?: number;
  isAlphaSave?: boolean;
  SDAutoLeaveAndRetryTargetFloor?: number;
  SDAutoLeaveAndRetryTargetEntryCost?: number;
  SDAutoProgressionTargetFloor?: number;
  SDAutoUseRefreshTicketTargetEntryCost?: number;
  SDAutoBuyPurchaseNum?: number;
  SDAutoBuyStopFloor?: number;

  superAbilityPoint?: number[];
  heroFame?: number[];
  heroGrade?: number[];
  superAbilityPointsVitality?: number[];
  superAbilityPointsStrength?: number[];
  superAbilityPointsIntelligence?: number[];
  superAbilityPointsAgility?: number[];
  superAbilityPointsLuck?: number[];
  superDungeonMaxFloorsReached?: number[];
  superDungeonPowerupIsUnlocked?: boolean[];
  superDungeonPowerupPurchasedNums?: number[];
  superDungeonPowerupRanks?: number[];
  superDungeonShopPurchasedNums?: number[];
  superDungeonUpgradeLevels?: number[];
  superDungeonUpgradeIsSuperQueued?: boolean[];

  guildSuperAbilityLevels?: number[];

  sdMobDefeatedNums?: number[];

  maxHeroGradeReached?: number[];

  sdGemExps?: number[];
  sdGemMotherStoneAssigned?: number[];
  modifierLoadoutId?: number[];
  isActiveSdModifiers?: boolean[];
  maxModifierCleareds?: number[];
  sdModifierValues?: number[];
  inAppPurchasedNum_ver01020101?: number[];

  isDisassembleTalismans?: boolean[];

  autoTargetGuildAbilityLevels?: number[];

  maxBuildingLevelsReached?: number[];
  maxBuildingRanksReached?: number[];
  isPowerupFilter?: boolean[];
  powerupFilterPurchaseLimit?: number[];
  powerupFilterLoadoutId?: number[];
  equipment7thForgeValues1?: number[];
  equipment7thForgeValues2?: number[];
  equipment7thForgeValues3?: number[];
  equipment7thForgeValues4?: number[];
  equipment7thForgeValues5?: number[];
  equipment7thForgeValues6?: number[];
};
