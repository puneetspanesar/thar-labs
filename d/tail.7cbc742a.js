N.capacity.kids=['renewables','states','stations','gencos','coal'];
N.energy.blocks=[EX.nat,N.energy.blocks[0],N.energy.blocks[1],EX.region,EX.heat,EX.topgen,EX.lowcoal];
N.energy.kids=['capacity','states','stations','gencos','coal','markets','developers','tenders','discoms'];
N.states.blocks.splice(2,0,EX.heat);
N.coal.blocks.splice(2,0,EX.lowcoal);
N.energy.src=N.energy.src.concat(['CEA installed capacity reports via National Power Portal, monthly','CEA daily generation reports via National Power Portal','CEA monthly coal statements of thermal power stations']);


if(N['state-gujarat']){N.gujarat.kids=['kutch','state-gujarat'];}
if(N['state-rajasthan']){N.rajasthan.kids=['state-rajasthan'];}
Object.values(N).forEach(n=>{if(n.id!==''&&n.parent!==undefined&&!N[n.parent])console.warn('orphan',n.id,n.parent)});

N.startups.kpis=[['Rounds tracked',FACTS_S.rounds.toLocaleString('en-US'),'','Since '+FACTS_S.first],['Investors',FACTS_S.investors.toLocaleString('en-US'),'','Each with its own page'],['Startups',FACTS_S.startups.toLocaleString('en-US'),'','Each with its own page'],['Funding, Q3 2026','2.2','$ Bn','210 deals (Inc42 count)']];
N.startups.lede='Indian startup funding rounds reported since January 2020, traced to the startup and its investors, with sectors, stages, cities and acquisitions.';
N.startups.blocks=[EXS.monthly,EXS.deals,EXS.sectors,EXS.heat,EXS.cities,EXS.stage,EXS.big,EXS.latest];N.startups.asof=FACTS_S.last;
N.startups.kids=['tape','sectors','stages','quarters','acquisitions','investors','cities','investor-index'];
N.startups.src=['Funding reports from Indian Startup News, The Economic Times, Moneycontrol and VCCircle, January 2020 onwards, compiled and classified by FinanceBharat Data'];
N.tape.blocks=[EXS.monthly,EXS.deals,EXS.stage,EXS.cities];N.tape.kids=['sectors','months'];
N.sectors.blocks=[EXS.sectors,EXS.heat];N.sectors.kids=Object.values(N).filter(n=>n.parent==='sectors').map(n=>n.id);
N.investors.blocks=[EXS.inv];N.investors.kids=['investor-index'];
if(N['co-stable-money'])N['stable-money'].kids=N['stable-money'].kids.concat(['co-stable-money']);

Object.values(N).filter(n=>n.kind==='Acquisition').forEach(a=>(a.kids||[]).forEach(k=>{const c=N[k];if(!c)return;(c._acq=c._acq||[]).push(a)}));
Object.values(N).forEach(c=>{if(!c._acq)return;c.blocks.push({t:'table',h:'Acquisitions and mergers',c:['Deal','Announced'],r:c._acq.map(a=>[a.title,a.kpis[0][1]]),links:c._acq.map(a=>a.id),src:'Acquisition reports in Indian Startup News'});c.kids=(c.kids||[]).concat(c._acq.map(a=>a.id));delete c._acq});

['ai','ai-builders','emergent','emergent-rounds','emergent-c','syndicate','lightspeed','stable-money','peak-xv','creaegis'].forEach(k=>delete N[k]);
N.startups.kpis[3]=OWN.startups.kpi;
['tape','sectors','investors'].forEach(k=>{const o=OWN[k];N[k].lede=o.lede;N[k].kpis=o.kpis;N[k].asof=FACTS_S.last;N[k].src=['Funding reports from Indian Startup News, The Economic Times, Moneycontrol and VCCircle, January 2020 onwards, compiled and classified by FinanceBharat Data']});
Object.values(N).forEach(n=>{if(n.kids)n.kids=n.kids.filter(k=>N[k])});

