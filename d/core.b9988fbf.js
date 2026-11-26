const N={};
function node(o){N[o.id]=o}

node({id:'',title:'Thar Labs',kind:'Home'});

/* ===================== ENERGY ===================== */
node({id:'energy',parent:'',kind:'Industry',icon:'lightning',title:'Energy and renewables',
lede:'India\'s power system tracked from the national mix down to a single project and the contract that buys its power. Every figure is dated and sourced.',
asof:'September 30, 2026',
kpis:[['Installed capacity','558,897','MW','CEA, September 30, 2026'],['Non-fossil share','55.11','%','308,027 MW of 558,897 MW'],['Solar','171,051','MW','30.61% of all capacity'],['RE added, Q2 FY27','7','GW','Against 0.8 GW of thermal (CREA)']],
blocks:[
{t:'line',h:'Solar and wind capacity through 2026',u:'MW',x:['Jan','Mar','Apr','May','Jun','Jul','Aug','Sep'],s:[['Solar',[140602,150261,154236,157046,162152,164595,168040,171051]],['Wind',[54650,56095,56437,56807,57443,58137,58520,59201]]],src:'CEA and NPP monthly installed capacity reports, 2026'},
{t:'hbars',h:'Plant load factor by source, Q2 FY27',u:'%',r:[['Nuclear',82],['Coal',68],['Lignite',51],['Large hydro',50],['Small hydro',44],['Wind',37],['Gas',18],['Solar',18.3]],src:'CREA India Energy Snapshot, Q2 FY2026-27'}],
kids:['capacity','markets','developers','tenders','discoms'],
src:['CEA installed capacity report, September 30, 2026','CREA India Energy Snapshot Q2 FY2026-27, October 12, 2026']});

node({id:'capacity',parent:'energy',kind:'Module',icon:'stack',title:'Installed capacity by source',
lede:'Coal still holds 40% of capacity, but every month of 2026 has moved the non-fossil share up. This level breaks the 558,897 MW into its parts.',
asof:'September 30, 2026',
kpis:[['Coal','225,068','MW','40.27% share'],['Total fossil','250,870','MW','44.89%'],['Total non-fossil','308,027','MW','55.11%'],['Nuclear','8,780','MW','Unchanged all year']],
blocks:[
{t:'split',h:'Capacity mix, September 30, 2026',u:'MW',r:[['Coal',225068],['Solar',171051],['Wind',59201],['Large hydro incl. PSP',52065],['Gas',19144],['Bio power',10869],['Nuclear',8780],['Lignite',6370],['Small hydro',5182],['Waste to energy',878],['Diesel',288]],src:'CEA, September 30, 2026'},
{t:'line',h:'Non-fossil share of capacity, 2026',u:'%',x:['Mar','Apr','May','Jun','Jul','Aug','Sep'],s:[['Non-fossil share',[53.2,53.61,53.75,54.18,54.44,54.88,55.11]]],src:'CEA monthly reports, March to September 2026'},
{t:'table',h:'Total installed capacity by month',c:['Month end','Total MW','Fossil MW','Non-fossil MW','Coal MW'],r:[['March 2026','532,740','249,272','283,468','221,940'],['April 2026','537,264','249,229','288,035','221,898'],['May 2026','542,354','250,829','291,525','223,498'],['June 2026','548,858','251,489','297,369','224,158'],['July 2026','551,995','251,489','300,506','224,158'],['August 2026','554,544','250,210','304,334','224,408'],['September 2026','558,897','250,870','308,027','225,068']],src:'CEA and Ministry of Power, Power Sector at a Glance'}],
kids:['renewables'],
src:['CEA installed capacity reports, April to September 2026','Ministry of Power, Power Sector at a Glance, March 31, 2026']});

node({id:'renewables',parent:'capacity',kind:'Segment',icon:'leaf',title:'Renewables',
lede:'Renewables including large hydro reached 299,247 MW. Solar alone is now larger than wind, hydro and bio power put together.',
asof:'September 30, 2026',
kpis:[['RE incl. hydro','299,247','MW','53.54% of capacity'],['Wind, solar and other RE','247,182','MW','44.23%'],['FY26 solar added','44.6','GW','Plus 6 GW of wind'],['500 GW target','59.5','% done','202.64 GW still to build (April 2026)']],
blocks:[
{t:'split',h:'Renewable capacity by source',u:'MW',r:[['Solar',171051],['Wind',59201],['Large hydro incl. PSP',52065],['Bio power',10869],['Small hydro',5182],['Waste to energy',878]],src:'CEA, September 30, 2026'},
{t:'hbars',h:'Solar plus wind by state, March 2026',u:'GW',r:[['Rajasthan',43.46,'rajasthan'],['Gujarat',37.89,'gujarat'],['Tamil Nadu',24.15]],note:'The three states hold 60.3% of India\'s solar and wind.',src:'JMK Research, March 2026'},
{t:'bars',h:'Renewable capacity added in FY26, top states',u:'GW',x:['Rajasthan','Gujarat','Maharashtra'],s:[['Added',[12.2,11.9,6.8]]],src:'MNRE state-wise data, FY2025-26'}],
kids:['solar','wind','gujarat','rajasthan'],
src:['CEA, September 30, 2026','JMK Research India RE tracker, March 31, 2026','MNRE physical progress, FY2025-26']});

node({id:'solar',parent:'renewables',kind:'Technology',icon:'sun',title:'Solar',
lede:'Solar added 30,449 MW between January and September 2026, and monthly additions have not dropped below 2,400 MW since April.',
asof:'September 30, 2026',
kpis:[['Installed solar','171,051','MW','From 2.8 GW in 2014'],['Added, Jan to Sep','30,449','MW','140,602 to 171,051 MW'],['Rooftop, H1 2026','6.4','GW','Up 104% year on year'],['Solar PLF','18.3','%','Q2 FY27']],
blocks:[
{t:'bars',h:'Solar added each month, 2026',u:'MW',x:['Apr','May','Jun','Jul','Aug','Sep'],s:[['Added',[3975,2810,5106,2443,3445,3011]]],note:'April and May from MNRE. June to September are the change in CEA month-end totals.',src:'MNRE and CEA'},
{t:'hbars',h:'State share of India\'s solar, June 2026',u:'MW',r:[['Rajasthan',43318,'rajasthan'],['Gujarat',32303,'gujarat']],note:'Rajasthan alone holds 26.71% of national solar.',src:'MNRE, June 2026; Gujarat government, July 2026'},
{t:'table',h:'How Rajasthan\'s solar splits by segment, March 31, 2026',c:['Segment','MW'],r:[['Ground-mounted','36,125.95'],['Rooftop','2,090.40'],['Hybrid (solar part)','1,980.00'],['Off-grid and KUSUM','816.27'],['Solar total','41,012.62']],src:'MNRE state-wise table'}],
kids:['utility'],
src:['CEA, January to September 2026','MNRE physical progress, April and May 2026','PIB factsheet, July 2026']});

node({id:'utility',parent:'solar',kind:'Segment',icon:'solar-panel',title:'Utility-scale solar',
lede:'Ground-mounted plants make up most of India\'s solar. The pipeline behind them is 58 GW, and tendering has shifted hard toward storage and hybrid.',
asof:'September 2026',
kpis:[['Commissioned','118.7','GW','JMK, March 31, 2026'],['In pipeline','58.20','GW','Awarded, not yet built'],['Tendered, 9M 2026','66','GW','28 GW auctioned'],['Solar parks planned','42,107','MW','CEA status report, September 2026']],
blocks:[
{t:'bars',h:'Capacity tendered against capacity auctioned',u:'GW',x:['1H 2026','Q3 2026','9M 2026'],s:[['Tendered',[44.1,21,66]],['Auctioned',[16.3,12,28]]],note:'Storage and hybrid made up 45% of capacity tendered in 1H 2026.',src:'Mercom India'},
{t:'hbars',h:'Large-scale solar added in FY26 by state',u:'MW',r:[['Rajasthan',12140,'rajasthan'],['Gujarat',8952,'gujarat'],['Maharashtra',6177]],src:'JMK Research, FY2025-26'}],
kids:['gujarat','rajasthan','tenders'],
src:['JMK Research, March 31, 2026','Mercom India tender tracker, 1H and Q3 2026','CEA solar park status report, September 2026']});

node({id:'gujarat',parent:'utility',kind:'State',icon:'map-trifold',title:'Gujarat',
lede:'Gujarat ranks first in India for total renewable capacity, wind and rooftop solar. Most of its next decade of growth sits in one district, Kutch.',
asof:'July 2026',
kpis:[['Renewable capacity','50,386','MW','Up from 47,178 MW in March'],['Solar','32,302.7','MW','Incl. 7,408 MW rooftop'],['Wind','15,850.56','MW','First in India'],['2030 target','105','GW','State target']],
blocks:[
{t:'split',h:'Gujarat renewable capacity, July 2026',u:'MW',r:[['Solar',32302.7],['Wind',15850.56],['Other renewables',2232.74]],note:'Other renewables is the remainder of the 50,386 MW total.',src:'Gujarat Energy Department, July 9, 2026'},
{t:'hbars',h:'Established solar parks outside Kutch',u:'MW',r:[['Charanka',749],['Radhanesda',700],['Dholera',300]],src:'Gujarat government, January 2026'},
{t:'facts',h:'Distribution and farm solar',r:[['Rooftop systems','Over 13 lakh installations'],['PM KUSUM Component B','22,792 off-grid solar pumps, 162.62 MW (May 2026)'],['Share of India\'s RE','17.82%']],src:'Gujarat Energy Department'}],
kids:['kutch'],
src:['Gujarat Energy Department release, July 9, 2026','IANS, January 31, 2026']});

node({id:'kutch',parent:'gujarat',kind:'District',icon:'map-pin',title:'Kutch',
lede:'Kutch holds more than half of Gujarat\'s wind and the whole of the Khavda park on the Pakistan border, where capacity grew by 4.2 GW in four months.',
asof:'May 2026',
kpis:[['Kutch wind','8,191.42','MW','51.7% of Gujarat wind'],['Khavda planned','37.35','GW','State figure'],['Khavda achieved','15.54','GW','May 2026'],['Land allotted','74,700','ha','Near the international border']],
blocks:[
{t:'bars',h:'Khavda capacity achieved',u:'GW',x:['January 2026','May 2026'],s:[['Achieved',[11.33,15.54]]],src:'Gujarat government releases'},
{t:'bars',h:'Kutch wind capacity',u:'MW',x:['December 2025','May 2026'],s:[['Kutch',[7476.73,8191.42]],['Rest of Gujarat',[7344.21,7659.14]]],src:'Gujarat Energy Department'},
{t:'table',h:'NTPC wind projects under construction in Kutch',c:['Project','MW','Expected'],r:[['Dayapar-II wind','200','January 2026'],['Vanki wind (TBCB)','180','December 2025'],['ISTS wind, Tranche XII','150','September 30, 2026']],src:'CEA under-construction report'}],
kids:['khavda'],
src:['Gujarat Energy Department, July 2026','CEA report on under-construction RE projects']});

node({id:'khavda',parent:'kutch',kind:'Park',icon:'factory',title:'Khavda Renewable Energy Park',
lede:'The world\'s largest renewable park under development. Six developers share it: Adani Green runs the largest zone, state utilities run the rest through sub-parks with their own allottees.',
asof:'September 2026',
kpis:[['Planned','37.35','GW','State plan'],['Achieved','15.54','GW','May 2026'],['Adani zone plan','30','GW','538 sq km'],['Zones tracked','5','','Adani zone plus four state sub-parks']],
blocks:[
{t:'hbars',h:'Planned capacity by zone',u:'MW',r:[['Adani Green zone',30000,'adani-khavda'],['NTPC REL solar park',4750,'ntpc-khavda'],['GSECL RE park',3325,'gsecl-khavda'],['GIPCL RE park Ph-II',1200,'gipcl-khavda'],['GIPCL RE park Ph-I',600]],src:'CEA solar park status report; AGEL'},
{t:'table',h:'Who builds in each zone',c:['Zone','Capacity','Allottees and EPC','Completion'],r:[['Adani Green zone','30,000 MW','AGEL step-down subsidiaries','2030 (expected)'],['NTPC REL solar park','4,750 MW','North block 2,755 MW, South block 1,995 MW; Sterling and Wilson EPC','December 31, 2027'],['GSECL RE park','3,325 MW','NHPC 400 MW, SJVN Green 400 MW, NTPC REL, Engie 200 MW, JSW Neo 300 MW','November 30, 2026'],['GIPCL Ph-II','1,200 MW','SJVN 500 MW, SAEL 400 MW, Coal India 300 MW','August 31, 2026'],['GIPCL Ph-I','600 MW','GIPCL','Commissioned']],links:['adani-khavda','ntpc-khavda','gsecl-khavda','gipcl-khavda',''],src:'CEA status report on solar parks and UMREPPs'},
{t:'facts',h:'Park record',r:[['Official name','Gujarat Hybrid Renewable Energy Park'],['Announced','2020'],['Phasing','Seven phases, completion from late 2026 to 2030'],['Land','74,700 ha allotted by the state; 72,400 ha in project profiles'],['Developers named','AGEL, NTPC REL, GSECL, GIPCL, Sarjan Realities, with SECI running wind bidding']],src:'PV Tech; Gujarat Energy Department; Black Ridge Research'},
{t:'bars',h:'Capacity achieved at Khavda',u:'GW',x:['January 2026','May 2026'],s:[['Achieved',[11.33,15.54]]],src:'Gujarat government releases'}],
kids:['adani-khavda','ntpc-khavda','gsecl-khavda','gipcl-khavda'],
src:['CEA status report on development of solar parks, September 2026','Gujarat Energy Department, July 2026','PV Tech, March 31, 2026']});

node({id:'adani-khavda',parent:'khavda',kind:'Developer zone',icon:'buildings',title:'Adani Green zone at Khavda',
lede:'Adani Green commissions at Khavda in blocks of 50 to 700 MW through separate step-down companies, and is pairing new solar with very large battery storage.',
asof:'September 1, 2026',
kpis:[['Operational at Khavda','10.3','GW','Of 30 GW planned'],['Area','538','sq km',''],['Single biggest event, 2026','700','MW','April 2026'],['BESS at Khavda, May 2026','3.37','GWh','AGEL']],
blocks:[
{t:'bars',h:'Capacity switched on at Khavda, by event',u:'MW',x:['Dec 31','Mar 23','Apr','May 10','May 27','Jun 28','Sep 1'],s:[['Generation',[307.4,510.1,700,150,50,306,139]]],note:'June 28 is 150 MW solar plus 156 MW wind.',src:'AGEL stock exchange filings'},
{t:'log',h:'Commissioning log',r:[['September 1, 2026','139 MW solar','Adani Green Energy Twenty Six A Ltd. AGEL crosses 20 GW operational.','project-139'],['June 28, 2026','150 MW solar, 156 MW wind, 185 MWh BESS','Adani Renewable Energy Eight, Twenty Six A and Forty Three'],['May 27, 2026','50 MW solar and 1,990 MWh BESS','Includes 306 MWh via Adani Renewable Energy Forty Three'],['May 10, 2026','150 MW solar','Adani Green Energy Twenty Five C Ltd'],['April 2026','700 MW','Part of 951 MW that also included 251 MW at Baiya, Rajasthan'],['March 23, 2026','510.1 MW incl. 300 MW solar','Multiple step-down subsidiaries'],['December 31, 2025','307.4 MW','126 MW hybrid, 75 MW solar, 50 MW hybrid, 56.4 MW wind']],src:'AGEL filings as reported by PV Tech, Renewable Watch, SolarQuarter and Powerline'}],
kids:['project-139','adani-green'],
src:['AGEL filings, December 2025 to September 2026','Renewable Watch, September 2, 2026']});

node({id:'project-139',parent:'adani-khavda',kind:'Project',icon:'solar-panel',title:'Khavda solar, 139 MW',
lede:'The project that took Adani Green past 20 GW. It sits in a step-down company that also owns wind capacity at the same park.',
asof:'September 1, 2026',
kpis:[['Capacity','139','MW','Solar PV'],['Commercial operation','September 1','2026',''],['Owner','AGE Twenty Six A','','Wholly owned step-down subsidiary'],['Portfolio after COD','20','GW+','Operational']],
blocks:[
{t:'facts',h:'Project record',r:[['Special purpose vehicle','Adani Green Energy Twenty Six A Limited'],['Parent','Adani Green Energy Limited'],['Location','Khavda, Kutch, Gujarat'],['Same SPV, earlier','156 MW wind commissioned June 28, 2026'],['Event context','AGEL also reported about 1.9 GW of battery storage at Khavda']],src:'Renewable Watch, Construction World, September 2026'},
{t:'table',h:'Step-down companies active at Khavda in 2026',c:['Company','What it switched on'],r:[['Adani Green Energy Twenty Six A','139 MW solar, 156 MW wind'],['Adani Renewable Energy Eight','150 MW solar'],['Adani Green Energy Twenty Five C','150 MW solar, 75 MW solar'],['Adani Green Energy Twenty Four','50 MW solar'],['Adani Hybrid Energy Jaisalmer Five','126 MW hybrid, 50 MW solar'],['Adani Green Energy Twenty Six B','50 MW hybrid'],['Adani Renewable Energy Forty Three','185 MWh and 306 MWh BESS']],src:'AGEL filings'}],
kids:['ppa-msedcl'],
src:['Renewable Watch, September 2, 2026','Indian Infrastructure, September 2026','SolarQuarter, July 3, 2026']});

node({id:'ppa-msedcl',parent:'project-139',kind:'Offtake',icon:'plugs-connected',title:'MSEDCL 5 GW solar contract',
lede:'The largest offtake signed for Khavda solar: Maharashtra\'s discom buys 5 GW for 25 years at a flat ₹2.70. Public filings do not map individual Khavda projects to this contract, so treat it as the zone\'s anchor buyer.',
asof:'September 2024 signing',
kpis:[['Contracted','5,000','MW','Solar from Khavda'],['Term','25','years',''],['Tariff','2.70','₹/kWh','Flat'],['Paired thermal deal','1.6','GW','Adani Power with MSEDCL']],
blocks:[
{t:'bars',h:'Contract tariff against the exchange, 2026',u:'₹/kWh',x:['PPA','Jan DAM','Feb DAM','May DAM','Jul DAM','Aug DAM'],s:[['₹/kWh',[2.70,3.86,3.58,4.88,4.99,4.88]]],note:'Day-ahead market monthly averages on IEX.',src:'PV Tech; IEX monthly updates'},
{t:'bars',h:'What discoms owe generators',u:'₹ crore',x:['Legacy, June 2022','Legacy, March 2026','Current, March 2026'],s:[['Dues',[139947,3330,13594]]],note:'National PRAAPTI figures. A buyer\'s payment record decides how bankable a contract like this is.',src:'PRAAPTI portal, Ministry of Power'}],
kids:['discoms','markets'],
src:['PV Tech, September 17, 2024','IEX monthly market updates, 2026','PRAAPTI, March 27, 2026']});

/* energy siblings */
node({id:'markets',parent:'energy',kind:'Module',icon:'currency-inr',title:'Power markets',
lede:'Exchange prices set the alternative for every contract. August 2026 set a volume record on IEX while real-time prices rose 30%.',
asof:'October 2026',
kpis:[['IEX volume, August','13,938','MU','Record month'],['DAM, August','4.88','₹/kWh','Up 22% year on year'],['RTM, August','4.41','₹/kWh','Up 30.4%'],['Green market, May','1,034','MU','']],
blocks:[
{t:'line',h:'Day-ahead and real-time prices, 2026',u:'₹/kWh',x:['Jan','Feb','May','Jul','Aug'],s:[['DAM',[3.86,3.58,4.88,4.99,4.88]],['RTM',[3.72,3.59,4.16,4.41,4.41]]],src:'IEX monthly updates'},
{t:'bars',h:'Monthly traded volume',u:'MU',x:['Jan','May','Jul','Aug'],s:[['Volume',[13050,12983,13527,13938]]],src:'IEX'},
{t:'table',h:'August 2026 by segment',c:['Segment','Volume MU'],r:[['Day-ahead','5,517'],['Real-time','5,565'],['Term-ahead','1,765']],src:'IEX, August 2026'}],
kids:['discoms'],src:['IEX monthly press releases, January to October 2026']});

node({id:'discoms',parent:'markets',kind:'Module',icon:'scales',title:'Discom payment risk',
lede:'Late payment rules cleared most legacy dues. Current dues remain, and they sit with a handful of states.',
asof:'March 27, 2026',
kpis:[['Legacy dues, June 2022','1,39,947','₹ cr',''],['Legacy dues now','3,330','₹ cr','March 27, 2026'],['Current dues','13,594','₹ cr',''],['Total outstanding','16,894','₹ cr','']],
blocks:[{t:'bars',h:'Legacy dues cleared',u:'₹ crore',x:['June 2022','March 2026'],s:[['Legacy dues',[139947,3330]]],src:'PRAAPTI'},
{t:'facts',h:'State notes',r:[['Andhra Pradesh','₹4,722 crore total dues, January 11, 2026'],['Uttar Pradesh','Highest dues in March 2025']],src:'PRAAPTI'}],
kids:[],src:['PRAAPTI portal, Ministry of Power']});

node({id:'tenders',parent:'utility',kind:'Module',icon:'gavel',title:'Tenders and pipeline',
lede:'Tendering runs far ahead of auctions, which run far ahead of construction. Storage now rides on almost half of new tenders.',
asof:'Q3 2026',
kpis:[['Tendered, 9M','66','GW',''],['Auctioned, 9M','28','GW',''],['Wind pipeline','17.36','GW','56.09 GW commissioned'],['Battery storage','9.3','GWh','Cumulative']],
blocks:[{t:'bars',h:'Tendered against auctioned',u:'GW',x:['1H 2026','Q3 2026'],s:[['Tendered',[44.1,21]],['Auctioned',[16.3,12]]],src:'Mercom India'},
{t:'bars',h:'Commissioned against pipeline, March 31, 2026',u:'GW',x:['Utility solar','Wind'],s:[['Commissioned',[118.7,56.09]],['Pipeline',[58.2,17.36]]],src:'JMK Research'}],
kids:[],src:['Mercom India','JMK Research, March 31, 2026']});

node({id:'developers',parent:'energy',kind:'Module',icon:'buildings',title:'Developer league',
lede:'Operational capacity of India\'s largest renewable developers, from company disclosures.',
asof:'April to June 2026',
kpis:[['Largest','20.1','GW','Adani Green, June 30'],['Adani FY26 adds','5,051','MW','Highest outside China'],['NTPC Green','10,126','MW','March 31, 2026'],['ReNew operational','12.6','GW','']],
blocks:[{t:'hbars',h:'Operational renewable capacity',u:'GW',r:[['Adani Green',20.1,'adani-green'],['ReNew',12.6],['Tata Power Renewable',11.6],['NTPC Green',10.13,'ntpc-green'],['JSW Energy',7.63],['Greenko',7.5],['Avaada',6.9],['SJVN Green',4.2],['Azure',3]],src:'Company disclosures, April to June 2026'}],
kids:['adani-green','ntpc-green'],src:['Company filings','JMK Research developer list, April 2026']});

node({id:'adani-green',parent:'developers',kind:'Company',icon:'buildings',title:'Adani Green Energy',
lede:'India\'s largest renewable developer, with most new capacity coming from one site.',
asof:'June 30, 2026',
kpis:[['Operational','20.1','GW','Up 27%'],['FY26 added','5,051','MW',''],['Energy sold, Q1 FY27','13,657','MU',''],['2030 target','50','GW','']],
blocks:[{t:'split',h:'Portfolio by technology',u:'GW',r:[['Solar',14.2],['Hybrid',3.3],['Wind',2.7]],src:'AGEL Q1 FY27'},{t:'facts',h:'Storage',r:[['BESS portfolio','3,551 MWh'],['Khavda','10.3 GW of 30 GW planned']],src:'AGEL'}],
kids:['adani-khavda'],src:['AGEL Q1 FY27 disclosure','PV Magazine India, FY26']});

node({id:'ntpc-green',parent:'developers',kind:'Company',icon:'buildings',title:'NTPC Green Energy',
lede:'The state-owned developer runs its own 4,750 MW park at Khavda and builds inside state parks.',
asof:'July 24, 2026',
kpis:[['Group installed','10,786.56','MW','July 24, 2026'],['FY26 added','4,225','MW',''],['Khavda, FY26','2.56','GW','All commissioned that year'],['Installed plus pipeline','26.63','GW','JMK']],
blocks:[{t:'table',h:'NTPC REL projects under construction in Kutch',c:['Project','MW','Expected'],r:[['Khavda-IV','1,200','June 30, 2027'],['Khavda IX','245','March 31, 2027'],['Khavda VII','275','December 31, 2026'],['Khavda VIII','275','December 31, 2026'],['GSECL Khavda VI','225','December 31, 2026'],['GSECL Khavda Ph V','200','March 31, 2028']],src:'CEA under-construction report'}],
kids:['ntpc-khavda'],src:['Energetica India, July 24, 2026','CEA','PV Tech, March 31, 2026']});

node({id:'ntpc-khavda',parent:'khavda',kind:'Sub-park',icon:'solar-panel',title:'NTPC REL Khavda solar park',
lede:'A 4,750 MW solar park split into a North and a South block, with land fully acquired in May 2022.',
asof:'September 2026',
kpis:[['Park size','4,750','MW',''],['North block','2,755','MW',''],['South block','1,995','MW','Due December 31, 2027'],['Land','23,750','acres','Acquired May 2022']],
blocks:[{t:'table',h:'North block packages',c:['EPC','MW'],r:[['Sterling and Wilson','1,255'],['Sterling and Wilson','1,200'],['Sterling and Wilson','300']],src:'CEA'}],
kids:[],src:['CEA solar park status reports']});

node({id:'gsecl-khavda',parent:'khavda',kind:'Sub-park',icon:'solar-panel',title:'GSECL RE park',
lede:'Gujarat\'s state generator leased its 3,325 MW park to central and private developers.',
asof:'September 2026',
kpis:[['Park size','3,325','MW',''],['Approved','August 12, 2021','',''],['Completion','November 30, 2026','',''],['Land','16,432.5','acres','Acquired']],
blocks:[{t:'hbars',h:'Allotted capacity',u:'MW',r:[['NHPC',400],['SJVN Green',400],['JSW Neo',300],['Engie',200]],note:'NTPC REL also holds blocks here, including 225 MW where 64.76 MW was commissioned on July 24, 2026.',src:'CEA; Energetica India'}],
kids:[],src:['CEA solar park status report','Energetica India, July 24, 2026']});

node({id:'gipcl-khavda',parent:'khavda',kind:'Sub-park',icon:'solar-panel',title:'GIPCL RE park Ph-II',
lede:'A 1,200 MW phase leased to three central and private developers.',
asof:'2026',
kpis:[['Size','1,200','MW',''],['SJVN','500','MW',''],['SAEL','400','MW',''],['Coal India','300','MW','']],
blocks:[{t:'split',h:'Allotment',u:'MW',r:[['SJVN',500],['SAEL',400],['Coal India',300]],src:'CEA'}],
kids:[],src:['CEA solar park status report']});

node({id:'wind',parent:'renewables',kind:'Technology',icon:'wind',title:'Wind',
lede:'Wind grows slower than solar but runs at twice its load factor.',
asof:'September 30, 2026',
kpis:[['Installed wind','59,201','MW','10.59% of capacity'],['Added, Jan to Sep','4,551','MW',''],['Wind PLF','37','%','Q2 FY27'],['Gujarat','15,850.56','MW','Largest state']],
blocks:[{t:'line',h:'Wind capacity, 2026',u:'MW',x:['Jan','Mar','Apr','May','Jun','Jul','Aug','Sep'],s:[['Wind',[54650,56095,56437,56807,57443,58137,58520,59201]]],src:'CEA'}],
kids:['kutch'],src:['CEA','CREA']});

node({id:'rajasthan',parent:'utility',kind:'State',icon:'map-trifold',title:'Rajasthan',
lede:'India\'s solar leader, built almost entirely on ground-mounted plants in the west of the state.',
asof:'June 2026',
kpis:[['Solar','43,317.81','MW','26.71% of India'],['Total RE, March','47,020.54','MW',''],['FY26 added','12.2','GW','Most of any state'],['Wind','5,349.15','MW','']],
blocks:[{t:'split',h:'Rajasthan RE by source, March 31, 2026',u:'MW',r:[['Solar',41012.62],['Wind',5349.15],['Large hydro',412.5],['Bio',222.42],['Small hydro',23.85]],src:'MNRE'}],
kids:[],src:['MNRE state-wise table, March 31, 2026']});

/* ===================== STARTUPS ===================== */
node({id:'startups',parent:'',kind:'Industry',icon:'rocket-launch',title:'Startups and venture capital',
lede:'Indian startup funding traced from the quarterly totals down to one company, its cap table and the investors who sit on it.',
asof:'Q3 2026',
kpis:[['Funding, Q3 2026','2.2','$ Bn','210 deals, up 5% YoY'],['Funding, 9M 2026','10.3','$ Bn','Tracxn, 6 new unicorns'],['AI, Q3 2026','438','$ Mn','35 deals, up 265% YoY'],['Unique investors, H1','1,108','','Inc42']],
blocks:[
{t:'bars',h:'Funding by quarter, 2026',u:'$ Bn',x:['Q1','Q2','Q3'],s:[['Funding',[2.3,2.9,2.2]]],note:'Q2 is H1 ($5.2 Bn, 501 deals) less Q1.',src:'Inc42 funding reports'},
{t:'line',h:'Weekly funding, October 2026',u:'$ Mn',x:['Sep 28','Oct 5','Oct 12','Oct 19','Oct 26'],s:[['Funding',[233.6,122.9,236.2,184,130.2]]],src:'Inc42 weekly funding reports'}],
kids:['tape','sectors','investors','creaegis','peak-xv'],
src:['Inc42 Indian Tech Startup Funding Reports, Q1, H1 and Q3 2026','Tracxn India Tech, 9M 2026']});

node({id:'tape',parent:'startups',kind:'Module',icon:'chart-line-up',title:'Funding tape',
lede:'Deal counts have fallen every quarter of 2026 even as cheque sizes held. Bengaluru took almost two thirds of Q3 money.',
asof:'Q3 2026',
kpis:[['Deals, Q1','271','',''],['Deals, Q2','230','','501 in H1'],['Deals, Q3','210','',''],['Bengaluru, Q3','1.4','$ Bn','80 deals, 64% of funding']],
blocks:[
{t:'bars',h:'Deals by quarter',u:'deals',x:['Q1','Q2','Q3'],s:[['Deals',[271,230,210]]],src:'Inc42'},
{t:'table',h:'Weekly tape',c:['Week','Funding','Deals'],r:[['September 28 to October 2','$233.6 Mn','16'],['October 5 to 9','$122.9 Mn','25'],['October 12 to 16','$236.2 Mn','25'],['October 19 to 23','$184.0 Mn','17'],['October 26 to 30','$130.2 Mn','32']],src:'Inc42 weekly reports'},
{t:'facts',h:'Stage signals',r:[['Late stage, H1 2026','$2.2 Bn, down 27%'],['Growth stage, Q3 2026','Up 38% year on year'],['DealStreetAsia, Q1 2026','$4.76 Bn on a wider definition that includes larger deals']],src:'Inc42; DealStreetAsia'}],
kids:['sectors'],src:['Inc42','DealStreetAsia India Deal Review, Q1 2026']});

node({id:'sectors',parent:'tape',kind:'Module',icon:'chart-bar',title:'Sectors',
lede:'AI is the only large sector growing in both money and deal count. Ecommerce and fintech both shrank in Q3.',
asof:'Q3 2026',
kpis:[['AI','438','$ Mn','35 deals, Q3'],['Fintech','249','$ Mn','13 deals, down 11%'],['Ecommerce','245','$ Mn','44 deals, down 31%'],['AI, H1','676','$ Mn','57 deals']],
blocks:[
{t:'hbars',h:'Q3 2026 funding by sector',u:'$ Mn',r:[['AI',438,'ai'],['Fintech',249],['Ecommerce',245]],src:'Inc42 Q3 2026'},
{t:'bars',h:'Deals by sector, Q3 2026',u:'deals',x:['Ecommerce','AI','Fintech'],s:[['Deals',[44,35,13]]],src:'Inc42 Q3 2026'}],
kids:['ai'],src:['Inc42 Q3 2026 funding report']});

node({id:'ai',parent:'sectors',kind:'Sector',icon:'cpu',title:'Artificial intelligence',
lede:'AI raised $1.1 Bn across 92 deals in the first nine months by Inc42\'s count, and most investors already think valuations have run ahead.',
asof:'Q3 2026',
kpis:[['9M 2026','1,114','$ Mn','H1 $676 Mn plus Q3 $438 Mn'],['Deals, 9M','92','','57 plus 35'],['Valuations too high','63','%','of surveyed investors'],['Prefer vertical AI','39','%','of surveyed investors']],
blocks:[
{t:'bars',h:'AI funding by period',u:'$ Mn',x:['H1 2026','Q3 2026'],s:[['Funding',[676,438]]],src:'Inc42'},
{t:'table',h:'Largest AI rounds in the tape',c:['Company','Round','Amount'],r:[['Emergent','Series C','$130 Mn'],['Ema','Series B','$77 Mn'],['Portkey','Series A','$15 Mn'],['Dextr AI','','$6.7 Mn']],links:['emergent','','',''],src:'Inc42; company announcements'}],
kids:['ai-builders'],src:['Inc42 H1 and Q3 2026','Inc42 investor sentiment survey']});

node({id:'ai-builders',parent:'ai',kind:'Subsector',icon:'database',title:'AI software creation and agents',
lede:'Tools that build software or run work for businesses. One company in this group, Emergent, raised more than the rest combined.',
asof:'2026',
kpis:[['Largest round','130','$ Mn','Emergent'],['Companies tracked','4','',''],['Combined','228.7','$ Mn','Four rounds'],['Emergent share','57','%','of the four']],
blocks:[{t:'hbars',h:'Round size',u:'$ Mn',r:[['Emergent',130,'emergent'],['Ema',77],['Portkey',15],['Dextr AI',6.7]],src:'Inc42; company announcements'}],
kids:['emergent'],src:['Inc42 deal tracker']});

node({id:'emergent',parent:'ai-builders',kind:'Company',icon:'rocket-launch',title:'Emergent',
lede:'An AI software creation platform from Bengaluru and San Francisco. It became a unicorn about a year after its public launch.',
asof:'July 15, 2026',
kpis:[['Valuation','1.5','$ Bn','Post-money'],['Total raised','230','$ Mn',''],['Revenue run rate','~120','$ Mn','Annualised'],['Apps built','12','Mn+','200,000+ paying customers']],
blocks:[
{t:'bars',h:'Valuation step-up',u:'$ Mn',x:['Series B, Jan 2026','Series C, Jul 2026'],s:[['Valuation',[300,1500]]],note:'Five times in about six months.',src:'TechCrunch; Inc42'},
{t:'facts',h:'Company record',r:[['Legal name','Emergent Labs Inc.'],['Founders','Mukund Jha, Madhav Jha'],['Founded','2024'],['Bases','Bengaluru and San Francisco'],['Ecosystem rank','Sixth Indian unicorn of 2026']],src:'Inc42; SiliconANGLE; Seedtable'}],
kids:['emergent-rounds'],src:['TechCrunch, July 15, 2026','Inc42, July 2026','Emergent company post']});

node({id:'emergent-rounds',parent:'emergent',kind:'Rounds',icon:'stack',title:'Emergent funding rounds',
lede:'Four priced rounds in about two years, each one leading to a much larger next round.',
asof:'July 2026',
kpis:[['Rounds','5','','Incl. accelerator'],['Seed','7','$ Mn','2024'],['Series B','70','$ Mn','January 2026'],['Series C','130','$ Mn','July 2026']],
blocks:[
{t:'bars',h:'Cumulative capital raised',u:'$ Mn',x:['Seed','Series A','Series B','Series C'],s:[['Cumulative',[7,30,100,230]]],src:'Emergent; Inc42'},
{t:'log',h:'Round history',r:[['July 15, 2026','Series C, $130 Mn at $1.5 Bn','Led by Creaegis','emergent-c'],['January 20, 2026','Series B, $70 Mn at about $300 Mn','SoftBank Vision Fund 2 and Khosla Ventures'],['September 24, 2025','Series A, $23 Mn','Led by Lightspeed. 1M+ users and $15 Mn ARR in 90 days'],['2024','Seed, $7 Mn','Y Combinator and Together Fund'],['2024','Accelerator, $500K','Pitchbook']],src:'Emergent company post; Pitchbook'}],
kids:['emergent-c'],src:['Emergent, July 15, 2026','Pitchbook profile']});

node({id:'emergent-c',parent:'emergent-rounds',kind:'Round',icon:'hand-coins',title:'Emergent Series C',
lede:'A homegrown Indian private equity fund led the round, and four existing global backers followed.',
asof:'July 15, 2026',
kpis:[['Amount','130','$ Mn',''],['Post-money','1.5','$ Bn',''],['Investors','7','','Leads and participants'],['Company counsel','Goodwin','','Goodwin Procter']],
blocks:[{t:'table',h:'Round syndicate',c:['Investor','Role','New or existing'],r:[['Creaegis','Lead','New'],['MNI Ventures, Claypond Capital','Co-lead','New'],['Sentinel Global','Co-lead','New'],['Khosla Ventures','Participant','Existing'],['SoftBank Vision Fund 2','Participant','Existing'],['Lightspeed','Participant','Existing'],['Y Combinator','Participant','Existing']],links:['creaegis','','','','','lightspeed',''],src:'Emergent; Inc42; TechCrunch'}],
kids:['syndicate','creaegis'],src:['TechCrunch, July 15, 2026','Law360, July 15, 2026']});

node({id:'syndicate',parent:'emergent-c',kind:'Cap table',icon:'users-three',title:'Who has backed Emergent, round by round',
lede:'Four investors have backed Emergent in more than one round. From here the network leads to their other companies.',
asof:'July 2026',
kpis:[['Distinct investors','8','','Across the priced rounds'],['In 2+ rounds','4','','YC, Lightspeed, Khosla, SoftBank'],['Rounds mapped','4','','Seed to Series C'],['Also listed backers','3','','Prosus, Together, Google AI Futures Fund']],
blocks:[{t:'matrix',h:'Investor by round',c:['Seed','A','B','C'],r:[['Y Combinator',[1,0,0,1]],['Together Fund',[1,0,0,0]],['Lightspeed',[0,2,0,1],'lightspeed'],['Khosla Ventures',[0,0,1,1]],['SoftBank Vision Fund 2',[0,0,1,1]],['Creaegis',[0,0,0,2],'creaegis'],['MNI Ventures, Claypond',[0,0,0,2]],['Sentinel Global',[0,0,0,2]]],note:'Filled orange square marks a lead or co-lead, black square participation.',src:'Emergent; Inc42; citybiz'},
{t:'table',h:'Who led each round',c:['Round','Date','Amount','Led by'],r:[['Seed','2024','$7 Mn','Y Combinator, Together Fund'],['Series A','September 24, 2025','$23 Mn','Lightspeed'],['Series B','January 20, 2026','$70 Mn','SoftBank Vision Fund 2 and Khosla Ventures named; lead not stated'],['Series C','July 15, 2026','$130 Mn','Creaegis, with MNI Ventures, Claypond and Sentinel Global as co-leads']],links:['','','','emergent-c'],src:'Emergent; TechCrunch; Pitchbook'}],
kids:['lightspeed','creaegis'],src:['Emergent company post','citybiz, July 2026']});

node({id:'lightspeed',parent:'syndicate',kind:'Investor',icon:'users-three',title:'Lightspeed (India)',
lede:'Led Emergent\'s Series A and followed into the C. In 2026 it also shows up in fintech and AI rounds.',
asof:'Q1 2026',
kpis:[['Karnataka deals, Q1','5','','Second after Peak XV'],['India investments','118','','Lightspeed India Partners, CB Insights'],['Exits','7','',''],['Founded in India','2008','','']],
blocks:[{t:'table',h:'2026 rounds in the tape',c:['Date','Company','Round','Amount'],r:[['July 15','Emergent','Series C','$130 Mn'],['February 20','Portkey','Series A','$15 Mn'],['February 18','Stable Money','Pre-Series C','$25 Mn']],links:['emergent','','stable-money'],src:'Inc42 weekly funding report'}],
kids:['stable-money'],src:['Tracxn Karnataka Q1 2026 via Entrepreneur India','Inc42, February 2026','CB Insights']});

node({id:'stable-money',parent:'lightspeed',kind:'Company',icon:'wallet',title:'Stable Money',
lede:'A fixed-income investing app. Its valuation roughly doubled in fifteen months, with money from the same small group of backers.',
asof:'August 4, 2026',
kpis:[['Valuation','264','$ Mn','Series C, August 2026'],['Series C tranche one','14.3','$ Mn','₹136 crore, existing investors'],['Revenue, FY25','10.1','₹ cr+','Inc42'],['Founder stake','30','%','After pre-Series C']],
blocks:[
{t:'bars',h:'Valuation',u:'$ Mn',x:['May 2025','February 2026','August 2026'],s:[['Valuation',[130,175,264]]],src:'CB Insights; Entrepreneur India; Dealroom'},
{t:'facts',h:'Pre-Series C, February 18, 2026',r:[['Amount','$25 Mn (₹229.4 crore)'],['Instrument','54,491 CCPS at ₹42,103 each'],['Lead','Peak XV Partners'],['Others','Z47, RTP Global, Lightspeed, Fundamentum'],['Total raised','$79.3 Mn to $89.76 Mn, depending on source']],src:'Angel One; Inc42; Clay'}],
kids:['peak-xv'],src:['Entrepreneur India, February 18, 2026','Dealroom, August 4, 2026','Inc42 company page']});

node({id:'peak-xv',parent:'stable-money',kind:'Investor',icon:'users-three',title:'Peak XV Partners',
lede:'The most active venture firm in India in Q1 2026, leading early rounds in fintech and semiconductors.',
asof:'Q1 2026',
kpis:[['Deals, Q1 2026','16','','Most active VC'],['Overall rank, Q1','3','','After two debt funds'],['Karnataka, Q1','6','','First'],['Hurun cheetah backing','18','','Tied with Accel']],
blocks:[{t:'table',h:'Rounds led in 2026',c:['Date','Company','Round','Amount'],r:[['February 18','Stable Money','Pre-Series C','$25 Mn'],['February 16','C2i Semiconductors','Series A','$15 Mn']],links:['stable-money',''],src:'Inc42'},
{t:'facts',h:'March 2026 investments',r:[['Companies','Plum, Prayaan Capital, BambooBox, Grapevine, Atlys, Newtrace']],src:'Inc42'}],
kids:[],src:['Inc42 top investors Q1 2026','Tracxn Karnataka Q1 2026']});

node({id:'creaegis',parent:'emergent-c',kind:'Investor',icon:'hand-coins',title:'Creaegis',
lede:'A Bengaluru growth equity firm whose maiden fund was the largest ever raised by a first-time India manager.',
asof:'July 2026',
kpis:[['Fund I','425','$ Mn','Final close September 20, 2023'],['Disclosed investments','11','','CB Insights'],['Typical cheque','25 to 40','$ Mn','About four a year'],['Fund II target','500','$ Mn','IFC proposed up to $25 Mn']],
blocks:[{t:'log',h:'Recent deals',r:[['July 2026','Emergent, Series C lead','$130 Mn round','emergent-c'],['June 11, 2025','GIVA, Series C','D2C jewellery'],['March 2025','Zolve','Cross-border banking']],src:'F4; CB Insights'},
{t:'facts',h:'Firm record',r:[['Founder','Prakash Parthasarathy, formerly founding CIO of PremjiInvest'],['Founded','2018'],['Fund I size in rupees','₹3,529 crore']],src:'Inc42; Entrackr'}],
kids:[],src:['Inc42, September 20, 2023','DealStreetAsia','CB Insights']});

node({id:'investors',parent:'startups',kind:'Module',icon:'users-three',title:'Most active investors',
lede:'Venture debt funds top the deal count every quarter of 2026.',
asof:'Q3 2026',
kpis:[['Stride Ventures, H1','61','deals',''],['Alteria, H1','48','deals',''],['Rainmatter, H1','39','deals',''],['Stride, Q3','38','deals','']],
blocks:[{t:'hbars',h:'Deals, H1 2026',u:'deals',r:[['Stride Ventures',61],['Alteria Capital',48],['Rainmatter',39]],src:'Inc42'},
{t:'bars',h:'Q3 2026 leaders',u:'deals',x:['Stride','Alteria'],s:[['Deals',[38,31]]],src:'Inc42'}],
kids:['peak-xv','lightspeed'],src:['Inc42 investor rankings, H1 and Q3 2026']});

/* deepest chains for home */
const CHAINS={energy:'ppa-msedcl'};

