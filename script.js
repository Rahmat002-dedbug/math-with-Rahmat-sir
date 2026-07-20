const students = {
"Maaz": {marks:33, rank:1, remarks:"Very Good", status:"Submitted"},
"Abiwaqas": {marks:32, rank:2, remarks:"Excellent", status:"Submitted"},
"Anab": {marks:30, rank:3, remarks:"Good", status:"Submitted"},
"Salehin": {marks:28, rank:4, remarks:"Good", status:"Submitted"},
"Noor Saba": {marks:27, rank:5, remarks:"Good", status:"Submitted"},
"Arifa": {marks:24, rank:6, remarks:"Needs Improvement", status:"Submitted"},
"Nematullah": {marks:20, rank:7, remarks:"Work Hard", status:"Submitted"},
"Abuzar": {marks:19, rank:8, remarks:"Work Hard", status:"Submitted"},
"Abou Saad": {marks:17, rank:9, remarks:"Practice More", status:"Submitted"},
"Basit": {marks:17, rank:10, remarks:"Practice More", status:"Submitted"},
"Shahanwaj": {marks:17, rank:11, remarks:"Practice More", status:"Submitted"},
"Huzaifa": {marks:8, rank:12, remarks:"Needs Extra Support", status:"Submitted"},
"Amzad": {marks:"-", rank:"-", remarks:"Copy not submitted on time", status:"Late Submission"},
"Abou Saleh": {marks:"-", rank:"-", remarks:"Copy not submitted on time", status:"Late Submission"},
"Akib": {marks:"-", rank:"-", remarks:"Didn't Attempt", status:"Didn't Attempt"},
"Afreen": {marks:"-", rank:"-", remarks:"Didn't Attempt", status:"Didn't Attempt"},
"Sara": {marks:"-", rank:"-", remarks:"Didn't Attempt", status:"Didn't Attempt"},
"Zoya": {marks:"-", rank:"-", remarks:"Didn't Attempt", status:"Didn't Attempt"},
"Ayan": {marks:"-", rank:"-", remarks:"Didn't Attempt", status:"Didn't Attempt"},
"Rashid": {marks:"-", rank:"-", remarks:"Absent", status:"Absent"},
"Nafish": {marks:"-", rank:"-", remarks:"Absent", status:"Absent"}
};

function searchResult(){
const name=document.getElementById("name").value.trim();
const result=document.getElementById("result");

if(students[name]){
const s=students[name];
result.innerHTML=`
<h3>${name}</h3>
<p><b>Marks:</b> ${s.marks}/50</p>
<p><b>Rank:</b> ${s.rank}</p>
<p><b>Status:</b> ${s.status}</p>
<p><b>Remarks:</b> ${s.remarks}</p>`;
}else{
result.innerHTML="<h3>Student not found!</h3>";
}
}
