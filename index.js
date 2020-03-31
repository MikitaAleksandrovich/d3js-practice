// // // Bar chart with fetched crypto currency data

// // // Margin conversation 
// // const margin = {
// //     top: 50,
// //     right: 50,
// //     bottom: 50,
// //     left: 50
// // };

// // // Define width and height of the working place with margin (bar)
// // const width = 900 - margin.left - margin.right;
// // const height = 900 - margin.top - margin.bottom;

// // // Create an svg element
// // const svg = d3.select('body').append('svg')
// //     .attr('width', width + margin.left + margin.right)
// //     .attr('height', height + margin.top + margin.bottom)
// //     .append('g')
// //     .attr('transform', `translate(${margin.left}, ${margin.top})`);

// // // Set x scaler and axis
// // const x = d3.scaleLinear()
// //     .range([0, width]);

// // const xAxis = d3.axisTop()
// //     .scale(x);

// // svg
// //     .append('g')
// //     .attr('class', 'axis-x')
// //     .call(xAxis);


// // // Set y scaler and axis
// // const y = d3.scaleBand()
// //     .range([0, height]);

// // const yAxis = d3.axisLeft()
// //     .scale(y);

// // svg.append('g')
// //     .attr('class', 'axis-y')
// //     .call(yAxis);


// // const draw = (data) => {

// //     const barHeight = 70;
// //     const barOffset = 3;

// //     // Fix maximum width value, based on value of the most wide item
// //     const valueRange = [
// //         0,
// //         d3.max(data, d => d.value + 300)
// //     ];

// //     x.domain(valueRange);
// //     y.domain(data.map(d => d.title))
// //         .range([0, data.length * barHeight + data.length * barOffset - barOffset]);

// //     const bars = svg.selectAll('.bar').data(data);

// //     bars
// //         .exit()
// //         .transition()
// //         .duration(1000)
// //         .attr('width', 0)
// //         .style('fill', 'red')
// //         .remove();

// //     const addBars = bars
// //         .enter()
// //         .append('rect')
// //         .attr('class', 'bar')
// //         .attr('height', barHeight);


// //     addBars.merge(bars)
// //         .transition()
// //         .duration(1000)
// //         .attr('width', d => x(d.value))
// //         .attr('y', (d, n) => n * barHeight + n * barOffset);

// //     svg
// //         .select('.axis-x')
// //         .transition()
// //         .call(xAxis);

// //     svg
// //         .select('.axis-y')
// //         .transition()
// //         .call(yAxis);
// // }


// // Promise.all([
// //     d3.json('http://localhost:8005/api/2/btc_usd/depth')
// //         .then(d => ({ name: 'btc', ...d })),
// //     d3.json('http://localhost:8005/api/2/ltc_usd/depth')
// //         .then(d => ({ name: 'ltc', ...d })),
// //     d3.json('http://localhost:8005/api/2/eth_usd/depth')
// //         .then(d => ({ name: 'eth', ...d })),
// // ]).then(result => {
// //     data = result.map((depth, n) => ({ id: n, title: depth.name, value: depth.bids[0][0] }));
// //     draw(data);
// // });


// // onChangeBar = () => {
// //     data[1].value = 256;
// //     data[0].value = 154;
// //     data.splice(2, 1);
// //     draw();
// // }


// // Bar Chat with data based on complexity of English Words

// // Calculate the complexity of text based on most common English Words
// const common_100_EnglishWords = ["the", "of", "and", "a", "to", "in", "is", "you", "that", "it", "he", "was", 
//                 "for", "on", "are", "as", "with", "his", "they", "I", "at", "be", "this", "have", 
//                 "from", "or", "one", "had", "by", "word", "but", "not", "what", "all", "were", "we", 
//                 "when", "your", "can", "said", "there", "use", "an", "each", "which", "she", "do", "how", 
//                 "their", "if", "will", "up", "other", "about", "out", "many", "then", "them", "these", "so", 
//                 "some", "her", "would", "make", "like", "him", "into", "time", "has", "look", "two", "more", 
//                 "write", "go", "see", "number", "no", "way", "could", "people", "my", "than", "first", "water", 
//                 "been", "call", "who", "oil", "its", "now", "find", "long", "down", "day", "did", "get", "come", 
//                 "made", "may", "part"];




// const words_1000_List = "the,of,to,and,a,in,is,it,you,that,he,was,for,on,are,with,as,I,his,they,be,at,one,have,this,from,or,had,by,not,word,but,what,some,we,can,out,other,were,all,there,when,up,use,your,how,said,an,each,she,which,do,their,time,if,will,way,about,many,then,them,write,would,like,so,these,her,long,make,thing,see,him,two,has,look,more,day,could,go,come,did,number,sound,no,most,people,my,over,know,water,than,call,first,who,may,down,side,been,now,find,any,new,work,part,take,get,place,made,live,where,after,back,little,only,round,man,year,came,show,every,good,me,give,our,under,name,very,through,just,form,sentence,great,think,say,help,low,line,differ,turn,cause,much,mean,before,move,right,boy,old,too,same,tell,does,set,three,want,air,well,also,play,small,end,put,home,read,hand,port,large,spell,add,even,land,here,must,big,high,such,follow,act,why,ask,men,change,went,light,kind,off,need,house,picture,try,us,again,animal,point,mother,world,near,build,self,earth,father,head,stand,own,page,should,country,found,answer,school,grow,study,still,learn,plant,cover,food,sun,four,between,state,keep,eye,never,last,let,thought,city,tree,cross,farm,hard,start,might,story,saw,far,sea,draw,left,late,run,don't,while,press,close,night,real,life,few,north,open,seem,together,next,white,children,begin,got,walk,example,ease,paper,group,always,music,those,both,mark,often,letter,until,mile,river,car,feet,care,second,book,carry,took,science,eat,room,friend,began,idea,fish,mountain,stop,once,base,hear,horse,cut,sure,watch,color,face,wood,main,enough,plain,girl,usual,young,ready,above,ever,red,list,though,feel,talk,bird,soon,body,dog,family,direct,pose,leave,song,measure,door,product,black,short,numeral,class,wind,question,happen,complete,ship,area,half,rock,order,fire,south,problem,piece,told,knew,pass,since,top,whole,king,space,heard,best,hour,better,true,during,hundred,five,remember,step,early,hold,west,ground,interest,reach,fast,verb,sing,listen,six,table,travel,less,morning,ten,simple,several,vowel,toward,war,lay,against,pattern,slow,center,love,person,money,serve,appear,road,map,rain,rule,govern,pull,cold,notice,voice,unit,power,town,fine,certain,fly,fall,lead,cry,dark,machine,note,wait,plan,figure,star,box,noun,field,rest,correct,able,pound,done,beauty,drive,stood,contain,front,teach,week,final,gave,green,oh,quick,develop,ocean,warm,free,minute,strong,special,mind,behind,clear,tail,produce,fact,street,inch,multiply,nothing,course,stay,wheel,full,force,blue,object,decide,surface,deep,moon,island,foot,system,busy,test,record,boat,common,gold,possible,plane,stead,dry,wonder,laugh,thousand,ago,ran,check,game,shape,equate,hot,miss,brought,heat,snow,tire,bring,yes,distant,fill,east,paint,language,among,grand,ball,yet,wave,drop,heart,am,present,heavy,dance,engine,position,arm,wide,sail,material,size,vary,settle,speak,weight,general,ice,matter,circle,pair,include,divide,syllable,felt,perhaps,pick,sudden,count,square,reason,length,represent,art,subject,region,energy,hunt,probable,bed,brother,egg,ride,cell,believe,fraction,forest,sit,race,window,store,summer,train,sleep,prove,lone,leg,exercise,wall,catch,mount,wish,sky,board,joy,winter,sat,written,wild,instrument,kept,glass,grass,cow,job,edge,sign,visit,past,soft,fun,bright,gas,weather,month,million,bear,finish,happy,hope,flower,clothe,strange,gone,jump,baby,eight,village,meet,root,buy,raise,solve,metal,whether,push,seven,paragraph,third,shall,held,hair,describe,cook,floor,either,result,burn,hill,safe,cat,century,consider,type,law,bit,coast,copy,phrase,silent,tall,sand,soil,roll,temperature,finger,industry,value,fight,lie,beat,excite,natural,view,sense,ear,else,quite,broke,case,middle,kill,son,lake,moment,scale,loud,spring,observe,child,straight,consonant,nation,dictionary,milk,speed,method,organ,pay,age,section,dress,cloud,surprise,quiet,stone,tiny,climb,cool,design,poor,lot,experiment,bottom,key,iron,single,stick,flat,twenty,skin,smile,crease,hole,trade,melody,trip,office,receive,row,mouth,exact,symbol,die,least,trouble,shout,except,wrote,seed,tone,join,suggest,clean,break,lady,yard,rise,bad,blow,oil,blood,touch,grew,cent,mix,team,wire,cost,lost,brown,wear,garden,equal,sent,choose,fell,fit,flow,fair,bank,collect,save,control,decimal,gentle,woman,captain,practice,separate,difficult,doctor,please,protect,noon,whose,locate,ring,character,insect,caught,period,indicate,radio,spoke,atom,human,history,effect,electric,expect,crop,modern,element,hit,student,corner,party,supply,bone,rail,imagine,provide,agree,thus,capital,won't,chair,danger,fruit,rich,thick,soldier,process,operate,guess,necessary,sharp,wing,create,neighbor,wash,bat,rather,crowd,corn,compare,poem,string,bell,depend,meat,rub,tube,famous,dollar,stream,fear,sight,thin,triangle,planet,hurry,chief,colony,clock,mine,tie,enter,major,fresh,search,send,yellow,gun,allow,print,dead,spot,desert,suit,current,lift,rose,continue,block,chart,hat,sell,success,company,subtract,event,particular,deal,swim,term,opposite,wife,shoe,shoulder,spread,arrange,camp,invent,cotton,born,determine,quart,nine,truck,noise,level,chance,gather,shop,stretch,throw,shine,property,column,molecule,select,wrong,gray,repeat,require,broad,prepare,salt,nose,plural,anger,claim,continent,oxygen,sugar,death,pretty,skill,women,season,solution,magnet,silver,thank,branch,match,suffix,especially,fig,afraid,huge,sister,steel,discuss,forward,similar,guide,experience,score,apple,bought,led,pitch,coat,mass,card,band,rope,slip,win,dream,evening,condition,feed,tool,total,basic,smell,valley,nor,double,seat,arrive,master,track,parent,shore,division,sheet,substance,favor,connect,post,spend,chord,fat,glad,original,share,station,dad,bread,charge,proper,bar,offer,segment,slave,duck,instant,market,degree,populate,chick,dear,enemy,reply,drink,occur,support,speech,nature,range,steam,motion,path,liquid,log,meant,quotient,teeth,shell,neck";
                
// const common_1000_EnglishWords = words_1000_List.split(",");

// console.log(common_1000_EnglishWords);


// const complexText = (text) => {

//   const wordsArray = text.replace(/[,.!?]/, "").split(/\s+/);

//   let numberMatches = 0;

//   wordsArray.forEach((word) => {
//     if(common_1000_EnglishWords.some(e => e === word.toLowerCase())) {
//       numberMatches++;
//     }
//   });

//   const textComplexity = (numberMatches / wordsArray.length * 100);
  
//   return Math.round(textComplexity);
// };

// console.log(complexText("Is there is some new thing over there?"));  // Output 100%
// console.log(complexText("Do you remember when the Second world War begin?"));  // Output 100%
// console.log(complexText("seconder adfgbadb athwrtb aerghwetbwr adfbeqttgrds fgqer"));  // Output 0%
// console.log(complexText("Translate words while reading an article or watching your favourite movie. Add words to your personal lessons or train them in the text. Repeat words in the exact context you found them. Understand jokes and expressions. Enrich your personal vocabulary. Learn and repeat words with Easylang Tutor"));  // Output 51.06%



// // Margin conversation https://bl.ocks.org/mbostock/3019563
// const margin = { 
//     top: 50, 
//     right: 50, 
//     bottom: 50, 
//     left: 50
//   };
  
//   const width = 900 - margin.left - margin.right;
//   const height = 900 - margin.top - margin.bottom;
  
//   // https://github.com/d3/d3-selection
//   const svg = d3.select('body').append('svg')
//       .attr('width', width + margin.left + margin.right)
//       .attr('height', height + margin.top + margin.bottom)
//     .append('g')
//       .attr('transform', `translate(${margin.left}, ${margin.top})`);
  
  
//   const data = [
//     { id: 1, title: 'Text № 1', value: complexText("Is there is some new thing over there?") },
//     { id: 2, title: 'Text № 2', value: complexText("Do you remember when the Second world War begin?") },
//     { id: 3, title: 'Text № 3', value: complexText("seconder adfgbadb athwrtb aerghwetbwr adfbeqttgrds fgqer") },
//     { id: 4, title: 'Text № 4', value: complexText("Translate words while reading an article or watching your favourite movie.") },
//   ];

  
  
//   const x = d3.scaleLinear()
//     .range([0, width]);
  
//   const xAxis = d3.axisTop()
//         .scale(x);
  
//   svg
//     .append('g')
//     .attr('class', 'axis-x')
//     .call(xAxis);
  
//   const y = d3.scaleBand()
//         .range([0, height]);
  
//   const yAxis = d3.axisLeft()
//     .scale(y);
  
//   svg.append('g')
//      .attr('class', 'y-axis')
//      .call(yAxis);
  
  
//   function draw() {
//     const barHeight = 100;
//     const barOffset = 3;
  
//     const valueRange = [
//       0,
//       d3.max(data, d => d.value)
//     ];
  
//     x.domain(valueRange);
//     y
//       .domain(data.map(d => d.title))
//       .range([0, data.length * barHeight + data.length * barOffset - barOffset]);
  
//     const bars = svg.selectAll('.bar').data(data);
   
//     const addBars = bars
//       .enter()
//         .append('rect')
//           .attr('class', 'bar')
//           .attr('height', barHeight);
  
//     addBars.merge(bars)
//       .transition()
//         .duration(1000)
//           .attr('width', d => x(d.value))
//           .attr('y', (d, n) => n * barHeight + n * barOffset);
  
//     svg
//       .select('.axis-x')
//       .transition()
//         .call(xAxis);
  
//     svg
//       .select('.y-axis')
//         .transition()
//         .call(yAxis);
//   }
  
//   draw();


// Data - currently arbitrary
const arbitraryData = [
  { name: 'Belarus', income: 80000, life: 70, pop: 10378, color: 'green'},
  { name: 'Norway', income: 73000, life: 87, pop: 5884, color: 'red'},
  { name: 'Russia', income: 99000, life: 45, pop: 3407, color: 'blue'},
  { name: 'Mexico', income: 36000, life: 65, pop: 2000, color: 'yellow'},
  { name: 'India', income: 28000, life: 59, pop: 10000, color: 'pink'},
  { name: 'France', income: 10000, life: 95, pop: 7899, color: 'brown'},
];

// Create a SVG -container to hold the vizualization of data
const svg = d3.select('#example').append('svg')
  .attr('width', 500)
  .attr('height', 500)
  .style('background-color', '#666666');

// Create SVG element from data
svg.selectAll('circle')
  .data(arbitraryData)
    .enter()
      .append('circle')
        // Country's name
        .attr('id', d => d.name)
        // Income
        .attr('cx', d => d.income / 200)
        // Life expectancy
        .attr('cy', d => d.life * 3)
        // Population
        .attr('r', d => d.pop / 1000 * 3)
        // Color
        .attr('fill', d => d.color )
        // Country's name
        .attr('id', d => d.name)
        // Country's name
        .attr('id', d => d.name)
      .append('svg:title')
        // Display the country name
        .text(d => `Country: ${d.name}`)
        






  











