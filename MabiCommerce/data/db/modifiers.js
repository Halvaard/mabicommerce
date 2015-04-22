[
	{
		"Id" : 0,
		"Name": "Partner",
		"ExtraSlots" : 1,
		"ExtraWeight" : 100,
		"ConflictsWith" : [1]
	},
	{
		"Id" : 1,
		"Name": "Alpaca",
		"ExtraSlots" : 2,
		"ExtraWeight" : 200,
		"TransportationBlacklist" : [0, 1, 3],
		"ConflictsWith" : [0]
	},
	{
		"Id" : 2,
		"Name": "Alpaca Robe",
		"SpeedBonus": .2, 
	},
	{
		"Id" : 3,
		"Name": "Letter [Ogre]",
		"ExpBonus": 0.3, 
		"GoldBonus": 0.3, 
		"ProfitBonus": 0.3, 
		"ConflictsWith" : [4,5,6,7,8]
	},
	{
		"Id" : 4,
		"Name": "Letter [Goblin]",
		"ExpBonus": 0.4, 
		"GoldBonus": 0.4, 
		"ProfitBonus": 0.4, 
		"ConflictsWith" : [3,5,6,7,8]
	},
	{
		"Id" : 5,
		"Name": "Letter [Imp]",
		"ExpBonus": 0.5, 
		"ProfitBonus": 0.5, 
		"GoldBonus": 0.5, 
		"ConflictsWith" : [3,4,6,7,8]
	},
	{
		"Id" : 6,
		"Name": "Letter [Ogre, Fine]",
		"ExpBonus": 0.9, 
		"GoldBonus": 0.9, 
		"ProfitBonus": 0.9, 
		"ConflictsWith" : [3,4,5,7,8]
	},
	{
		"Id" : 7,
		"Name": "Letter [Goblin, Fine]",
		"ExpBonus": 2.2, 
		"GoldBonus": 2.2, 
		"ProfitBonus": 2.2, 
		"ConflictsWith" : [3,4,5,6,8]
	},
	{
		"Id" : 8,
		"Name": "Letter [Imp, Fine]",
		"ExpBonus": 2.5, 
		"ProfitBonus": 2.5, 
		"GoldBonus": 2.5, 
		"ConflictsWith" : [3,4,5,6,7]
	},
]