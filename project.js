let groupList = [{name:"Іван",marks:[]},{name:"Марія",marks:[]},{name:"Олексій",marks:[]}];
const addMark=(s,m)=>{const t=groupList[s];t?t.marks.push(m):console.log("Неправильний індекс учасника групи.")};
const showGroupList=()=>{console.log("Список учасників групи:"),groupList.forEach((s,t)=>console.log(${t+1}. ${s.name}: ${s.marks.join(", ")||"немає оцінок"}))};
addMark(0,5),addMark(1,4),addMark(2,3),showGroupList();
